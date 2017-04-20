var table=[];
for(var i = 1; i < 44; i++){
	table[i] = [];
	for(var j = 1; j < 44; j++){
		table[i][j]=document.getElementById("x"+i+"y"+j);
	}
}
var doc = document.getElementById("doc");
var x = 22, y = 42, f;
setInterval(function(){
	table[8][19].setAttribute("class","allo");
	table[42][14].setAttribute("class","allo");
	table[29][34].setAttribute("class","allo");
	table[26][20].setAttribute("class","allo");
	table[13][34].setAttribute("class","allo");
	table[33][2].setAttribute("class","allo");
	table[38][7].setAttribute("class","allo");
	table[32][4].setAttribute("class","allo");
	table[27][12].setAttribute("class","allo");
	table[30][12].setAttribute("class","allo");
	table[4][2].setAttribute("class","allo");
	table[20][24].setAttribute("class","allo");
	table[42][24].setAttribute("class","allo");
	table[25][28].setAttribute("class","allo");
	table[36][31].setAttribute("class","allo");
	table[6][22].setAttribute("class","allo");
	table[38][19].setAttribute("class","allo");
	table[15][40].setAttribute("class","allo");
},1000)
setTimeout(setInterval(function(){
	table[8][19].setAttribute("class","red");
	table[42][14].setAttribute("class","red");
	table[29][34].setAttribute("class","red");
	table[26][20].setAttribute("class","red");
	table[13][34].setAttribute("class","red");
	table[33][2].setAttribute("class","red");
	table[38][7].setAttribute("class","red");
	table[32][4].setAttribute("class","red");
	table[27][12].setAttribute("class","red");
	table[30][12].setAttribute("class","red");
	table[4][2].setAttribute("class","red");
	table[20][24].setAttribute("class","red");
	table[42][24].setAttribute("class","red");
	table[25][28].setAttribute("class","red");
	table[36][31].setAttribute("class","red");
	table[6][22].setAttribute("class","red");
	table[38][19].setAttribute("class","red");
	table[15][40].setAttribute("class","red");
},2000),2000)
doc.addEventListener("keypress",f=function(e){
	if (e.which == 119) {
		if (table[x][y-1].getAttribute("id")=="x22y22") {
			alert("You are winner!!!");
			doc.removeEventListener("keypress",f);
		}
		if (table[x][y-1].classList.contains("allo")) {
			table[x][y-1].classList.remove("allo");
			table[x][y-1].classList.add("green");
			table[x][y].classList.remove("green");
			table[x][y].classList.add("allo");
			y--;
		}
		if (table[x][y-1].classList.contains("red")) {
			alert("You lose (((");
			doc.removeEventListener("keypress",f);
		}
	}
	if (e.which == 97) {
		if (table[x-1][y].classList.contains("allo")) {
			table[x-1][y].classList.remove("allo");
			table[x-1][y].classList.add("green");
			table[x][y].classList.remove("green");
			table[x][y].classList.add("allo");
			x--;
		}
		if (table[x-1][y].classList.contains("red")) {
			alert("You lose(((");
			doc.removeEventListener("keypress",f);
		}
	}
	if (e.which == 115) {
		if (table[x][y+1].classList.contains("allo")) {
			table[x][y+1].classList.remove("allo");
			table[x][y+1].classList.add("green");
			table[x][y].classList.remove("green");
			table[x][y].classList.add("allo");
			y++;
		}
		if (table[x][y+1].classList.contains("red")) {
			alert("You lose (((");
			doc.removeEventListener("keypress",f);
		}
	}
	if (e.which == 100) {
		if (table[x+1][y].classList.contains("allo")) {
			table[x+1][y].classList.remove("allo");
			table[x+1][y].classList.add("green");
			table[x][y].classList.remove("green");
			table[x][y].classList.add("allo");
			x++;
		}
		if (table[x+1][y].classList.contains("red")) {
			alert("You lose (((");
			doc.removeEventListener("keypress",f);
		}
	}
})
