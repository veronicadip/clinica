// define datos
if (!localStorage.getItem("datos")) {
  localStorage.setItem("datos", JSON.stringify({}));
}

function almacenarDatos() {
  let contenedorNombre = document.getElementById(`nombremedico`).value;
  let contenedorEmail = document.getElementById(`email`).value;
  let contenedorIDMedico = document.getElementById(`idmedico`).value;
  let contenedorContrasena = document.getElementById(`contrasena`).value;
  let contenedorTelefono = document.getElementById(`telefono`).value;
  let contenedorEspecialidad = document.getElementById(`especialidad`).value;
  let contenedorImagenAvatar = document.querySelector(
    `input[name="imagenavatar"]:checked`
  ).value;
  let contenedorRecibeOS = document.querySelector(
    `input[name="recibeOS"]:checked`
  ).value;
  // deserializar la informacion
  const datos = JSON.parse(localStorage.datos);
  // manipular la informacion
  datos[contenedorEmail] = {
    nombremedico: contenedorNombre,
    email: contenedorEmail,
    idMedico: contenedorIDMedico,
    contrasena: contenedorContrasena,
    telefono: contenedorTelefono,
    especialidad: contenedorEspecialidad,
    imagenAvatar: contenedorImagenAvatar,
    recibeOS: contenedorRecibeOS,
    aprobado: false ,
  };
 
  // serializar y guardar la informacion
  localStorage.datos = JSON.stringify(datos);

  // te manda al inicio una vez que llenas el formulario
  window.location.href = "../index.html";
}
