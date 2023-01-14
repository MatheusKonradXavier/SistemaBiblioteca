module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('categoria', {
      
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },

      nome_Categoria: {
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
    return await queryInterface.dropTable('categoria');
  }
};