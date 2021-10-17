// FIRSTNAME
document.getElementById("firstName").addEventListener('input',(f)=>{
    var firstName =f.target.value;
    // check number
    var numberFirstname ="";
    if(firstName.split("").filter(c => "0123456789".includes(c)).length>0){
        document.getElementById("firstName").style.border = "1px solid red";
        numberFirstname = document.getElementById("firstNameTxt").textContent = "Pas de chiffre(s)!";
    }
    else{
        document.getElementById("firstName").style.border = "1px solid green";
        numberFirstname = document.getElementById("firstNameTxt").textContent = " "; 
    }
    // check length
    if(firstName.length===0){
        document.getElementById("firstName").style.border = "1px solid #d8dde2";
    } 
    else if(firstName.length<2 || firstName.length>50){
        document.getElementById("firstName").style.border = "1px solid red";
        document.getElementById("firstNameTxt").textContent = "Prénom entre 2 et 50 lettres!  " + numberFirstname;
    } 
    else{
        document.getElementById("firstNameTxt").textContent = " " + numberFirstname; 
    }
})

// LASTNAME
document.getElementById("lastName").addEventListener('input',(l)=>{
    var lastName =l.target.value;
    // check number
    var numberLastname ="";
    if(lastName.split("").filter(c => "0123456789".includes(c)).length>0){
        document.getElementById("lastName").style.border = "1px solid red";
        numberLastname = document.getElementById("lastNameTxt").textContent = "Pas de chiffre(s)!";
    }
    else{
        document.getElementById("lastName").style.border = "1px solid green";
        numberLastname = document.getElementById("lastNameTxt").textContent = " "; 
    }
    // check length
    if(lastName.length===0){
        document.getElementById("lastName").style.border = "1px solid #d8dde2";
    } 
    else if(lastName.length<2 || lastName.length>50){
        document.getElementById("lastName").style.border = "1px solid red";
        document.getElementById("lastNameTxt").textContent = "Nom entre 2 et 50 lettres!  "  + numberLastname;
    }  
    else{
        document.getElementById("lastNameTxt").textContent = " " + numberLastname; 
    }
})

// PHONE
document.getElementById("phone").addEventListener('input',(p)=>{
var phone = p.target.value;
    // check validate phone number
var isphone = /(?:(?:\+|00)33|0)/.test(phone);
    if(phone.length===0){
        document.getElementById("phone").style.border = "1px solid #d8dde2";
        document.getElementById("phoneError").textContent = " ";
    } 
    else if(isphone===false || phone.match(/\d/g).length!=10){
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("phoneError").textContent = "Ceci n'est pas un numéro de téléphone valide!"   
    }
    else if(isphone===true) {
        document.getElementById("phone").style.border = "1px solid green";
        document.getElementById("phoneError").textContent = " "; 
    }
})
    
// MESSAGE
document.getElementById("message").addEventListener('input',(m)=>{
    var message = m.target.value;
        
        // check length
    var messageCount ="";
    if(message.length===0){
        document.getElementById("message").style.border = "1px solid #d8dde2";
    }    
    else if(message.length>400){
        document.getElementById("message").style.border = "1px solid red";
        messageCount = document.getElementById("messageCount").textContent = "Vous avez dépassé le nombre de mots autorisés!";
    }  
    else{
        document.getElementById("message").style.border = "1px solid green";
        document.getElementById("messageCount").style.color = "green";
        messageCount = document.getElementById("messageCount").textContent = 400-message.length + " mot(s) restant(s)  //" ; 
    }
        // check forbiddenWord
    const words = ["sex", "sexe", "con", "connard"];

    if(words.some(v => message.includes(v))){
        document.getElementById("message").style.border = "1px solid red";
        document.getElementById("messageCount").style.color = "red";
        document.getElementById("messageCount").textContent = messageCount + " Mot INTERDIT!";
    }   
    else{
        document.getElementById("messageCount").textContent = messageCount + " "; 
    }
})