$(function() {
	var $btnRed = $("#btnRed");
	var $btnBlue = $("#btnBlue");
	var $btnGreen = $("#btnGreen");
	var $btnYellow = $("#btnYellow");
	var $target = $("#target");


	$btnRed.on("click", function(){
		$target.parent().css("background-color", "red");
	});

	$btnBlue.on("click", function() {
		$target.parents().css("background-color", "blue");
	});

	$btnGreen.on("click", function() {
		$target.parents().not("html, body").css("background-color", "green");
	});

	$btnYellow.on("click", function() {
		$target.parentsUntil("body").css("background-color", "yellow");
	})
});