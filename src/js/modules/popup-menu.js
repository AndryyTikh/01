const popupLink = document.querySelectorAll(".link");
const arrowLink = document.querySelectorAll(".link__arrow");

if (popupLink) {
    popupLink.forEach((link) => {
        link.addEventListener("click", function (e) {
            let li = e.target.parentElement.parentElement;
            let arrow = e.target.nextElementSibling;
            li.classList.toggle("_active");
            arrow.classList.toggle("_active");
        });
    });
}
