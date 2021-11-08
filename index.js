const footer_tooltip=document.querySelector("footer .tooltiptext")

//add cursor pointer to tooltiptext
footer_tooltip.classList.add("pointer")

//add click event to tooltiptext
footer_tooltip.addEventListener("click",()=>{
    window.open("http://emmafansite.com/")
})

// //make background blur when hover on main image
// document.querySelector("#image").addEventListener("mouseenter",()=>{
//     document.querySelector("#main").classList.toggle("change")
// })
// document.querySelector("#image").addEventListener("mouseleave",()=>{
//     document.querySelector("#main").classList.toggle("change")
// })
