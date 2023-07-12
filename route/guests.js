const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.status(200).render('index', {title : "Golden Castle"})
})
router.get('/contact', (req, res) => {
    res.status(200).render('contact', {title : "Golden Castle | Contact", errors: ""})
})
router.get('/contact/success', (req, res) => {
    res.status(200).render('success', {title : "Golden Castle | Contact Success"})
})
module.exports = router