var App = {
	globals : {
		listOfVideos : document.querySelector(".listOfVideos"),
		mas_DOM_videos : 0,
		mas_JSON_videos :0,
		Page_with_mainVideo :document.querySelector(".Page_with_mainVideoNone")
	},
	init  : function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "video.json", true);
		xhr.onload = function(){
			App.callbackfunc(xhr.responseText);
		};
		xhr.send(null);
	},
	callbackfunc :  function(text){
		var mas_videos = JSON.parse(text);
		mas_videos = mas_videos.videos;
		App.globals.mas_JSON_videos = mas_videos;
		var len = mas_videos.length;
		for(var i = 0; i<len; i++){
			var div = document.createElement("div");
			div.setAttribute("class", "video");
			div.innerHTML = "<div class=\"description\"><div class=\"name\"><span>"+ mas_videos[i].name+"</span></div><div><img src=\""+mas_videos[i].preview+"\" alt=\"\" class=\"poster\"></div><div class=\"history\">"+mas_videos[i].description+"</div></div>";
			App.globals.listOfVideos.appendChild(div);
		}
		App.globals.mas_DOM_videos = document.querySelectorAll(".video");
		App.view_mainVideo();
	},
	view_mainVideo : function(){
		var len = App.globals.mas_DOM_videos.length;
		for(var i = 0; i<len; i++){	
			App.globals.mas_DOM_videos[i].addEventListener("click",function(e){
				App.globals.listOfVideos.classList.remove("listOfVideos");
				App.globals.listOfVideos.classList.toggle("listOfVideosNone");

				App.globals.Page_with_mainVideo.classList.remove("Page_with_mainVideoNone");
				App.globals.Page_with_mainVideo.classList.toggle("Page_with_mainVideo");

				/*width = 40vw for player, player in 1 div*/
				App.globals.Page_with_mainVideo.innerHTML = "<div class=\"mainVideo\">!!!!Suda vstav player!!!</div><div class=\"asideColumn\"></div>";
				//и потом при помощи e.currentTarget включи видео, типо проверку делай такую(if(e.currentTarget == this))
				console.log(e.currentTarget)
				

				var asideColumn = document.querySelector(".asideColumn");
				for(var j =0; j<len; j++){
					var video_Of_AsideColumn = document.createElement("div");
					video_Of_AsideColumn.setAttribute("class", "video_Of_AsideColumn");
					video_Of_AsideColumn.innerHTML = "<div class=\"name_videoAside\"><span>"+App.globals.mas_JSON_videos[j].name+"</span></div><div><img src=\""+App.globals.mas_JSON_videos[j].preview+"\" alt=\"\" class=\"poster_videoAside\"></div>";
					asideColumn.appendChild(video_Of_AsideColumn);
				}
				


				e.stopPropagation();
			})
		}
	}
}

App.init();
















// var routes  = {
// 	"#info":{
// 		path:"hello.html",
// 		handler: function(){}
// 	},
// 	"#page":{
// 		path:"myPage.html",
// 		handler: function(){}
// 	},
// 	"#comment":{
// 		path:"comment.html",
// 		handler: function(){
// 			var text = document.querySelector(".text");
// 			var btn = document.querySelector(".button");
// 			var container = document.querySelector(".container")
// 			btn.addEventListener("click", function(){
// 				container.innerText = text.value;
// 			})
// 		}
// 	},
// 	"#comment":{
// 		path:"comment.html",
// 		handler: function(){
// 			var text = document.querySelector(".text");
// 			var btn = document.querySelector(".button");
// 			var container = document.querySelector(".container")
// 			btn.addEventListener("click", function(){
// 				container.innerText = text.value;
// 			})
// 		}
// 	},
// 	"#photo":{
// 		path:"photo.html",
// 		handler: function(){
// 			var btn = document.querySelector(".button");
// 			btn.addEventListener("click", function(){
// 				var img = document.createElement("img");
// 				var container = document.querySelector(".container");
// 				container.appendChild(img);
// 				img.setAttribute("src", "sasha.jpg")
// 			})
// 		}	
// 	},


// }
// var route = function(){
// 	var hash = location.hash;
// 	var path = null;
// 	var handler = null;
// 	for(var h in routes)
// 	{
// 		if(h == hash)
// 		{
// 			path = routes[h].path;
// 			handler = routes[h].handler;
// 		}
// 	}
// 	if(path!=null)
// 		openPage(path, handler);
// }
// var openPage = function (path, handler){
// 	xhr.open("GET", path , true); 
// 	xhr.onload = function()
// 	{
// 		document.querySelector('.container').innerHTML = xhr.responseText;
// 		handler();
// 	}
// 	xhr.send();
// }
// window.onhashchange = route;
// route();

