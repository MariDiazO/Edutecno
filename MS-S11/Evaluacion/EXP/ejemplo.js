// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  // Obtener elementos del DOM
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const card = document.querySelector('.card');
  const cardImg = document.querySelector('.card-img-top');
  const cardTitle = document.querySelector('.card-title');
  const cardText = document.querySelector('.card-text');
  const cardFooter1 = document.querySelector('.card-footer:nth-child(1)');
  const cardFooter2 = document.querySelector('.card-footer:nth-child(2)');
  const cardFooter3 = document.querySelector('.card-footer:nth-child(3)');
  const cardBtn = document.querySelector('.btn');

  // Función para mostrar la información de la película en la card
  function mostrarPelicula(pelicula) {
    cardImg.src = pelicula.poster;
    cardTitle.textContent = pelicula.title;
    cardText.textContent = pelicula.description;
    cardFooter1.textContent = `Título romanizado: ${pelicula.original_title}`;
    cardFooter2.textContent = `Año de estreno: ${pelicula.release_date}`;
    cardFooter3.textContent = `Director: ${pelicula.director}`;
    cardBtn.href = pelicula.url;
    card.style.display = 'block';
  }
});

  function mostrarPelicula(nombrePelicula) {
    fetch(`https://studio-ghibli-films-api.herokuapp.com/films?title=${nombrePelicula}`)
      .then(response => response.json())
      .then(data => {
        // Si hay resultados, mostrar la primera película
        if (data.length > 0) {
          const pelicula = data[0];
          cardImg.src = pelicula.poster;
          cardTitle.textContent = pelicula.title;
          cardText.textContent = pelicula.description;
          cardFooter1.textContent = `Título romanizado: ${pelicula.original_title}`;
          cardFooter2.textContent = `Año de estreno: ${pelicula.release_date}`;
          cardFooter3.textContent = `Director: ${pelicula.director}`;
          cardBtn.href = pelicula.url;
          card.style.display = 'block';
        } else {
          // Si no hay resultados, mostrar un mensaje de error
          cardTitle.textContent = 'No se encontraron resultados';
          card.style.display = 'block';
        }
      });
      
      const form = document.querySelector('form');
      const input = document.querySelector('input');
      
      form.addEventListener('submit', event => {
        event.preventDefault();
        const nombrePelicula = input.value;
        mostrarPelicula(nombrePelicula);
      });
  }