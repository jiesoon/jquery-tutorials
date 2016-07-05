$(function() {
	var $jiesoonCn = $("#jiesoonCn");
	var $source = $("#source");
	var $btnEmpty = $("#btnEmpty");
	var $btnUnwrap = $("#btnUnwrap");

	$btnEmpty.on("click", function() {
		$source.empty();
		console.log($("html").html());
	});

	$btnUnwrap.on("click", function() {
		$jiesoonCn.unwrap();
		console.log($("html").html());
	});
})