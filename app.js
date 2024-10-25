const express = require('express')
const dotenv = require('dotenv');
const mysql = require('mysql');
const app = express();
const path = require('path');
const cors = require('cors');
var bodyParser = require("body-parser");
const {join} = require('path');
const {RtcTokenBuilder, RtcRole} = require('agora-access-token');
app.set('view engine', 'ejs');

dotenv.config();
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '900kb'}));

app.use(express.static(__dirname + '../public'));

const port = process.env.PORT || 3006

const APP_ID = process.env.APP_ID || '1e884982f1bf494495b45d0812f047de';
const APP_CERTIFICATE = process.env.APP_CERTIFICATE;

const nocache = (_, resp, next) => {
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');
  next();
}



const ping = (req, resp) => {
  resp.send({message: 'pong'});

}

const generateRTCToken = (req, resp) => {
 
  resp.header('Access-Control-Allow-Origin', '*');

  const channelName = req.params.channel;
  if (!channelName) {
    return resp.status(400).json({ 'error': 'channel is required' });
  }
  // get uid
  let uid = req.params.uid;
  if(!uid || uid === '') {
    return resp.status(400).json({ 'error': 'uid is required' });
  }
  
  let role;
  if (req.params.role === 'publisher') {
    role = RtcRole.PUBLISHER;
  } else if (req.params.role === 'audience') {
    role = RtcRole.SUBSCRIBER
  } else {
    return resp.status(400).json({ 'error': 'role is incorrect' });
  }
  
  let expireTime = req.query.expiry;
  if (!expireTime || expireTime === '') {
    expireTime = 3600;
  } else {
    expireTime = parseInt(expireTime, 10);
  }
  
  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTime + expireTime;
  
  let token;
  if (req.params.tokentype === 'userAccount') {
    token = RtcTokenBuilder.buildTokenWithAccount(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
  } else if (req.params.tokentype === 'uid') {
    token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
  } else {
    return resp.status(400).json({ 'error': 'token type is invalid' });
  }
  
  return resp.json({ 'rtcToken': token });
}



const generateRTCTokenBody = (req, resp) => {
    
    resp.header('Access-Control-Allow-Origin', '*');

  const channelName = req.body.channel;
  if (!channelName) {
    return resp.status(400).json({ 'error': 'channel is required' });
  }
  // get uid
  let uid = req.body.uid;
  if(!uid || uid === '') {
    return resp.status(400).json({ 'error': 'uid is required' });
  }
  
  let role;
  if (req.body.role === 'publisher') {
    role = RtcRole.PUBLISHER;
  } else if (req.body.role === 'audience') {
    role = RtcRole.SUBSCRIBER
  } else {
    return resp.status(400).json({ 'error': 'role is incorrect' });
  }
  
  let expireTime = req.body.expiry;
  if (!expireTime || expireTime === '') {
    expireTime = 3600;
  } else {
    expireTime = parseInt(expireTime, 10);
  }
  
  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTime + expireTime;
  
  let token;
  if (req.body.tokentype === 'userAccount') {
    token = RtcTokenBuilder.buildTokenWithAccount(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
  } else if (req.body.tokentype === 'uid') {
    token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
  } else {
    return resp.status(400).json({ 'error': 'token type is invalid' });
  }
  
  return resp.json({ 'rtcToken': token });
}




app.options('*', cors());

app.get('/ping', nocache, ping);

app.get('/rtc/:channel/:role/:tokentype/:uid', nocache , generateRTCToken);

app.post('/fetch_rtc_token', nocache , generateRTCTokenBody);

app.get('/fetch_rtc_token_for_get', nocache , generateRTCTokenBody);

// app.get('/astroera/user/:uid/:channelName',(req,res)=>{
    
//     res.sendFile(path.join(__dirname, 'views/user_video_call.html'));
    
// });

app.get('/',(req,res)=>{
  res.render('../views/frontend/home_page');
});

app.get('/astro-call/:uid/:channelName',(req,res)=>{
  res.render('../views/frontend/audioCall/astro_side');
});

app.get('/user-call/:uid/:channelName',(req,res)=>{
  res.render('../views/frontend/audioCall/user_side');
});

app.get('/astro/:uid/:channelName',(req,res)=>{
    res.render('../views/frontend/astrologer_video_call');
});

app.get('/user/:uid/:channelName',(req,res)=>{
    res.render('../views/frontend/user_video_call');
});

app.get('/webinar/:astro/:id',(req,res)=>{
  res.render('../views/frontend/webinar/astro_page');
});

app.get('/webinar/:astro/:id/user',(req,res)=>{
  res.render('../views/frontend/webinar/user_page');
});

// app.get('/astroera/astro/:uid/:channelName',(req,res)=>{
    
//     res.sendFile(path.join(__dirname, 'views/astro_video_call.html'));
    
// });

app.get('/astroera/:channelName',(req,res)=>{
    
    res.sendFile(path.join(__dirname, 'views/frontend/kundali/kundali.html'));
    
});

app.post('/getkundl',(req,res)=>{
    
    res.sendFile(path.join(__dirname, 'views/frontend/kundali/kundali.html'));
    
});

app.post('/getmatchmaking',(req,res)=>{

    res.sendFile(path.join(__dirname, 'views/frontend/kundali/match_kundali.html'));

});

app.get('/match',(req,res)=>{

    res.send("hello from match 123");

});

// app.get('/astroera/:uid/:channelName',(req,res)=>{
    
//     res.sendFile(path.join(__dirname, 'index.html'));
    
// });


app.post('/get_yogini_antar_dasha', (req, res) => {
    
  const planete2 = req.body.plant_2;
  
  const planete1 = req.body.plante_1;
  
  const dasha1 = "maha_dasha";
  
  const dasha2 = "antar_dasha";
  
  const json = req.body.json;

  let satas = json;
  
  try {
    satas = JSON.parse(json);
  } catch (error) {
    return res.status(400).send(error);
  }

  let responseHtml = '';
  if (satas.data && satas.data[dasha1] && satas.data[dasha1][planete1] && satas.data[dasha1][planete1][dasha2]) {
    const data = satas.data[dasha1][planete1][dasha2];
    for (const [key, value] of Object.entries(data)) {
      responseHtml += `<tr class="yoginii_antar_dasha_data"><td>${planete2.substring(0, 2)}-${key}</td><td>${value}</td></tr>`;
    }
  }
res.send(responseHtml);
  
});


app.post('/get_kudli_antar_dasha', (req, res) => {
    const plant1 = req.body.plant_1;
    const dasha1 = req.body.dasha_1;
    const dasha2 = req.body.dasha_2;
    const json = req.body.json;

    let satas;
    try {
        satas = JSON.parse(json);
    } catch (error) {
        return res.status(400).send('Invalid JSON');
    }

    let responseHtml = '';
    if (satas.data && satas.data[dasha1] && satas.data[dasha1][plant1] && satas.data[dasha1][plant1][dasha2]) {
        const data = satas.data[dasha1][plant1][dasha2];
        for (const [key, value] of Object.entries(data)) {
            responseHtml += `
                <tr class="antar_dasha_hide">
                    <td>${plant1.substring(0, 2)}-${key}</td>
                    <td>${value.start_time}</td>
                    <td>${value.end_time} <i onclick="pratyantar_dasha('${key}')" class="fa fa-arrow-right"></i></td>
                </tr>`;
        }
    }

    res.send(responseHtml);
});

app.post('/get_kudli_pratyantar_dasha', (req, res) => {
    const { plant_1, dasha_1, dasha_2, dasha_3, plant_2, json } = req.body;

    let satas;
    try {
        satas = JSON.parse(json);
    } catch (error) {
        return res.status(400).send('Invalid JSON');
    }

    let responseHtml = '';
    if (satas.data && satas.data[dasha_1] && satas.data[dasha_1][plant_1] && 
        satas.data[dasha_1][plant_1][dasha_2] && satas.data[dasha_1][plant_1][dasha_2][plant_2] && 
        satas.data[dasha_1][plant_1][dasha_2][plant_2][dasha_3]) {
        
        const data = satas.data[dasha_1][plant_1][dasha_2][plant_2][dasha_3];
        
        for (const [key, value] of Object.entries(data)) {
            responseHtml += `
                <tr class="pratyantar_dasha_hide">
                    <td>${plant_1.substring(0, 2)}-${plant_2.substring(0, 2)}-${key}</td>
                    <td>${value.start_time}</td>
                    <td>${value.end_time} <i onclick="sookshma_dasha('${key}')" class="fa fa-arrow-right"></i></td>
                </tr>`;
        }
    }

    res.send(responseHtml);
});

app.post('/get_kudli_sookshma_dasha', (req, res) => {
    const { plant_1, dasha_1, dasha_2, dasha_3, dasha_4, plant_2, plant_3, json } = req.body;

    let satas;
    try {
        satas = JSON.parse(json);
    } catch (error) {
        return res.status(400).send('Invalid JSON');
    }

    let responseHtml = '';
    if (satas.data && satas.data[dasha_1] && satas.data[dasha_1][plant_1] &&
        satas.data[dasha_1][plant_1][dasha_2] && satas.data[dasha_1][plant_1][dasha_2][plant_2] &&
        satas.data[dasha_1][plant_1][dasha_2][plant_2][dasha_3] && 
        satas.data[dasha_1][plant_1][dasha_2][plant_2][dasha_3][plant_3] &&
        satas.data[dasha_1][plant_1][dasha_2][plant_2][dasha_3][plant_3][dasha_4]) {
        
        const data = satas.data[dasha_1][plant_1][dasha_2][plant_2][dasha_3][plant_3][dasha_4];
        
        for (const [key, value] of Object.entries(data)) {
            responseHtml += `
                <tr class="sookshma_dasha_hide">
                    <td>${plant_1.substring(0, 2)}-${plant_2.substring(0, 2)}-${plant_3.substring(0, 2)}-${key}</td>
                    <td>${value.start_time}</td>
                    <td>${value.end_time}</td>
                </tr>`;
        }
    }

    res.send(responseHtml);
});


app.get('/user-webinar/:uid/:channelName',(req,res)=>{
    
  res.render('../views/frontend/webinar/user_side_webinar');
  
});

app.get('/astro-webinar/:uid/:channelName',(req,res)=>{
  
res.render('../views/frontend/webinar/astro_side_webinar');

});



app.listen(port, () => {
  console.log(`Agora app listening on port ${port}`)
})
