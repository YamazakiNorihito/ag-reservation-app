// node.js express server
const express = require('express')
// mongo db
const mongoose = require('mongoose')
// config
const config = require('./config/dev')
// fakedb
const FakeDb = require('./fake-db')
// routes
const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI,
                {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                }
        ).then(
          () => {
            const fakedb = new FakeDb()
            fakedb.initDb()
          }
        )

;

const app = express()

app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'
app.listen(PORT,function(){
  console.log('I am running')
})


//
