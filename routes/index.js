const express = require('express');
const router = express.Router();

const {getEvents, getTags, getEventTags} = require('../actions/getAction')
const {setEvents, setTags, setEventTags} = require('../actions/setAction')
/* GET home page. */

const eventJson=[{
  key: 1537343335332,
  subject: 'a\'d',
  content: 'a\'da\'d',
  date: 'Wed Sep 19 2018 15:48:50 GMT 0800 (中国标准时间)'
}, {
  key: 12,
  subject: 'addf',
  content: 'a\'d',
  date: 'Wed Sep 19 2018 15:56:22 GMT 0800 (中国标准时间)'
}]
const tagJson=[{
  key: 1,
  title: 'hello',
  pid: 0
}, {
  key: 2,
  title: 'word',
  pid: 0
}, {
  key: 3,
  title: '!12',
  pid: 1
}, {
  key: 4,
  title: 'huuh',
  pid: 2
}, {
  key: 5,
  title: 'huhi',
  pid: 4
}]
const tagEvent=[{
  key: 2,
  eventkey: 34,
  tagkey: 3
}, {
  key: 4,
  eventkey: 34,
  tagkey: '2'
}, {
  key: 4,
  eventkey: 234,
  tagkey: 4
}]

router.get('/settest', function(req, res, next) { 
  // setEvents(eventJson, (value) => res.json(value))
  setTags(tagJson, (value) =>  res.json(value))
  // setEventTags(tagEvent, (value) =>  res.json(value))
});
router.get('/gettest', function (req, res, next) {
  getEvents((value) =>  res.json(value))
  // getTags((value) => res.json(value))
  // getEventTags((value) => res.json(value))

})
router.get('/etps/event/add/', function (req, res, next) {
  let eventJson = req.query.data
  let tagJson = req.query.gData
  let tagEventJson = req.query.eventtag

  console.log('eventJson',JSON.parse(eventJson)) 
  console.log('tagJson',JSON.parse(tagJson))
  console.log('tagEvent',JSON.parse(tagEventJson))
})
router.get('/etps/event/select', function (req, res, next) {
  
})
router.get('/etps/tag/select', function (req, res, next) {

})
router.get('/etps/eventtag/select', function (req, res, next) {
  
})

module.exports = router;
