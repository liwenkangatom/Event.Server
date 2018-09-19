/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ms_Event', {
    pKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DT: {
      type: DataTypes.mssql.DATE,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'ms_Event'
  });
};
