function Calculate() {
	var sym = document.getElementById("symbol").value;
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	var ret;

	setInterval(function(){ 
		alert("Hello"); 
	}, 30000);

	if (!(num1 >= 0) || !(num2 >= 0))
	{
		ret = "Error :(";
	}
	else if (num2 == 0 && (sym == "/" || sym == "%"))
	{
		ret = "It's over 9000!";
	}
	else if (sym == "+")
	{
		ret = num1 + num2;
	}
	else if (sym == "-")
	{
		ret = num1 - num2;
	}
	else if (sym == "*")
	{
		ret = num1 * num2;
	}
	else if (sym == "/")
	{
		ret = num1 / num2;
	}
	else if (sym == "%")
	{
		ret = num1 % num2;
	}
	alert(ret);
	console.log(ret);
}

