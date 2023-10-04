const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.status(200).render('rentHome', {title : "Golden Castle | Rent", page_name: 'rent'})
})

module.exports = router