document.addEventListener("DOMContentLoaded", function() {
function mostrarFormulario(id) {
    // ocultar todos los formularios
    document.querySelectorAll('#formularios form').forEach(function(formulario) {
      formulario.classList.add('d-none');
    });

    // mostrar el formulario correspondiente
    document.querySelector(id).classList.remove('d-none');
  }

  document.addEventListener('DOMContentLoaded', function() {
    // ocultar los formularios en pantallas pequeñas
    if (window.innerWidth < 600) {
      document.querySelectorAll('#formularios form').forEach(function(formulario) {
        formulario.classList.add('d-none');
      });
    }

    // agregar el evento onclick a los enlaces de la barra de navegación
    document.querySelector('#navbarNav a[href="#formulario-contacto"]').onclick = function() {
      mostrarFormulario('#formulario-contacto');
      return false;
    };

    document.querySelector('#navbarNav a[href="#formulario-reserva"]').onclick = function() {
      mostrarFormulario('#formulario-reserva');
      return false;
    };
  });
});