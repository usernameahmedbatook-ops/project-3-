// let scrollToTop = document.querySelector(".scroll-to-top")
// scrollToTop.addEventListener("click" , function (){
//     window.scrollTo(0, 0)
// })


// window.addEventListener("scroll", function(){
//     console.log(window.scrollY);
// if (window.scrollY >= 200){
// scrollToTop.classList.add("show")
// } else {
//     scrollToTop.classList.remove("show")
// }
// })
let scrollToTop = document.querySelector(".scroll-to-top")
scrollToTop.addEventListener("click ", function () {
    window.scrollTo(0, 0)
})

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY >= 150) {
        scrollToTop.classList.add(show)
    } else {
        scrollToTop.classList.remove("show")
    }
})