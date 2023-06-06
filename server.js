const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//middleware
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Routers location
const guestRouters = require('./route/guests')

app.use('/',guestRouters)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
