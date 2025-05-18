// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Set current year
document.querySelector('.current-year').textContent = new Date().getFullYear();

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

