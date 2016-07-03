$(function() {
	var btnAlert = $("#btnAlert");

	btnAlert.on("click", function() {
		window.alert("Hello, I am an alert dialog!");
	});

	var btnLog = $("#btnLog");
	btnLog.on("click", function() {
		console.log("Hello, I am message output by console.log()");
	})
})