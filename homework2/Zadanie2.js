var now = new Date(), hour=now.getHours(), smin=now.getMinutes(), ssec=now.getSeconds();
var min=1440-(hour*60+smin);
var sec=60-ssec;
alert("До конца сегодняшнего дня осталось " + min + " минут " + sec + " секунд");