var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]),
        botRegex = /^\/koosl guy$/;

    //if(request.text && botRegex.test(request.text)) {
    //if(Math.random() < 2){
    if (request.text) {
        this.res.writeHead(200);
        postMessage(request.text);
        this.res.end();
    } else {
        console.log("don't care");
        this.res.writeHead(200);
        this.res.end();
    }
}

function postMessage(msg) {
    var botResponse;

    var options, body, botReq;
    var expr = '/who'?s a good boy/';
    if (msg.search(expr) != -1) {
        botResponse = 'I AM!';
    } else {
        var num = Math.random();
        var prob = 200;
        if (num < prob / 100) {
            var items = Array('BOOLA BOOLA!', 'BOW WOW WOW!', 'GO BULLDOGS!', 'FUCK HARVARD!', 'BOW WOW WOW DOWN TO ME!');
            var botResponse = items[Math.floor(Math.random() * items.length)];
            //botResponse = 'BOOLA BOOLA!';

        }
        options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };

        body = {
            "bot_id": botID,
            "text": botResponse
        };

        console.log('sending ' + botResponse + ' to ' + botID);

        botReq = HTTPS.request(options, function(res) {
            if (res.statusCode == 202) {
                //neat
            } else {
                console.log('rejecting bad status code ' + res.statusCode);
            }
        });

        botReq.on('error', function(err) {
            console.log('error posting message ' + JSON.stringify(err));
        });
        botReq.on('timeout', function(err) {
            console.log('timeout posting message ' + JSON.stringify(err));
        });
        botReq.end(JSON.stringify(body));
    }


}


exports.respond = respond;
