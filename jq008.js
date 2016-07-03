$(function() {
	var $btnAdd = $("#btnAdd");
	var $btnSub = $("#btnSub");
	var $btnMul = $("#btnMul");
	var $btnDiv = $("#btnDiv");

	var $a = $("#a");
	var $b = $("#b");
	var $result = $("#result");

	$a.val(100);
	$b.val(200);

	$result.text("???");

	$btnAdd.on("click", function() {
		var result = calculate("+", parseInt($a.val(), 10), parseInt($b.val(), 10));
		$result.text(result);
	})

	$btnSub.on("click", function() {
		$result.text(calculate("-", parseInt($a.val(), 10), parseInt($b.val(), 10)));
	})

	$btnMul.on("click", function() {
		$result.text(calculate("*", parseInt($a.val(), 10), parseInt($b.val(), 10)));
	})

	$btnDiv.on("click", function() {
		$result.text(calculate("/", parseInt($a.val(), 10), parseInt($b.val(), 10)));
	})

	function calculate(op, a, b) {
		if (!op || !b || !a) {
			return;
		}

		var result = 0;
		switch (op) {
			case "+":
				result = a + b;
				break;
			case "-":
				result = a - b;
				break;
			case "*":
				result = a * b;

				break;
			case "/":
				result = a / b;
				break;
		}

		return result;
	}
});