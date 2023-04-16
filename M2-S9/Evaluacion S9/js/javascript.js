function mostrarFormulario(tipoFormulario) {
    // oculta todos los formularios
    document.querySelectorAll('form').forEach(formulario => formulario.classList.add('hidden'));
  
    // muestra solo el formulario correspondiente
    document.getElementById('formulario-' + tipoFormulario).classList.remove('hidden');
  }
  
  function enviarFormulario(event, tipoFormulario) {
    event.preventDefault();
  
    // valida los campos requeridos
    if (validarFormulario(tipoFormulario)) {
      // captura los datos del formulario
      var datosFormulario = capturarDatosFormulario(tipoFormulario);
  
      // muestra el mensaje de agradecimiento
      document.getElementById('mensaje-enviado').classList.remove('hidden');
    } else {
      // muestra el mensaje de error
      document.getElementById('mensaje-error').
  