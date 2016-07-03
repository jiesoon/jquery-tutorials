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
		$content.animate({"opacity": 0}, 2000, function() {
			$content.css("display", "none");
		});
	});

	$btnFadeOut.on("click", function() {
		$content.css("display", "block");
		$content.animate({"opacity": 1}, 2000, function() {
		});
	});

	$btnSlideUp.on("click", function() {
		$content.animate({"height": "0px"}, 400);		
	});

	$btnSlideDown.on("click", function() {
		$content.animate({"height": "100px"}, 400);
	});

	$btnSlideToggle.on("click", function() {
		$content.slideToggle();
	})


})