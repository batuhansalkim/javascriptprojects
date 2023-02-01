

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel)=>{
//     panel.addEventListener("click",()=>{
//         SilKardeşim();
//         panel.classList.add("active");
//     })
// })

// function SilKardeşim(){
//     panels.forEach((panel)=>{
//         panel.classList.remove("active");
//     })
// }


const panels = document.querySelectorAll(".panel");

panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        RemoveClassList();
        panel.classList.add("active");
    })
})

function RemoveClassList(){
    panels.forEach((panel)=>{
        panel.classList.remove("active");
    })
}
























