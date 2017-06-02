var videoApp = {
	video : null,
	stop : null,
	volume : null,
	emptySpacepx : null,
	init : function(){
		videoApp.video = document.getElementsByTagName("video")[0];
	},

	play : function(){
		var play = document.getElementById("play");
		play.addEventListener("click", function(){
			if(play.classList.contains("fa-play")){
				play.classList.remove("fa-play");
				play.classList.add("fa-pause");
				videoApp.video.currentTime = localStorage.getItem("videoTime");
				videoApp.video.play();
			}else{
				play.classList.remove("fa-pause");
				play.classList.add("fa-play");
				videoApp.video.pause();
			}
		})
	},

	stopBtn : function(){
		videoApp.stop = document.getElementById("stop");
		videoApp.stop.addEventListener("click", function(){
			videoApp.video.pause();
			videoApp.video.currentTime = 0;
			videoApp.video.classList.remove("fa-pause");
			videoApp.video.classList.add("fa-play");
		})
	},

	forward : function(){
		var forward = document.getElementById("forward");
		forward.addEventListener("click", function(){
			videoApp.video.playbackRate+=0.25;
		});
	},

	backward : function(){
		var backward = document.getElementById("backward"); 
		backward.addEventListener("click", function(){
			videoApp.video.playbackRate-=0.25;
		})
	},

	volume : function(){
		videoApp.volume = document.getElementById("volume"); 
		videoApp.volume.addEventListener("click", function(){ 
			if(videoApp.volume.classList.contains("fa-volume-up")){ 
				videoApp.volume.classList.remove("fa-volume-up"); 
				videoApp.volume.classList.add("fa-volume-off"); 
				videoApp.video.muted = true; 
			} 
			else{
				videoApp.volume.classList.remove("fa-volume-off"); 
				videoApp.volume.classList.add("fa-volume-up"); 
				videoApp.video.muted = false; 
			}; 
		}); 
	},

	range : function(){
		var range = document.getElementById("slid"); 
		range.addEventListener("input", function(){ 
			videoApp.video.volume = range.value;
		})
	},

	line : function(){
		var fullReg = document.querySelector(".load");
		var emptyReg = document.querySelector(".empty");
		var width = parseFloat(window.getComputedStyle(fullReg).width);
		fullReg.addEventListener("click", function(e){ 
			emptyReg.style.width = e.offsetX +"px"; 
			videoApp.video.currentTime = e.offsetX/width*videoApp.video.duration;
			videoApp.emptySpacepx = e.offsetX/width*videoApp.video.duration
			videoApp.stop.addEventListener("click", function(){
				emptyReg.style.width = 0 +"px"; 
			})
		});
		setInterval(function(){
			videoApp.emptySpacepx = (videoApp.video.currentTime*100)/videoApp.video.duration;
			emptyReg.style.width = videoApp.emptySpacepx +"px"; 
		},1000)
	},

	time : function(){
		var time = document.querySelector(".time");
		videoApp.video.onloadedmetadata = function(){ 
			if(typeof(localStorage.getItem("videoTime")) == "string"){
				videoApp.video.currentTime = localStorage.getItem("videoTime");
				if(play.classList.contains("fa-play")){
					play.classList.remove("fa-play");
					play.classList.add("fa-pause");
					videoApp.video.currentTime = localStorage.getItem("videoTime");
					videoApp.video.play();
				}
			}
			setInterval(function(){ 
				var minutesCurrentTime = Math.floor(videoApp.video.currentTime/60); 
				var secCurrentTime = Math.floor(videoApp.video.currentTime - minutesCurrentTime*60); 
				var minutesDuration = Math.floor(videoApp.video.duration/60); 
				var secDuration = Math.floor(videoApp.video.duration - minutesDuration*60);
				if(secCurrentTime > 9){
					time.innerText = minutesCurrentTime+":"+secCurrentTime+"/"+minutesDuration+":"+secDuration ; 
				}else{
					time.innerText = minutesCurrentTime+":"+"0"+secCurrentTime+"/"+minutesDuration+":"+secDuration ;
				}
				localStorage["videoTime"] = videoApp.video.currentTime;
			}, 1000) 
		}
	}
}

videoApp.init();
videoApp.play();
videoApp.stopBtn();
videoApp.forward();
videoApp.backward();
videoApp.volume();
videoApp.range();
videoApp.line();
videoApp.time();



