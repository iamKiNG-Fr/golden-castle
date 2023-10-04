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
router.get('/services/events', (req, res) => {
    res.status(200).render('servicesEvents', {title : "Golden Castle | Events", errors: "", page_name: 'services'})
})
router.get('/services/wedding', (req, res) => {
    res.status(200).render('servicesWed', {title : "Golden Castle | Weddings", errors: "", page_name: 'services'})
})
router.get('/services/media', (req, res) => {
    res.status(200).render('servicesMedia', {title : "Golden Castle | Media", errors: "", page_name: 'services'})
})
router.get('/services/cater', (req, res) => {
    res.status(200).render('servicesCater', {title : "Golden Castle | Catering", errors: "", page_name: 'services'})
})
router.get('/services/rentals', (req, res) => {
    res.status(200).render('services', {title : "Golden Castle | Services", errors: "", page_name: 'services'})
})
router.get('/about', (req, res) => {
    res.status(200).render('about', {title : "Golden Castle | About", errors: "", page_name: 'about'})
})
router.get('/contact/success', (req, res) => {
    res.status(200).render('success', {title : "Golden Castle | Contact Success", page_name: 'contact'})
})
module.exports = router