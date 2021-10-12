//llamo a la variable de session
let data = sessionStorage.getItem("nameUsu");

let usuario2 = document.getElementById("name-usu");

usuario2.textContent = "Bienvenido " + data;

document.getElementById('formTask').addEventListener('submit', saveTask); // ejecutando el metodo
document.getElementById('notify-new').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('notify-new').style.display = "none";
});

function saveTask(e) { //accion de crear curso

    e.preventDefault();

    let NombreCurso = document.getElementById('NombreCurso').value;
    let NombreDocente = document.getElementById('NombreDocente').value;
    let portada = document.getElementById('urlImg').value;
    let url = document.getElementById('urlvideo').value;
    let DescripcionCurso = document.getElementById('DescripcionCurso').value;
    console.log(url);

    let clases = [];
    // guardando en un objeto
    let task = {
        NombreCurso,
        NombreDocente,
        DescripcionCurso,
        portada,
        url,
        clases
    };

    if (localStorage.getItem('tasks') === null) { // API
        let tasks = [];
        tasks.push(task); //stringify paso un objeto a un objeto seteable string
        localStorage.setItem('tasks', JSON.stringify(tasks)); // primero nombre del  guardado  y luego  lo  q vas a guardar, se recomienda guardarlo  a string
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks')); //recibo el string y lo paso  a objeto
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('notify-new').style.display = "grid";
        document.getElementsByClassName('newCurso-notify')[0].style.animation = `notify .3s ease-out`;
        let audio = document.getElementById('audio-succes').innerHTML = `<audio src="voces/curso-creado.mp3" autoplay style="position: absolute; top: 15%; left: 44%;">
        </audio>`;
    }

    getTasks(); //  cada vez que guardo llamo a abtener tareas
    document.getElementById('formTask').reset();

}

function deleteTask(title) {

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].NombreCurso == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')); // obteniendo las cursos del localstorage
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = ``;
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].NombreCurso;
        let NombreDocente = tasks[i].NombreDocente;
        let DescripcionCurso = tasks[i].DescripcionCurso;
        let portada = tasks[i].portada;
        let url = tasks[i].url;


        tasksView.innerHTML += `<tr>
                           <td>${title}</td>
                           <td>${NombreDocente}</td>
                           <td>${DescripcionCurso}</td>
                           <td>${portada}</td>
                           <td>${url}</td>
                           
                           <td>
                               <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Eliminar</a>
                               <a href="#collapseExample" data-toggle="collapse" aria-controls="collapseExample" onclick="editar('${title}')" class="btn btn-primary ml-5" style="margin:5px;">Actualizar</a>
                           </td>
                           </tr>`;
    }
}

getTasks();

function editar(titulo) {
    console.log(titulo);

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let index = 0; index < tasks.length; index++) {

        if (tasks[index].NombreCurso == titulo) {

            document.getElementById("TablaActualizar").innerHTML = `
                <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            <form id="formTaskActualizar">
                                <div class="form-group">
                                      <input type="text" id="NombreCurso" value="${tasks[index].NombreCurso}" class="form-control">
                               </div>
                               <div class="form-group">
                                       <input type="text" id="NombreDocente" value="${tasks[index].NombreDocente}" class="form-control">
                               </div>
                               <div>
                                        <input type="url" value="${tasks[index].portada}" id="urlImg" class="form-control" style="margin-bottom: 1%;" required>
                                </div>
                               <div>
                                        <input type="url" value="${tasks[index].url}" id="urlvideo" class="form-control" style="margin-bottom: 1%;" required>
                                </div>
                               <div class="form-group">
                                      <textarea id="DescripcionCurso" cols="30" rows="5" class="form-control" maxlength="210" >${tasks[index].DescripcionCurso}</textarea>
                             </div>
                                      <button type="submit" class="btn bg-primary btn-block" onclick="actualizar('${index}')">Actualizar</button>
                                      <button class="btn btn-primary btn-block" onclick="cancelar()" >cancelar</button>
                             </form>
                        </div>
                 </div> `;
        }
    }

}

function actualizar(i) {
    console.log(i);

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks[i].NombreCurso = document.getElementById("NombreCurso").value;
    tasks[i].NombreDocente = document.getElementById("NombreDocente").value;
    tasks[i].portada = document.getElementById("urlImg").value;
    tasks[i].url = document.getElementById("urlvideo").value;
    tasks[i].DescripcionCurso = document.getElementById("DescripcionCurso").value;

    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('notify-new').style.display = "grid";
    document.getElementsByClassName('newCurso-notify')[0].style.animation = `notify .3s ease-out`;
    let audioAct = document.getElementById('audio-succes');
    audioAct.innerHTML = ``;
    audioAct.innerHTML = `<audio src="voces/curso-actualizado.mp3" autoplay style="display:none;">
    </audio>`;
    getTasks();
    let tasksView = document.getElementById('TablaActualizar');
    tasksView.innerHTML = '';

}

function cancelar() {
    let tasksView = document.getElementById('TablaActualizar');
    tasksView.innerHTML = '';
}