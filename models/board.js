module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'boards'
  });

  return Board;
};