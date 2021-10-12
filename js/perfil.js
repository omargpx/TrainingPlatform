function editar() {
    let obtenerName = sessionStorage.getItem('nameUsu');
    let usuariostorage = JSON.parse(localStorage.getItem("usuarios"));
    let buscarUsus = usuariostorage.find(apellidos => apellidos.nombre == obtenerName);
    //pasando datos a los campos de texto
    let contenedor = document.getElementById('acatualizar-usu');
    contenedor.innerHTML = ``;
    contenedor.innerHTML = `<form class="config-usu" id="formTask">
            <input type="text" id="NombreCurso" value="${buscarUsus.nombre}" style="margin-bottom: 1%;" class="form-control">
            <input type="text" id="NombreDocente" value="${buscarUsus.apellidos}" style="margin-bottom: 1%;" class="form-control">
            <input type="text" value="${buscarUsus.direccion}" id="urlImg" class="form-control" style="margin-bottom: 1%;">
            <input type="text" value="${buscarUsus.correo}" id="urlvideo" class="form-control" style="margin-bottom: 1%;">
            <input type="password" value="${buscarUsus.password}" id="urlvideo" class="form-control" style="margin-bottom: 1%;">
            <div class="descrip-usu">
                <h5>Agregar biografia:</h5>
                <textarea id="DescripcionCurso" cols="30" rows="10" class="form-control" value="Biografia del usuario"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block" onclick="updateUsu(${buscarUsus.correo})">Guardar</button>
        </form>`;
}

function dashboard() {
    window.location.href = "dashboard.html";
}


function anuncios() {
    window.location.href = "";
}

function certificados() {
    window.location.href = "";
}


function cursos() {
    window.location.href = "portafolio.html";
}

function historial() {
    window.location.href = "";
}

function updateUsu(correo) {
    console.log(correo);
}

function perfil() {
    window.location.href = "perfil-usuario.html";
}