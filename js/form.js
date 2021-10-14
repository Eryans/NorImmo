var firstName = "";

document.getElementById("firstName").addEventListener('input',(e)=>{
    firstName =e.target.value;
    if (firstName.length<2 || firstName.length>50){
        document.getElementById("firstName").style.border = "1px solid red";
        document.getElementById("test").textContent = "BOUH";
    }  
    else{
        document.getElementById("firstName").style.border = "1px solid green";
        document.getElementById("test").textContent = " "; 
    }
})

document.getElementById("submit").addEventListener('click',()=>{
    firstName.length<2 || firstName.length>50 ?  test.appendchild(div).textContent = "le mot" : alert('OUI OUI');
})

// MESSAGE
var message ="";

document.getElementById("message").addEventListener('input',(i)=>{
    message = i.target.value

if (message.length>400){
    document.getElementById("message").style.border = "1px solid red";
    document.getElementById("messageCount").textContent = "Vous avez dépassé le nombre de mots autorisé!";
}  
else{
    document.getElementById("message").style.border = "1px solid green";
    document.getElementById("messageCount").textContent = 400-message.length + " mots restants"; 
}
})