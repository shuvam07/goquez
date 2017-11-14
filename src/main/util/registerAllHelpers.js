const hbs = require('handlebars')

function registerAllHelpers() {
	hbs.registerHelper('printTree', function(context, options) {
		var id =0;
		var _printTree = function(context) {
			if( typeof context  === 'string') {
				id++;
				return "<li paperId="+id+" class=' displayPaper'>" + context + "</li>";
			}
			if (Array.isArray(context)) { 
				var list = "";
				for(var i=0; i < context.length; i++){
					var xyz= _printTree(context[i]);
					list += "<li class=''><a href='#' class='' data-toggle='dropdown'><ul class=\"\">"+ xyz + "</ul></a></li>";
				}
				return list;
			}
			else {
				for(var key in context) {
					return "<li class=\"\">"+ key + _printTree(context[key]) + "</li>";
				}
			}  
		}
		return _printTree(context);
	});
}

module.exports = registerAllHelpers;