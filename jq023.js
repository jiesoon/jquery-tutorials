$(function() {
	var $jiesoon = $("#jiesoon");
	var $btnLink = $("#btnLink");
	var $btnChangeLink = $("#btnChangeLink");

	$btnLink.on("click", function() {
		console.log($jiesoon.attr("href"));
	});

	$btnChangeLink.on("click", function() {
		$jiesoon.attr({
			href: "http://www.jiesoon.com"
		});
		$jiesoon.text("jiesoon.com");
	})
})