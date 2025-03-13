    function mostrarOcultarMenu() {
        let nav = document.getElementById("nav");
    
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    }
    document.querySelectorAll("#nav ul li a").forEach(item => {
        item.addEventListener("click", () => {
            let nav = document.getElementById("nav");
            if (window.innerWidth <= 768) {
                nav.style.display = "none";
            }
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector(".contenido-banner h1");
    const texto = titulo.textContent;
    titulo.textContent = "";
    let i = 0;

    function escribirTexto() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escribirTexto, 100); 
        }
    }
    escribirTexto();
});

const certificados = document.querySelectorAll(".certificado");

certificados.forEach(certificado => {
    certificado.addEventListener("click", function() {
        certificados.forEach(cert => cert.classList.remove("zoom"));
        this.classList.add("zoom");
        setTimeout(() => {
            this.classList.remove("zoom");
        }, 3000);
    });
});


