


 function updateClock() {

const today=new Date();
const h=today.getHours();
const m=today.getMinutes();
const s=today.getSeconds();

const msg = document.getElementById("clock");
msg.innerText= `${h }: ${m } : ${s}`;



}

setInterval(updateClock, 1000);



// 
