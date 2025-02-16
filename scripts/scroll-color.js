const header = document.getElementById('header-scroll');

        function scrollColor() {
        if (window.scrollY > 10) {
            // Se rolou mais de 100px, troca o estilo
            header.style.backgroundColor = '#181818'; // Cor preta
        } else {
            header.style.backgroundColor = 'transparent'; // Cor transparente
        }
    }
        window.onscroll = scrollColor;