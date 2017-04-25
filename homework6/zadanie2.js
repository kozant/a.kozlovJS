var shifr = document.getElementById("shifr");
var deshifr = document.getElementById("deshifr");
var buttonSh = document.getElementById("buttonSh");
var buttonDeSh = document.getElementById("buttonDeSh");
buttonSh.addEventListener("click", function(){
    var text1 = "";
    var value = shifr.value;
    
    for (var i = 0; i < value.length; i++){
        var code = value.charCodeAt(i);
        text1+= String.fromCharCode(code)/5;
   }
    	deshifr.value = value;
});
buttonDeSh.addEventListener("click", function(){
    var text2 = "";
    var value = deshifr.value;
    
    for (var i = 0; i < value.length; i++){
        var code = value.charCodeAt(i);
        text2+= String.fromCharCode(code)*5;
   }
    	shifr.value = text2;
})