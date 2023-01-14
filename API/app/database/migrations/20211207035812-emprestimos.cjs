module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('emprestimos', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      leitores_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'leitores',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      data_devolucao: {
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
    return await queryInterface.dropTable('emprestimos');
  }
};