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
	if (msg.search(/dank meme/i) != -1) {
		var items = Array('https://www.youtube.com/watch?v=zvq9r6R6QAY', 
				 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				 'https://www.youtube.com/watch?v=q6EoRBvdVPQ',
				 'https://www.youtube.com/watch?v=wWLhrHVySgA',
				 'https://www.youtube.com/watch?v=ZZ5LpwO-An4',
				 'https://www.youtube.com/watch?v=T5nfV3S7sqI',
				 'https://www.youtube.com/watch?v=xuCn8ux2gbs',
				 'https://www.youtube.com/watch?v=8YWl7tDGUPA',
				 'https://www.youtube.com/watch?v=WFoC3TR5rzI',
				 'https://www.youtube.com/watch?v=ifY-5UZRamU',
				 'https://www.youtube.com/watch?v=1WaJ8NfhLdg',
				 'https://www.youtube.com/watch?v=NN75im_us4k',
				 'https://www.youtube.com/watch?v=fWNaR-rxAic',
				 'https://www.youtube.com/watch?v=4Prc1UfuokY',
				 'https://www.youtube.com/watch?v=QkWS9PiXekE',
				 'https://www.youtube.com/watch?v=JQTXawaAKNA',
				 'https://www.youtube.com/watch?v=EwTZ2xpQwpA',
				 'https://www.youtube.com/watch?v=EY39fkmqKBM',
				 'https://www.youtube.com/watch?v=SiMHTK15Pik',
				 'https://www.youtube.com/watch?v=1wnE4vF9CQ4',
				 'https://www.youtube.com/watch?v=XCiDuy4mrWU',
				 'https://www.youtube.com/watch?v=Ep8doCOt1Ek',
				 'https://www.youtube.com/watch?v=t9Pb8dWxzu4',
				 'https://www.youtube.com/watch?v=fV3nflAQ99w',
				 'https://www.youtube.com/watch?v=dvOjGkfea_w',
				 'https://www.youtube.com/watch?v=T-w0h3g07aE',
				 'https://www.youtube.com/watch?v=fWNv52S4leE',
				 'https://www.youtube.com/watch?v=wRRsXxE1KVY',
				 'https://www.youtube.com/watch?v=FscMzbEOlXk',
				 'https://www.youtube.com/watch?v=5Nt34_zWwEE',
				 'https://www.youtube.com/watch?v=nFAK8Vj62WM',
				 'https://www.youtube.com/watch?v=O4rfQSgkZOE',
				 'https://www.youtube.com/watch?v=y6120QOlsfU',
				 'https://www.youtube.com/watch?v=KmtzQCSh6xk',
				 'https://www.youtube.com/watch?v=hMtZfW2z9dw',
				 'https://www.youtube.com/watch?v=EAmChFTLP4w',
				 'https://www.youtube.com/watch?v=KC6T3_O2iWc',
				 'https://www.youtube.com/watch?v=4WgT9gy4zQA',
				 'https://www.youtube.com/watch?v=jJOwdrTA8Gw',
				 'https://www.youtube.com/watch?v=9C_HReR_McQ',
				 'https://www.youtube.com/watch?v=-XccUMOQ978',
				 'https://www.youtube.com/watch?v=TywmpMQYojs',
				 'https://www.youtube.com/watch?v=MtN1YnoL46Q',
				 'https://www.youtube.com/watch?v=hHkKJfcBXcw',
				 'https://www.youtube.com/watch?v=furTlhb-990');
		botResponse = items[Math.floor(Math.random() * items.length)];
	} else if (msg.search(/meme please/) != -1) {
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
		var items = Array('Wait U᠎Penn is an ivy?');
		botResponse = items[Math.floor(Math.random() * items.length)]; 
	} else{
		var num = Math.random();
		var prob = 1.75;
		if (num < prob / 100) {
			var items = Array('BOOLA BOOLA!', 'BOW WOW WOW!', 'GO BULLDOGS!', 'LONG LIVE MEME TEAM');
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
