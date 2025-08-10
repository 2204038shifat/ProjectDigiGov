//    ->  hero Selection  <-

document.addEventListener("DOMContentLoaded", function () {
    const slideshow = document.getElementById('background-slideshow');
    if (!slideshow) return; // Ensure element exists

    const images = [
        "url('../image/a.jpeg')",
        "url('../image/b.jpg')",
        "url('../image/c.jpeg')"
    ];

    let currentIndex = 0;

    function changeBackground() {
        slideshow.style.transition = 'opacity 0.4s'; // Add smooth transition if not set in CSS
        slideshow.style.opacity = '0';
        setTimeout(() => {
            slideshow.style.backgroundImage = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
            slideshow.style.opacity = '1';
        }, 400);
    }

    changeBackground(); // initial
    setInterval(changeBackground, 5000); // change every 5s
});

// payment
function redirectToPayment() {
    window.location.href = 'section/payment-page.html';
}