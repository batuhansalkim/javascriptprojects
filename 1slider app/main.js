var models = [
    {
        name: 'haryy',
        image: 'images/foto1.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name: 'kjashdjkhsjdhkas',
        image: 'images/foto2.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name: 'çsjdkllsadjklsdj',
        image: 'images/foto3.jpg',
        link: 'https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2F'
    },
    {
        name: 'asdsadasdsa',
        image: 'images/foto4.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name: 'asdsadasdsa',
        image: 'images/foto5.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
]


// var index = 0;
// var görselSayisi = models.length;

// console.log(görselSayisi);
// SlideGöster(index);

// document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
//     index--;
//     SlideGöster(index);
// });

// document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
//     index++;
   
//     SlideGöster(index);
//     console.log(index);
// });

// function SlideGöster(i){

//     index = i;
//     if(i<0){
//         index = görselSayisi-1;
//     }
//     if(i>=görselSayisi){
//         index=0;
//     }

//     document.querySelector(".card-title").textContent = models[index].name;

//     document.querySelector(".card-img-top").setAttribute("src",models[index].image);

//     document.querySelector(".card-link").setAttribute("href",models[index].link);
// }

var index = 0;
var resimSayisi = models.length;
SlideGöster(index);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    index--;
    console.log(index);
    SlideGöster(index);
})
document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
    index++;
    console.log(index);
    SlideGöster(index);
})

 function SlideGöster(i){
    index = i;

    if(i<0){
        index=resimSayisi-1;
    }
    if(i>=resimSayisi){
        index=0;
    }

    document.querySelector(".card-title").textContent=models[index].name;

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);

    document.querySelector(".card-link").setAttribute("src",models[index].link);
 }   




