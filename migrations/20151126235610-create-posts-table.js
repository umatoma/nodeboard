'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'posts',
      {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        board_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    );
    queryInterface.addIndex('posts', ['board_id']);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('posts');
  }
};