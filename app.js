var question = document.querySelectorAll(".questions");
var answer = document.querySelectorAll(".ans");


question.onclick = function(){
    answer.classList.toggle("active");
}

