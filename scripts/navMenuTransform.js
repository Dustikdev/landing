//это пиздец, сюда лучше не смотреть, потом сделаю нормально

var element = document.querySelector(".icon-button");

element.addEventListener("click", function () {
  var header = document.querySelector("header");
  var nav = header.querySelector("nav");
  if (nav.style.display === "none") {
    nav.style.display = "flex";
    setTimeout(function () {
      nav.classList.add("visible");
    }, 1);
  } else {
    nav.classList.remove("visible");
    setTimeout(function () {
      nav.style.display = "none";
    }, 800);
  }
});
