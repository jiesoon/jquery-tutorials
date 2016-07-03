$(function() {
	var $tr = $("tr");

	$tr.filter(":even").css("background", "red");
	$tr.filter(":odd").css("background", "yellow");
});