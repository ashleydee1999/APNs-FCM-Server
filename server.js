
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
    var dataPayload = [{"id": 2345},{"id": 2345}]

    var data = {
        "type": "UPDATED",
        "resource": "CONTACTS",
        "payload": dataPayload
    };

    var fcm_tokens = ['eZZmGHLuiUL4oGHmHCaS8G:APA91bHOmd9JoUCao0TGzO-DSMFu8ES1nEfglGsQ8FY1yZfEVG0Ad_tw5jYf4tqU3aLjQPdKTtwsXdT7br26dl73ZOmI48vCL1OEsbBJ9E8z_FnmejGCfnF7Vo2ERWqf7ZKrG1aeRSR3'];

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
            'Authorization':'key='+'AAAA8TYPjoE:APA91bFDJ0fRq22Po5HcM2L_QU7TZHzFT7b-qj-P6LMwtKPpUooo-TizSmkrza4ke5UWB4H4rwPOAvD1V0MKVMCTwVFH99XMeadVv16ki6HyE7m6rl8gTfpowKYf617XQsI9KfVmIDPi',
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
  