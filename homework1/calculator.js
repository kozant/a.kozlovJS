var n1,n2,op;
n1=prompt("Введите первое число");
n2=prompt("Введите второе число");
n1=n1*1.0;
n2=n2*1.0;
op=prompt("Введите арифметическую операцию");
if(op=="+"){
	alert(n1+n2);
}
if(op=="-"){
	alert(n1-n2);
}
if(op=="*"){
	alert(n1*n2);
}
if(n2==0 && op=="/"){
	alert("Ошибка");
}
if(n2!=0 && op=="/"){
	alert(n1/n2);
}
if(op!="+" && op!="-" && op!="*" && op!="/"){
	alert("Ошибка");
}