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
/*let listaFechasTurnos = [
    {
      nombrePaciente: "julia dominguez",
      fechaPaciente: "1 de junio",
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
      let listaPaciente = document.createElement("div");
      listaPaciente.innerHTML = `
        <h2>${listafechaturno.fechaPaciente}</h2>
        <div class="accordion mb-5" id="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>${listafechaturno.nombrePaciente} - ${listafechaturno.horaPaciente}</strong>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordion1">
              <div class="accordion-body">
                <ul class="list-group" id="">
                  <li class="list-group-item">Antec. Medicos</li>
                  <li class="list-group-item">Obra Social</li>
                  <li class="list-group-item">Edad</li>
                  <li class="list-group-item">Motivo de consulta: ${listafechaturno.motivoPaciente}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
      return listaPaciente;
    });
  
    infoPaciente.forEach((listaPaciente) => {
      contenedorNombrePaciente.appendChild(listaPaciente);
    });
  });
  
*/
  
  