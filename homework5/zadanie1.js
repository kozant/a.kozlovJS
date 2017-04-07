var m = prompt("Введите кол-во строк таблицы");
var n = prompt("Введите кол-во столбцов таблицы");
var el = document.getElementById("first");
var table = document.createElement("table");
el.appendChild(table);
table.setAttribute("border", "1");
var tbody = document.createElement("tbody");
table.appendChild(tbody);
for(var i = 1; i <= n; i++){
	var tr = document.createElement("tr");
	tbody.appendChild(tr);
	for(var j = 1; j <= m; j++){
		var td = document.createElement("td");
		tr.appendChild(td);
		if(i==j){
			td.setAttribute("bgcolor", "blue");
		}
		td.innerHTML=i*j;
		tr.appendChild(td);
	}
}