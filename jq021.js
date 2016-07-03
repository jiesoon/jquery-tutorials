$(function() {
	var $content = $("#content");
	var $btnFadeIn = $("#btnFadeIn");
	var $btnFadeOut = $("#btnFadeOut");
	var $btnSlideUp = $("#btnSlideUp");
	var $btnSlideDown = $("#btnSlideDown");
	var $btnSlideToggle = $("#btnSlideToggle");

	$content.css({
		"width": "100px",
		"height": "200px",
		"background": "red"
	});

	$btnFadeIn.on("click", function() {
		$content.fadeIn();
	});

	$btnFadeOut.on("click", function() {
		$content.fadeOut();
	});

	$btnSlideUp.on("click", function() {
		$content.slideUp();
	});

	$btnSlideDown.on("click", function() {
		$content.slideDown();
	});

	$btnSlideToggle.on("click", function() {
		$content.slideToggle();
	})


})