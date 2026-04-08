document.addEventListener("DOMContentLoaded", function() {
    const textLines = document.querySelectorAll(".text-line");

    textLines.forEach(line => {
        line.addEventListener("click", function() {
            const targetProject = this.getAttribute("data-target");
            const targetImage = document.querySelector(`.image-section img[data-project="${targetProject}"]`);

            if (targetImage) {
                const imageSection = document.getElementById("image-section");
                imageSection.scrollTo({
                    top: targetImage.offsetTop - imageSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const aboutButton = document.querySelector(".about-button");
    const textSection = document.getElementById("text-section");
    const aboutContent = document.getElementById("about-section");
    const projectRows = document.querySelectorAll(".row");

    aboutButton.addEventListener("click", function() {
        if (window.innerWidth <= 768) {
            // Su mobile: toggle della classe .active per mostrare/nascondere tutto il menu
            textSection.classList.toggle("active");
            
            // Opzionale: cambia il testo del bottone
            if (textSection.classList.contains("active")) {
                aboutButton.innerText = "close x";
            } else {
                aboutButton.innerText = "about / projects";
            }
        } else {
            // Logica Desktop originale (nasconde righe, mostra about)
            const columnsHidden = projectRows[0].classList.contains("hidden");
            if (columnsHidden) {
                projectRows.forEach(row => row.classList.remove("hidden"));
                aboutContent.style.display = "none";
            } else {
                projectRows.forEach(row => row.classList.add("hidden"));
                aboutContent.style.display = "block";
            }
        }
    });

    // Chiudi il menu quando clicchi su un progetto (mobile)
    const textLines = document.querySelectorAll(".text-line");
    textLines.forEach(line => {
        line.addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                textSection.classList.remove("active");
                aboutButton.innerText = "about / projects";
            }
            // ... resto della tua funzione scroll originale ...
        });
    });
});