const express = require('express');
const app = express();


app.use(express.json());

app.get("/",(req,res)=>{
    res.json("ONLINE")
})

app.listen(8080,()=>{
    console.log("server is runnig")
})