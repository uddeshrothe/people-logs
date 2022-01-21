const express = require('express')
const router = express.Router()

// Login/landing page
// GET req
router.get('/', (req, res) => {
    res.render('login')
})

// Dashboard
// GET dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router