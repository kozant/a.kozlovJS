var audio = document.getElementsByTagName("video")[0];
audio.videoWidth = "500px";
audio.heightWidth = "500px";

var fTime = 0;
var play = document.getElementById("play");
play.addEventListener("click", function(){
	if(play.classList.contains("fa-play")){
		play.classList.remove("fa-play");
		play.classList.add("fa-pause");
		audio.currentTime = fTime;
		audio.play();
	}else{
		play.classList.remove("fa-pause");
		play.classList.add("fa-play");
		audio.pause();
		fTime = audio.currentTime;
	}
})

var stop = document.getElementById("stop");
stop.addEventListener("click", function(){
	audio.pause();
	fTime = 0;
	play.classList.remove("fa-pause");
	play.classList.add("fa-play");
})

var forward = document.getElementById("forward");
forward.addEventListener("click", function(){
	console.log(audio.playbackRate+=0.25);
})
var backward = document.getElementById("backward"); 
backward.addEventListener("click", function(){
	audio.playbackRate-=0.25;
})

var volume = document.getElementById("volume"); 
volume.addEventListener("click", function(){ 
	if(volume.classList.contains("fa-volume-up")){ 
		volume.classList.remove("fa-volume-up"); 
		volume.classList.add("fa-volume-off"); 
		audio.muted = true; 
	} 
	else{
		volume.classList.remove("fa-volume-off"); 
		volume.classList.add("fa-volume-up"); 
		audio.muted = false; 
	}; 
}); 

var slid = document.getElementById("slid"); 
slid.addEventListener("input", function(){ 
	audio.volume = slid.value; 
})

var fullReg = document.querySelector(".load");
var emptyReg = document.querySelector(".empty");
var width = parseFloat(window.getComputedStyle(fullReg).width); 
fullReg.addEventListener("click", function(e){ 
	emptyReg.style.width = e.offsetX +"px"; 
	audio.currentTime = e.offsetX/width*audio.duration;
	stop.addEventListener("click", function(){
		emptyReg.style.width = 0 +"px"; 
	})
}); 

var time = document.querySelector(".time");
audio.onloadedmetadata = function(){ 
setInterval(function(){ 
	var minutesCurrentTime = Math.floor(audio.currentTime/60); 
	var secCurrentTime = Math.floor(audio.currentTime - minutesCurrentTime*60); 
	var minutesDuration = Math.floor(audio.duration/60); 
	var secDuration = Math.floor(audio.duration - minutesDuration*60);
time.innerText = minutesCurrentTime+":"+secCurrentTime+"/"+minutesDuration+":"+secDuration ; 
}, 1000) 
}


/*var input = document.getElementById("input");
var div = document.getElementById("div");
input.addEventListener("change", function(){
	var file = input.files[0];
	var reader = new FileReader();
	reader.onload = function(){
			div.innerHTML = "<img src="+reader.result+">";
		console.log(reader.result);
	}
	reader.readAsDataURL(file);
})*/
/*var img = document.getElementById("img");
img.addEventListener("dragstart", function(e){
	e.preventDefault();
})
img.addEventListener("dragover", function(e){
	e.preventDefault();
});
img.addEventListener("drop", function(e){
	e.preventDefault();
	var file = e.dataTransfer.files[0];
	var reader = new FileReader();
	reader.onload = function(){
		img.setAttribute("src", reader.result)
	}
	reader.readAsDataURL(file);
})*/




