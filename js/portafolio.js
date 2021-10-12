let formCurse = document.getElementById('form-register-curse');
formCurse.addEventListener('submit', seguimiento);

function seguimiento(e) {
    e.preventDefault();
    let nombreUsu = document.getElementById('txtNombre').value;
    let apellidoUsu = document.getElementById('txtApellidos').value;
    let correoUsu = document.getElementById('txtCorreo').value;
    let curso = document.getElementById('cbxcursos').value;
    console.log(correoUsu);
    let seguimiento = {
        nombreUsu,
        apellidoUsu,
        correoUsu,
        curso
    }
    if (localStorage.getItem('seguimiento') === null) {
        let seguimientos = [];
        seguimientos.push(seguimiento);
        localStorage.setItem('seguimiento', JSON.stringify(seguimientos));
    } else {
        let seguimientos = JSON.parse(localStorage.getItem('seguimiento')); //recibo el string y lo paso  a objeto
        seguimientos.push(seguimiento);
        localStorage.setItem('seguimiento', JSON.stringify(seguimientos));
        document.getElementById('audio-suces').innerHTML = `<audio id="audio-suces" src="voces/registrado-exito" autoplay style="position: absolute; top: 15%; left: 44%;">
        </audio>`;
        document.getElementById('form-register-curse').reset();
        window.location.href = "clases.html";
    }

}