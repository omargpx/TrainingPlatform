//barra menuslider movible
const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        //togle nave menu
        nav.classList.toggle('nav-active');
        //probando animaciones a partir de esta linea
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
                document.getElementsByTagName("ul")[0].style.opacity = "1";
            } else {
                link.style.animation = `navLinkFade 0.3s ease-in forwards ${index/7 + 0.2}s`;
                document.getElementsByTagName("ul")[0].style.opacity = "1";
            }

        });
    });


}

navSlide();
//end action

//barra animation
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {

    let dezplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= dezplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
        document.getElementsByTagName("ul")[0].style.opacity = "1";

    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
        document.getElementsByTagName("ul")[0].style.opacity = "0";
    }
    ubicacionPrincipal = dezplazamientoActual;
});

//ACCIONES DE BOTONES INDEX -> iniciar sesion y registrar
function iniciar_sesion() {
    window.location.href = "iniciar_sesion.html";
}