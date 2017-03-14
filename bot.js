var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
	var request = JSON.parse(this.req.chunks[0]);
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
	var meme;
	meme = 0;
	if(msg.search(/yale/i) != -1){
		var items = Array('BOOLA BOOLA!', 'BOW WOW WOW!', 'GO BULLDOGS!', 'BOW WOW WOW DOWN TO ME! ~Mami');
		botResponse = items[Math.floor(Math.random() * items.length)]; 
	} else if (msg.search(/dank meme/i) != -1) {
		var items = Array('https://www.youtube.com/watch?v=zvq9r6R6QAY', 
				 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				 'https://www.youtube.com/watch?list=PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y&v=q6EoRBvdVPQ');
		botResponse = items[Math.floor(Math.random() * items.length)];
		meme = 1;
	} else if (msg.search(/meme/i) != -1) {
		var items = Array('http://i.imgur.com/UrfYeeL.jpg', 
				  'http://i.imgur.com/eNQuSjk.jpg', 
				  'http://i.imgur.com/QYUxcox.jpg',
				  'http://i.imgur.com/HW9S0bU.jpg',
				  'http://i.imgur.com/TZAtvVd.jpg',
				 'http://i.imgur.com/wsmDrml.jpg');
		botResponse = items[Math.floor(Math.random() * items.length)];
		meme = 1;
	}  else if (msg.search(/good boy/i) != -1) {
		botResponse = 'I AM!';
	} else if (msg.search(/hey dan/i) != -1) { // || msg.search(/hi dan/i) != -1
		var items = Array('HELLO FRIEND!', 'HELLO YALIE!');
		botResponse = items[Math.floor(Math.random() * items.length)];
	}  else if (msg.search(/financial aid/i) != -1) {
		var items = Array('http://i.imgur.com/yUmhtZf.jpg',
				  'http://i.imgur.com/AgGqiIC.jpg');
		botResponse = items[Math.floor(Math.random() * items.length)];
		meme = 1;
	} else if(msg.search(/harvard/i) != -1){
			var items = Array('FUCK HARV⁣ARD', 'https://www.youtube.com/watch?v=UryWWFVy-ZM', 
		'Tbh Harvar᠎d was my dream school until I woke up', 'https://www.youtube.com/watch?v=T4kai4FL0MQ');
		botResponse = items[Math.floor(Math.random() * items.length)]; 
		//watch out for the mongolian space separator in the Harvard was my dream school line
	} else if(msg.search(/cornell/i) != -1){
		botResponse = 'CORNEL⁣L IS A FAKE IVY';
	} else if(msg.search(/princeton/i) != -1){
		var items = Array('FUCK PRINCE⁣TON', 'RIP NORMAN (NOT REALLY THO');
		botResponse = items[Math.floor(Math.random() * items.length)]; 
	} else if(msg.search(/duke/i) != -1){
		var items = Array('http://i.imgur.com/eiowTLm.jpg');
		botResponse = items[Math.floor(Math.random() * items.length)]; 
		meme = 1;
	} else if(msg.search(/UPenn/i) != -1){
		var items = Array('Wait UPenn is an ivy?');
		botResponse = items[Math.floor(Math.random() * items.length)]; 
	} else{
		var num = Math.random();
		var prob = 2.5;
		if (num < prob / 100) {
			var items = Array('BOOLA BOOLA!', 'BOW WOW WOW!', 'GO BULLDOGS!', 'BOW WOW WOW DOWN TO ME!');
			botResponse = items[Math.floor(Math.random() * items.length)];	
		}
	}
	options = {
		hostname: 'api.groupme.com',
		path: '/v3/bots/post',
		method: 'POST'
	};
	if(meme == 0){
	body = {
		"bot_id": botID,
		"text": botResponse
	};
	}
	else {
		body = {
  "bot_id"  : botID,
  "text"    : "",
  "attachments" : [
    {
      "type"  : "image",
      "url"   : botResponse
    }
  ]
};

	}
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
exports.respond = respond;
