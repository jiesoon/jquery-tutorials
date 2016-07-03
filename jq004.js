$(function() {
	var btnText = $("#btnText");
	var btnHtml = $("#btnHtml");

	var content = $("#content");

	btnText.on("click", function() {
		content.text("<h1>plain text</h1>");
	})

	btnHtml.on("click", function() {
		content.html("<h1>HTML</h1>")
	})
})