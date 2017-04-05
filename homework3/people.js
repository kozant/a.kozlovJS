var names = new Array('Михаил', 'Алина', 'Вероника', 'Владислава' ,'Роман', 'Яна', 'Вячеслав', 'Нина', 'Анатолий', 'Екатерина' ,'Артемий', 'Ирина', 'Феликс' ,'Марина', 'Вадим', ' Давид', 'Элеонора', 'Нина', 'Ирина','Кирилл','Вадим','Екатерина','Ксения');
var cities = new Array('Рийхимяки', 'Оломоуц','Байрамали','	Сахаб','Ольборг','Лонгёй','Актау','Хайфон','Данли','Барнаул','Яфран','Арвайхээр','Карно','Эшпаргуш','Мбея');
n=names.length;
var peoples = new Array(n);
for(var i = 0; i<n; i++){
	peoples[i] ={
		name : names[i],
		city : cities[Math.round(Math.random()*cities.length)],
		age : Math.round(Math.random()*100),
	}
	if(i>0){
		peoples.sort(function(a,b){
			if(a.age<b.age) return 1;
			else return -1;
		})
	}
	var b = peoples[i+1];
	var a = peoples[i];
	
}
for(var i = 0; i<n; i++){
	document.write(peoples[i].name + "-" + peoples[i].city + "-" + peoples[i].age+"    ");
}