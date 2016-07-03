$(function() {
	var btnRed = $("#btnRed");
	var btnBlue = $("#btnBlue");
	var content = $("#content");

	btnRed.on("click", function() {
		content.css({"background": "red"});
	})

	btnBlue.on("click", function () {
		content.css({"background": "blue"});
	})
})