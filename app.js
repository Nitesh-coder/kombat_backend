const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get('/api', (req,res)=>{
    res.send("this is api")
})
app.listen(3000)