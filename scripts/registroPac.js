// function guardarDatos() {

//     localStorage.nombrepaciente = document.getElementById(`nombrepaciente`).value;
//     localStorage.telefono = document.getElementById(`telefono`).value;
//     localStorage.documento = document.getElementById(`documento`).value;
//     localStorage.email = document.getElementById(`email`).value;
//     localStorage.contrasena = document.getElementById(`contrasena`).value;
//     localStorage.tieneOS = document.querySelector(`input[name="tieneOS"]:checked`).value;
//     localStorage.cualOS = document.getElementById(`cualOS`).value;
// }
// let contenedor1 = 
// localStorage.getItem(`nombrepaciente`);

//  let contenedor2=
// localStorage.getItem(`telefono`);

//  let contenedor3=
// localStorage.getItem(`tieneOS`);

//  let contenedor4=
// localStorage.getItem(`cualOS`);

// let datos = {
//   nombrepaciente: `${contenedor1}`,
//   telefono:  ` ${contenedor2}` ,
//   tieneOS: ` ${contenedor3}`,
//   cualOS:  ` ${contenedor4}`,
//  }
//  console.log(typeof datos);


      // define datos
if (!localStorage.getItem("datos")) {
  localStorage.setItem("datos", JSON.stringify({}));
}

function guardarDatos() {
  let contenedornombrePaciente = document.getElementById(`nombrepaciente`).value;
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