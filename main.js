document.addEventListener("DOMContentLoaded", function() {

    const textLines = document.querySelectorAll(".text-line");
    const textSection = document.querySelector(".text-section");

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

                // 👉 chiudi menu su mobile dopo click
                textSection.classList.remove("active");
            }
        });
    });

    const aboutButton = document.querySelector(".about-button");
    const columns = document.querySelectorAll(".row");
    const aboutSection = document.getElementById("about-section");

    aboutButton.addEventListener("click", function() {

        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // 👉 su mobile: apre menu
            textSection.classList.toggle("active");
        } else {
            // 👉 desktop: comportamento originale
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