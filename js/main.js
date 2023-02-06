
// GET ELEMENTS

var elBtn = document.querySelector(".js-burger__btn");
var elBtnImg = document.querySelector(".js-burger__btn-img");
var elHidHeader = document.querySelector(".js-hidden-header");

var icon = true;

elBtn.addEventListener("click", function() {

    // elHidHeader.classList.add("show-header");
    // elHidHeader.classList.remove("show-header");
    elHidHeader.classList.toggle("show-header");

    if(!icon){
        elBtnImg.src = "../images/burger.svg";
        icon = true;
    } else {
        elBtnImg.src = "../images/closebtn.svg";
        icon = false;
    }
})