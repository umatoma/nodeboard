module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    tableName: 'boards',
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Board.hasMany(models.Post);
      }
    }
  });

  return Board;
};