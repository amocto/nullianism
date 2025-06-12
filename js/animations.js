// This file handles animations and transitions for various elements on the website.

document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate');

    elementsToAnimate.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
});

// Function to trigger background video play on scroll
const backgroundVideo = document.querySelector('video');

window.addEventListener('scroll', () => {
    if (backgroundVideo) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition > windowHeight / 2) {
            backgroundVideo.play();
        } else {
            backgroundVideo.pause();
        }
    }
});