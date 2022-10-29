window.onload = function () {
    let navBar = document.querySelector(".navBar")
    document.querySelector(".nav-btn.def").addEventListener( "click" , () => {
        navBar.classList.toggle("active-nav")
        document.body.setAttribute("style" , "overflow: hidden;")
    })
    document.querySelector(".header .nav-button").addEventListener("click" , ()=> {
        navBar.classList.toggle("active-nav")
        document.body.setAttribute("style" , "overflow: auto;")
    })
}