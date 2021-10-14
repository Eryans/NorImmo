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
let timer = "5000";
let canBePressed = true;
// ---------------------------Logic------------------------
carrousselPic.src =  pic0; // set picture to start page with carroussel content
let interval = setInterval(function(){updateCarroussel(1)},timer);

function updateCarroussel(num){ // use num arg to choose if you want to increase set it to 1, to decrease set to -1 or 0 to stop the carrousselPics index
    if (num > 1 || num < -1){
        console.error("Wrong parameters UpdateCarroussel only accept 1 or -1");
        return;
    }
    canBePressed = false;
    if (carrousselContainer.childElementCount > 1) {carrousselContainer.removeChild(carrousselContainer.lastChild);}
    index += num;
    (index >= carrousselPics.length && num > 0) ? index = 0:
    (index < 0 && num < 0) ? index = carrousselPics.length-1: index; // Reset index
    let newImg = document.createElement("img");
    newImg.src = carrousselPics[index];
    num > 0 ? newImg.classList.add("carouClass","col-12","position-absolute","leftCarou") : newImg.classList.add("carouClass","col-12","position-absolute","rightCarou");
    carrousselContainer.appendChild(newImg);
    setTimeout(function(){
        num > 0 ? newImg.style.right = "0" : newImg.style.left = "0" ;
    },1); // Must use a timeout or the transition doesn't trigger i don't know why
    setTimeout(function(){
        carrousselPic.src = carrousselPics[index];
        canBePressed = true;
    },2000); // when transition is over replace background pic by new one .set time out to CSS transition's duration
}

btnLeft.addEventListener("click",function(){
    if (canBePressed){
    canBePressed = false;
    updateCarroussel(-1);
    clearInterval(interval);
    interval = setInterval(function(){updateCarroussel(-1)},timer);
}
});
btnRight.addEventListener("click",function(){
    if (canBePressed){
    canBePressed = false;
    updateCarroussel(1);
    clearInterval(interval);
    interval = setInterval(function(){updateCarroussel(-1)},timer);
}
});