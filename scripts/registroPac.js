// define datos
if (!localStorage.getItem("datos")) {
  localStorage.setItem("datos", JSON.stringify({}));
}

function guardarDatos() {
  let contenedornombrePaciente =
    document.getElementById(`nombrepaciente`).value;
  let contenedorEmail = document.getElementById(`email`).value;
  let contenedorTelefono = document.getElementById(`telefono`).value;
  let contenedorContrasena = document.getElementById(`contrasena`).value;
  let contenedorDocumento = document.getElementById(`documento`).value;
  let contenedorTieneOS = document.querySelector(
    `input[name="tieneOS"]:checked`
  ).value;
  let contenedorCualOS = document.getElementById(`cualOS`).value;

  // deserializar la informacion
  const datos = JSON.parse(localStorage.datos);
  // manipular la informacion
  datos[contenedorEmail] = {
    nombrepaciente: contenedornombrePaciente,
    email: contenedorEmail,
    telefono: contenedorTelefono,
    contrasena: contenedorContrasena,
    documento: contenedorDocumento,
    TieneOS: contenedorTieneOS,
    CualOS: contenedorCualOS,
  };
  // serializar y guardar la informacion
  localStorage.datos = JSON.stringify(datos);

  // te manda al inicio una vez que llenas el formulario
  window.location.href = "../index.html";
}
