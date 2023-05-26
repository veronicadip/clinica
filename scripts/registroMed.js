function guardarDatos() {

    localStorage.nombremedico = document.getElementById(`nombremedico`).value;
    localStorage.email = document.getElementById(`email`).value;
    localStorage.contrasena = document.getElementById(`contrasena`).value;
    localStorage.telefono = document.getElementById(`telefono`).value;
    localStorage.especialidad = document.getElementById(`especialidad`).value;
    localStorage.idmedico = document.getElementById(`idmedico`).value;
    localStorage.avatar = document.querySelector(`input[name="avatar"]:checked`).value;
    localStorage.recibeOS = document.querySelector(`input[name="recibeOS"]:checked`).value;
  
}



// let medicos = (nombremedico,email,contrasena,telefono,especialidad,idmedico,foto,recibeOS)

// recuperarRegistro = () => {
      let nombre= localStorage.getItem(`nombremedico`);
      console.log(nombre);

      let email= localStorage.getItem(`email`);
      console.log(email);

      let contraseña= localStorage.getItem(`contrasena`);
      console.log(contraseña);

      let telefono= localStorage.getItem(`telefono`);
      console.log(telefono);

      let especialidad= localStorage.getItem(`especialidad`);
      console.log(especialidad);

      let id= localStorage.getItem(`idmedico`);
      console.log(id);

      let avatar= localStorage.getItem(`avatar`);
      console.log(avatar);

      let oSocial= localStorage.getItem(`recibeOS`);
      console.log(oSocial);


    //    let datos = JSON.parse(nombremedico, email,contrasena,telefono,especialidad,idmedico,foto,recibeOS)
    //    console.log(datos);
    //    console.log(typeof(datos))
    // }
    //   let registrados (nombre,email,contraseña,telefono,especialidad,id,foto,oSocial) = {

// let medicos = []

// let registrados = {
//     nombre: `${nombre}`,
//     email: `${nombre}`,
//     contraseña: `${contraseña}`,
//     telefono: `${telefono}`,
//     especialidad: `${especialidad}`,
//     idmedico: `${idmedico}`,
//     foto: `${foto}`,
//     oSocial: `${recibeOS}`,

// }

// registrados.push(medicos)
    

// medicos.push(registrados)


// function recuperarDatos(){
//     if (localStorage.nombre =! undefined){
//         document.getElementById(`datos`).innerHTML= 
//         `<p>nombre: ${localStorage.nombremedico}</p>` 
//         `<p>email: ${localStorage.email}</p>`
//         `<p>constraseña: ${localStorage.constraseña}</p>`
//         `<p> telefono: ${localStorage.telefono}</p>`
//         `<p>nombre: ${localStorage.especialidad}</p>`
//         `<p>especialidad: ${localStorage.idmedico}</p>`
//         `<p>idmedico: ${localStorage.idmedico}</p>`
//         `<p>foto: ${localStorage.foto}</p>`
//         `<p>recibeOS: ${localStorage.recibeOS}</p>`
//     } else{

//     }
// }