const burger = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const menuLink = document.querySelectorAll(".menu__link");

if (burger) {
    burger.addEventListener("click", function () {
        burger.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}

menuLink.forEach((link) => {
    link.addEventListener('click', function () {
        if (burger.classList.contains("_active")) {
            burger.classList.remove("_active");
            menuBody.classList.remove("_active");
            document.body.classList.remove("_lock");
        }
    })
})