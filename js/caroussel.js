// --------------------------Dom---------------------------
let carrousselPic = document.querySelector("#carrousselPic");
let carrousselContainer = document.querySelector("#carouContainer");
const btnRight = document.querySelector("#btnRight");
const btnLeft = document.querySelector("#btnLeft");

// --------------------------ImgArray----------------------
let pic0 = "../img/house/house0.jpg";
let pic1 = "../img/house/house1.jpg";
let pic2 = "../img/house/house2.jpg";
let pic3 = "../img/house/house3.jpg";
let pic4 = "../img/house/house4.jpg";
let carrousselPics = [pic0,pic1,pic2,pic3,pic4];
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
    if (carrousselContainer.childElementCount > 1) {carrousselContainer.removeChild(carrousselContainer.lastChild)}
    index += num;
    (index >= carrousselPics.length && num > 0) ? index = 0:
    (index < 0 && num < 0) ? index = carrousselPics.length-1: index; // Reset index
    let newImg = document.createElement("img");
    newImg.src = carrousselPics[index];
    newImg.classList.add("carouClass","col-12","position-absolute","leftCarou");
    carrousselContainer.appendChild(newImg);
    newImg.style.right = "0";
    /* carrousselPic.src = carrousselPics[index];
    carrousselPic2.src = carrousselPics[index];
    carrousselPic3.src = carrousselPics[index]; */
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