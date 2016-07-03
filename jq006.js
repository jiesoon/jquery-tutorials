$(function() {
	var btnShow = $("#btnShow");
	var btnHide = $("#btnHide");
	var content = $("#content");

	btnShow.on("click", function() {
		content.show();
	})

	btnHide.on("click", function () {
		content.hide();
	})
})