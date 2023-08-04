//скрипт для заблюривания фона и добавления линзы
const modalWindow = document.querySelector(".modal-window");
const gallery = document.querySelector(".gallery-content");

function blur() {
  gallery.addEventListener("mouseover", function (event) {
    const image = event.target;
    if (image.classList.contains("selected-img")) {
      image.classList.add("blurred");
      const markup = `<img src="./assets/galleryPhotos/lens.svg" class="lens"/>`;
      image.parentNode.insertAdjacentHTML("beforeend", markup);
    }
  });
  gallery.addEventListener("mouseout", function (event) {
    const image = event.target;
    if (image.classList.contains("selected-img")) {
      image.classList.remove("blurred");
      image.parentNode.querySelector(".lens").remove();
    }
  });
  gallery.addEventListener("click", function (event) {
    const image = event.target;
    if (image.classList.contains("selected-img")) {
      let modalImage = event.target.cloneNode(true);
      modalImage.removeAttribute("class");
      modalWindow.classList.add("visible");
      modalWindow.append(modalImage);
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target === modalWindow) {
      modalWindow.classList.remove("visible");
      modalWindow.innerHTML = ''
    }
  });
}
blur();
