// это частично работает, но скрипт ранний, сделан через опу

    var imageLens = document.querySelectorAll('.image-lens');
    imageLens.forEach(function(imageLens) {
        const selectedImg = imageLens.querySelector('img');
        imageLens.addEventListener('mouseenter', function() {
        const lens = document.createElement('img');
        lens.src = './assets/galleryPhotos/lens.svg';
        lens.classList.add('lens');
        lens.style.position = 'absolute';
        lens.style.left = '42%';
        lens.style.top = '41%';
        lens.style.opacity = '1';
        lens.style.pointerEvents = 'none';
        imageLens.appendChild(lens);
        selectedImg.style.opacity = '0.1';
      });
      selectedImg.addEventListener('mouseleave', function() {
        const lens = document.querySelector('.lens');
        lens.style.opacity = '0';
        lens.remove();
        selectedImg.style.opacity = '1';
      });
    });