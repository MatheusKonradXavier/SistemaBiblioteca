module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('obras', 'id_emp', { 
      type: Sequelize.INTEGER,
      allowNull: true,
        references: {
          model: 'emprestimos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('obras', 'id_emp');
  }
};
