var div = document.querySelector(".div");
var routes = {
	"#info" : {
		path : "info.html",
		handler : function(text){
			div.innerHTML = text; 
		}
	},
	"#contacts" : {
		path : "contacts.html",
		handler : function(text){
			div.innerHTML = text; 
		}
	},
	"#products" : {
		path : "products.html",
		handler : function(text){
			div.innerHTML = text;
			var form = document.querySelector(".text");
			var btn = document.querySelector(".btn");
			btn.addEventListener("click", function(){
				alert(form.value);
			})
		}
	},
	"#photo" : {
		path : "photo.html",
		handler : function(text){
			div.innerHTML = text;
		}
	},
	"#rules" : {
		path :"rules.html",
		handler : function(){
			div.addEventListener("mousemove", function(e){
				div.innerHTML = "x:" + e.clientX + "" + "y:" + e.clientY;
			})
		}
	}
}
var doLoad = function(p){
	var xhr = new XMLHttpRequest()
	xhr.open("GET", p.path, true);
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
