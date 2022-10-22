const container = document.querySelector(".container") ;
const count = document.getElementById("count") ;
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)")


container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
    }
})


container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");

        calculateTotal();

    }
});

select.addEventListener("change",function(e){
    calculateTotal();
})

function calculateTotal(){
    const selectedSeats = container.querySelectorAll(".seat.selected");

    console.log(seats);
    console.log(selectedSeats);

    let selectedSeatCount = selectedSeats.length; 
    count.innerText=selectedSeatCount;
    amount.innerText= selectedSeatCount * select.value;;
}








