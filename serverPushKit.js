
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

    var contactAddPayload = {
        "id":1306,
        "firstName":"Jake",
        "lastName":"Paul",
        "companyName":"",
        "department":"",
        "mobileNumbers":{
           "numberList":[
              {
                 "number":"+27763510073",
                 "type":"mobile",
                 "default":true
              }
           ]
        },
        "emails":{
           "emailList":[
              {
                 "email":"jakepaul@gmail.com",
                 "type":"work",
                 "default":false
              }
           ]
        },
        "websiteUrl":"",
        "country":"",
        "ringtone":"",
        "profileImage":"",
        "namePrefix":"",
        "nameSuffix":"",
        "phoneticFirst":"",
        "phoneticMiddle":"",
        "phoneticLast":"",
        "nickname":"",
        "savedAs":"",
        "birthDate":"",
        "eventList":{
           "eventList":[
              {
                 "date":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "relationship":"",
        "chatList":{
           "chatList":[
              {
                 "name":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "internetCallList":{
           "internetCallList":[
              {
                 "name":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "customFieldList":{
           "customFieldList":[
              {
                 "name":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "notes":"",
        "jobTitle":"",
        "province":"",
        "unitStreet":"",
        "city":"",
        "middleName":"",
        "postCode":"",
        "source":"manual"
     }

     var contactUpdatedPayload = {
        "id":1306,
        "firstName":"Mike",
        "lastName":"Mapiano",
        "companyName":"",
        "department":"",
        "mobileNumbers":{
           "numberList":[
              {
                 "number":"+27763510073",
                 "type":"mobile",
                 "default":true
              }
           ]
        },
        "emails":{
           "emailList":[
              {
                 "email":"ash@yiya.co.za",
                 "type":"work",
                 "default":false
              }
           ]
        },
        "websiteUrl":"",
        "country":"",
        "ringtone":"",
        "profileImage":"",
        "namePrefix":"",
        "nameSuffix":"",
        "phoneticFirst":"",
        "phoneticMiddle":"",
        "phoneticLast":"",
        "nickname":"",
        "savedAs":"",
        "birthDate":"",
        "eventList":{
           "eventList":[
              {
                 "date":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "relationship":"",
        "chatList":{
           "chatList":[
              {
                 "name":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "internetCallList":{
           "internetCallList":[
              {
                 "name":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "customFieldList":{
           "customFieldList":[
              {
                 "name":"",
                 "label":"",
                 "default":false
              }
           ]
        },
        "notes":"",
        "jobTitle":"",
        "province":"",
        "unitStreet":"",
        "city":"",
        "middleName":"",
        "postCode":"",
        "source":"manual"
     }

    var contactDeletePayload =
    [
        {
            "id": 1306
        } 
    ]

    var data = {
        "type": "UPDATED",
        "topic": "CONTACTS",
        "isSilentNotif": true,
        "payload": contactUpdatedPayload,
    };

    var fcm_tokens = ['dwpP2-mzr0rohQPwP-FBQr:APA91bEyEn1Py3ti7ms-M_Dqlp-R63JYWkeo79Bw76sgL4ZE2TcqGi7Tej3_iN2LQ9SGSnUaZTpJ0KIGy9eToQW3NxpUUF-cHr0rFVezHt90oQpoNZyMvhyuQTmHpcLrp5p3MlE8RlKy'];

    var notification_body = {
        'notification': notification,
        // 'content-available': 1,
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
  