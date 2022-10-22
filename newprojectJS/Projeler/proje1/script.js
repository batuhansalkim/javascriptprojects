const body = document.querySelector("body");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const colors = ["black", "green", "yellow", "#c409e5", "#07a9b5", "#e28f09", "#9cad06", "#1ece00", "#002f35", "#440042", "#10008e","#a400ea"];


button.addEventListener("click",changeBackground);

function changeBackground(){
    const rastgelesayi = Math.floor(Math.random() * colors.length);
    console.log(rastgelesayi);
    const secilenRenk = colors[rastgelesayi];
    body.style.backgroundColor=secilenRenk;
}

button2.addEventListener("click",sıraylaDegistir);

let sıra = 0;

function sıraylaDegistir(){
    if(sıra==12) sıra = 0;
    const secilenRenk2  = colors[sıra]; 
    sıra++;
    body.style.backgroundColor = secilenRenk2;
}




