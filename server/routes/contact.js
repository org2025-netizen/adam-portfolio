const express = require('express')
const router = express.Router()
const { submitContact, getContacts } = require('../controllers/contactController')
const { validateContact, handleValidationErrors } = require('../middleware/validate')
const { auth } = require('../middleware/auth')

// POST /api/contact - Public (anyone can submit)
router.post('/', validateContact, handleValidationErrors, submitContact)

// GET /api/contact - Admin only (requires token)
router.get('/', auth, getContacts)

module.exports = router
