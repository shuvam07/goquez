const express = require('express')
const app = express()
const hbs = require('handlebars');
const fs = require('fs');
const rhls = require('./src/main/util/registerAllHelpers');


// Register all handlebars helpers
rhls();

// Serve static files
app.use('/static', express.static(__dirname+'/static'));

app.get('/', function(req, res){
	let indexTemplate = fs.readFileSync('src/templates/index.html',"utf8");
	let compiledTemplate = hbs.compile(indexTemplate);
	let data = fs.readFileSync('data/exams.json',"utf8");
	let result = compiledTemplate(JSON.parse(data));
	res.send(result);
})

app.get('/getPaper', function(req, res){

	console.log(req.query);
	let id = req.query.pid;
	var paper = fetchPaper(id);
	fs.readFile('http://172.26.90.154:8081/data/engg/national/JEE%20MAIN/2013_R.pdf', function (err,data){
        res.send("<iframe src='" + paper + "' style='width:100%;height:80vh' ></iframe>");
    });
})

app.listen(3000, function(){
	console.log('listening on port 3000 ..');
})

function fetchPaper(id){
	switch(id){
		case "1":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "2":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "3":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "4":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "5":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "6":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "7":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "8":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
		case "9":{return "http://172.26.90.154:8081/data/engg/national/JEE MAIN/2013_R.pdf"}
	}
}

