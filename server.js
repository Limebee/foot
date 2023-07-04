const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())


require('dotenv').config({path: '.env'})


app.set('view engine', 'ejs')

app.use(express.static('views'))

app.use(express.static('css'))

app.use(express.static(path.join('js')))

app.use('/css', express.static(path.join("css")));


app.get('/', function (req, res) {
res.render('index.ejs')
})

app.listen(process.env.PORT, ()=>{
  console.log('CORS-enabled web server listening on port 300')
})