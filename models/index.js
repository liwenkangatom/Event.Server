
var  Sequelize = require('sequelize');
// 修改date类型兼容mssql

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    // Z here means current timezone, _not_ UTC
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
// 创建数据库连接
var sequelize = new Sequelize('Event', 'sa', 'allsworth_test_123', {
    host: 'ASServer',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
      encrypt: false,
      requestTimeout: 60000
    },
    sync: {
        force: true
    },
})
console.log()
// 数据库模型名称及
const models =[
    {
        "name": "Event",
        "path": "./ms_Event.js"
    },
    {
        "name": "EventTag",
        "path": "./ms_Event_Tag.js"
    },
    {
        "name": "Tag",
        "path": "./ms_Tag.js"
    }
]
// 数据模型输出
models.forEach(item => {
    module.exports[item.name] = require(item.path)(sequelize, Sequelize)
})
