var list = document.querySelector(".list");
var html = document.querySelector("html");
var li1 = document.querySelector(".li1");
var li2 = document.querySelector(".li2");
var li3 = document.querySelector(".li3");
var li4 = document.querySelector(".li4");
var li5 = document.querySelector(".li5");

html.addEventListener("contextmenu", function(e){
	e.preventDefault();
})

html.addEventListener("contextmenu", function(e){
	if(window.getComputedStyle(list).display=="none"){
		list.style.top = e.clientY+"px";
		list.style.left = e.clientX+"px";
		list.style.display = "block";
	}else{
		if(e.target == this)
		list.style.display = "none";		
	}
	li1.addEventListener("mouseover", function(e){
		li1.classList.remove("white");
		li1.classList.add("grey");
	})
	li2.addEventListener("mouseover", function(e){
		li2.classList.remove("white");
		li2.classList.add("grey");
	})
	li3.addEventListener("mouseover", function(e){
		li3.classList.remove("white");
		li3.classList.add("grey");
	})
	li4.addEventListener("mouseover", function(e){
		li4.classList.remove("white");
		li4.classList.add("grey");
	})
	li5.addEventListener("mouseover", function(e){
		li5.classList.remove("white");
		li5.classList.add("grey");
	})
})

