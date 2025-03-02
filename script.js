document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.style.animationPlayState = "running";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Initial check
});
