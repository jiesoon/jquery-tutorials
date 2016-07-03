$(function() {
	var $btnRed = $("#btnRed");
	var $btnBlue = $("#btnBlue");
	var $btnGreen = $("#btnGreen");

	var $allPs = $("p");

	$btnRed.on("click", function(e) {
		$allPs.eq(0).css({"background-color": "red"});
	});

	$btnBlue.on("click", function() {
		$allPs.first().css("background-color", "blue");
	});

	$btnGreen.on("click", function() {
		$("p:first").css("background-color", "green")
	})

})