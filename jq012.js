$(function() {
	var $btnChildren = $("#btnChildren");
	var $btnDescendants = $("#btnDescendants");

	$btnChildren.on("click", function() {
		$("body").children("p").css("background-color", "red");
	});

	$btnDescendants.on("click", function() {
		$("body").find("p").css("background-color", "blue");
	})
	
})