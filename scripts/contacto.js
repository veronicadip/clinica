document.querySelector("#email").addEventListener('input', (evento) => {
	const email = document.querySelector("#email")
	if (email.validity.typeMismatch) {
	  document.querySelector("#resultado1").textContent = 'El email ingresado no es válido'
	} else {
	  document.querySelector("#resultado1").textContent = 'El email es Correcto'
	}
  })
  document.querySelector("#comentarios").addEventListener('input', (evento) => {
	document.querySelector("#resultado").textContent = 500 - document.querySelector("#comentarios").value.length
  })