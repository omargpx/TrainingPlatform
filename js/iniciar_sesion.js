const login = document.getElementById("login");
const formregis = document.getElementById("registrarse");
let admin = "F";

let usuarios = [{
        nombre: "Pancrasio",
        apellidos: "Ramires Mantallana",
        direccion: "av. los martires 345",
        nacionalidad: "PE",
        correo: "pancasramires@gmail.com",
        password: "123456",
        correoVerificacion: "menemelope@gmail.com",
        admin: "T"
    },
    {
        nombre: "Mario",
        apellidos: "Vargas",
        direccion: "av. viilalnueva 345",
        nacionalidad: "AR",
        correo: "mariolucho@gmail.com",
        password: "123456",
        correoVerificacion: "pepemartines@gmail.com",
        admin: "F"
    }
]

localStorage.setItem("usuarios", JSON.stringify(usuarios));

login.addEventListener('submit', function(event) { // iniciar sesion
    event.preventDefault();
    let user = document.getElementById('txtuser').value;
    let claves = document.getElementById("pswduser").value;
    let usuariostorage = JSON.parse(localStorage.getItem("usuarios"));

    let buscarUsus = usuariostorage.find(correo => correo.correo == user);
    console.log(buscarUsus);

    if (buscarUsus == null) {
        swal("Correo invalido", "error", "error");
    } else if (buscarUsus.admin == "T") {
        console.log("entrando con usuario administrativo");
        if (claves != buscarUsus.password) {
            swal("Clave incorrecta", "usuario : " + buscarUsus.nombre, "warning");
        } else {
            //  swal("Bienvenido " + buscarUsus.nombre, "a  ADRA", "success");
            let name = buscarUsus.nombre;
            let data = sessionStorage.setItem("nameUsu", name);
            console.log(data);
            window.location.href = "dashboard-adm.html";
        }
    } else {
        console.log("entrando con usuario corriente");
        if (claves != buscarUsus.password) {
            swal("Clave incorrecta", "usuario : " + buscarUsus.nombre, "warning");
        } else {
            //swal("Bienvenido " + buscarUsus.nombre, "a  ADRA", "success");
            let name = buscarUsus.nombre;
            let data = sessionStorage.setItem("nameUsu", name);
            console.log(data);
            window.location.href = "dashboard.html";

        }

    }

});

formregis.addEventListener('submit', function(event) { //registrando nuevos usuarios
    event.preventDefault();
    //obteniendo datos de registro
    let nombre = document.getElementById('txtnombre').value;
    let apellidos = document.getElementById('txtApellidos').value;
    let direccion = document.getElementById('txtDireccion').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let usuario = document.getElementById('txtcorreo').value;
    let contrasena = document.getElementById('pswdContrasena').value;
    let correoVerificacion = document.getElementById('correoVerificacion').value;
    //validando que el correo de verificacion sea correcto
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let validar = expReg.test(correoVerificacion);

    //obteniendo usuarios del local storage
    let localUsus = JSON.parse(localStorage.getItem("usuarios"));

    if (validar == true) {
        if (localUsus == null) {
            swal("no se encontraron usuarios", "local usuarios", "warning");
        } else {
            let nuevoUSU = localUsus.push({
                nombre: nombre,
                apellidos: apellidos,
                direccion: direccion,
                nacionalidad: nacionalidad,
                correo: usuario,
                password: contrasena,
                correoVerificacion: correoVerificacion,
                admin: admin
            });
            localStorage.setItem("usuarios", JSON.stringify(localUsus));
            console.log(localUsus); //comprobando de que se hayan guardado los datos
            swal("Registrado con Exito", "Bienvenido " + nombre, "success");

        }
    } else {
        swal("ingrese correo valido!", "Correo de verificacion NO valido!", "warning");
    }


});

function solicitarAdm() {
    let solicitud = document.getElementById('count-admi-soli'); //etiqueta html
    console.log(solicitud.innerHTML);
    if (solicitud.innerHTML == "solicitar cuenta administrativa") {
        swal({
                title: "Estás seguro?",
                text: "Al registrar una cuenta de capacitaciones deberas aceptar nuestros terminos y condiciones.",
                icon: "warning",
                background: 'black',
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Se te enviara un codigo a la comunidad de discord para acceder a crear cursos", {
                        icon: "success",
                    });
                    admin = "T";
                    solicitud.innerHTML = "Registrandote como Capacitador"
                } else {
                    admin = "F";
                    solicitud.innerHTML = "solicitar cuenta administrativa";
                }
            });
    } else if (solicitud.innerHTML == "Registrandote como Capacitador") {
        swal({
                title: "Estas Seguro?",
                text: "Estas solicitando cancelar tu solicitud de cuenta administrativa",
                icon: "warning",
                background: 'black',
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Registrandote como usuario learning", {
                        icon: "success",
                    });
                    admin = "F";
                    solicitud.innerHTML = "solicitar cuenta administrativa";
                } else {
                    solicitud.innerHTML = "Registrandote como Capacitador";
                }
            });
    }


}

function registro() {
    document.getElementById("waves").style.transform = "translateX(-100%)";
    document.getElementById("imgs").style.opacity = "0";
    document.getElementById("form-sign-up").style.display = "none";
    document.getElementById("registros").style.display = "block";
    document.getElementById("logo-ad").style.transform = "translateX(-45vw)";

}

function iniciar_Sesion() {
    let wave = document.getElementById("waves").style.transform = "translateX(0%)";
    document.getElementById('waves').style.transition = wave + ".3s ease-out";
    document.getElementById("imgs").style.opacity = "1";
    document.getElementById("form-sign-up").style.display = "grid";
    document.getElementById("registros").style.display = "none";
    document.getElementById("logo-ad").style.transform = "translateX(0)";
}