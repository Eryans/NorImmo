
let btns = document.getElementsByClassName("question-list");
let answers = document.getElementsByClassName("to-reveal");

for (let btn of btns){
    btn.onclick = function(){
        console.log(this.lastElementChild);
       this.lastElementChild.classList.toggle("to-reveal");
   }
}


