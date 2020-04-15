var Questions = [
    "Do you have a consistently depressed mood for at least 2 weeks?",
    "Have you lost interest in activities which previously seemed interesting to you?",
    "Do you have low energy levels and get tired easily?",
    "How would you rate your concentration level? ",
    "Do you have low confidence, or high guilt?",
    "How would you rate your decision-making capability?",
    "Do you have disturbed sleep?",
    "Has your appetite and weight recently :",
    "Do you have suicidal and/or negative thoughts?",
    "Do you have sudden emotional outbreaks",
    "Do you feel :",
    "Do you have frequent mood swings?",
    "Do you show Psychotic symptoms?"
];

var Options=[
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">High</h3><h3 class="o2">Medium</h3><h3 class="o3">Low</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">High</h3><h3 class="o2">Medium</h3><h3 class="o3">Low</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">Increased</h3><h3 class="o2">Decreased</h3><h3 class="o3">Neither</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">Restless and Agitated</h3><h3 class="o2">Decreased activity</h3><h3 class="o3">Neither</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>',
    '<h3 class="o1">YES</h3><h3 class="o2">NO</h3>'

];
console.log(Questions.length);

var q_no=0;
$(".que h2").text(Questions[q_no]);
$(".options").html(Options[q_no]);

var response = [];

function nextQuestion(){
    q_no++;
    if(q_no>=13){
        console.log("Calling thakyou");
        
        thankyouNote();
    }
    $(".que h2").text(Questions[q_no]);
    $(".options").html(Options[q_no]);
    $(".options h3").click(function(event){
        response.push(event.target.innerText);
        
        $(event.target).toggleClass("pressed");
        response.push();

        nextQuestion();
    });
}

function thankyouNote(){
    $(".questioncard").html("<h1>Thank you for Answering.</h1>");
}

function QueResponse(questionId,optionId){
    this.questionId=questionId;
    this.optionId=optionId;
}

var currentQuestion = document.querySelector(".que").innerText;
var currentOptions = document.querySelector(".options").innerHTML;

$(".options h3").click(function(event){
    response.push(event.target.innerText);
    if(q_no>=13){
        console.log("Calling thakyou");
        thankyouNote();
    }
    console.log(event.target);
    $(event.target).toggleClass("pressed");
    nextQuestion();
});

$(".submit .btn").click(function(){
    nextQuestion();
})