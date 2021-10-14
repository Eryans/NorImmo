// --------------------------Dom---------------------------
let carrousselPic = document.querySelector("#carrousselPic");
const btnRight = document.querySelector("#btnRight");
const btnLeft = document.querySelector("#btnLeft");

// --------------------------ImgArray----------------------
let pic0 = "../img/house/house0.jpg";
let pic1 = "../img/house/house1.jpg";
let pic2 = "../img/house/house2.jpg";
let carrousselPics = [pic0,pic1,pic2];
let index = 0;
let timer = "3000";

// ---------------------------Logic------------------------
carrousselPic.src =  pic0; // set picture to start page with carroussel content
let interval = setInterval(function(){updateCarroussel(-1)},timer);

function updateCarroussel(num){ // use num arg to choose if you want to increase set it to 1, to decrease set to -1 or 0 to stop the carrousselPics index
    if (num > 1 || num < -1){
        console.error("Wrong parameters UpdateCarroussel only accept 1 or -1");
        return;
    }
    index += num;
    (index >= carrousselPics.length && num > 0) ? index = 0:
    (index < 0 && num < 0) ? index = carrousselPics.length-1: index; // Reset index
    carrousselPic.src = carrousselPics[index];
}

btnLeft.addEventListener("click",function(){
    updateCarroussel(-1);
    clearInterval(interval);
    interval = setInterval(function(){updateCarroussel(-1)},timer);
});
btnRight.addEventListener("click",function(){
    updateCarroussel(1);
    clearInterval(interval);
    interval = setInterval(function(){updateCarroussel(-1)},timer);
});