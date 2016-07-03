$(function() {
	var $content = $("#content");
	var $btnProperty = $("#btnProperty");
	var $btnObject = $("#btnObject");

	console.log($content.css("width"));
	console.log($content.css("height"));

	$btnProperty.on("click", function() {
		$content.css("width", "100px");
		$content.css("height", "200px");
		$content.css("background", "red");
	});

	$btnObject.on("click", function() {
		$content.css({
			"width": "200px",
			"height": "400px",
			"background": "blue",
		});
	});


});