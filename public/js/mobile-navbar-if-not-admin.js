
const navbarToggler = document.querySelector(".navbar-toggler");
const header = document.querySelector(".header");
const sideBar = document.querySelector(".sidebar");
let sidebarStyle = sideBar.currentStyle || window.getComputedStyle(sideBar);

const setMargin = (margin) => {
    sideBar.style.marginLeft = margin;
}

navbarToggler.addEventListener("click", () => {
    sidebarStyle.marginLeft === '0px' ? setMargin('-275px') : setMargin('0px');
});

window.addEventListener("click", function(e) {
    if (!sideBar.contains(e.target) && !header.contains(e.target) && !navbarToggler.contains(e.target)) {
        setMargin('-275px');
    }
});