document.addEventListener("DOMContentLoaded", function () {
  var correctAnswers = {
    q1: "Mac Mclung",
    q2: "5",
    q3: "1946",
    q4: "celtics",
    q5: "10+stats",
    q6: "kareem",
    q7: "usa",
    q8: "wilt",
    q9: "48",
    q10: "striker",
  };

  var form = document.querySelector(".quizForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    document.querySelectorAll(".feedback").forEach(function(el) { el.remove(); });

    Object.keys(correctAnswers).forEach(function(q, idx) {
      var selected = form.querySelector('input[name="' + q + '"]:checked');
      var block = form.querySelectorAll(".question-block")[idx];
      var feedback = document.createElement("span");
      feedback.className = "feedback";
      feedback.style.marginLeft = "10px";
      if (selected && selected.value === correctAnswers[q]) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Wrong!";
        feedback.style.color = "red";
      }
      block.appendChild(feedback);
    });
  });
});