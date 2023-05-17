function borrarTurno(boton) {
    // Obtener la referencia a la fila que contiene el botón
    var fila = boton.parentNode.parentNode;
    
    // Obtener la referencia a la tabla
    var tabla = fila.parentNode;
    
    // Eliminar la fila de la tabla
    tabla.removeChild(fila);
  }
