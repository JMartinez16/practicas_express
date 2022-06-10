const { json } = require('express')
const express = require('express') 
const app = express()              
const articulos = require('./rutas/articulos')   

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/articulos', articulos)





app.listen(3000, () => {
    console.log('welcome')
})

