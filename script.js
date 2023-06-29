const quizData = [
    {
        question :"which of the following is markup language",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "php",
        correct: "a",
    },

    {
        question: "what year was javascript launch ",
        a: "1996",
        b: "1994",
        c: "1995",
        d: "Noneof these",
        correct: "c",
    },
    {
        question: "CSS stands for ?",
        a: "Cascade style source",
        b: "Cascading style sheet",
        c: "Computer style system",
        d: "common softeware system",
        correct: "b",
    },
    {
        question: "Javascript is an ___________language",
        a: "Object oriented",
        b: "Object based ",
        c: "Procedural",
        d: "Noneof these",
        correct: "a",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript",
        a: "Var",
        b: "Let",
        c: "Both A and B",
        d: "Noneof these",
        correct: "c",
    },
    {
        question: " Which of the following methods can be used to display data in some form using Javascript?",
        a: "Console.log",
        b: "Window.alert",
        c: "document.write",
        d: "All of the Above",
        correct: "d",
    },
    {
        question: " What keyword is used to check whether a given property is valid or not? ",
        a: "in",
        b: "is in",
        c: "lies",
        d: "exist",
        correct: "a",
    },
    {
        question: " When an operator's value is NULL, the typeof returned by the unary operator:",
        a: "Boolean",
        b: "Object",
        c: "Undefined",
        d: "Integer",
        correct: "b",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript? ",
        a: "Stingify()",
        b: "Parse()",
        c: "Convert()",
        d: "Noneof these",
        correct: "a",
    },
    {
        question: "Which of the following is not a Javascript framework? ",
        a: "Node",
        b: "Vue",
        c: "React",
        d: "All oF these",
        correct: "d",
    },
];

let index = 0;
let correct = 0,
    incorrect=0, 
    total = quizData.length;

let quesBox = document.getElementById("quesBox");
let allInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(total === index){
        return endQuiz()
    }
    reset();
    const data = quizData[index]
    quesBox.innerText = `${index + 1}) ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = quizData[index];
    const ans = getAnswer();
    if(ans === data.correct){
        correct++;
    }
    else{
        incorrect++;
    }
    index++;
   loadQuestion ()

}
 

const getAnswer = () => {
    let answer;
         allInputs.forEach(
            (inputE1) => {
                if(inputE1.checked){
                    answer= inputE1.value;
                    console.log(answer)
                }
            }
         ) 
         return answer;
     
}
const reset = () => {

   allInputs.forEach(
       (inputE1) => {
          inputE1.checked = false;
           }
       
    )

}
 const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h1>ThankYou For Playing The Quiz</h1>
    <h2> ${correct}/${total} Answers are correct  </h2>
    <h2>Your Result Percentage are = ${correct/total*100}%</h2>
    `
    console.log(correct/total)
 }

loadQuestion(index);


// Set the total duration of the quiz in seconds
var totalSeconds = 100;
var countdownElement = document.getElementById('countdown');

// Function to update the countdown
function updateCountdown() {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  // Display the remaining time in the countdown element
  countdownElement.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

  // Decrease the totalSeconds by 1
  totalSeconds--;

  // Check if the timer has reached zero
  if (totalSeconds < 0) {
    // Timer has expired, do something here (e.g., submit the quiz)
    clearTimeout(timer);
    alert('Time is up!');
  }
}

// Start the countdown immediately
updateCountdown();

// Update the countdown every second (1000 milliseconds)
var timer = setInterval(updateCountdown, 1000);
