const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
    name: String,
    invest: Number,
    url: String
})

const CardModel = mongoose.model('Kombat', CardSchema)

module.exports = CardModel