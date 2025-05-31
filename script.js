// Add smooth scrolling for anchor links and a fade-in effect on load
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    // Smooth scroll for anchor links (if any in future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Fade-in effect CSS injection
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 0;
    animation: fadeIn 1.2s ease-in forwards;
}
@keyframes fadeIn {
    to { opacity: 1; }
}`;
document.head.appendChild(style);
