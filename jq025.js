$(function() {
	var $source = $("#source");
	var $target = $("#target");
	var $jiesoonCn = $("#jiesoonCn");

	var $btnDetach = $("#btnDetach");
	var $btnRemove = $("#btnRemove");

	$jiesoonCn.on("click", function(e) {
		e.preventDefault();
		console.log("click me!");
	});

	$btnDetach.on("click", function() {
		$jiesoonCn.detach();
		$target.append($jiesoonCn);
	});

	$btnRemove.on("click", function() {
		$jiesoonCn.remove();
		$target.append($jiesoonCn);
	});
});