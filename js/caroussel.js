// --------------------------Dom---------------------------
let carrousselPic = document.querySelector("#carrousselPic");

// --------------------------ImgArray----------------------
let pic0 = "../img/house/house0.jpg";
let pic1 = "../img/house/house1.jpg";
let pic2 = "../img/house/house2.jpg";
let carrousselPics = [pic0,pic1,pic2];
let index = 0;

// ---------------------------Logic------------------------
carrousselPic.src =  pic0; // set picture to start page with carroussel content
setInterval(updateCarroussel,3000);

function updateCarroussel(){
    index++;
    index >= carrousselPics.length ? index = 0: index;
    carrousselPic.src = carrousselPics[index];
}