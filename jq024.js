$(function () {
	var $jiesoonCn = $("#jiesoonCn");
	var $jiesoonCom = $("#jiesoonCom");
	var $btnRemove = $("#btnRemove");
	var $btnRemoveCn = $("#btnRemoveCn");
	var $a = $("a");

	$btnRemove.on("click", function () {
		var $allAs = $a.remove();
		console.log($allAs);
	});

	$btnRemoveCn.on("click", function() {
		var $cn = $jiesoonCn.remove();
		console.log($cn);
	});


})