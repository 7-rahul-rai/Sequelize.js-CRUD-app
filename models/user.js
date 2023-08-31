module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Mobile: {
        type: DataTypes.BIGINT,
        defaultValue : 6756789078
      },
    },
    {
      tableName: "User",
    });
    return User;
};
