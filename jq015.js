$(function() {
	var $tr = $("tr");

	//filter selector
	$tr.filter(":even").css("background", "red");
	$tr.filter(":odd").css("background", "yellow");
});