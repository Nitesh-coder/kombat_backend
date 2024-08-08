const mongoose = require('mongoose')

const uri = 'mongodb+srv://initesh100:nitesh123@nitesh.9vgag.mongodb.net/DB?retryWrites=true&w=majority&appName=Nitesh'

const connectDB = async()=>{
  await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  console.log('SUCESS');
}

module.exports = connectDB