
let btns = document.getElementsByClassName("question-list");

for (let btn of btns){
    btn.onclick = function(){
       this.lastElementChild.classList.toggle("to-reveal");
   }
}


