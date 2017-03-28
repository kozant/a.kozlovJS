var n=prompt("Введите кол-во элементов");
var s=prompt("Введите среднее значение");s=s*1;
var p=prompt("Введите отклонение");

var arr = new Array();
var arr1 = new Array();
var s1=(s*p)/100;
var sBeg=s-s1; 
var sEnd=s+s1;
var temp;
for(var i = 0; i < n; i++){
	arr[i]=Math.random()*(s*2);
	arr[i]=Math.round(arr[i]);
	if(arr[i] <= sEnd && arr[i] >= sBeg){
		arr1.push(arr[i]);
	}
}
for(var i = 0; i < arr1.length - 1; ++i){
    for(var j = 0; j < arr1.length - 1 - i; ++j){
        if(arr1[j+1] < arr1[j]){
            temp=arr1[j];
            arr1[j]=arr1[j+1];
            arr1[j+1]=temp;
        }
    }
}
var arif=0;
for(var i = 0; i < arr1.length; i++){
	arif += arr1[i]/arr1.length;
}
alert("Среднее арифметическое = " + arif);