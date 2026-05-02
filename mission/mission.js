
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.className = "dark";
        logo.src = "byui-logo-dark.webp";
        
    } else {
        // code for changes to colors and logo
        document.body.className = "light";
        logo.src = "byui-logo-blue.webp";

    }
}           
                    