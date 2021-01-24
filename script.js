var timerEl = document.getElementById('timer'); // create variable that grabs the timer div
var startBtn = document.getElementById("start-button") // create variable that grabs the start button

startBtn.addEventListener("click", function(){
    var timeLeft = 75;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining'; // Set the `textContent` of `timerEl` to show the remaining seconds
            timeLeft--; // Decrement `timeLeft` by 1
          } else if (timeLeft === 1) { // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
          } else { // Once `timeLeft` gets to 0, 
            timerEl.textContent = ''; // set `timerEl` to an empty string
            clearInterval(timeInterval); //  and use `clearInterval()` to stop the timer
          }
        }, 1000);
})

// array of objects of questions

var questionArray = [
    {
        "Q": "put question text here",
        "A1": "put answer one answer here", 
        "A2": "put answer two answer here", 
        "A3": "put answer three answer here", 
        "A4": "put answer four answer here",
        "Correct": "figure out how to denote corrent answer here"
    },
    {
        "Q": "put question text here",
        "A1": "put answer one answer here", 
        "A2": "put answer two answer here", 
        "A3": "put answer three answer here", 
        "A4": "put answer four answer here",
        "Correct": "figure out how to denote corrent answer here"
    },
    {
        "Q": "put question text here",
        "A1": "put answer one answer here", 
        "A2": "put answer two answer here", 
        "A3": "put answer three answer here", 
        "A4": "put answer four answer here",
        "Correct": "figure out how to denote corrent answer here"
    },
    {
        "Q": "put question text here",
        "A1": "put answer one answer here", 
        "A2": "put answer two answer here", 
        "A3": "put answer three answer here", 
        "A4": "put answer four answer here",
        "Correct": "figure out how to denote corrent answer here"
    },
    {
        "Q": "put question text here",
        "A1": "put answer one answer here", 
        "A2": "put answer two answer here", 
        "A3": "put answer three answer here", 
        "A4": "put answer four answer here",
        "Correct": "figure out how to denote corrent answer here"
    },

]

// function to display questions to page - first question displayed on start button click event, next four questions displayed on submit button

var quesContainer = document.getElementById("questions")
var questionDiv = document.getElementById("question-text")
var a1Div = document.getElementById("A1");
var a2Div = document.getElementById("A2");
var a3Div = document.getElementById("A3");
var a4Div = document.getElementById("A4");

startBtn.addEventListener("click", function(){
    var questionText = document.createTextNode("Question: " + questionArray[0].Q)
    questionDiv.appendChild(questionText)
    var a1Text = document.createTextNode("a1: " + questionArray[0].A1);
    a1Div.appendChild(a1Text);
    var a2Text = document.createTextNode("a2: " + questionArray[0].A2);
    a2Div.appendChild(a2Text);
    var a3Text = document.createTextNode("a3: " + questionArray[0].A3);
    a3Div.appendChild(a3Text);
    var a4Text = document.createTextNode("a4: " + questionArray[0].A4);
    a4Div.appendChild(a4Text);
})

var submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", function(){
    
    questionDiv.textContent = "";
    a1Div.textContent = "";
    a2Div.textContent = "";
    a3Div.textContent = "";
    a4Div.textContent = "";
    
    for(i=1; i<questionArray.length; i++) {
        var questionText = document.createTextNode("Question: " + questionArray[i].Q)
        questionDiv.appendChild(questionText)
        var a1Text = document.createTextNode("a1: " + questionArray[i].A1);
        a1Div.appendChild(a1Text);
        var a2Text = document.createTextNode("a2: " + questionArray[i].A2);
        a2Div.appendChild(a2Text);
        var a3Text = document.createTextNode("a3: " + questionArray[i].A3);
        a3Div.appendChild(a3Text);
        var a4Text = document.createTextNode("a4: " + questionArray[i].A4);
        a4Div.appendChild(a4Text);
    }
})



// function to display correct/not correct message 

// function to calculate and dispaly score

// function to create form for saving highest score

// local storage
// localStorage.getItemt()
// localStorage.setItem()