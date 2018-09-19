
const trans = (tagJson) => {
  if(tagJson) {
    for (const item of tagJson) {
      item
    }
  }
}
const unic = (json) => {
  // 转换成对象 利用对象的key&value来作为索引,获取索引值key列表
  let obj = {}
  let keys = []
  let result = []
  for (const item of json) {
    let key = item.key
    obj[key] = item
    keys.push(key)
  }
  // 利用set数据结构去重keys
  keys = Array.from(new Set(keys))
  // 得到去重后的keys 加载obj
  keys.map((value)=>{
    result.push(obj[value])
  })
  return JSON.stringify(result)
}

const formateDate = (dateStr) => {
  let date  = new Date(dateStr)
  return date
}

module.exports = {
  trans, 
  unic,
  formateDate
}

testjson = [{
  key: 1537324944066,
  subject: 'aaa',
  content: 'aaa',
  date: 'Wed Sep 19 2018 10:42:17 GMT 0800 (中国标准时间)'
}, {
  key: 1537324944066,
  subject: 'aaa',
  content: 'aaa',
  date: 'Wed Sep 19 2018 10:42:17 GMT 0800 (中国标准时间)'
}, {
  key: 1537327446174,
  subject: 'ad',
  content: 'dfd',
  date: 'Wed Sep 19 2018 11:23:52 GMT 0800 (中国标准时间)'
}, {
  key: 1537327446174,
  subject: 'ad',
  content: 'dfd',
  date: 'Wed Sep 19 2018 11:23:52 GMT 0800 (中国标准时间)'
}, {
  key: 1537327446174,
  subject: 'ad',
  content: 'dfd',
  date: 'Wed Sep 19 2018 11:23:52 GMT 0800 (中国标准时间)'
}]


