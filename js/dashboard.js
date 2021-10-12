//BARRA MENU -IZQUIERDA

const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.menu-links');

    menu.addEventListener('click', () => {
        //togle anave menu
        nav.classList.toggle('nav-active');
    });


}
navSlide();
//

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {

    let dezplazamientoActual = window.pageYOffset;
    if (dezplazamientoActual <= 50) {
        this.document.getElementsByTagName("nav")[0].style.background = "radial-gradient(circle, #80255488, transparent, #16181F, #80255488)";
    } else {
        if (ubicacionPrincipal >= dezplazamientoActual) {
            document.getElementsByTagName("nav")[0].style.top = "0px";
            document.getElementsByTagName("ul")[0].style.opacity = "1";
            this.document.getElementsByTagName("nav")[0].style.background = "#802554";
            this.document.getElementsByTagName("nav")[0].style.boxShadow = "0 0 7px 0  rgba(29, 29, 29, 0.87)";
        } else {
            document.getElementsByTagName("nav")[0].style.top = "0px";
            document.getElementsByTagName("ul")[0].style.opacity = "0";
            let color = this.document.getElementsByTagName("nav")[0].style.background = "#13151d";
            //console.log("ga: " + color)
            this.document.getElementsByTagName("nav")[0].style.transition = color.toString + ".3s ease-in";
            this.document.getElementsByTagName("nav")[0].style.boxShadow = "0 0 7px 0  rgba(29, 29, 29, 0.87)";
        }
    }

    ubicacionPrincipal = dezplazamientoActual;
    //console.log("Desplazamiento actual:" + dezplazamientoActual);
});

function logout() {
    history.pushState(null, null, 'no-back-button');
    window.addEventListener('popstate', function(event) {
        history.pushState(null, null, 'no-back-button');
    });
    window.location.href = "iniciar_sesion.html";
}