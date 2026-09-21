const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'adam-munyendo-portfolio-secret-key-2026'

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No token provided.' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.admin = decoded
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' })
  }
}

module.exports = { auth, JWT_SECRET }
