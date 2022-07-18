const express = require('express');
const fetch = require('node-fetch');
const app = express();

const router = express.Router();

app.post('/sendToAll', (req, res, next) => {

    var notification = {
        'title': 'Title of Notification',
        'text': 'Subtitle'
    };

    var fcm_tokens = ['foqJGkC5jkUWjjcGVv73Il:APA91bEvGuq9Zjm3KiTMS_YqK09g4zNfEcEWoBljfAp2ReenKrVxqweDMUi0JrZCz5ecoUoF8QgZ25DNtSxspKQ2BH4hJsXHv_K4RRtL3XroNj1YhT7hv6-HSKPAWKCdgl8wPi6ntD4N'];

    var notification_body = {
        'notification': notification,
        'registration_ids':fcm_tokens
    };

    console.log("POST RECIEVED SUCCESSFULLY")

    fetch('https://fcm.googleapis.com/fcm/send',{
        'method':'POST',
        'headers':{
            'Authorization':'key='+'AAAACIFjokQ:APA91bH-a14ZZiLOjSgsgI4qVcABz-P4yTnC1b2cMYCyJBEjRRoir5RIN06O1GqmRKUUXRKzg97ESmXeEdCdMva_dHKVWrIpitWWT_gsZJcmX-7gkQXBHLNEAH-K_nS_kg0mw-xS87sf',
            'Content-Type':'application/json'
        },
        'body':JSON.stringify(notification_body)
    }).then(() => {
        res.status(200).send('Notification sent sucessfuly');
    }).catch((err)=>{
        res.status(400).send('Something went wrong');
        console.log(err);
    })

  });

module.exports = router