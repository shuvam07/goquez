$(document).ready(function() {
	//
	$(".displayPaper").click(function(e){
		fetchPaper(e);
	});
	function fetchPaper(e){
		var paperId = $(e.target).attr('paperId');
		$.get({
			url : "http://localhost:3000/getPaper?pid="+paperId,
			success : function(data){
				$(".container").append(data);
			},
			error : function(e){
				console.log(e);
			}
		});

	}
});



