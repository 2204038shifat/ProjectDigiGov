
                    //    ->  hero Selection  <-

   document.addEventListener("DOMContentLoaded",function()
  {
    const slideshow=document.getElementById('background-slideshow');
  })
                    


  const images = [
    "url('../image/1.jpeg')",
    "url('../image/2.jpg')",
    "url('../image/3.jpeg')"
  ];

  let currentIndex = 0;
  const slideshow = document.getElementById('background-slideshow');

  function changeBackground() {

    slideshow.style.opacity='0';
        setTimeout(() => {
      slideshow.style.backgroundImage = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;

      // Fade in
      slideshow.style.opacity = '100';
    }, 400); 

  }

  changeBackground(); // initial
  setInterval(changeBackground, 5000); // change every 5s



  // payment

  function redirectToPayemnt()
  {
    window.location.href='section/payment-page.html';
  }


