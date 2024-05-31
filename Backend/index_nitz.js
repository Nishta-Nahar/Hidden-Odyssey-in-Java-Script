const express = require ('express')
const app = express()
const port = 3000
const mongoDB = require('./db')
mongoDB();
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use(express.json())
app.use ('./api',require("./Routes/DisplayData"))
app.listen(port, ()=>{
    console.log(`Example  listening on port ${port}`)
})

