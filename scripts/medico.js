/*const turno = 
'<li>Nombre y Apellido</li>' +
'<li>Antec. Medicos</li>' +
'<li>Obra Social</li>' +
'<li>Edad</li>';

let contenedor =document.querySelectorAll("[id='turnoPaciente']");

for (let i= 0; i < contenedor.length; i++) {
console.log(contenedor[i]);
contenedor[i].innerHTML=turno;
}*/
let listaFechasTurnos = [
    {
      nombrePaciente: "julia dominguez",
      AntecedeteMedico:"",
      horaPaciente: "10hs",
      motivoPaciente: "arritmia"
    },
    {
      nombrePaciente: "maria perez",
      fechaPaciente: "2 de junio",
      horaPaciente: "11hs",
      motivoPaciente: "by pass "
    }
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    let contenedorNombrePaciente = document.getElementById("turnoPaciente");
  
    const infoPaciente = listaFechasTurnos.map((listafechaturno) => {
      let listaPaciente = document.createElement("li");
      listaPaciente.innerHTML = `
      <li class="list-group-item">${listafechaturno.nombrePaciente}</li>
          <li class="list-group-item">Antec. Medicos</li>
          <li class="list-group-item">Obra Social</li>
          <li class="list-group-item">Edad</li>
         `
      return listaPaciente;
    });
  
    infoPaciente.forEach((listaPaciente) => {
      contenedorNombrePaciente.appendChild(listaPaciente);
    });
  });
  

  
  