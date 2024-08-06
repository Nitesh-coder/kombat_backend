const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get('/api', (req,res)=>{
    res.json({
        name: "SELLS",
        invest: 80005
    })
})
app.listen(3000)