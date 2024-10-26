const loaderContainer = document.querySelector('.loader');

function loader() {
	// Intentar ocultar el loader cuando el HTML esté cargado
	window.addEventListener('DOMContentLoaded', function () {
		loaderContainer.classList.add('loader--hidden');
	});

	// Fallback: Ocultar el loader después de 3 segundos en caso de que el evento no funcione
	setTimeout(() => {
		loaderContainer.classList.add('loader--hidden');
	}, 3000); // 3000 ms = 3 segundos
}

export default loader;
