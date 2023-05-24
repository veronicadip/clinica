function guardarDatos() {

    localStorage.nombrepaciente = document.getElementById(`nombrepaciente`).value;
    localStorage.telefono = document.getElementById(`telefono`).value;
    localStorage.documento = document.getElementById(`documento`).value;
    localStorage.email = document.getElementById(`email`).value;
    localStorage.contrasena = document.getElementById(`contrasena`).value;
    localStorage.tieneOS = document.querySelector(`input[name="tieneOS"]:checked`).value;
    localStorage.cualOS = document.getElementById(`cualOS`).value;
}

      let nombre= localStorage.getItem(`nombrepaciente`);
      console.log(nombre);

      let telefono= localStorage.getItem(`telefono`);
      console.log(telefono)

      let documento= localStorage.getItem(`documento`);
      console.log(documento);

      let email= localStorage.getItem(`email`);
      console.log(email);

      let contraseña= localStorage.getItem(`contrasena`);
      console.log(contraseña);

      let tieneOS= localStorage.getItem(`tieneOS`);
      console.log(tieneOS);

      let cualOS= localStorage.getItem(`cualOS`);
      console.log(cualOS);


      