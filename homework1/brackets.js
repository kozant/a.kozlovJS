var str;
str=prompt("Введите текст");
var basket = 0;
for(var i = 0, I = str.length; i < I; i++){
    if(str[i] == '(') {basket++};
    if(str[i] == ')') {basket--};
}
    if(basket > 0) {alert("Пропущена закрывающая скобка")};
    if(basket < 0) {alert("Пропущена открывающая скобка")};
    if(basket == 0) {alert("Пропущенные скобки отсутствуют")}