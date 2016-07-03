$(function() {
	var $btnAddClass = $("#btnAddClass");
	var $btnClearClass = $("#btnClearClass");

	var $allPs = $("p");

	$btnAddClass.on("click", function() {
		$allPs.addClass("paragraph");
	});

	$btnClearClass.on("click", function() {
		$allPs.removeClass("paragraph");
	})
});