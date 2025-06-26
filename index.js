document.querySelector('.quizForm').onsubmit = function (e) {
    e.preventDefault();


const answers = {
    q1: "Mac Mclung",
    q2: "5",
    q3: "1946",
    q4: "celtics",
    q5: "10+stats",
    q6: "kareem",
    q7: "usa",
    q8: "wilt",
    q9: "48",
    q10: "striker"

};
let score = 0;

for (let i =1; i <= 10; i++) {
    const qName = "q" + i;
    const selected = document.querySelector(`input[name="${qName}"]:checked`);
    const feedback = document.querySelector(`.feedback-q${i}`);
    
    if (selected) {
        if (selected.value === answers[qName]) {
            feedback.textContent ="Correct!";
            feedback.style.color = "green";
            score++;
        } else {
            feedback.textContent = "Wrong!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "No answer has been selected";
        feedback.style.color = "orange";
    }
        }
         let result = document.querySelector('.result');
         if (!result) {
            result = document.createElement('div');
            result.className = 'result';
            document.querySelector('.quizForm').appendChild(result);
         }
         result.textContent = `Your score: ${score}/10`;
         result.style.fontWeight = "bold";
         result.style.marginTop = "20px";
        };
    
