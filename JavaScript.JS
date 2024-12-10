        // Selecciona el botón y el menú móvil
        const menuButton = document.getElementById('menuButton');
        const menuMobile = document.getElementById('menuMobile');

        // Agrega un event listener al botón para hacer toggle del menú
        menuButton.addEventListener('click', () => {
            // Alterna la clase 'hidden' para mostrar/ocultar el menú
            menuMobile.classList.toggle('hidden');
        });