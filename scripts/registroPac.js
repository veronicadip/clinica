function guardarDatos() {

    localStorage.nombrepaciente = document.getElementById(`nombrepaciente`).value;
    localStorage.telefono = document.getElementById(`telefono`).value;
    localStorage.documento = document.getElementById(`documento`).value;
    localStorage.email = document.getElementById(`email`).value;
    localStorage.contrasena = document.getElementById(`contrasena`).value;
    localStorage.tieneOS = document.querySelector(`input[name="tieneOS"]:checked`).value;
    localStorage.cualOS = document.getElementById(`cualOS`).value;
}
let contenedor1 = 
localStorage.getItem(`nombrepaciente`);

 let contenedor2=
localStorage.getItem(`telefono`);

 let contenedor3=
localStorage.getItem(`tieneOS`);

 let contenedor4=
localStorage.getItem(`cualOS`);

      let datos = {
       nombrepaciente: `${contenedor1}`,
       telefono:  ` ${contenedor2}` ,
       tieneOS: ` ${contenedor3}`,
       cualOS:  ` ${contenedor4}`,
      }
      console.log(typeof datos);

      
    //   let nombre= localStorage.getItem(`nombrepaciente`);
    //   console.log(nombre);

    //   let telefono= localStorage.getItem(`telefono`);
    //   console.log(telefono)

    //   let documento= localStorage.getItem(`documento`);
    //   console.log(documento);

    //   let email= localStorage.getItem(`email`);
    //   console.log(email);

    //   let contraseña= localStorage.getItem(`contrasena`);
    //   console.log(contraseña);

    //   let tieneOS= localStorage.getItem(`tieneOS`);
    //   console.log(tieneOS);

    //   let cualOS= localStorage.getItem(`cualOS`);
    //   console.log(cualOS);


      