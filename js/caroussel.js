// Carroussel JavaScript code written by Jules Noir--Vermeulen :D

// --------------------------Dom---------------------------
const carrousselPic = document.querySelector("#carrousselPic");
const carrousselContainer = document.querySelector("#carouContainer");
const btnRight = document.querySelector("#btnRight");
const btnLeft = document.querySelector("#btnLeft");
const title = document.querySelector("#picTitle");
const description = document.querySelector("#picText");

// --------------------------ImgArray----------------------
let pic0 = ["../img/house/house0.jpg","Maison 1","Lorem blabla1"];
let pic1 = ["../img/house/house1.jpg","Maison 2","Lorem blabla2"];
let pic2 = ["../img/house/house2.jpg","Maison 3","Lorem blabla3"];
let pic3 = ["../img/house/house3.jpg","Maison 4","Lorem blabla4"];
let pic4 = ["../img/house/house4.jpg","Maison 5","Lorem blabla5"];
let carrousselPics = [pic0,pic1,pic2,pic3,pic4];
let index = 0;
let timer = "5000";
let canBePressed = true;
// ---------------------------Logic------------------------
carrousselPic.src =  carrousselPics[0][0]; // set picture to start page with carroussel content
title.innerText = carrousselPics[0][1];
description.innerText = carrousselPics[0][2];
let interval = setInterval(function(){updateCarroussel(1)},timer);

function updateCarroussel(num){ // use num arg to choose if you want to increase set it to 1, to decrease set to -1 or 0 to stop the carrousselPics index
    if (num > 1 || num < -1){
        console.error("Wrong parameters UpdateCarroussel only accept 1, 0 or -1");
        return;
    }
    canBePressed = false; // Make button unusable to prevent graphic bug
    index += num;
    (index >= carrousselPics.length && num > 0) ? index = 0:
    (index < 0 && num < 0) ? index = carrousselPics.length-1: index; // Reset index
    title.style.opacity = 0;
    description.style.opacity = 0;
    let newImg = document.createElement("img");
    newImg.src = carrousselPics[index][0];
    num > 0 ? newImg.classList.add("carouClass","col-12","position-absolute","leftCarou") : newImg.classList.add("carouClass","col-12","position-absolute","rightCarou");
    carrousselContainer.appendChild(newImg);
    setTimeout(function(){
        num > 0 ? newImg.style.right = "0" : newImg.style.left = "0" ;
    },10); // Must use a timeout or the transition doesn't trigger i don't know why and google refuse to help me
    setTimeout(function(){
        carrousselPic.src = carrousselPics[index][0];
        title.innerText = carrousselPics[index][1];
        title.style.opacity = 100;
        description.innerText = carrousselPics[index][2];
        description.style.opacity = 100;
        canBePressed = true; // Make button usable again when animation is over
        carrousselContainer.removeChild(carrousselContainer.lastChild); // Remove container child to avoid image overlap and html overage
    },2000); // when transition is over replace background pic by new one .set time out to CSS transition's duration
}
btnLeft.addEventListener("click",function(){
    btnEvent(-1);
});
btnRight.addEventListener("click",function(){
    btnEvent(1);
});
function btnEvent(n){
    if (canBePressed){
        updateCarroussel(n);
        clearInterval(interval);
        interval = setInterval(function(){updateCarroussel(-1)},timer);
    }
}