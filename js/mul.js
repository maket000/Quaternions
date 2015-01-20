function calculate(){
	document.getElementById("error").innerHTML = "";
	document.getElementById("rh").innerHTML = "";
	document.getElementById("ra").innerHTML = "";
	document.getElementById("rb").innerHTML = "";
	document.getElementById("rc").innerHTML = "";
	document.getElementById("rd").innerHTML = "";
	
	var a1 = parseInput("a1");
	var b1 = parseInput("b1");
	var c1 = parseInput("c1");
	var d1 = parseInput("d1");
	var a2 = parseInput("a2");
	var b2 = parseInput("b2");
	var c2 = parseInput("c2");
	var d2 = parseInput("d2");
	
	if(error.innerHTML == ""){
		document.getElementById("rh").innerHTML = "q<sub>1</sub>q<sub>2</sub> = "
		document.getElementById("ra").innerHTML = (a1*a2 - b1*b2 - c1*c2 - d1*d2).toString();
		document.getElementById("rb").innerHTML = (a1*b2 + b1*a2 + c1*d2 - d1*c2).toString();
		document.getElementById("rc").innerHTML = (a1*c2 - b1*d2 + c1*a2 + d1*b2).toString();
		document.getElementById("rd").innerHTML = (a1*d2 + b1*c2 - c1*b2 + d1*a2).toString();
	}
}
	
function parseInput(id){
	box = document.getElementById(id);
	contents = box.value;
	if(contents == ""){
		box.value = "0";
		return 0;
	}
	try{
		return parseInt(contents);
	}
	catch (err){
		document.getElementById("error").innerHTML = "Invalid input in " + id;
		return NaN;
	}
}
	