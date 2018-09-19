let fs = require('fs')
let files = fs.readdirSync('./models')
let models = []
// 解析名称做成驼峰命名法
files.forEach(item => {
  if (item != 'index.js') {
    let names = item.split('.')[0].split('_')
    let name = ''
    for (let i = 1; i < names.length; i++) {
      name += names[i].substring(0, 1).toUpperCase() + names[i].substring(1)
    }
    models.push({
      name: name,
      path: './' + item
    })
  }
})
// 文件内容模板
const template = `
var  Sequelize = require('sequelize');
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
    }
})
// 数据库模型名称及
const models =${JSON.stringify(models, null, 4)}
// 数据模型输出
models.forEach(item => {
    module.exports[item.name] = require(item.path)(sequelize, Sequelize)
})
`
fs.writeFile("./models/index.js", template, function () {
  console.log('创建成功')
})