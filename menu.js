const menuCheckbox = document.getElementById("side-menu");
const menu = document.querySelector(".nav");
const hamburger = document.querySelector(".hamb");

document.addEventListener("pointerdown", function (event) {

    // Si el menú está cerrado, no hace nada.
    if (!menuCheckbox.checked) {
        return;
    }

    // Clic dentro del menú
    if (menu.contains(event.target)) {
        return;
    }

    // Clic en la hamburguesa.
    if (hamburger.contains(event.target)) {
        return;
    }

    // Clic fuera → cerrar.
    menuCheckbox.checked = false;
});
