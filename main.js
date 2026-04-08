document.addEventListener("DOMContentLoaded", function() {
    const btnAbout = document.getElementById('btn-about');
    const btnProjects = document.getElementById('btn-projects');
    const textSection = document.getElementById('text-section');
    const aboutSection = document.getElementById('about-section');
    const projectsList = document.getElementById('projects-list');
    const imageSection = document.getElementById('image-section');

    function toggleNav(type) {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Logica MOBILE (Tendina)
            const isVisible = textSection.classList.contains('mobile-open');
            const currentContent = (type === 'about') ? aboutSection : projectsList;
            const otherContent = (type === 'about') ? projectsList : aboutSection;

            if (isVisible && currentContent.style.display === 'block') {
                textSection.classList.remove('mobile-open');
            } else {
                textSection.classList.add('mobile-open');
                currentContent.style.display = 'block';
                otherContent.style.display = 'none';
            }
        } else {
            // Logica DESKTOP (Tua originale)
            if (type === 'about') {
                const isHidden = projectsList.classList.contains('hidden');
                if (isHidden) {
                    projectsList.classList.remove('hidden');
                    aboutSection.style.display = 'none';
                } else {
                    projectsList.classList.add('hidden');
                    aboutSection.style.display = 'block';
                }
            }
        }
    }

    btnAbout.addEventListener('click', () => toggleNav('about'));
    btnProjects.addEventListener('click', () => toggleNav('projects'));

    // Funzione Scroll ai progetti
    const rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetImage = document.getElementById(targetId);

            if (targetImage) {
                if (window.innerWidth <= 768) {
                    textSection.classList.remove('mobile-open');
                }
                targetImage.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});