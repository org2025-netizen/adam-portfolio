const pool = require('../database/pool')

const submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body

  let client
  try {
    client = await pool.connect()
    const result = await client.query(
      'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id, created_at',
      [name, email, subject, message]
    )
    client.release()
    client = null

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: result.rows[0].id,
        created_at: result.rows[0].created_at,
      },
    })
  } catch (err) {
    console.error('Error submitting contact form:', err.message)
    if (client) { try { client.release() } catch {} }
    return res.status(503).json({ 
      error: 'Database not available. Please try again later or contact directly via email.' 
    })
  }
}

const getContacts = async (req, res) => {
  let client
  try {
    client = await pool.connect()
    const result = await client.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    )
    client.release()
    return res.json({ data: result.rows })
  } catch (err) {
    console.error('Error fetching contacts:', err.message)
    if (client) { try { client.release() } catch {} }
    return res.status(500).json({ error: 'Failed to fetch contacts' })
  }
}

module.exports = { submitContact, getContacts }
