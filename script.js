document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
                element.style.animationPlayState = "running";
            }
        });
    }

    // Initial check and scroll listener
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    // Smooth scroll for navigation (optional, if you add navigation later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
