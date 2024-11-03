const express = require('express')
const connectionDB = require('./config/connection.db')
const router = require('./routes/user.route')
const app= express()
// middleware
app.use(express.json())

require('dotenv').config()
const port = process.env.PORT || 8000

// this is router for sign
app.use('/api/auth',router)

// this is default route
app.get('/',(req,res) =>{
res.send('<h1>server run successfull</h1>')
})

// listening port
app.listen(port, ()=>{
    // connecting db
    connectionDB()
    console.log(`server started on http://localhost:${port}`)
})