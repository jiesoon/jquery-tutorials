$(function() {
	var $btnWrap = $("#btnWrap");
	var $btnWrapAll = $("#btnWrapAll");

	$btnWrap.on("click", function() {
		$("a").wrap($("<div></div>").css({
			"background": "yellow"
		}));
	});

	$btnWrapAll.on("click", function() {
		$("a").wrapAll($("<div/>").css({
			"background": "red"
		}));
	})
})