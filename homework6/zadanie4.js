var calculator = document.getElementById("calculator")
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button0 = document.getElementById("button0");
var buttonPlus = document.getElementById("button+");
var buttonMinus = document.getElementById("button-");
var buttonUmn = document.getElementById("button*");
var buttonDel = document.getElementById("button/");
var buttonEqual = document.getElementById("button=");
var ans = document.getElementById("ans");
button1.addEventListener("click", function(){
	calculator.ans.value+='1'
})
button2.addEventListener("click", function(){
	calculator.ans.value+='2'
})
button3.addEventListener("click", function(){
	calculator.ans.value+='3'
})
button4.addEventListener("click", function(){
	calculator.ans.value+='4'
})
button5.addEventListener("click", function(){
	calculator.ans.value+='5'
})
button6.addEventListener("click", function(){
	calculator.ans.value+='6'
})
button7.addEventListener("click", function(){
	calculator.ans.value+='7'
})
button8.addEventListener("click", function(){
	calculator.ans.value+='8'
})
button9.addEventListener("click", function(){
	calculator.ans.value+='9'
})
button0.addEventListener("click", function(){
	calculator.ans.value+='0'
})
buttonPlus.addEventListener("click", function(){
	calculator.ans.value+='+'
})
buttonMinus.addEventListener("click", function(){
	calculator.ans.value+='-'
})
buttonUmn.addEventListener("click", function(){
	calculator.ans.value+='*'
})
buttonDel.addEventListener("click", function(){
	calculator.ans.value+='/'
})
buttonEqual.addEventListener("click", function(){
	calculator.ans.value=eval(calculator.ans.value)
})


