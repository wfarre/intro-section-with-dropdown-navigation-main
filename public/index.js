const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");

dropdownBtns.forEach(button => {
    button.addEventListener("click", () => {
        const dropdown = button.closest(".dropdown")
        menuExpanding(dropdown)
    })


window.addEventListener("click", (e) => {
    if (!e.target.matches('.dropdown-btn')) {
        const dropdown = document.getElementById("myDropdown");
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('expanded')) {
                dropdown.classList.remove('expanded');
              }
            });
            
        }
         
});

    // const items = document.querySelectorAll(".dropdown-content__item__link");

    // items.forEach(item => {
    //     item.addEventListener("click", ()=>{
    //         const dropdown = item.closest(".dropdown");
    //         console.log(dropdown);
    //         menuClosing(dropdown)
    //     })
    // })

  
    
    // dropdown.addEventListener("onblur", () => {
    //     console.log("hey");
    //     ;
    //     // const dropdown = button.closest(".dropdown");
    //     dropdown.classList.remove("expanded");
    // })
})


const items = document.querySelectorAll(".dropdown-content__item");

items.forEach(item => {
    item.addEventListener("click", (e) => {
        console.log(e);
    })
})




function menuExpanding(menu){
    menu.classList.toggle("expanded");
}

function menuClosing(menu){
    menu.classList.remove("expanded");
}