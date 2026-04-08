document.addEventListener("DOMContentLoaded", function() {
    const btnAbout = document.getElementById('toggle-about');
    const btnProjects = document.getElementById('toggle-projects');
    const textSection = document.getElementById('text-section');
    const aboutContent = document.getElementById('about-section');
    const projectsList = document.getElementById('all-projects');
    
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

    function toggleMenu(mode) {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            const isOpen = textSection.classList.contains('is-open');
            const target = (mode === 'about') ? aboutContent : projectsList;
            const other = (mode === 'about') ? projectsList : aboutContent;

            // Se è già aperto su questo contenuto, chiudo tutto (torno alla gallery)
            if (isOpen && target.style.display === 'block') {
                textSection.classList.remove('is-open');
            } else {
                // Altrimenti apro e scambio il contenuto
                textSection.classList.add('is-open');
                target.style.display = 'block';
                other.style.display = 'none';
            }
        } else {
            // Comportamento Desktop Originale
            if (mode === 'about') {
                const isHidden = projectsList.style.display === 'none';
                projectsList.style.display = isHidden ? 'block' : 'none';
                aboutContent.style.display = isHidden ? 'none' : 'block';
            }
        }
    }

    btnAbout.addEventListener('click', () => toggleMenu('about'));
    btnProjects.addEventListener('click', () => toggleMenu('projects'));

    // Funzione per scrollare e chiudere la tendina
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetImg = document.getElementById(targetId);

            if (targetImg) {
                if (window.innerWidth <= 768) {
                    textSection.classList.remove('is-open');
                }
                targetImg.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
