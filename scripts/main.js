//для переключения табов
const pressedTab = document.querySelector(".pressed-tab");
const unpressedTab = document.querySelector(".unpressed-tab");
const presentationElement = document.querySelector("#presentation");
const imagesElements = presentationElement.querySelectorAll(".images");

function pressTab(tabs, images) {
  tabs.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (elem.classList.contains("unpressed-tab")) {
        for (item of tabs) {
          item.classList.add("unpressed-tab");
          item.classList.remove("pressed-tab");
        }
        elem.classList.add("pressed-tab");
        elem.classList.remove("unpressed-tab");
        for (item of images) {
          item.classList.toggle("invisible-images");
          item.classList.toggle("visible-images");
        }
      }
    });
  });
}
pressTab([pressedTab, unpressedTab], imagesElements);

//для аккордиона

function openAccordion() {
  let dropdownMenus = document.querySelectorAll(".dropdown-menu");
  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", () => {
      if (!menu.classList.contains("opened")) {
        document.querySelectorAll(".content").forEach((item) => {
          item.classList.remove("opened");
          item.parentNode.classList.remove("opened");
        });
      }
      menu.classList.toggle("opened");
      menu.querySelector(".content").classList.toggle("opened");
    });
  });
}
openAccordion();
