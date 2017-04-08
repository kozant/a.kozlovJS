var names = new Array('Михаил', 'Алина', 'Вероника', 'Владислава' ,'Роман', 'Яна', 'Вячеслав', 'Нина', 'Анатолий', 'Екатерина' ,'Артемий', 'Ирина', 'Феликс' ,'Марина', 'Вадим', ' Давид', 'Элеонора', 'Нина', 'Ирина','Кирилл','Вадим','Екатерина','Ксения');
var cities = new Array('г.Москва', 'г.Санкт-Петербург','г.Новосибирск','г.Екатеринбург','г.Самара','г.Омск','г.Минск','г.Барановичи','г.Челябинск','г.Красноярск','г.Воронеж','г.Саратов','г.Пермь','г.Казань','г.Ростов-на-Дону');
var product = new Array();
product[0] ={
	name : 'телевизор',
	img : 'png_for_3/tv.png',
}
product[1] ={
	name : 'тостер',
	img : 'png_for_3/toster.png',
}
product[2] ={
	name : 'утюг',
	img : 'png_for_3/utug.png',
}
product[3] ={
	name : 'кондиционер',
	img : 'png_for_3/kond.png',
}
product[4] ={
	name : 'лампа',
	img : 'png_for_3/lamp.png',
}
product[5] ={
	name : 'весы',
	img : 'png_for_3/vesi.png',
}
product[6] ={
	name : 'плита',
	img : 'png_for_3/plita.png',
}
product[7] ={
	name : 'фотоаппарат',
	img : 'png_for_3/photos.png',
}
product[8] ={
	name : 'рация',
	img : 'png_for_3/racii.png',
}
product[9] ={
	name : 'ноутбук',
	img : 'png_for_3/noutbuk.png',
}
setInterval(function(){
	var i = parseInt(Math.random() * product.length)
	var element = document.getElementById("first");
	var fieldset=document.createElement("fieldset");
	element.appendChild(fieldset);
	var span1 = document.createElement("span");
	var span2 = document.createElement("span");
	var span3 = document.createElement("span");
	var br = document.createElement("br");
	fieldset.appendChild(span1);
	fieldset.appendChild(span2);
	fieldset.appendChild(span3);
	span1.innerText = names[parseInt(Math.random()*23)] + " из " + cities[parseInt(Math.random()*15)] + br.innerText;
	span2.innerText = " купил(а) " + parseInt(Math.random() * 10 +1) + " товаров. " + br.innerText;
	span3.innerText = "Товар: " + product[i].name;
	var img=document.createElement("img");
	fieldset.appendChild(img);
	img.setAttribute("src", product[i].img);
	},
	2700);
