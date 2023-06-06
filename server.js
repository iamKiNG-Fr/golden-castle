const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.set('view engine', 'ejs')

//Routers location
const guestRouters = require('./route/guests')

app.use('/',guestRouters)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
