// node.js express server
const express = require('express')
// mongo db
const mongoose = require('mongoose')
// config
const config = require('./config/')   // index.js load
// fakedb
const FakeDb = require('./fake-db')
// routes
const productRoutes = require('./routes/products')
// path
const path = require('path')

mongoose.connect(config.DB_URI,
                {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                }
        ).then(
          () => {
            if(ProcessingInstruction.env.MODE_ENV !== 'production'){
              const fakedb = new FakeDb()
              //fakedb.initDb()   // 必要な時に初期化
            }
          }
        )
;

const app = express()

app.use('/api/v1/products', productRoutes)

if(ProcessingInstruction.env.MODE_ENV === 'production'){
  const appPath = path.join(__dirname,'..','dist','ag-reservation-app')
  app.use(express.static(appPath))
  app.get("*", function(req,res){
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}
const PORT = process.env.PORT || '3001'
app.listen(PORT,function(){
  console.log('I am running')
})


//
