//algo asi como esto
let listaMedicosCardiologos = [
  { nombre: "Lisa Thompson", ruta: "../assets/img/doc1.jpg", id: "1" },
  { nombre: "Roberto Perez", ruta: "../assets/img/doc$.jpg", id: "2" },
  { nombre: "Carolina Diaz", ruta: "../assets/img/doc1.jpg", id: "3" }
];

let contenedorNombre = document.getElementById("nombreMedicosCardio");

const infoLista = listaMedicosCardiologos.map((listaMedicosCardiologo) => {
  let lista = document.createElement("li");
  lista.innerHTML = `
    <li class="list-group-item text-center">
      <img src=${listaMedicosCardiologo.ruta} class="rounded-circle w-25 float-start" />
      ${listaMedicosCardiologo.nombre}
      <button class="botonColor btn float-md-end"
        onclick="completarDatosMedicos('${listaMedicosCardiologo.id}')"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        role="button">Sacar turno</button>
    </li>
  `;
  return lista;
});

infoLista.forEach((lista) => {
  contenedorNombre.appendChild(lista);
});

/*let datosPaginaTurnos;

function completarDatosMedicos(id) {
  datosPaginaTurnos = listaMedicosCardiologos.find((nombre) => nombre.id === id);
  
  const contenedorNombreTurnos = document.getElementById("datosMedicos");

  
  if (datosPaginaTurnos) {
    const articuloTurnos = document.createElement("article");
    articuloTurnos.innerHTML = `
      <article class="row w-50 pb-4" >
        <img src=${datosPaginaTurnos.ruta} alt="doctora" class="rounded-circle w-md-25 col-6 col-md-3" />
        <h1 class="col-3" >${datosPaginaTurnos.nombre}</h1>
      </article>
    `;


    contenedorNombreTurnos.appendChild(articuloTurnos);
  }
  
  return articuloTurnos  

}*/
let datosPaginaTurnosCardio;
let fechasSeleccionadasCardio = [];
function completarDatosMedicos(id) {
  datosPaginaTurnosCardio = listaMedicosCardiologos.find((nombre) => nombre.id === id);

  const contenedorNombreTurnosCardio = document.getElementById("modalCgeneral");

  if (datosPaginaTurnosCardio) {
    const articuloTurnosCardio = document.createElement("div");
    articuloTurnosCardio.innerHTML = `
      <div class="modal-header">
        <h1 class="modal-title fs-3" id="ModalLabelCardio">${datosPaginaTurnosCardio.nombre}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="calendarioFechas">
        <label for="fecha2" class="me-5">Elige tu fecha</label>
        <input type="date" id="fecha2" />
       <div class="row mt-2">
        <p class="col-4"> Elige el horario</p>
        <select class="col-2 h-25 me-2" id="horarios">
      <option value="10hs">10hs</option>
      <option value="11hs">11hs</option>
      <option value="16hs">16hs</option>
      <option value="19hs">19hs</option>
    </select>
    <div>
   
<div class="mb-3 w-100">
  <label for="motivoTurno" class="form-label"
    >Dejar el motivo de tu turno</label
  >
  <textarea
    class="form-control"
    id="motivoTurno"
    rows="3"
  ></textarea>
    </div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="botonColor btn" 
        data-bs-dismiss="modal">Close</button>
        <button type="button" class="botonColor btn" 
        data-bs-dismiss="modal" id="boton1">Save changes</button>
      </div>
    `;

    contenedorNombreTurnosCardio.appendChild(articuloTurnosCardio);
    
    // Evento click del botón dentro de completarDatosMedicos1
    let botonFecha = articuloTurnosCardio.querySelector("#boton1");
    let fechaInput = articuloTurnosCardio.querySelector("#fecha2");
    
    botonFecha.addEventListener('click', () => {
      const fechaCG = fechaInput.valueAsDate;
      const horarioSelect = document.getElementById("horarios").value;
      const motivoTextarea = document.getElementById("motivoTurno").value;
      
      const fechaSeleccionada = {
        nombre:datosPaginaTurnosCardio.nombre,
        fecha: formatoFecha(fechaCG),
        hora:horarioSelect,
        motivo:motivoTextarea
      };
     //guardar en el local storage
      localStorage.setItem('fechaSeleccionada', JSON.stringify(fechaSeleccionada));
      //document.querySelector("#resultado").textContent = formatoFecha(fechaCG);
    });
   
    // Función para formatear la fecha
    function formatoFecha(fechaCG) {
  function rellenar2Digitos(num) {
    return num.toString().padStart(2, '0');
  }

  const año = fechaCG.getFullYear();
  const mes = rellenar2Digitos(fechaCG.getMonth() + 1);
  const día = rellenar2Digitos(fechaCG.getDate());

  return `${día}/${mes}/${año}`;
}

  }
}


//cirujanos general

let listaMedicosCGeneral = [
  { nombre: "Maria Gomez", ruta: "../assets/img/doc1.jpg", id: "4" },
  { nombre: "Humberto Gomez", ruta: "../assets/img/doc$.jpg", id: "5" },
];

let contenedorNombre1 = document.getElementById("nombreMedicosCGeneral");

const infoLista1 = listaMedicosCGeneral.map((listaMedicoCGeneral) => {
  let lista1 = document.createElement("li");
  lista1.innerHTML = `
    <li class="list-group-item text-center">
      <img src=${listaMedicoCGeneral.ruta} class="rounded-circle w-25 float-start" />
      ${listaMedicoCGeneral.nombre}
      <button class="botonColor btn float-md-end" onclick="completarDatosMedicos1('${listaMedicoCGeneral.id}')" 
      data-bs-toggle="modal" data-bs-target="#exampleModal" role="button">Sacar turno</button>
    </li>
  `;
  return lista1;
});

infoLista1.forEach((lista1) => {
  contenedorNombre1.appendChild(lista1);
});

/*let datosPaginaTurnos1;
let fechasSeleccionadas = [];
function completarDatosMedicos1(id) {
  datosPaginaTurnos1 = listaMedicosCGeneral.find((nombre) => nombre.id === id);

  const contenedorNombreTurnos1 = document.getElementById("modalCgeneral");

  if (datosPaginaTurnos1) {
    const articuloTurnos1 = document.createElement("div");
    articuloTurnos1.innerHTML = `
      <div class="modal-header">
        <h1 class="modal-title fs-3" id="exampleModalLabel">${datosPaginaTurnos1.nombre}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="calendarioFechas">
        <label for="fecha2" class="me-5">Elige tu fecha</label>
        <input type="date" id="fecha2" />
       <div class="row mt-2">
        <p class="col-4"> Elige el horario</p>
        <select class="col-2 h-25 me-2" id="horarios">
      <option value="10hs">10hs</option>
      <option value="11hs">11hs</option>
      <option value="16hs">16hs</option>
      <option value="19hs">19hs</option>
    </select>
    <div>
   
<div class="mb-3 w-100">
  <label for="motivoTurno" class="form-label"
    >Dejar el motivo de tu turno</label
  >
  <textarea
    class="form-control"
    id="motivoTurno"
    rows="3"
  ></textarea>
    </div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="botonColor btn" 
        data-bs-dismiss="modal">Close</button>
        <button type="button" class="botonColor btn" 
        data-bs-dismiss="modal" id="boton1">Save changes</button>
      </div>
    `;

    contenedorNombreTurnos1.appendChild(articuloTurnos1);
    
    // Evento click del botón dentro de completarDatosMedicos1
    let botonFecha = articuloTurnos1.querySelector("#boton1");
    let fechaInput = articuloTurnos1.querySelector("#fecha2");
    
    botonFecha.addEventListener('click', () => {
      const fechaCG = fechaInput.valueAsDate;
      const horarioSelect = document.getElementById("horarios").value;
      const motivoTextarea = document.getElementById("motivoTurno").value;
      
      const fechaSeleccionada = {
        nombre:datosPaginaTurnos1.nombre,
        fecha: formatoFecha(fechaCG),
        hora:horarioSelect,
        motivo:motivoTextarea
      };
      //fechasSeleccionadas.push(fechaSeleccionada);
      turnosFechas.push(fechaSeleccionada);
      return
      //document.querySelector("#resultado").textContent = formatoFecha(fechaCG);
    });
    console.log(turnosFechas)
    // Función para formatear la fecha
    function formatoFecha(fechaCG) {
  function rellenar2Digitos(num) {
    return num.toString().padStart(2, '0');
  }

  const año = fechaCG.getFullYear();
  const mes = rellenar2Digitos(fechaCG.getMonth() + 1);
  const día = rellenar2Digitos(fechaCG.getDate());

  return `${día}/${mes}/${año}`;
}

  }
}

*/


//radiologia
  
let listaMedicosRadiologia = 
  [{nombre:"Mario Diaz", ruta:"../assets/img/doc$.jpg"},
  {nombre:"julio perez",ruta:"../assets/img/doc$.jpg" },
  
  ]
  
  let contenedorNombre2 = document.getElementById("nombreMedicosRadiologia")
  
  const infoLista2 = listaMedicosRadiologia.map((listaMedicoRadiologia)=>{
    
  
    let lista2= document.createElement("li")
    lista2.innerHTML= `
    
    <li class="list-group-item text-center">
    
    <img
    src=${listaMedicoRadiologia.ruta}
    class="rounded-circle w-25 float-start"
  />
    
    ${listaMedicoRadiologia.nombre}
  
    <button
      class="botonColor btn float-md-end"
      onclick="completarDatosMedicos2()"
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
      role="button"
      >Sacar turno</button
    >
  </li>
  
  `;
  return lista2
  }
  );
  
  infoLista2.forEach(lista2 => { contenedorNombre2.appendChild(lista2)
  
    }  
  )

//pediatria
  let listaMedicosPediatria = 
  [{nombre:"Ailin Dominguez", ruta:"../assets/img/doc1.jpg"},
   {nombre:"Evelin Coronel",ruta:"../assets/img/doc1.jpg" }
  ]
  
  let contenedorNombre3 = document.getElementById("nombreMedicosPediatria")
  
  const infoLista3 = listaMedicosPediatria.map((listaMedicoPediatria)=>{
    
  
    let lista3= document.createElement("li")
    lista3.innerHTML= `
    
    <li class="list-group-item text-center">
    
    <img
    src=${listaMedicoPediatria.ruta}
    class="rounded-circle w-25 float-start"
  />
    
    ${listaMedicoPediatria.nombre}
  
    <button
      class="botonColor btn float-md-end"
      onclick="completarDatosMedicos()"
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
      role="button"
      >Sacar turno</button
    >
  </li>
  
  `;
  return lista3
  }
  );
  
  infoLista3.forEach(lista3 => { contenedorNombre3.appendChild(lista3)
  
    }  
  )
//neumonologia
  let listaMedicosNeumonologia = 
  [{nombre:"Nahir Coronel", ruta:"../assets/img/doc1.jpg"},
   {nombre:"Pablo Coronel",ruta:"../assets/img/doc$.jpg" }
  ]
  
  let contenedorNombre4 = document.getElementById("nombreMedicosNeumonologia")
  
  const infoLista4 = listaMedicosNeumonologia.map((listaMedicoNeumonologia)=>{
    
  
    let lista4= document.createElement("li")
    lista4.innerHTML= `
    
    <li class="list-group-item text-center">
    
    <img
    src=${listaMedicoNeumonologia.ruta}
    class="rounded-circle w-25 float-start"
  />
    
    ${listaMedicoNeumonologia.nombre}
  
    <button
      class="botonColor btn float-md-end"
      onclick="completarDatosMedicos()"
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
      role="button"
      >Sacar turno</button
    >
  </li>
  
  `;
  return lista4
  }
  );
  
  infoLista4.forEach(lista4 => { contenedorNombre4.appendChild(lista4)
  
    }  
  )
//gastroenterologia
  let listaMedicosGastro = 
  [{nombre:" Elizabeth Alvarez", ruta:"../assets/img/doc1.jpg"},
   {nombre:"Betina Coronel",ruta:"../assets/img/doc1.jpg" }
  ]
  
  let contenedorNombre5 = document.getElementById("nombreMedicosGastroenterologia")
  
  const infoLista5 = listaMedicosGastro.map((listaMedicoGastro)=>{
    
  
    let lista5 = document.createElement("li")
    lista5.innerHTML= `
    
    <li class="list-group-item text-center">
    
    <img
    src=${listaMedicoGastro.ruta}
    class="rounded-circle w-25 float-start"
  />
    
    ${listaMedicoGastro.nombre}
  
    <button
      class="botonColor btn float-md-end"
      onclick="completarDatosMedicos()"
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
      role="button"
      >Sacar turno</button
    >
  </li>
  
  `;
  return lista5
  }
  );
  
  infoLista5.forEach(lista5 => { contenedorNombre5.appendChild(lista5)
  
    }  
  )
//neumonologia
let listaMedicosObstetricia = 
  [{nombre:"Angeles Montoya", ruta:"../assets/img/doc1.jpg"},
   {nombre:"krishna Silvano",ruta:"../assets/img/doc$.jpg" }
  ]
  
  let contenedorNombre6 = document.getElementById("nombreMedicosObstetricia")
  
  const infoLista6 = listaMedicosObstetricia.map((listaMedicoObste)=>{
    
  
    let lista6 = document.createElement("li")
    lista6.innerHTML= `
    
    <li class="list-group-item text-center">
    
    <img
    src=${listaMedicoObste.ruta}
    class="rounded-circle w-25 float-start"
  />
    
    ${listaMedicoObste.nombre}
  
    <button
      class="botonColor btn float-md-end"
      onclick="completarDatosMedicos6()"
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
      role="button"
      >Sacar turno</button
    >
  </li>
  
  `;
  return lista6
  }
  );
  
  infoLista6.forEach(lista6 => { contenedorNombre6.appendChild(lista6)} )
  
//ecografia

 let listaMedicosEcografia=
 [{nombre:"Hector Coronel", ruta:"../assets/img/doc$.jpg"},
   {nombre:"Radhe Moreno",ruta:"../assets/img/doc1.jpg" }
  ]
  
  let contenedorNombre7 = document.getElementById("nombreMedicosEcografias")
  
  const infoLista7 = listaMedicosEcografia.map((listaMedicoEcografias)=>{
    
  
    let lista7 = document.createElement("li")
    lista7.innerHTML= `
    
    <li class="list-group-item text-center">
    
    <img
    src=${listaMedicoEcografias.ruta}
    class="rounded-circle w-25 float-start"
  />
    
    ${listaMedicoEcografias.nombre}
  
    <button
      class="botonColor btn float-md-end"
      onclick="completarDatosMedicos7()"
      data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop"
      role="button"
      >Sacar turno</button
    >
  </li>
  
  `;
  return lista7
  }
  );
  
  infoLista7.forEach(lista7 => { contenedorNombre7.appendChild(lista7)
  
    }  
  )




//lista de mis turnos

let turnosFechas = []


const turnosFechasGuardados = localStorage.getItem('turnosFechas');
if (turnosFechasGuardados) {
  turnosFechas = JSON.parse(turnosFechasGuardados);
}

let contenedor = document.getElementById("tablaContainer");

const infoTabla = turnosFechas.map((turnoFecha) => {
  let tabla = document.createElement("tr");
  tabla.innerHTML = `
    <td class="table-primary ps-3">${turnoFecha.medico}</td>
    <td class="table-primary">${turnoFecha.fecha}-${turnoFecha.hora}</td>
    <button class="botonCancelar btn float-end mt-2 me-2">cancelar</button>
  `;
  return tabla;
});

infoTabla.forEach((tabla) => {
  contenedor.appendChild(tabla);
});

// Agregar evento a los botones de cancelar turno
let botones = document.getElementsByClassName("botonCancelar");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    this.parentNode.remove();
  });
}

// Agregar nuevo turno a la lista
const fechaSeleccionadaGuardada = localStorage.getItem('fechaSeleccionada');
if (fechaSeleccionadaGuardada) {
  const fechaSeleccionada = JSON.parse(fechaSeleccionadaGuardada);
  const nuevoTurno = {
    medico: fechaSeleccionada.nombre,
    fecha: fechaSeleccionada.fecha,
    hora: fechaSeleccionada.hora,
    motivo: fechaSeleccionada.motivo
  };
  turnosFechas.push(nuevoTurno);

  // Guardar turnos actualizados en el localStorage
  localStorage.setItem('turnosFechas', JSON.stringify(turnosFechas));
}
