var models = [
    {
        name: 'resim 1',
        image: 'images/foto1.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name: 'resim 2',
        image: 'images/foto2.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name: 'resim 3',
        image: 'images/foto3.jpg',
        link: 'https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2F'
    },
    {
        name: 'resim 4',
        image: 'images/foto4.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
        name: 'resim 5',
        image: 'images/foto5.jpg',
        link: 'https://www.google.com/search?q=goole&oq=goole&aqs=chrome..69i57j46i10i131i199i433i465j0i10i131i433l3j0i10i433j0i10i131i433l3j69i59.5297j0j7&sourceid=chrome&ie=UTF-8'
    },
]
var slaytCount = models.length;
var index = 0;
showSlide(index);
document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
    index++;
   showSlide(index);
   
    console.log(index);
});


document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    index--;
    showSlide(index);
    console.log(index);
});

function showSlide(i){

    index = i;

    if(i<0){
        index = models.length -1 ;
    }

    if (i >= models.length) {
        index = 0
    }

    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);

    document.querySelector(".card-link").setAttribute("href",models[index].link);
}

    





// var index = 0;
// var resimSayisi = models.length;
// SlideGöster(index);

// document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
//     index--;
//     console.log(index);
//     SlideGöster(index);
// })
// document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
//     index++;
//     console.log(index);
//     SlideGöster(index);
// })

//  function SlideGöster(i){
//     index = i;

//     if(i<0){
//         index=resimSayisi-1;
//     }
//     if(i>=resimSayisi){
//         index=0;
//     }

//     document.querySelector(".card-title").textContent=models[index].name;

//     document.querySelector(".card-img-top").setAttribute("src",models[index].image);

//     document.querySelector(".card-link").setAttribute("src",models[index].link);
//  }   




