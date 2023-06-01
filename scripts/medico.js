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
      antecedeteMedico:"encefoditis",
      obrasocial: " osecac",
      motivoPaciente: "arritmia"
    },
    
  ];
  
  document.addEventListener("DOMContentLoaded", function () {

    let contenedorNombrePaciente = document.getElementById("turnoPaciente");
  
    const infoPaciente = listaFechasTurnos.map((listafechaturno) => {
      let listaPaciente = document.createElement("li");
      listaPaciente.innerHTML = `
      <li class="list-group-item">Nombre y apellido:${listafechaturno.nombrePaciente}</li>
          <li class="list-group-item">Antecedentes Medicos:${listafechaturno.antecedeteMedico}</li>
          <li class="list-group-item">Obra Social:${listafechaturno.obrasocial}</li>
          <li class="list-group-item">Motivo consulta:${listafechaturno.motivoPaciente}</li>
         `
      return listaPaciente;
    });
  
    infoPaciente.forEach((listaPaciente) => {
      contenedorNombrePaciente.appendChild(listaPaciente);
    });
  });

    let listaFechasTurnos2 = [
      {
        nombrePaciente: "Maria dominguez",
        antecedeteMedico:"encefoditis",
        obrasocial: " osecac",
        motivoPaciente: "dolor de pecho"
      },
      
    ];
    
    document.addEventListener("DOMContentLoaded", function () {

      let contenedorNombrePaciente2 = document.getElementById("turnoPaciente2");
    
      const infoPaciente2 = listaFechasTurnos.map((listafechaturno2) => {
        let listaPaciente2 = document.createElement("li");
        listaPaciente2.innerHTML = `
        <li class="list-group-item">Nombre y Apellido:${listafechaturno2.nombrePaciente}</li>
            <li class="list-group-item">Antecedente Medico:${listafechaturno2.antecedeteMedico}</li>
            <li class="list-group-item">Obra Social:${listafechaturno2.obrasocial}</li>
            <li class="list-group-item">Motivo de consulta: ${listafechaturno2.motivoPaciente}</li>
           `
        return listaPaciente2;
      });
    
      infoPaciente2.forEach((listaPaciente2) => {
        contenedorNombrePaciente2.appendChild(listaPaciente2);
      });
  
    });
  
    
      let listaFechasTurnos3 = [
        {
          nombrePaciente: "Veronica Dip",
          antecedeteMedico:"encefoditis",
          obrasocial: " osecac",
          motivoPaciente: "pre infarto"
        },
        
      ];
      
      document.addEventListener("DOMContentLoaded", function () {

        let contenedorNombrePaciente3 = document.getElementById("turnoPaciente3");
      
        const infoPaciente3 = listaFechasTurnos3.map((listafechaturno3) => {
          let listaPaciente3 = document.createElement("li");
          listaPaciente3.innerHTML = `
          <li class="list-group-item">nombre y apellido:${listafechaturno3.nombrePaciente}</li>
              <li class="list-group-item">Antecedente Medico:${listafechaturno3.antecedeteMedico}</li>
              <li class="list-group-item">obra social:${listafechaturno3.obrasocial}</li>
              <li class="list-group-item">Motivo de la consulta: ${listafechaturno3.motivoPaciente}</li>
             `
          return listaPaciente3;
        });
      
        infoPaciente3.forEach((listaPaciente3) => {
          contenedorNombrePaciente3.appendChild(listaPaciente3);
        });
    
       } );      
    
      
        

  
  