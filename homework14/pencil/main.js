var cvs = document.getElementById("cvs");
var coord = document.getElementById("coord");
cvs.addEventListener("mousemove", function(e){
	coord.innerHTML = "x:" + e.clientX + "" + "y:" + e.clientY;
})
var ctx = cvs.getContext("2d");
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
cvs.addEventListener("click", function(){
	cvs.addEventListener("mousemove", function(e){
		var x,y;
		x = e.pageX;
	    y = e.pageY;
	    setTimeout(function(){
	        ctx.lineTo(x - cvs.offsetLeft, y - cvs.offsetTop);
	        ctx.moveTo(x - cvs.offsetLeft, y - cvs.offsetTop);
	        ctx.stroke();
	    },1);
	})
})
var save = document.getElementById("save");
save.addEventListener("click", function(){
    window.open(cvs.toDataURL("image/png"), "new_window_name");
});

