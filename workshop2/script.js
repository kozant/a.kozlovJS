var routes = {
	"#start" : {
		json : "info.json",
		handler : function(text){
			window.planet = JSON.parse(text);
			var canvas = document.getElementById("canvas");
			var btn = document.getElementById("btn");
			var range = document.getElementById("range");
			var ctx = canvas.getContext("2d");
			
			function sphere(x,y){
				ctx.beginPath();
						ctx.fillStyle = "yellow";
						ctx.strokeStyle = "yellow";
						ctx.arc(x,y,20,0,2*Math.PI);
				ctx.closePath();
				ctx.stroke();
				ctx.fill();
			}
			function render(){
				ctx.clearRect(0,0,1800,1200);
				for(var i in planet){
					ctx.beginPath();
						ctx.strokeStyle = planet[i]["color"];
						ctx.fillStyle = planet[i]["color"];
						ctx.arc(planet[i]["coordX"],planet[i]["coordY"],planet[i]["radius"],0,2*Math.PI);
					ctx.closePath();
					ctx.stroke();
					ctx.fill();
				}
			}
			render()

			

			canvas.addEventListener("click", function(g){

				window.A = {
					x:0
					,y:1110
				}

				window.V={
					x: g.clientX/3
					,y:-(1110-g.clientY)/3
				}
				window.renderInterval = 20;

				window.G = 1000;

				setInterval(function(){
					var coef = renderInterval/1000;
					var a = {
						x: 0
						,y: 0
					}

					Math.sqr = (x)=>x*x;
					window.planet.forEach(function(p){
						var r = Math.sqrt(Math.sqr(A.x-p.coordX)+Math.sqr(A.y-p.coordY));
						var ma = G*p.mass/Math.sqr(r);
						var av={
							x: p.coordX - A.x
							,y: p.coordY - A.y
						}
						var l = Math.sqrt(Math.sqr(av.x)+Math.sqr(av.y));
						av.x/=l;
						av.y/=l;

						av.x*=ma;
						av.y*=ma;

						a.x+=av.x;
						a.y+=av.y;

					});

					V.x+=a.x;
					V.y+=a.y;

					A.x+=V.x*coef;
					A.y+=V.y*coef;

					render();
					sphere(A.x, A.y);
				},renderInterval);
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