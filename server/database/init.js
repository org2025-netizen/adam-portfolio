const pool = require('./pool')

const initDatabase = async () => {
  const client = await pool.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        read BOOLEAN DEFAULT FALSE
      )
    `)
    
    console.log('Database initialized successfully')
  } catch (err) {
    console.error('Error initializing database:', err)
    throw err
  } finally {
    client.release()
  }
}

module.exports = { initDatabase }
