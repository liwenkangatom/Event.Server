/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ms_Event_Tag', {
    pKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ms_EventpKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ms_Event',
        key: 'pKey'
      }
    },
    ms_TagpKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ms_Tag',
        key: 'pKey'
      }
    }
  }, {
    tableName: 'ms_Event_Tag',
    timestamps:false
  });
};
