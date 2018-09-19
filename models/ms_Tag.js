/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ms_Tag', {
    pKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ms_TagpKey_Parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ms_Tag',
        key: 'pKey'
      }
    }
  }, {
    timestamps: false,
    tableName: 'ms_Tag'
  });
};
