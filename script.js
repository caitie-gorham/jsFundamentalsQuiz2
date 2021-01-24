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
        "Question Text": "put question text here",
        "Answer One": "put answer one answer here", 
        "Answer Two": "put answer two answer here", 
        "Answer Three": "put answer three answer here", 
        "Answer Four": "put answer four answer here",
        "Correct Answer": "figure out how to denote corrent answer here"
    },
    {
        "Question Text": "put question text here",
        "Answer One": "put answer one answer here",
        "Answer Two": "put answer two answer here", 
        "Answer Three": "put answer three answer here", 
        "Answer Four": "put answer four answer here",
        "Correct Answer": "figure out how to denote corrent answer here"
    },
    {
        "Question Text": "put question text here",
        "Answer One": "put answer one answer here",
        "Answer Two": "put answer two answer here", 
        "Answer Three": "put answer three answer here", 
        "Answer Four": "put answer four answer here",
        "Correct Answer": "figure out how to denote corrent answer here"
    },
    {
        "Question Text": "put question text here",
        "Answer One": "put answer one answer here",
        "Answer Two": "put answer two answer here", 
        "Answer Three": "put answer three answer here", 
        "Answer Four": "put answer four answer here",
        "Correct Answer": "figure out how to denote corrent answer here"
    },
    {
        "Question Text": "put question text here",
        "Answer One": "put answer one answer here",
        "Answer Two": "put answer two answer here", 
        "Answer Three": "put answer three answer here", 
        "Answer Four": "put answer four answer here",
        "Correct Answer": "figure out how to denote corrent answer here"
    },

]

// function to display questions to page - first question displayed on start button click event, next four questions displayed on submit button

// function to display correct/not correct message 

// function to calculate and dispaly score

// function to create form for saving highest score

// local storage
// localStorage.getItemt()
// localStorage.setItem()