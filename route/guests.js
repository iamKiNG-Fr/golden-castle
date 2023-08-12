const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.status(200).render('index', {title : "Golden Castle", page_name: 'home'})
})
router.get('/contact', (req, res) => {
    res.status(200).render('contact', {title : "Golden Castle | Contact", errors: "", page_name: 'contact'})
})
router.get('/services', (req, res) => {
    res.status(200).render('services', {title : "Golden Castle | Services", errors: "", page_name: 'services'})
})
router.get('/about', (req, res) => {
    res.status(200).render('about', {title : "Golden Castle | About", errors: "", page_name: 'about'})
})
router.get('/contact/success', (req, res) => {
    res.status(200).render('success', {title : "Golden Castle | Contact Success", page_name: 'contact'})
})
module.exports = router