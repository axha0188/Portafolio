/*efecto de la barra de navegacion*/
let up = window.pageYOffset;
window.onscroll = function () {
    let desp = window.pageYOffset
    if (up > 0) {
        document.querySelector('.nav').style.background = "black"
    }
    else{
        document.querySelector('.nav').style.background = "#141414"
    }
    //up=desp;
}