$(function() {
	var $target = $("#target");
	var $btnAppendText = $("#btnAppendText");
	var $btnAppendObject = $("#btnAppendObject");

	var $a = $("<a href='http://www.jiesoon.cn'>jiesoon.cn</a>");
	var $o = $("<a></a>", {
		"text": "jiesoon.com",
		"href": "http://www.jiesoon.com"
	});

	$btnAppendText.on("click", function() {
		$target.append($a);
	});

	$btnAppendObject.on("click", function() {
		$target.append($o);
	});
	
})