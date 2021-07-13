// node.js express server
const express = require('express')

// mongo db
const mongoose = require('mongoose')


const mongoPw = 'testtest'
const mongoDbconnectstring = `mongodb+srv://test:${mongoPw}@cluster0.h9m65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongoDbconnectstring, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express()

app.get('/products',function(req,res){
  res.json({'success':true});
})


const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
  console.log('I am running')
})


//
