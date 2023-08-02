const pressedTab = document.querySelector(".pressed-tab");
const unpressedTab = document.querySelector(".unpressed-tab");
const presentationElement = document.querySelector("#presentation");
const imagesElements = presentationElement.querySelectorAll(".images");

function pressTab(tabs) {
  tabs.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (elem.classList.contains("unpressed-tab")) {
        for (item of tabs) {
          item.classList.add("unpressed-tab");
          item.classList.remove("pressed-tab");
        };
        elem.classList.add("pressed-tab");
        elem.classList.remove("unpressed-tab");
        for (item of imagesElements) {
          item.classList.toggle("invisible-images");
          item.classList.toggle("visible-images");
        };
      }
    });
  });
}
pressTab([pressedTab, unpressedTab]);
