var a;
var b;
var c;
var d;


function  add(){
	
	var z=+document.getElementById("a").value + +document.getElementById("b").value;
	document.writeln("add the two number:"+z+"<br>");
	r=z;
	document.writeln("num 1:<input type='number' id='c' name='c'><br>");
	document.writeln("<input type='button' value='sub' onClick='sub()'><br>");

}function  sub(){
	
	var y=r-document.getElementById("c").value;
	document.writeln("sub the two number is:"+y+"<br>");
	i=y;
	document.writeln("num 1:<input type='number' id='d' name='d'><br>");
	document.writeln("<input type='button' value='mul' onClick='mul()'><br>");
}
function  mul(){
	var x=i*document.getElementById("d").value;
	document.writeln("mul the two number is:"+x+"<br>");
	o=x;
	document.writeln("num 1:<input type='number' id='e' name='e'><br>");
	document.writeln("<input type='button' value='div' onClick='div()'><br>");
}
function  div(){
	var x=o/document.getElementById("e").value;
	document.writeln("div the two number is:"+x+"<br>");
	p=x;
	document.writeln("<input type='button' value='show all' onClick='al()'><br>");
	
}function al(){
	document.writeln("addition is:"+r+"<br>");
	document.writeln("subraction is:"+i+"<br>");
	document.writeln("multiplication is:"+o+"<br>");
	document.writeln("division is:"+p);
}
