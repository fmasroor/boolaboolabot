var HTTPS = require('https');


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
	} else if (msg.search(/meme please/i) != -1) {
		var items = Array('https://i.groupme.com/960x652.jpeg.fbc9631c60f7459186faa2d29b094ac2', 
				  'https://i.groupme.com/713x632.jpeg.5dcff2a5d961430d8d85600bc2cdcbdf', 
				  'https://i.groupme.com/926x666.jpeg.418f120a8f66446aad12faa9a3837b97',
				  'https://i.groupme.com/1108x1458.jpeg.539b75ab5bb9404396da03989af9c9fa',
				  'https://i.groupme.com/516x458.jpeg.59bc2ca1cc3f47a58b88d72c5f9fceca',
				 'https://i.groupme.com/1334x1273.jpeg.fc4060008b484f93a8ec46735bfcccce');
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
	botResponse = botID + 'h';
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
