const userIcon = document.querySelector(".user-header__icon");
let userMenu = document.querySelector(".user-header__menu");
if (userIcon) {
    userIcon.addEventListener("click", function () {
        userMenu.classList.toggle('_active');
    })
}

document.body.addEventListener('click', function (e) {
    if (!e.target.classList.contains('user-header__icon') && !e.target.classList.contains('user-header__menu')) {
        userMenu.classList.remove('_active');
    }
})