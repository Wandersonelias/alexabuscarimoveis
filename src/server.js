require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes')
app.use(express.json());
app.use(routes);
const port = parseInt(process.env.PORT);

// app.get("/",async(req,res)=>{
//     const imoveis = await Imoveis.findAll({where:{ disponivel: 1}})
//     console.log(imoveis)
//     res.json(imoveis);
// })

app.listen(port,()=>{
    console.log("server is runnig")
})