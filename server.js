const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 5100

//middleware
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

//Routers location
const guestRouters = require('./route/guests')

app.use('/',guestRouters)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
