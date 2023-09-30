const math = require("./math")
const express = require("express")

const app = express()
const port = 3000



app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log(`The app is listening to port ${port}`)
})

console.log(math(4,5))


