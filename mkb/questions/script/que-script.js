
function QueResponse(questionId,optionId){
    this.questionId=questionId;
    this.optionId=optionId;
}

var currentQuestion = document.querySelector(".que").innerText;
var currentOptions = document.querySelector(".options").innerHTML;