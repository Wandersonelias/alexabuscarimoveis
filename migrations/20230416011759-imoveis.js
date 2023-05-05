'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('imoveis', 
      { 
      id:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false 
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull:false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull:false
      },
      descricao: {
        type:Sequelize.STRING,
        allowNull: false
      },
      valor:{
        type: Sequelize.DOUBLE,
        allowNull:false 
      },
      disponivel:{ 
        type: Sequelize.DOUBLE,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
      });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('imoveis');
    
  }
};
