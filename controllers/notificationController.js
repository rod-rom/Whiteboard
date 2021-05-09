const Notification = require('../models/notification');

const notification_get = (req,res)=>{
    Notification.find()
        .then((Notification)=>res.status(200).send(Notification))
        .catch((err)=>res.status(400).send(err))
}


module.exports = {
    notification_get
}