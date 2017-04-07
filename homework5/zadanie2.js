var names = new Array('Беларусь', 'Россия', 'Украина', 'Польша' ,'США', 'Великобритания', 'Франция', 'Испания', 'Чехия', 'Италия' ,'Германия', 'Канада', 'Мексика');
var population = new Array('9 504 700', '146 804 372','42 414 900','38 437 239','325 398 000','65 341 183','64 513 242','46 423 064','10 546 120','60 665 551','82 162 000','35 248 000','122 273 473');
var code = new Array('BY', 'RU', 'UA', 'PL' ,'US', 'UK', 'FR', 'ES', 'CZ', 'IT' ,'DE', 'CA', 'MX');
var flags = new Array('belarus.png', 'russia.png', 'ukraine.png', 'poland.png' ,'united-states.png', 'united-kingdom.png', 'france.png', 'spain.png', 'czech-republic.png', 'italy.png' ,'germany.png', 'canada.png', 'mexico.png');
var countries = new Array();
var el = document.getElementById("first");
var table = document.createElement("table");
el.appendChild(table);
table.setAttribute("border", "1");
var tbody = document.createElement("tbody");
table.appendChild(tbody);
for(var i = 1; i<=12; i++){
	countries[i] ={
		name : names[i],
		population : population[i],
		code : code[i],
		flag : flags[i],
	}
	var tr = document.createElement("tr");
	tbody.appendChild(tr);

	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerHTML=countries[i].name;

	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerHTML=countries[i].population;

	var td = document.createElement("td");
	tr.appendChild(td);
	td.innerHTML=countries[i].code;

	var td = document.createElement("td");
	var img = document.createElement("img"); 
	tr.appendChild(td);
	td.appendChild(img);
	img.setAttribute("src", countries[i].flag);
	img.setAttribute("width", "60px");


	}
