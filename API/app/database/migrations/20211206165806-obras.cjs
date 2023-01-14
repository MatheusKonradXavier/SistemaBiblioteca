module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('obras', {

      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      nome_obra: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      data_publicacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      num_edicao: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      editora: {
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
    return await queryInterface.dropTable('obras');
  }
};