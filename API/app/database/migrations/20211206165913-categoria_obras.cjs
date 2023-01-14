module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('categoria_obras', {

      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      obra_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'obras',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      categoria_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return await queryInterface.dropTable('categoriaObra');
  }
};