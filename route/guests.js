const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    res.status(200).render('index', {text111 : "world"})
})

module.exports = router