var PORT = process.env.PORT || 3000;

var express = require('express');

var API = "/api/whoami";

var app = express();


app.get(API, function(request, response){
	var language = request.headers['accept-language'];
	var userAgent = request.headers['user-agent'];
//	var ip = request.ip
var ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress;
	console.log(request);
	response.json({
		language: language,
		userAgent: userAgent,
		ip: ip
	});
});

app.listen(PORT, function() {
	console.log('Listening on port ' + PORT);
	});

