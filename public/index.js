const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
/**
 * expands or close the dropdown menu.
 */
dropdownBtns.forEach(button => {
    button.addEventListener("click", () => {
        const dropdown = button.closest(".dropdown")
        // menuExpanding(dropdown)
        dropdown.classList.toggle("expanded");
    })


    window.addEventListener("click", (e) => {
        if (!e.target.matches('.dropdown-btn')) {
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('expanded')) {
                    dropdown.classList.remove('expanded');
                }
            });

        }

    });
});


const openMenuBtn = document.querySelector(".menu-btn-wrapper");
const closeIcon = document.querySelector(".close-wrapper");
const menuIcon = document.querySelector(".open-wrapper");
/**
 * open the menu on mobile 
 *  */
menuIcon.addEventListener("click", () => {
    const menu = document.querySelector(".nav-container");
    const shadow = document.querySelector(".shadow");

    menuIcon.classList.toggle("hide");
    closeIcon.classList.toggle("hide");
    menu.style.display = "flex";
    shadow.style.display = "block"
});

/**
 * close the menu on mobile 
 *  */
closeIcon.addEventListener("click", () => {
    const menu = document.querySelector(".nav-container");
    const shadow = document.querySelector(".shadow");


    menuIcon.classList.toggle("hide");
    closeIcon.classList.toggle("hide");
    menu.style.display = "none";
    shadow.style.display = "none"

})