var express = require('express'),
	app = express(),
	port = process.envPORT ||  3000;

app.get('/', function(req,res){
	res.send("Hi it works");
})

app.get('/happy', function(req,res){
	res.send("this also it works");
})

app.listen(port, function(){
	console.log("App is running on PORT 3000")
})