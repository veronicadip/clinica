const usuario1 = {
  nombremedico: "Lisa Thompson",
  email: "lisathompson@gmail.com",
  contrasena: "lisa123",
  telefono: "3814444444",
  especialidad: "Cardiología",
  idmedico: "asd123",
  recibeOS: "si",
  avatar: "avatarDoctora",
};

const usuario2 = {
  nombrepaciente: "Juan Perez",
  email: "juanperez@gmail.com",
  contrasena: "juan222",
  telefono: "3815555555",
  documento: "12333333",
  tieneOS: "si",
  cualOS: "OSDE",
  avatar: "avatarHombre",
};

const usuario3 = {
  nombreadmin: "Derek Shepherd",
  email: "derekshepherd@gmail.com",
  contrasena: "derek111",
  telefono: "3818888888",
  especialidad: "Neurología",
  idmedico: "e999",
  recibeOS: "no",
  avatar: "avatarDoctor",
};

const botonIniciarSesion = document.getElementById("botonIniciarSesion");
const aIniciarSesion = document.getElementById("aIniciarSesion");
const botonRegistro = document.getElementById("botonRegistro");

let usuarioLoggeado = usuario1;

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.nombremedico !== undefined) {
    const avatar = localStorage.avatar.value;
    botonIniciarSesion.remove();
    aIniciarSesion.remove();
    botonRegistro.remove();
    if (avatar === avatarDoctora) {
    }
  }
});
