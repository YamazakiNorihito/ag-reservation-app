// node.js express server
const express = require('express')
// mongo db
const mongoose = require('mongoose')
// config
const config = require('./config/dev')
// fakedb
const FakeDb = require('./fake-db')


mongoose.connect(config.DB_URI,
                {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                }
        ).then(
          () => {
            const fakedb = new FakeDb()
            fakedb.seeDb()
          }
        )

;

const app = express()

app.get('/products',function(req,res){
  res.json({'success':true});
})


const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
  console.log('I am running')
})


//
