const express = require('express')
const app = express()
const hbs = require('handlebars');
const fs = require('fs');


hbs.registerHelper('printTree', function(context, options) {
	var _printTree = function(context) {
		if( typeof context  === 'string') {
			return "<li class=\"my-list-item\">"+ context + "</li>";
		}

		if (Array.isArray(context)) { 
			var list = "";
			for(var i=0; i < context.length; i++){
				list += "<ul class=\"my-list-group\">"+ _printTree(context[i]) + "</ul>";
			}
			return list;
		}
		else {
			for(var key in context) {
				return "<li class=\"my-list-item\">"+ key + _printTree(context[key]) + "</li>";
			}
		}  
	}

	return _printTree(context);
});


app.get('/', function(req, res){
	let indexTemplate = fs.readFileSync('src/templates/index.html',"utf8");
	let compiledTemplate = hbs.compile(indexTemplate);
	let data = fs.readFileSync('data/exams.json',"utf8");
	let result = compiledTemplate(JSON.parse(data));
	console.log(data);
	res.send(result);
})

app.use(express.static(__dirname+'/src'));

app.listen(3000, function(){
	console.log('listening on port 3000 ..');
})

