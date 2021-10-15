
// function checkSurface(){
// if (!(/^\d+$/.test(inputSurface.value))){
//     document.getElementById("submit-estimate").disabled = false;
// }
// }




document.getElementById("submit-estimate").addEventListener('click', function(e){
    e.preventDefault();

    let inputSurface = document.getElementById("inputSurface").value;
    let room = document.getElementById("room").value;
    let material = document.getElementById("material").value;

    document.getElementById("price").textContent = (material*((inputSurface*1000 + (room*10000))) + "€");
    document.getElementById("price-box").style.borderBottom = "thin solid red";
})

