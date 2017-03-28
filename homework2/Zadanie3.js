var n=prompt("Введите кол-во элементов");
var x=prompt("Введите x");
var arr = new Array();
for(var i = 1; i <= n; i++){
	var a=prompt("Введите " + i +" элемент");
	arr.push(a);
}
var res=0;
for(var i = 0; i < n; i++){
	res+=arr[i]*Math.pow(x,i);
}
alert("Результатом является число = " + res);