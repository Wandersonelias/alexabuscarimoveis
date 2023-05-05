require('dotenv').config()
const express = require('express');
const app = express();
const port = parseInt(process.env.PORT);
const Imoveis = require('./models/Imoveis');

app.use(express.json());

app.get("/",async(req,res)=>{
    const imoveis = await Imoveis.findAll({where:{ disponivel: 1}})
    console.log(imoveis)
    res.json(imoveis);
})




app.listen(port,()=>{
    console.log("server is runnig")
})