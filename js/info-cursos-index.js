function iniciarsesion() {
    window.location.href = "iniciar_sesion.html"
}

const cursos = document.querySelector('#cursos');


(() => {
    cursos.addEventListener('click', delegacion);
})();

let curso = {
    titulo: "CURSO",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae natus sint nesciunt, eaque nemo ipsam dignissimos possimus atque. Ut similique obcaecati explicabo reiciendis, asperiores dicta atque assumenda nesciunt quas.",
    imagen: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    url: "https://www.youtube.com/embed/1QLJryN9wYE"
};

function delegacion(e) {
    e.preventDefault();
    // console.log(e.target.classList[0]);
    let cursoName = e.target.classList[0];
    switch (cursoName) {
        case ('programacion'):
            curso.titulo = "Lenguajes de Programación";
            curso.url = "https://www.youtube.com/embed/pWw4UtQhdek";
            curso.imagen = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
            curso.descripcion = "Un lenguaje de programación es un lenguaje informático especialmente diseñado para describir el conjunto de acciones consecutivas o instrucciones que un equipo informático debe ejecutar. Por ejemplo: PHP, Java, C++, Python. ... Esto significa que debe comprender y manejar muy bien esos lenguajes.";
            localStorage.setItem("curso", JSON.stringify(curso));
            window.location.href = "video-presentacion.html";
            break;
        case ('cocina'):
            curso.titulo = "Nutrición y Cocina";
            curso.url = "https://www.youtube.com/embed/izN242KZYIA";
            curso.imagen = "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80";
            curso.descripcion = "La importancia de la nutrición hace referencia al proceso que realiza el cuerpo para asimilar los nutrientes que obtiene de los alimentos. Esto se logra a través de la digestión, en donde se absorben los nutrientes en la sangre del tubo digestivo y se asimilan por las células del organismo.";
            localStorage.setItem("curso", JSON.stringify(curso));
            window.location.href = "video-presentacion.html";
            break;
        case ('fotografia'):
            curso.titulo = "Fotografía";
            curso.url = "https://www.youtube.com/embed/4SkVSqMDuC0";
            curso.imagen = "https://images.unsplash.com/photo-1498050842100-717f08672ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80";
            curso.descripcion = "La magia de la fotografía es el poder que tiene de conservar en un pequeño rectángulo de dos dimensiones, la grandeza de la vida, lo hermoso que hay en un momento cotidiano; para quienes lo hemos experimentado sabemos que al asomarnos atreves de la mirilla, podemos encuadrar diferentes escenas de lo que acontece frente.";
            localStorage.setItem("curso", JSON.stringify(curso));
            window.location.href = "video-presentacion.html";
            break;
        case ('diseno'):
            curso.titulo = "Diseño Grafico";
            curso.url = "https://www.youtube.com/embed/X8dOJjjRhrs";
            curso.imagen = "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
            curso.descripcion = "La fotografía aplicada en el diseño gráfico, es la composición que se realiza con la ayuda de elementos digitales para componer un escenario y se transmita un mensaje, incluso poder mejorarlas mediante los programas de edición como Photoshop o Illustrator.";
            localStorage.setItem("curso", JSON.stringify(curso));
            window.location.href = "video-presentacion.html";
            break;
        case ('musica'):
            curso.titulo = "Música";
            curso.url = "https://www.youtube.com/embed/GLkdufPE09c";
            curso.imagen = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
            curso.descripcion = "Se estima que la música cuenta con gran importancia para el ser humano ya que le permite expresar miedos, alegrías, sentimientos muy profundos de diverso tipo. La música permite canalizar esos sentimientos y hacer que la persona aliviane sus penas o haga crecer su alegría dependiendo del caso.";
            localStorage.setItem("curso", JSON.stringify(curso));
            window.location.href = "video-presentacion.html";
            break;
        case ('marketing'):
            curso.titulo = "Marketing y Negocios";
            curso.url = "https://www.youtube.com/embed/SWUC9VALrnA";
            curso.imagen = "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80";
            curso.descripcion = "El marketing es el responsable de generar rentabilidad a la empresa desde el punto de vista empresarial. También es el responsable de generar momentos positivos de compra y la prescripción del bine, servicio, marca o empresa. Su impacto y alcance es indiscutido y su adecuada gestión permite vislumbrar y garantizar un futuro solido a cualquier compañía.";
            localStorage.setItem("curso", JSON.stringify(curso));
            window.location.href = "video-presentacion.html";
            break;
    }
}