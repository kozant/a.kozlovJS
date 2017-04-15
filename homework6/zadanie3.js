var names = ['Михаил', 'Алина', 'Вероника', 'Владислава' ,'Роман', 'Яна', 'Вячеслав', 'Нина', 'Анатолий', 'Екатерина' ,'Артемий', 'Ирина', 'Феликс' ,'Марина', 'Вадим', ' Давид', 'Элеонора', 'Нина', 'Ирина','Кирилл','Вадим','Екатерина','Ксения'];
var cities = ['г.Москва', 'г.Санкт-Петербург','г.Новосибирск','г.Екатеринбург','г.Самара','г.Омск','г.Минск','г.Барановичи','г.Челябинск','г.Красноярск','г.Воронеж','г.Саратов','г.Пермь','г.Казань','г.Ростов-на-Дону'];
var product = [
{
	name : 'телевизор',
	img : 'png_for_3/tv.png',
},
{
	name : 'тостер',
	img : 'png_for_3/toster.png',
},
{
	name : 'утюг',
	img : 'png_for_3/utug.png',
},
{
	name : 'кондиционер',
	img : 'png_for_3/kond.png',
},
{
	name : 'лампа',
	img : 'png_for_3/lamp.png',
},
{
	name : 'весы',
	img : 'png_for_3/vesi.png',
},
{
	name : 'плита',
	img : 'png_for_3/plita.png',
},
{
	name : 'фотоаппарат',
	img : 'png_for_3/photos.png',
},
{
	name : 'рация',
	img : 'png_for_3/racii.png',
},
{
	name : 'ноутбук',
	img : 'png_for_3/noutbuk.png',
}];
function getRandomIndex(num){
	return parseInt(Math.random() * num)
}
function getRandomItem(array){
	return array[getRandomIndex(array.length)]
}
setInterval(function(){
	var productItem = getRandomItem(product),
		element = document.getElementById("first"),
	    fieldset = document.createElement("fieldset"),
	    customerInfoSpan = document.createElement("span"),
	    amountSpan = document.createElement("span"),
	    orderNameSpan = document.createElement("span"),
	    br = document.createElement("br"),
	    img = document.createElement("img"),
	    closeButton = document.createElement("button"); 

	closeButton.innerText = "x";
	customerInfoSpan.innerText = getRandomItem(names) + " из " + getRandomItem(cities);
	amountSpan.innerText = " купил(а) " + getRandomIndex(10) + 1 + " товаров. ";
	orderNameSpan.innerText = "Товар: " + productItem.name;
	img.setAttribute("src", productItem.img);

	closeButton.addEventListener("click",function(e){
		e.target.parentNode.remove();
	})

	fieldset.appendChild(closeButton);
	fieldset.appendChild(customerInfoSpan);
	fieldset.appendChild(br);
	fieldset.appendChild(amountSpan);
	fieldset.appendChild(br);
	fieldset.appendChild(orderNameSpan);
	fieldset.appendChild(img);
	element.appendChild(fieldset);
	},
	1000);



