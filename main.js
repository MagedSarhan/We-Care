let dropMenu = document.querySelector(".drop-menu");
let menu = document.querySelector(".menu");
let continer = document.querySelector(".continer");
let phoneNav = document.querySelector(".phone-nav");
let noDrop = document.querySelector(".no-drop");
let noDropBtn = document.querySelector(".no-drop i");
let updateDate = new Date();
dropMenu.onclick = () => {
    menu.style.display = "block";
    continer.style.flexDirection = "row";
    phoneNav.style.display = "none";
    noDrop.style.display = "block";
}
noDropBtn.onclick = () => {
    location.reload();
}