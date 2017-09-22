const hbs = require('handlebars')

function registerAllHelpers() {
	hbs.registerHelper('printTree', function(context, options) {
		var id =0;
		var _printTree = function(context) {
			if( typeof context  === 'string') {
				id++;
				return "<li paperId="+id+" class='list-group-item displayPaper'>" + context + "</li>";
			}
			if (Array.isArray(context)) { 
				var list = "";
				for(var i=0; i < context.length; i++){
					list += "<ul class=\"list-group-item\">"+ _printTree(context[i]) + "</ul>";
				}
				return list;
			}
			else {
				for(var key in context) {
					return "<li class=\"list-group-item\">"+ key + _printTree(context[key]) + "</li>";
				}
			}  
		}
		return _printTree(context);
	});
}

module.exports = registerAllHelpers;