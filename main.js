document.addEventListener("DOMContentLoaded", function() {
    const btnAbout = document.getElementById('btn-about');
    const btnProjects = document.getElementById('btn-projects');
    const textSection = document.getElementById('text-section');
    const aboutSection = document.getElementById('about-section');
    const projectsList = document.getElementById('projects-list');

    function toggleMenu(mode) {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            const alreadyOpen = textSection.classList.contains('is-open');
            const targetContent = (mode === 'about') ? aboutSection : projectsList;
            const otherContent = (mode === 'about') ? projectsList : aboutSection;

            // Se la tendina è aperta e clicco lo stesso tasto, chiudo tutto
            if (alreadyOpen && targetContent.style.display === 'block') {
                textSection.classList.remove('is-open');
            } else {
                // Apro e mostro il contenuto giusto
                textSection.classList.add('is-open');
                targetContent.style.display = 'block';
                otherContent.style.display = 'none';
            }
        } else {
            // Logica Desktop
            if (mode === 'about') {
                const isBioVisible = aboutSection.style.display === 'block';
                aboutSection.style.display = isBioVisible ? 'none' : 'block';
                projectsList.style.display = isBioVisible ? 'block' : 'none';
            }
        }
    }

    btnAbout.addEventListener('click', () => toggleMenu('about'));
    btnProjects.addEventListener('click', () => toggleMenu('projects'));

    // Click sulle righe dei progetti
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
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