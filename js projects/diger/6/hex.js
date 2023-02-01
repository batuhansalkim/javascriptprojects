var models = [
    {
        name : "Bmw 418d",
        image : "img/bmw.jpg",
        link : "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    },
    {
        name: "Mazda CX-3",
        image: "img/mazda.jpg",
        link: "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    }, 
    {
        name: "Volvo S60",
        image: "img/volvo.jpg",
        link: "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    }, 
    {
        name: "Skoda Superb",
        image: "img/skoda.jpg",
        link: "https://www.arabam.com/ilan/galeriden-satilik-bmw-4-serisi-418d-gran-coupe-prestige/2017-bmw-4-serisi-gran-coupe-4-18d-2-0-150hp-prestige-boyasiz/21509200"
    },

]
var index =0;
var slaytCount = models.length;

showSlide(index);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    index--;
    showSlide(index);
    
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
    index++;
    showSlide(index);
    
});

function showSlide(i){
    index = i;
    if(i<0){
        index = slaytCount -1;
    }
    if(i >= slaytCount){
        index = 0;
    }

   document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute('src',models[index].image)

    document.querySelector(".card-link").setAttribute("href",models[index].link); 
}





// var index = 2;
// var slaytCount = arabalar.length;


// showSlide(index);
// document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
//     index--;
//     showSlide(index);
//     console.log(index);
// })

// document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
//     index++;
//     showSlide(index);
//     console.log(index);
// })

// function showSlide(index){


//     if(index<0){
//         index = slaytCount -1;
//     }
//     else if(index > slaytCount){
//         index = 0;
//     }
    


//     document.querySelector(".card-title").textContent = arabalar[index].name;

//     document.querySelector(".card-img-top").setAttribute("src",arabalar[index].image);

//     document.querySelector(".card-link").setAttribute("href",arabalar[index].link);
// }



















