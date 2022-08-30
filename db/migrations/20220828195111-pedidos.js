'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("pedidos", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    datapedido:{
      type: Sequelize.DATEONLY,
    },
    idsolicitante: {
      type: Sequelize.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    idsolicitado: {
      type: Sequelize.INTEGER,
      references: {
        model: "cardapio",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    dataaceito:{
      type: Sequelize.DATEONLY,
    },
    situacao: {
      type: Sequelize.STRING,
    },
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("pedidos");
  },
};
