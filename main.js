document.addEventListener("DOMContentLoaded", function() {

    const textLines = document.querySelectorAll(".text-line");
    const textSection = document.querySelector(".text-section");

    const projectsButton = document.querySelector(".projects-button");
    const aboutButton = document.querySelector(".about-button");

    const columns = document.querySelectorAll(".row");
    const aboutSection = document.getElementById("about-section");

    /* CLICK SU PROGETTI → SCROLL */
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

                // chiudi menu su mobile
                textSection.classList.remove("active");
            }
        });
    });

    /* PROJECTS BUTTON */
    if (projectsButton) {
        projectsButton.addEventListener("click", function() {
            textSection.classList.add("active");

            // mostra lista progetti
            columns.forEach(col => col.classList.remove("hidden"));
            aboutSection.style.display = "none";
        });
    }

    /* ABOUT BUTTON */
    aboutButton.addEventListener("click", function() {

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            textSection.classList.add("active");

            // mostra about
            columns.forEach(col => col.classList.add("hidden"));
            aboutSection.style.display = "block";

        } else {
            // desktop (come prima)
            const columnsHidden = columns[0].classList.contains("hidden");

            if (columnsHidden) {
                columns.forEach(column => column.classList.remove("hidden"));
                aboutSection.style.display = "none";
            } else {
                columns.forEach(column => column.classList.add("hidden"));
                aboutSection.style.display = "block";
            }
        }
    });

});