$(function() {
	var $btnHide = $("#btnHide");
	var $btnShow = $("#btnShow");
	var $btnToggle = $("#btnToggle");

	var $content = $("#content");
	$content.css({
		"height": "100px",
		"width": "100px",
		"background": "red"
	});

	$btnHide.on("click", function() {
		$content.css("display", "none");
	});

	$btnShow.on("click", function() {
		$content.show();
	});

	$btnToggle.on("click", function() {
		$content.toggle();
	});
})