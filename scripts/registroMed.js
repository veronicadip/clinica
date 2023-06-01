// define datos
if (!localStorage.getItem("datos")) {
  localStorage.setItem("datos", JSON.stringify({}));
}

const formMedico = document.getElementById("formMedico");
formMedico.addEventListener("submit", (e) => {
  e.preventDefault();
  almacenarDatos();
});

function almacenarDatos(e) {
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

  // alert exitoso
  alert("Excelente, te has regitrado con exito!!");


  /*const datosRegistro = document.getElementById('datosRegistrosMedicos');
  
//  let listaPaciente = document.createElement("div");
// const contenidoCard =  `
//         <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${contenedorNombre}</h5>
//           <ul class="card-text list-group list-group-flush">
//            <li class="list-group-item">Mail: ${contenedorEmail}</li>
//            <li class="list-group-item">Numero: ${contenedorTelefono}</li>
//            <li class="list-group-item">Especialida: ${contenedorEspecialidad}</li>
//            <li class="list-group-item">Obra Social: ${contenedorRecibeOS}</li>
//            <li class="list-group-item"></li>
//           </ul>
          
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
// `;
// datosRegistro.innerHTML = contenidoCard;*/

//   // te manda al inicio una vez que llenas el formulario

//   window.location.href = "../index.html";
// }


