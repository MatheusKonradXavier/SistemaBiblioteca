module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('leitores', {

      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      rua: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      numero_casa: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    });

  },

  down: async (queryInterface) => {
    return await queryInterface.dropTable('leitores');
  }
};