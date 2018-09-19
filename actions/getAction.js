const Event  = require('../models').Event
const Tag = require('../models').Tag
const EventTag = require('../models').EventTag

const getEvents = (backfun) => {
   Event.findAll({
       arttributes: ['pKey', 'Subject', 'Content', 'DT']
     })
     .then((result) => {
       backfun(result)
     }).catch((err) => {
       backfun(null)
       console.log(err)
     });
}
const getTags = (backfun) => {
Tag.findAll({
    arttributes: ['pKey', 'Name', 'ms_TagpKey_Parent']
  })
  .then((result) => {
    backfun(result)
  }).catch((err) => {
    backfun(null)
    console.log(err)
  });
}
const getEventTags = (backfun) => {
EventTag.findAll({
    arttributes: ['pKey', 'ms_EventpKey', 'ms_TagpKey']
  })
  .then((result) => {
    backfun(result)
  }).catch((err) => {
    backfun(null)
    console.log(err)
  });
}

module.exports= {
  getEvents, 
  getTags, 
  getEventTags
}