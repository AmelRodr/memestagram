//1.- Importaciones
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const path = require('path')

// 1.1-- Port

const port = 3000

// 2.- Configuración básica
const app = express()

// 2.2 -- view engine
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// 2.3 -- statics
app.use(express.static(path.join(__dirname, 'public')))

// 3.- Configuración avanzada
mongoose.connect('mongodb://localhost:27017/memes',
()=> console.log("Conectao a la BD"), { useNewUrlParser: true})

// 4.- Rutas

const memes = require('./routes/memes') 
app.use('/',memes)

// 5.- Listener
app.listen(port, ()=>console.log('Levantado en el puerto 3000'))
