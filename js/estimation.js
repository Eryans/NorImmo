


document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    let inputSurface = document.getElementById("inputSurface").value;
    let room = document.getElementById("room").value;
    let material = document.getElementById("material").value;

    console.log(inputSurface, room, material);

    document.getElementById("price").textContent = (material*((inputSurface*1000 + (room*10000))) + "€");
})

