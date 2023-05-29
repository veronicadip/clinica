// USUARIOS
const usuario1 = {
  nombre: "Lisa Thompson",
  email: "lisathompson@gmail.com",
  contrasena: "lisa123",
  telefono: "3814444444",
  especialidad: "Cardiología",
  idmedico: "asd123",
  recibeOS: "si",
  avatar: "avatarDoctora",
  rol: "medico",
};

const usuario2 = {
  nombre: "Juan Perez",
  email: "juanperez@gmail.com",
  contrasena: "juan222",
  telefono: "3815555555",
  documento: "12333333",
  tieneOS: "si",
  cualOS: "OSDE",
  avatar: "avatarHombre",
  rol: "paciente",
};

const usuario3 = {
  nombre: "Derek Shepherd",
  email: "derekshepherd@gmail.com",
  contrasena: "derek111",
  telefono: "3818888888",
  especialidad: "Neurología",
  idmedico: "e999",
  recibeOS: "no",
  avatar: "avatarDoctor",
  rol: "admin",
};

let usuarioLoggeado = usuario3;

// GET ELEMENT
const botonIniciarSesion = document.getElementById("botonIniciarSesion");
const aIniciarSesion = document.getElementById("aIniciarSesion");
const botonRegistro = document.getElementById("botonRegistro");
const botonContacto = document.getElementById("botonContacto");
const aContacto = document.getElementById("aContacto");
const displayAvatar = document.getElementById("displayAvatar");

document.addEventListener("DOMContentLoaded", () => {
  // SETEAR MEDICO
  if (usuarioLoggeado.rol === "medico") {
    aIniciarSesion.remove();
    botonRegistro.remove();
    displayAvatar.classList.add("d-flex");
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="./pages/medico.html" id="aTurnosMedico">Mis Turnos</a>`;
    if (usuarioLoggeado.avatar === "avatarDoctora") {
      displayAvatar.innerHTML += `<img src="./assets/img/doc1.jpg" alt="Foto de perfil de la doctora ${usuarioLoggeado.nombre}" 
      class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${usuarioLoggeado.nombre}</p>`;
    } else if (usuarioLoggeado.avatar === "avatarDoctor") {
      displayAvatar.innerHTML += `<img src="./assets/img/doc$.jpg" alt="Foto de perfil del doctor ${usuarioLoggeado.nombre}" 
        class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${usuarioLoggeado.nombre}</p>`;
    }
  }
  // SETEAR PACIENTE
  if (usuarioLoggeado.rol === "paciente") {
    aIniciarSesion.remove();
    botonRegistro.remove();
    displayAvatar.classList.add("d-flex");
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="./pages/paciente.html" id="aTurnosPaciente">Mis Turnos</a>`;
    if (usuarioLoggeado.avatar === "avatarMujer") {
      displayAvatar.innerHTML += `<img src="./assets/img/pacienteMujer.jpg" alt="Foto de perfil de la paciente 
      ${usuarioLoggeado.nombre}" class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">
      ${usuarioLoggeado.nombre}</p>`;
    } else if (usuarioLoggeado.avatar === "avatarHombre") {
      displayAvatar.innerHTML += `<img src="./assets/img/pacienteHombre.jpg" alt="Foto de perfil del paciente 
        ${usuarioLoggeado.nombre}" class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">
        ${usuarioLoggeado.nombre}</p>`;
    }
  }
  // SETEAR ADMIN
  if (usuarioLoggeado.rol === "admin") {
    aIniciarSesion.remove();
    botonRegistro.remove();
    aContacto.remove();
    displayAvatar.classList.add("d-flex");
    botonContacto.innerHTML += `<a class="nav-link active" aria-current="page" href="./pages/admin.html">Administrar</a>`;
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="./pages/medico.html" id="aTurnosMedico">Mis Turnos</a>`;
    if (usuarioLoggeado.avatar === "avatarDoctora") {
      displayAvatar.innerHTML += `<img src="./assets/img/doc1.jpg" alt="Foto de perfil de la doctora ${usuarioLoggeado.nombre}" 
        class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${usuarioLoggeado.nombre}</p>`;
    } else if (usuarioLoggeado.avatar === "avatarDoctor") {
      displayAvatar.innerHTML += `<img src="./assets/img/doc$.jpg" alt="Foto de perfil del doctor ${usuarioLoggeado.nombre}" 
          class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${usuarioLoggeado.nombre}</p>`;
    }
  }
});
