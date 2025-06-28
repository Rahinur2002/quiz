
const questions = [
  {
    question: "Who was the 2025 dunk contest champion?",
    answers: [
      { text: "Mac Mclung", correct: true },
      { text: "Zach Lavine", correct: false },
      { text: "Stephon Castle", correct: false },
      { text: "Andre Jackon Jr", correct: false },
    ],
  },
  {
    question: "How many players are on the court per team during a basketball game?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ]
  },
   { question: "What year was the NBA founded?",
    answers: [
      { text: "1946", correct: true },
      { text: "1952", correct: false },
      { text: "1963", correct: false },
      { text: "1980", correct: false },
    ]
},
 {question: "Which team has won the most NBA championships?",
    answers: [
      { text: "Chicago Bulls", correct: false },
      { text: "Golden State Warriors", correct: false },
      { text: "Los Angeles Lakers", correct: false },
      { text: "Boston Celtics", correct: true },
    ]
},
 {question: "What is a triple-double?",
    answers: [
      { text: "Hitting 3 three-point shots", correct: false },
      { text: "Achieving 10+ in 3 stat categories", correct: true },
      { text: "Committing 3 fouls in a row", correct: false },
      { text: "Dunking three times", correct: false },
    ]
},
{
     question: "Which player is known for the Sky Hook",
    answers: [
      { text: "Shaquille O'Neal", correct: false },
      { text: "Kareem Abdul-Jabbar", correct: true },
      { text: "Tim Duncan", correct: false },
      { text: "Larry Bird", correct: false },
    ]
},
{
     question: "Which country invented basketball?",
    answers: [
      { text: "United States", correct: true },
      { text: "Canada", correct: false },
      { text: "Greece", correct: false },
      { text: "China", correct: false },
    ]
},
{
     question: "Who holds the record for the most points scored in a single NBA game?",
    answers: [
      { text: "Michael Jordan", correct: false },
      { text: "Kobe Bryant", correct: false },
      { text: "Wilt Chamberlain", correct: true },
      { text: "LeBron James", correct: false },
    ]
},
{
     question: "How long is an NBA regulation game (not including overtime)?",
    answers: [
      { text: "40 minutes", correct: false },
      { text: "42 minutes", correct: false },
      { text: "48 minutes", correct: true },
      { text: "60 minutes", correct: false },
    ]
},
{
     question: "Which of these is NOT a position in basketball?",
    answers: [
      { text: "Center", correct: false },
      { text: "Forward", correct: false },
      { text: "Striker", correct: true },
      { text: "Guard", correct: false },
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("Correct");
    score++;
  }else{
    selectedBtn.classList.add("Incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";

}
function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  }else{
    startQuiz();
  }
  
});
startQuiz();













