$(function() {
	var $content = $("#content");
	var $btnAddClass = $("#btnAddClass");
	var $btnAddRemoveClass = $("#btnAddRemoveClass");
	var $btnRemoveClass = $("#btnRemoveClass");

	$content.css({
		"width": "80px",
		"height": "30px"
	});

	$btnAddClass.on("click", function() {
		$content.removeClass("pressed");
		$content.addClass("normal");

	});

	$btnRemoveClass.on("click", function() {
		$content.removeClass("normal");
		$content.addClass("pressed");
	});

	$btnAddRemoveClass.on("click", function() {
		$content.toggleClass("normal");
	});


})