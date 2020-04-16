//element setups



//script begins here
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
    "Do you show Psychotic symptoms?",
];



var Options = [
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">High</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">Medium</h3></label><input type="radio" name="selection" id="o3"><label for="o3"><h3 class="o3">Low</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">High</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">Medium</h3></label><input type="radio" name="selection" id="o3"><label for="o3"><h3 class="o3">Low</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Increased</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">Decreased</h3></label><input type="radio" name="selection" id="o3"><label for="o3"><h3 class="o3">Neither</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Restless and Agitated</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">Decreased activity</h3></label><input type="radio" name="selection" id="o3"><label for="o3"><h3 class="o3">Neither</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
    '<form action="" method="get"><input type="radio" name="selection" id="o1"><label for="o1"><h3 class="o1">Yes</h3></label><input type="radio" name="selection" id="o2"><label for="o2"><h3 class="o2">No</h3></label><br><button class="submit btn btn-lg btn-outline-light">Submit</button></form>',
];

//------- Demo code 2






//-------- Demo code 1


console.log(Questions.length);

var q_no = 0;
$(".que h2").text(Questions[q_no]);
$(".options").html(Options[q_no]);

var response = [];

function nextQuestion() {
    q_no++;
    if (q_no >= 13) {
        console.log("Calling thakyou");

        thankyouNote();
    }
    $(".que h2").text(Questions[q_no]);
    $(".options").html(Options[q_no]);
    // $(".options h3").click(function (event) {
    //     response.push(event.target.innerText);

    //     response.push();

    //     //nextQuestion();
    // });
    $(".submit.btn").click(function () {
        nextQuestion();
    });
}

function thankyouNote() {
    $(".questioncard").html("<h1>Thank you for Answering.</h1>");
}

function QueResponse(questionId, optionId) {
    this.questionId = questionId;
    this.optionId = optionId;
}

var currentQuestion = document.querySelector(".que").innerText;
var currentOptions = document.querySelector(".options").innerHTML;

// $(".options h3").click(function (event) {
//     response.push(event.target.innerText);
//     if (q_no >= 13) {
//         console.log("Calling thakyou");
//         thankyouNote();
//     }
//     console.log(event.target);
//     //nextQuestion();
// });

$(".submit.btn").click(function () {
    nextQuestion();
});

$(".prev").click(function(){
    if(q_no>0){
        q_no-=2;
        nextQuestion();
    }
});
$(".next").click(function(){
    nextQuestion();
});