document.addEventListener("DOMContentLoaded", function() {
    const dogImage = document.getElementById("imagem-cachorro");
    const setupElement = document.getElementById("piada-inicio");
    const punchlineElement = document.getElementById("piada-final");
    const toggleButton = document.getElementById("toggle-btn");

    
    function buscarImagemCachorro() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dogImage.src = data.message;
            });
    }


    function buscarPiada() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(piada => {
                setupElement.textContent = piada.setup;
                punchlineElement.textContent = piada.punchline;
                punchlineElement.classList.add("escondida"); 
                toggleButton.textContent = "Revelar Resposta"; 
            });
    }

    function togglePunchline() {
        if (punchlineElement.classList.contains("escondida")) {
            punchlineElement.classList.remove("escondida");
            punchlineElement.classList.add("visivel");
            toggleButton.textContent = "Esconder Resposta";
        } else {
            punchlineElement.classList.remove("visivel");
            punchlineElement.classList.add("escondida");
            toggleButton.textContent = "Revelar Resposta";
        }
    }

    function novaPiadaECachorro() {
        buscarImagemCachorro();
        buscarPiada();
    }

    buscarImagemCachorro();
    buscarPiada();

    window.togglePunchline = togglePunchline;
    window.novaPiadaECachorro = novaPiadaECachorro;
});
