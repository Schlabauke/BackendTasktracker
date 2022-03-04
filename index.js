const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const { routes }= require('./routes/crmRoutes')
const bodyparser = require('body-parser')


app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

routes(app)



const PORT = 3141
app.listen(PORT, function(){
    console.log('Listening on Port:',PORT)
})