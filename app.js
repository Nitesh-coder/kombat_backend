const express = require('express')
const app = express()
const cors  = require('cors')
const bodyParser = require('body-parser')
const CardModel = require('./schema/card.js')
const connectDB = require('./connectDB.js')
const path = require('path')

connectDB()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
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
  res.send('Data justt received')
})
app.post('/api/update', async(req,res)=>{
  const _id = req.body.id
  const currentValue = await CardModel.findById(_id)
  const addedValue = Number(req.body.value)
  const newValue =  currentValue.invest + addedValue
  await CardModel.findByIdAndUpdate(_id, {invest: newValue})
  console.log(newValue);
  res.send('data received')
})

app.listen(3000)