function almacenarDatos() {

    localStorage.nombremedico = document.getElementById(`nombremedico`).value;
    localStorage.email = document.getElementById(`email`).value;
    localStorage.idmedico = document.getElementById(`idmedico`).value;
    localStorage.contrasena = document.getElementById(`contrasena`).value;
    localStorage.telefono = document.getElementById(`telefono`).value;
    localStorage.especialidad = document.getElementById(`especialidad`).value;
    localStorage.imagenavatar = document.querySelector(`input[name="imagenavatar"]:checked`).value;
    localStorage.recibeOS = document.querySelector(`input[name="recibeOS"]:checked`).value;
}


 let contenedor1 = 
localStorage.getItem(`nombremedico`);

 let contenedor2=
localStorage.getItem(`idmedico`);

 let contenedor3=
localStorage.getItem(`especialidad`);

 let contenedor4=
localStorage.getItem(`imagenavatar`);

      let datos = {
       nombre: `${contenedor1}`,
       id:  ` ${contenedor2}` ,
       especialidad: ` ${contenedor3}`,
       imagen:  ` ${contenedor4}`,
      }
      console.log(typeof datos);

      // let email= localStorage.getItem(`email`);
      // console.log(email);

        // localStorage.getItem(`idmedico`);
      // console.log(idmedico);

      // let contraseña= localStorage.getItem(`contrasena`);
      // console.log(contraseña);

      // let telefono= localStorage.getItem(`telefono`);
      // console.log(telefono);

        // localStorage.getItem(`especialidad`);
      // console.log(especialidad);

    //   let id= localStorage.getItem(`idmedico`);
    //   console.log(id);

        // localStorage.getItem(`imagenavatar`);
      // console.log(avatars);

      // let oSocial= localStorage.getItem(`recibeOS`);
      // console.log(oSocial);


    //    let datos = JSON.parse(nombremedico, email,contrasena,telefono,especialidad,idmedico,foto,recibeOS)
    //    console.log(datos);
    //    console.log(typeof(datos))
     
    //  console.log(datos)
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