$(function() {
	var $btnRed = $("#btnRed");
	var $btnBlue = $("#btnBlue");
	var $btnGreen = $("#btnGreen");

	$btnRed.on("click", function() {
		$("#firstParagraph").css("background-color", "red");
	});

	$btnBlue.on("click", function() {
		$("#firstParagraph").siblings().css("background-color", "blue");
	});

	$btnGreen.on("click", function() {
		$("#firstParagraph").siblings().andSelf().css("background-color", "green");
	})
})