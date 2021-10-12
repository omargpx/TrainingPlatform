document.getElementById('formClase').addEventListener('submit', guardarCurso);
document.getElementById('notify-new').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('notify-new').style.display = "none";
});

function guardarCurso(e) { //accion de crear curso

    e.preventDefault();

    let Titlecurso = document.getElementById('cbx-cursos').value;
    let temaClase = document.getElementById('Tema').value;
    let urlContent = document.getElementById('url-content').value;
    let descripcion = document.getElementById('descripcionClase').value;
    console.log("titulo del curso: " + Titlecurso)

    // guardando en un objeto
    let clase = {
        Titlecurso,
        temaClase,
        urlContent,
        descripcion
    };

    if (localStorage.getItem('tasks') === null) { // API
        console.log("el elemento array padre no existe") //
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        let buscarCurso = tasks.find(curso => curso.NombreCurso == Titlecurso);
        //  console.log(clase);

        buscarCurso.clases.push(clase);
        console.log(buscarCurso);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('notify-new').style.display = "grid";
        document.getElementsByClassName('newCurso-notify')[0].style.animation = `notify .3s ease-out`;
        let audio = document.getElementById('audio-succes').innerHTML = `<audio src="voces/clase-creada" autoplay style="position: absolute; top: 15%; left: 44%;">
        </audio>`;
    }

    // getTasks(); //  cada vez que guardo llamo a abtener tareas
    document.getElementById('formClase').reset();

}