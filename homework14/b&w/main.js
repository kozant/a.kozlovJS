var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
var img = document.getElementById("photo");
ctx.drawImage(img, 0, 0);
var imageData = ctx.getImageData(0, 0, 500, 500);
var imageDataFiltered = sepia(imageData);
ctx.putImageData(imageDataFiltered, 0, 0);

function sepia(imageData) {
	var pixels = imageData.data;
	for (var i = 0; i < pixels.length; i += 4) {
		var bw = (pixels[i] * 0.3) + (pixels[i + 1] * 0.59) + (pixels[i + 2] * 0.11);
		pixels[i] = bw;
		pixels[i+1] = bw;	
		pixels[i+2] = bw;
	}
	return imageData;
};