$(function() {
	var $target = $("#target");
	var $btnAppendToText = $("#btnAppendToText");
	var $btnAppendToObject = $("#btnAppendToObject");

	$btnAppendToText.on("click", function() {
		$("<a href='http://www.jiesoon.cn'>www.jiesoon.cn</a>").appendTo($target);
	});

	$btnAppendToObject.on("click", function() {
		$("<a></a>", {
			"href": "http://www.jiesoon.com",
			"text": "www.jiesoon.com"
		}).appendTo($target);
	})
});