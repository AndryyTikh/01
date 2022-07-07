let submenuLink = document.querySelectorAll(".menu__link");
submenuLink.forEach((link) => {
    link.addEventListener("click", function (e) {
        if (
            link.nextElementSibling &&
            link.nextElementSibling.tagName == "IMG"
        ) {
            e.preventDefault();
            link.parentElement.classList.toggle("_active");
        }
    });
});
