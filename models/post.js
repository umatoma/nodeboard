module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    board_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    tableName: 'posts',
    timestamps: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.Board);
      }
    }
  });

  return Post;
};