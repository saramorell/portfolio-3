document.addEventListener("DOMContentLoaded", function() {

  ScrollReveal().reveal('#projects', { duration: 2000 });
  ScrollReveal().reveal('#skills', { duration: 2000 });

  //begin gallery

  let createImage = (function() {
        console.log('hello')
    // console.log('hello')
    let photos = ['portfolio-image-24', 'portfolio-image-19', 'portfolio-image-2', 'portfolio-image-3', 'portfolio-image-5', 'portfolio-image-6', 'portfolio-image-7', 'portfolio-image-8', 'portfolio-image-10', 'portfolio-image-11', 'portfolio-image-12', 'portfolio-image-13', 'portfolio-image-14', 'portfolio-image-15', 'portfolio-image-17', 'portfolio-image-18', 'portfolio-image-1', 'portfolio-image-21', 'portfolio-image-22', 'portfolio-image-23', 'portfolio-image-25', 'portfolio-image-26', 'portfolio-image-27', 'portfolio-image-28', ]

    let mainGallery = document.getElementById('gallery-wrap')


    for (let i = 0; i < photos.length; i++) {
      let imagePath = "./images/portfolio_images/" + photos[i] + ".jpg"

      let newImage = document.createElement('img')
      newImage.setAttribute('src', imagePath)
      newImage.classList.add('grid-item')
      mainGallery.appendChild(newImage)
    }
  }());
  // end gallery
});
