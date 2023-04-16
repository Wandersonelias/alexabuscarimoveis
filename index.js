const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    res.json("ONLINE")
})

app.listen(3000,()=>{
    console.log("server is runnig")
})