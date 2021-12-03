const footer_tooltip=document.querySelector("footer .tooltiptext")

//add cursor pointer to tooltiptext
footer_tooltip.classList.add("pointer")

//add click event to tooltiptext
footer_tooltip.addEventListener("click",()=>{
    // window.open("http://emmafansite.com/")
    window.open("https://en.wikipedia.org/wiki/Emma_Raducanu")
})

//prevent right-click/longpress on Safari
document.querySelector("#image").addEventListener("contextmenu",e=>{
    e.preventDefault()
})
