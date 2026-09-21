const pool = require('./pool-mysql')

const initDatabase = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        \`read\` BOOLEAN DEFAULT FALSE
      )
    `)
    
    console.log('Database initialized successfully')
  } catch (err) {
    console.error('Error initializing database:', err)
    throw err
  }
}

module.exports = { initDatabase }
