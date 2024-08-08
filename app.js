const express = require('express')
const app = express()
const cors  = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const CardModel = require('./schema/card.js')
const connectDB = require('./connectDB.js')
const path = require('path')


connectDB()
/* const CreateData = async()=>{
  await CardModel.create(    {
    name: 'XAUUSD',
    invest: 50000,
    url: 'www.google.com'
  })
}
CreateData() */

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get('/card', (req,res)=>{
  res.sendFile(path.join(__dirname,'pages','card.html'))
})
app.get('/api', async(req,res)=>{
  const cards = await CardModel.find()
    res.json(cards)
})

app.post('/api/data',async(req,res)=>{
  const rData = {
    name: req.body.name,
    invest: req.body.invest,
    url: req.body.url
  }
  await CardModel.create(rData)
  console.log(req.body.url);
  res.send('Data received')
})

app.listen(3000)