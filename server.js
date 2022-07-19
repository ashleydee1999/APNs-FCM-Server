
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.json());

// app.use('/api/notification',require('./routes/api/notification'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));

app.post('/sendToAll', (req, res, next) => {

    var notification = {
        "body": "Firebase Cloud Message Body",
        "title": "Firebase Cloud Message Title",
        "subtitle": "Firebase Cloud Message Subtitle"
    };
    var dataPayload = [{"id": 2346},{"id": 2346}]

    var data = {
        "type": "UPDATED",
        "resource": "CONTACTS",
        "payload": dataPayload,
        "red": 163,
        "green": 57,
        "blue": 57
    };

    var fcm_tokens = ['foqJGkC5jkUWjjcGVv73Il:APA91bEvGuq9Zjm3KiTMS_YqK09g4zNfEcEWoBljfAp2ReenKrVxqweDMUi0JrZCz5ecoUoF8QgZ25DNtSxspKQ2BH4hJsXHv_K4RRtL3XroNj1YhT7hv6-HSKPAWKCdgl8wPi6ntD4N'];

    var notification_body = {
        'notification': notification,
        'data': data,
        'registration_ids':fcm_tokens
    };

    console.log("POST RECEIVED SUCCESSFULLY")
    res.setHeader('Content-Type', 'application/json');

    // res.status(200).send(JSON.stringify(data));

    fetch('https://fcm.googleapis.com/fcm/send',{
        'method':'POST',
        'headers':{
            'Authorization':'key='+'AAAACIFjokQ:APA91bH-a14ZZiLOjSgsgI4qVcABz-P4yTnC1b2cMYCyJBEjRRoir5RIN06O1GqmRKUUXRKzg97ESmXeEdCdMva_dHKVWrIpitWWT_gsZJcmX-7gkQXBHLNEAH-K_nS_kg0mw-xS87sf',
            'Content-Type':'application/json'
        },
        'body':JSON.stringify(notification_body)
    }).then(() => {
        res.status(200).send(JSON.stringify(notification_body));
    }).catch((err)=>{
        res.status(400).send('Something went wrong');
        console.log(err);
    })

  });
  