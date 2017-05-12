var div = document.querySelector(".div");
var routes = {
	"#Electronics" : {
		json : "Electronics/Electronics.json",
		handler : function(text){
			var objectInfo = JSON.parse(text);
			var electr = document.querySelector(".electr");
			var el = document.querySelector(".cmd");
			electr.addEventListener("click", function(){
				el.innerHTML = "";
				for(var i in objectInfo){
 						el.innerHTML += '<img src='+objectInfo[i]["img"]+'><div>Name:'+objectInfo[i]["name"]+'</div><div>Price:'+objectInfo[i]["price"]+'</div><div>Description:'+objectInfo[i]["description"]+'</div><div>Flag:'+objectInfo[i]["flag"]+'</div>';
 				}
 			})
		}
	},
	"#Sports" : {
		json : "Sports/Sports_equipment.json",
		handler : function(text){
			var objectInfo = JSON.parse(text);
			var sport = document.querySelector(".sport");
			var el = document.querySelector(".cmd");
			sport.addEventListener("click", function(){
				el.innerHTML = "";
				for(var i in objectInfo){
 						el.innerHTML += '<img src='+objectInfo[i]["img"]+'><div>Name:'+objectInfo[i]["name"]+'</div><div>Price:'+objectInfo[i]["price"]+'</div><div>Description:'+objectInfo[i]["description"]+'</div><div>Flag:'+objectInfo[i]["flag"]+'</div>';
 				}
 			})
		}
	},
	"#Vehicles" : {
		json : "Vehicles/Vehicles.json",
		handler : function(text){
			var objectInfo = JSON.parse(text);
			var veh = document.querySelector(".veh");
			var el = document.querySelector(".cmd");
			veh.addEventListener("click", function(){
				el.innerHTML = "";
				for(var i in objectInfo){
 						el.innerHTML += '<img src='+objectInfo[i]["img"]+'><div>Name:'+objectInfo[i]["name"]+'</div><div>Price:'+objectInfo[i]["price"]+'</div><div>Description:'+objectInfo[i]["description"]+'</div><div>Flag:'+objectInfo[i]["flag"]+'</div>';
 				}
 			})
			}
		}
	}
var doLoad = function(p){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", p.json, true);
	xhr.onload = function(){
		p.handler(xhr.responseText);
	}
	xhr.send(null);

}
var route = function(){
	var hash = location.hash;
	for(var h in routes){
		if (h == hash){
			doLoad(routes[h]);
		}
	}
}
window.onhashchange = route;
route();
