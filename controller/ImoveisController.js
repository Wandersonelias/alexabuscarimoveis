const Imoveis = require('../models/Imoveis');


module.exports = {

    async store(req,res) {
        const {endereco,bairro,cidade,estado,descricao,tipo,valor,disponivel} = req.body;
        try {
            const imovel = await Imoveis.create({endereco,bairro,cidade,estado,descricao,tipo,valor,disponivel});
            return res.json(imovel);    
        } catch (error) {
            console.log(error)
        }
        
    },
    async list(req,res) {
    try {
        const imoveis = await Imoveis.findAll();
        return res.json(imoveis);
    } catch (error) {
        console.log(error)
    }
    }
}