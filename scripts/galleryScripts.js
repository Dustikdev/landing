//скрипт для заблюривания фона и добавления линзы
function blur() {
  const gallery = document.querySelector(".gallery-content");
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
    const modalWindow = document.querySelector(".modal-window");
    if (image.classList.contains("selected-img")) {
      let modalImage = event.target.cloneNode(true);
      modalImage.removeAttribute("class");
      console.log(modalImage);
      modalWindow.classList.add("visible");
      modalWindow.append(modalImage);
    }
  });
}
blur();
