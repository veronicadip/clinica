// GET ELEMENT
const botonIniciarSesion = document.getElementById("botonIniciarSesion");
const aIniciarSesion = document.getElementById("aIniciarSesion");
const botonRegistro = document.getElementById("botonRegistro");
const botonContacto = document.getElementById("botonContacto");
const aContacto = document.getElementById("aContacto");
const displayAvatar = document.getElementById("displayAvatar");

document.addEventListener("DOMContentLoaded", () => {
  // SETEAR MEDICO
  if (localStorage.nombremedico !== undefined) {
    aIniciarSesion.remove();
    botonRegistro.remove();
    displayAvatar.classList.add("d-flex");
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="./medico.html" id="aTurnosMedico">Mis Turnos</a>`;
    if (localStorage.imagenavatar === "imagenMujer.jpg") {
      displayAvatar.innerHTML += `<img src="../assets/img/doc1.jpg" alt="Foto de perfil de la doctora ${localStorage.nombremedico}" 
      class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${localStorage.nombremedico}</p>`;
    } else if (localStorage.imagenavatar === "imagenVaron.jpg") {
      displayAvatar.innerHTML += `<img src="../assets/img/doc$.jpg" alt="Foto de perfil del doctor ${localStorage.nombremedico}" 
        class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${localStorage.nombremedico}</p>`;
    }
  }
  // SETEAR PACIENTE
  if (localStorage.nombrepaciente !== undefined) {
    aIniciarSesion.remove();
    botonRegistro.remove();
    displayAvatar.classList.add("d-flex");
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="./paciente.html" id="aTurnosPaciente">Mis Turnos</a>`;
    if (localStorage.imagenavatar === "imagenMujer.jpg") {
      displayAvatar.innerHTML += `<img src="../assets/img/pacienteMujer.jpg" alt="Foto de perfil de la paciente 
      ${localStorage.nombre}" class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">
      ${localStorage.nombre}</p>`;
    } else if (localStorage.avatar === "imagenVaron.jpg") {
      displayAvatar.innerHTML += `<img src="../assets/img/pacienteHombre.jpg" alt="Foto de perfil del paciente 
        ${localStorage.nombre}" class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">
        ${localStorage.nombre}</p>`;
    }
  }
  // SETEAR ADMIN
  if (localStorage.nombreadmin !== undefined) {
    aIniciarSesion.remove();
    botonRegistro.remove();
    aContacto.remove();
    displayAvatar.classList.add("d-flex");
    botonContacto.innerHTML += `<a class="nav-link active" aria-current="page" href="./admin.html">Administrar</a>`;
    botonIniciarSesion.innerHTML += `<a class="nav-link active text-nowrap" aria-current="page" href="medico.html" id="aTurnosMedico">Mis Turnos</a>`;
    if (localStorage.imagenavatar === "imagenMujer.jpg") {
      displayAvatar.innerHTML += `<img src="../assets/img/doc1.jpg" alt="Foto de perfil de la doctora ${localStorage.nombreadmin}" 
        class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${localStorage.nombreadmin}</p>`;
    } else if (localStorage.avatar === "imagenVaron.jpg") {
      displayAvatar.innerHTML += `<img src="../assets/img/doc$.jpg" alt="Foto de perfil del doctor ${localStorage.nombreadmin}" 
          class="w-25 rounded-circle mt-1 ms-4"> <p class="mt-4 ms-3 fw-bold">${localStorage.nombreadmin}</p>`;
    }
  }
});
