const express = require('express')
const logger = require('morgan')
require('dotenv').config({path: './.env'})

const app = express()
const port = process.env.PORT || 3000


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
});
