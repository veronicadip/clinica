// --- FUNCION CERRAR SESION ---
const cerrarSesionClick = function () {
  localStorage.setItem("usuarioLoggeado", null);
};
// --- AGREGAR ADMIN A BASE DE DATOS ---
if (!localStorage.getItem("datos")) {
  localStorage.setItem("datos", JSON.stringify({}));
}

if (!JSON.parse(localStorage.datos)["derek@example.com"]) {
  let datos = JSON.parse(localStorage.getItem("datos"));
  datos["derek@example.com"] = {
    nombreadmin: "Derek Shepherd",
    email: "derek@example.com",
    idMedico: "ej123",
    contrasena: "mock123",
    telefono: "+54 9 381 222-2222",
    especialidad: "Cardiologia",
    imagenAvatar: "imagenVaron.jpg",
    recibeOS: "si",
  };
  localStorage.setItem("datos", JSON.stringify(datos));
}

// --- INICIAR SESION ---
// GET ELEMENT
const formModal = document.getElementById("formModal");
const alertModal = document.getElementById("alertModal");
let emailIngresado;
let contrasenaIngresada;

formModal.addEventListener("submit", (e) => {
  e.preventDefault();
  emailIngresado = e.currentTarget[0].value;
  contrasenaIngresada = e.currentTarget[1].value;
  if (emailIngresado in JSON.parse(localStorage.datos)) {
    if (
      contrasenaIngresada ===
      JSON.parse(localStorage.getItem("datos"))[emailIngresado].contrasena
    ) {
      localStorage.setItem("usuarioLoggeado", emailIngresado);
      formModal.submit();
    } else {
      alertModal.innerHTML += `<div class="alert alert-danger" role="alert">
      Contraseña incorrecta.
    </div>`;
    }
  } else {
    alertModal.innerHTML += `<div class="alert alert-danger" role="alert">
   El usuario ingresado no existe.
  </div>`;
  }
});

// --- NAVBAR DINAMICO ---
// GET ELEMENT
const botonIniciarSesion = document.getElementById("botonIniciarSesion");
const spanIniciarSesion = document.getElementById("spanIniciarSesion");
const botonRegistro = document.getElementById("botonRegistro");
const botonContacto = document.getElementById("botonContacto");
const aContacto = document.getElementById("aContacto");
const cerrarSesion = document.getElementById("cerrarSesion");
const displayAvatar = document.getElementById("displayAvatar");
let datosUsuarioLoggeado;
if (localStorage.usuarioLoggeado) {
  datosUsuarioLoggeado = JSON.parse(localStorage.getItem("datos"))[
    localStorage.usuarioLoggeado
  ];
}

document.addEventListener("DOMContentLoaded", () => {
  // SETEAR USUARIO NO LOGGEADO
  if (!localStorage.usuarioLoggeado) {
    return;
    // SETEAR MEDICO
  } else if (datosUsuarioLoggeado.nombremedico !== undefined) {
    spanIniciarSesion.remove();
    botonRegistro.remove();
    displayAvatar.classList.add("d-flex");
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="/pages/medico.html" id="aTurnosMedico">Mis Turnos</a>`;
    if (datosUsuarioLoggeado.imagenAvatar === "imagenMujer.jpg") {
      displayAvatar.innerHTML += `<img src="/assets/img/doc1.jpg" alt="Foto de perfil de la doctora ${datosUsuarioLoggeado.nombremedico}" 
      class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${datosUsuarioLoggeado.nombremedico}</p>`;
    } else if (datosUsuarioLoggeado.imagenAvatar === "imagenVaron.jpg") {
      displayAvatar.innerHTML += `<img src="/assets/img/doc$.jpg" alt="Foto de perfil del doctor ${datosUsuarioLoggeado.nombremedico}" 
        class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${datosUsuarioLoggeado.nombremedico}</p>`;
    }
    // SETEAR PACIENTE
  } else if (datosUsuarioLoggeado.nombrepaciente !== undefined) {
    spanIniciarSesion.remove();
    botonRegistro.remove();
    displayAvatar.classList.add("d-flex");
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="/pages/paciente.html" id="aTurnosPaciente">Mis Turnos</a>`;
    if (datosUsuarioLoggeado.imagenAvatar === "imagenMujer.jpg") {
      displayAvatar.innerHTML += `<img src="/assets/img/pacienteMujer.jpg" alt="Foto de perfil de la paciente 
      ${datosUsuarioLoggeado.nombre}" class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">
      ${datosUsuarioLoggeado.nombre}</p>`;
    } else if (datosUsuarioLoggeado.imagenAvatar === "imagenVaron.jpg") {
      displayAvatar.innerHTML += `<img src="/assets/img/pacienteHombre.jpg" alt="Foto de perfil del paciente 
        ${datosUsuarioLoggeado.nombre}" class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">
        ${datosUsuarioLoggeado.nombre}</p>`;
    }
    // SETEAR ADMIN
  } else if (datosUsuarioLoggeado.nombreadmin !== undefined) {
    spanIniciarSesion.remove();
    botonRegistro.remove();
    aContacto.remove();
    displayAvatar.classList.add("d-flex");
    cerrarSesion.innerHTML += `<button type="button" class="btn btn-dark ms-2 me-2 my-3 hoverBoton" style="background-color: #383D3B" id="botonCerrarSesion">
    <span>Salir</span>
</button>`;
    botonContacto.innerHTML += `<a class="nav-link active" aria-current="page" href="/pages/admin.html">Administrar</a>`;
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="/pages/medico.html" id="aTurnosMedico">Mis Turnos</a>`;
    if (datosUsuarioLoggeado.imagenAvatar === "imagenMujer.jpg") {
      displayAvatar.innerHTML += `<img src="/assets/img/doc1.jpg" alt="Foto de perfil de la doctora ${datosUsuarioLoggeado.nombreadmin}" 
        class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${datosUsuarioLoggeado.nombreadmin}</p>`;
    } else if (datosUsuarioLoggeado.imagenAvatar === "imagenVaron.jpg") {
      displayAvatar.innerHTML += `<img src="/assets/img/doc$.jpg" alt="Foto de perfil del doctor ${datosUsuarioLoggeado.nombreadmin}" 
          class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${datosUsuarioLoggeado.nombreadmin}</p>`;
    }
  }

  // --- CERRAR SESION ---

  const botonCerrarSesion = document.getElementById("botonCerrarSesion");
  if (botonCerrarSesion) {
    botonCerrarSesion.addEventListener("click", (e) => {
      e.preventDefault();
      cerrarSesionClick();
      window.location.href = "/index.html";
    });
  }
});
