$(function() {
	var btnDateTime = $("#btnDateTime");
	var dateTime = $("#dateTime");

	btnDateTime.on("click", function() {
		var date = new Date();
		dateTime.text(date);
	})
})