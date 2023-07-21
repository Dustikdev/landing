var element = document.querySelector(".icon-button");

element.addEventListener("click", function() {

    var header = document.querySelector("header");
    var nav = header.querySelector('nav');
    nav.style.display = 'flex';
    setTimeout(function() {
        nav.classList.add("visible");
      }, 1); 
    

    // alert('skdjfhsjdkf')




});