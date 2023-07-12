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

//Database
const { sequelize} = require('./sequelize/models') 

const connectDb = async () => {
    await sequelize.authenticate()
}

//Routers location
const guestRouters = require('./route/guests')
const userRouters = require('./route/user')

app.use('/',guestRouters)
app.use('/users',userRouters)

app.listen(port, async ()=>{
    console.log(`Listening on port ${port}`);
    await connectDb()
    console.log('Database Connected!');
})
