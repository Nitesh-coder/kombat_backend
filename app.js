const express = require('express')
const app = express()
const cors  = require('cors')

const data = [
    {
      name: 'XAUUSD',
      invest: 50000
    },
    {
      name: "WEB3",
      invest: 23000
    },
    {
      name: 'REACT',
      invest: 40000
    },
    {
      name: 'DREAMS',
      invest: 12000
    },
    {
      name: 'DREAMS',
      invest: 12000
    },
    {
      name: 'DREAMS',
      invest: 12000
    },
    {
      name: 'DREAMS',
      invest: 12000
    },
  ]
app.use(cors())

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get('/api', (req,res)=>{
    res.json(data)
})
app.listen(3000)