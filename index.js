const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

app.get('/login', (req, res) => {
    res.send("hello")
})

app.get('/', (req, res) => {
    res.send("morning!!")
})


app.get('/signup', (req, res) => {
    res.send("working!!")
})

app.listen(process.env.PORT , () => {
    console.log('listening on PORT', process.env.PORT)
})