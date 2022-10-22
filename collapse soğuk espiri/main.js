const jokes = document.querySelectorAll(".joke");


jokes.forEach(joke => {
    joke.addEventListener("click",()=>{
        joke.classList.toggle("active");
    })
});




