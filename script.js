// Smooth scrolling for navigation links (optional but nice)
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for sticky header height
                behavior: 'smooth'
            });
        }
    });
});

// Update footer year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Optional: Active navigation link highlighting based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('main section');
    const navLi = document.querySelectorAll('header nav ul li a');
    const headerOffset = 80; // Adjust based on your header's height

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerOffset;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
