const express = require('express')
const router = express.Router() // No olvides los parentesis
const Meme = require('../models/Meme')

router.get('/', (req,res)=>{
  res.render('home')
})

router.get('/new',(req,res)=>{
  Meme.create({
    title: "Otro",
    link: "https://cdn.memegenerator.es/imagenes/memes/full/3/22/3221617.jpg"
  })
  .then(meme=>{
    res.render('meme', meme)
  })
  .catch(err=>{
    console.log(err)
  })

})

router.get('/memes', (req,res)=>{
  Meme.find()
  .then(memes=>{
    res.render('list.hbs', {memes})
  })
  .catch(err=>{
    console.log(err)
  })
})

module.exports = router