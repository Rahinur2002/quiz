document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".quizForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      let score = 0;
  
      const correctAnswers = {
        q1: "Mac Mclung",
        q2: "5",
        q3: "1946",
        q4: "celtics",
        q5: "10+stats",
        q6: "kareem",
        q7: "canada",
        q8: "wilt",
        q9: "48",
        q10: "striker"
      };
  
      for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === correctAnswers[`q${i}`]) {
          score++;
        }
      }
  
      alert(`You scored ${score} out of 10!`);
    });
  });
  