const Event = require('../models').Event
const Tag = require('../models').Tag
const EventTag = require('../models').EventTag
const {unic, formateDate} = require('../utils/treeTrans')

const setEvents = (eventjson, backfun) => {
const Events =JSON.parse(unic(eventjson)) 
  for (let item of Events) {
    const {key, subject, content, date} = item
    Event.create({
      pKey: key, Subject: subject, Content: content, DT: date
    })
    .then((result) => {
      backfun(result)
    }).catch((err) => {

      backfun(err)
    });
  }
}
const setTags = (tagjson, backfun) => {
  const Tags = tagjson
  for (const tag of Tags) {
    const {
      key,
      title,
      pid
    } = tag
    Tag.create({
      pKey: key,
      Name: title,
      ms_TagpKey_Parent: pid
    })
    .then((result) => {
      backfun(result)
    }).catch((err) => {
      backfun(err)
    });
  }
}

const setEventTags = (eventtagjson, backfun) => {
  const EventTags = eventtagjson
  for (const eventtag of EventTags) {
    const {
      key,
      eventkey,
      tagkey
    } = eventtag
    EventTag.create({
        pKey: key,
        ms_EventpKey: eventkey,
        ms_TagpKey: tagkey
      })
      .then((result) => {
        backfun(result)
      }).catch((err) => {
        backfun(err)
      });
  }
}

module.exports={
  setEvents,
  setTags,
  setEventTags
}