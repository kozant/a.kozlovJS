var textArea = document.getElementById("ta");
var B = document.getElementById("B");
var I = document.getElementById("I");
var U = document.getElementById("U");
var num = document.getElementById("num");
var add = document.getElementById("add");
var fontF = document.getElementById("fontF");
var color = document.getElementById("color");
var addC = document.getElementById("addC");
var addG = document.getElementById("addG");
var left = document.getElementById("left");
var center = document.getElementById("center");
var right = document.getElementById("right");
var addW = document.getElementById("addW");
var ad = document.getElementById("ad");
var re = document.getElementById("re");
var spisok = document.getElementById("spisok");
var address = document.getElementById("address");
var rm = document.getElementById("rm");

textArea.contentEditable = true;

B.addEventListener("click", function(e){
	document.execCommand("bold",false, null);
})
I.addEventListener("click", function(){
	document.execCommand("italic",false,null);
})
U.addEventListener("click", function(){
	document.execCommand("underline",false, null);
})
add.addEventListener("click", function(){
	document.execCommand("fontsize",false, num.value);
})
addW.addEventListener("click", function(){
	document.execCommand("fontFamily",false, fontF.value);
})
addC.addEventListener("click", function(){
	document.execCommand("forecolor",false,color.value);
})
addG.addEventListener("click", function(){
	document.execCommand("backcolor",false,color.value);
})
left.addEventListener("click", function(){
	document.execCommand("justifyleft",false,null)
})
center.addEventListener("click", function(){
	document.execCommand("justifycenter",false,null)
})
right.addEventListener("click", function(){
	document.execCommand("justifyright",false,null)
})
ad.addEventListener("click", function(){
	document.execCommand("indent",false,null)
})
re.addEventListener("click", function(){
	document.execCommand("outdent",false,null)
})
spisok.addEventListener("click", function(){
	document.execCommand("insertorderedList",false,null)
})

address.addEventListener("click", function(){
	document.execCommand("createlink",false,prompt("enter the address"))
})

rm.addEventListener("click", function(){
	document.execCommand("removeformat",false,null)
})

