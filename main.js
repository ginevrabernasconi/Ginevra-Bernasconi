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

let currentState = null; 
// "projects" | "about" | null

/* PROJECTS */
if (projectsButton) {
    projectsButton.addEventListener("click", function() {

        if (currentState === "projects") {
            // CHIUDI
            textSection.classList.remove("active");
            currentState = null;
            return;
        }

        // APRI PROJECTS
        textSection.classList.add("active");
        columns.forEach(col => col.classList.remove("hidden"));
        aboutSection.style.display = "none";

        currentState = "projects";
    });
}

/* ABOUT */
aboutButton.addEventListener("click", function() {

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {

        if (currentState === "about") {
            // CHIUDI
            textSection.classList.remove("active");
            currentState = null;
            return;
        }

        // APRI ABOUT
        textSection.classList.add("active");
        columns.forEach(col => col.classList.add("hidden"));
        aboutSection.style.display = "block";

        currentState = "about";

    } else {
        // DESKTOP (come prima)
        const columnsHidden = columns[0].classList.contains("hidden");

        if (columnsHidden) {
            columns.forEach(column => column.classList.remove("hidden"));
            aboutSection.style.display = "none";
        } else {
            columns.forEach(column => column.classList.add("hidden"));
            aboutSection.style.display = "block";
        }
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    
    // Prova a farlo partire forzatamente
    var playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay avviato con successo!
        }).catch(error => {
            // L'autoplay è stato bloccato (es. risparmio energetico)
            // Qui potresti mostrare un tasto "Play" personalizzato
            console.log("Autoplay bloccato dal browser");
        });
    }
});
})