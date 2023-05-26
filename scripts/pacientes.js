let listaMedicos = 
[{nombre:"Lisa Thompson", ruta:"../assets/img/doc1.jpg"},
{nombre:"Roberto Perez",ruta:"../assets/img/doc$.jpg" },
{nombre:"Carolina Diaz",ruta:"../assets/img/doc4.jpg" }
]

let contenedorNombre = document.getElementById("nombreMedicosCardio")

const infoLista = listaMedicos.map((listaMedico)=>{
  

  let lista= document.createElement("li")
  lista.innerHTML= `
  
  <li class="list-group-item text-center">
  
  <img
  src=${listaMedico.ruta}
  class="rounded-circle w-25 float-start"
/>
  
  ${listaMedico.nombre}

  <a
    class="botonColor btn float-md-end"
    href="./turnos.html"
    role="button"
    >Sacar turno</a
  >
</li>

`;
return lista
}
);

infoLista.forEach(lista => { contenedorNombre.appendChild(lista)

  let botonesCambiar = document.getElementsByClassName ("botonColor");
  for (let i = 0; i < botonesCambiar.length; i++) {
    botonesCambiar[i].addEventListener('click', function() {
      
      
 this.document.getElementById("nombreTurnos").innerHTML =  `${listaMedico.nombre}`; 
    });
  
  }  
}


)





let turnosFechas = [{medico:"lisa thompson",fecha: "10 de mayo", hora: "19hs",id:"lisaID" },
{medico:"roberto perez",fecha: "12 de mayo",hora: "11hs", id:"robertoID" },
]
//let turnoNuevo =  {medico:"Carolina Diaz",fecha: "3 de Junio",hora: "11hs" };
//turnosFechas.push(turnoNuevo);

let contenedor = document.getElementById("tablaContainer")

const infoTabla = turnosFechas.map((turnoFecha)=>{

  let tabla= document.createElement("tr")
  tabla.innerHTML= `
  
  <td class="table-primary ps-3">${turnoFecha.medico}</td>
  <td class="table-primary ">${turnoFecha.fecha}-${turnoFecha.hora}</td>
  
  <button class="botonCancelar btn  float-end mt-2 me-2"  >cancelar</button
    >
  

`;
return tabla
}
);

infoTabla.forEach(tabla => { contenedor.appendChild(tabla)
  }

)
let botones = document.getElementsByClassName ("botonCancelar");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function() {
    this.parentNode.remove();
  });
}
