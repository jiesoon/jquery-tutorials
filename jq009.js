$(function () {
	var $btnAllPs = $("#btnAllPs");
	var $btnLength = $("#btnLength");


	$btnAllPs.on("click", function() {
		console.log($("p"));
	})

	$btnLength.on("click", function() {
		console.log($("p").length);
	})

})