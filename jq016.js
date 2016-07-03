$(function() {
	var $td = $("td");

	$td.filter(function() {
		return $(this).text().length == 6;
	}).css("background", "red");
});