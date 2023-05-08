const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Imoveis = sequelize.define("imoveis",{
      
    endereco: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tipo: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    disponivel: DataTypes.DOUBLE,
              
});

module.exports = Imoveis;