var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      //botRegex = /^\/koosl guy$/;
  var num=Math.random();
  //if(request.text && botRegex.test(request.text)) {
  if(num < 2.0){
  if(request.text){
    this.res.writeHead(200);
    
    var botResponse, options, body, botReq;

  botResponse = cool() + ' ' + request.text + ' ' + num; 

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
    this.res.end();
    
    
    
  } 
  }
}



exports.respond = respond;
