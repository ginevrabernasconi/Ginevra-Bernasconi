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
    const columns = document.querySelectorAll(".row");
    const aboutSection = document.getElementById("about-section");

    aboutButton.addEventListener("click", function() {
        // Verifica se le colonne sono attualmente nascoste
        const columnsHidden = columns[0].classList.contains("hidden");

        if (columnsHidden) {
            // Se le colonne sono nascoste, mostrale e nascondi la sezione "about"
            columns.forEach(column => {
                column.classList.remove("hidden");
            });
            aboutSection.style.display = "none";
        } else {
            // Se le colonne sono visibili, nascondile e mostra la sezione "about"
            columns.forEach(column => {
                column.classList.add("hidden");
            });
            aboutSection.style.display = "block";
        }
    });
});
