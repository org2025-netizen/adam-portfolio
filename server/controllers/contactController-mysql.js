const pool = require('./pool-mysql')

const submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body

  try {
    const [result] = await pool.query(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    )

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: result.insertId,
        created_at: new Date(),
      },
    })
  } catch (err) {
    console.error('Error submitting contact form:', err)
    res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again later.' 
    })
  }
}

const getContacts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC')
    res.json({ data: rows })
  } catch (err) {
    console.error('Error fetching contacts:', err)
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
}

module.exports = { submitContact, getContacts }
