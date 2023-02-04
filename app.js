const express = require('express')
const morgan = require('morgan')
require('dotenv').config({path: './.env'})
const helmet = require ('helmet')
const usersRoute = require ('./routes/')

const app = express()
const port = process.env.PORT || 3000

console.log(app.get('env'));

// application middleware

if (app.get('env') == "development") {
    app.use(morgan('dev'))
    console.log('Morgan enabled...');
}
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use('/api', usersRoute)

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`Server connected to http://localhost:${port}`);
});
