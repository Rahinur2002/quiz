# quiz

  
      <div class="question-block">
        <label>2. How many players are on the court per team during a basketball game?</label><br />
        <input type="radio" name="q2" value="4" /> 4<br />
        <input type="radio" name="q2" value="5" /> 5<br />
        <input type="radio" name="q2" value="6" /> 6<br />
        <input type="radio" name="q2" value="7" /> 7<br />
        <span class="feedback feedback-q2"></span>

      </div>
  
      <div class="question-block">
        <label>3. What year was the NBA founded?</label><br />
        <input type="radio" name="q3" value="1946" /> 1946<br />
        <input type="radio" name="q3" value="1952" /> 1952<br />
        <input type="radio" name="q3" value="1963" /> 1963<br />
        <input type="radio" name="q3" value="1980" /> 1980<br />
        <span class="feedback feedback-q3"></span>

      </div>
  
      <div class="question-block">
        <label>4. Which team has won the most NBA championships?</label><br />
        <input type="radio" name="q4" value="bulls" /> Chicago Bulls<br />
        <input type="radio" name="q4" value="warriors" /> Golden State Warriors<br />
        <input type="radio" name="q4" value="lakers" /> Los Angeles Lakers<br />
        <input type="radio" name="q4" value="celtics" /> Boston Celtics<br />
        <span class="feedback feedback-q4"></span>

      </div>
  
      <div class="question-block">
        <label>5. What is a "triple-double"?</label><br />
        <input type="radio" name="q5" value="3shots" /> Hitting 3 three-point shots<br />
        <input type="radio" name="q5" value="10+stats" /> Achieving 10+ in 3 stat categories<br />
        <input type="radio" name="q5" value="3fouls" /> Committing 3 fouls in a row<br />
        <input type="radio" name="q5" value="3dunks" /> Dunking three times<br />
        <span class="feedback feedback-q5"></span>

      </div>
  
      <div class="question-block">
        <label>6. Which player is known for the "Sky Hook" shot?</label><br />
        <input type="radio" name="q6" value="shaq" /> Shaquille O'Neal<br />
        <input type="radio" name="q6" value="kareem" /> Kareem Abdul-Jabbar<br />
        <input type="radio" name="q6" value="duncan" /> Tim Duncan<br />
        <input type="radio" name="q6" value="bird" /> Larry Bird<br />
        <span class="feedback feedback-q6"></span>

      </div>
  
      <div class="question-block">
        <label>7. Which country invented basketball?</label><br />
        <input type="radio" name="q7" value="usa" /> United States<br />
        <input type="radio" name="q7" value="canada" /> Canada<br />
        <input type="radio" name="q7" value="greece" /> Greece<br />
        <input type="radio" name="q7" value="china" /> China<br />
        <span class="feedback feedback-q7"></span>

      </div>
  
      <div class="question-block">
        <label>8. Who holds the record for the most points scored in a single NBA game?</label><br />
        <input type="radio" name="q8" value="jordan" /> Michael Jordan<br />
        <input type="radio" name="q8" value="kobe" /> Kobe Bryant<br />
        <input type="radio" name="q8" value="wilt" /> Wilt Chamberlain<br />
        <input type="radio" name="q8" value="lebron" /> LeBron James<br />
        <span class="feedback feedback-q8"></span>

      </div>
  
      <div class="question-block">
        <label>9. How long is an NBA regulation game (not including overtime)?</label><br />
        <input type="radio" name="q9" value="40" /> 40 minutes<br />
        <input type="radio" name="q9" value="42" /> 42 minutes<br />
        <input type="radio" name="q9" value="48" /> 48 minutes<br />
        <input type="radio" name="q9" value="60" /> 60 minutes<br />
        <span class="feedback feedback-q9"></span>

      </div>
  
      <div class="question-block">
        <label>10. Which of these is NOT a position in basketball?</label><br />
        <input type="radio" name="q10" value="center" /> Center<br />
        <input type="radio" name="q10" value="forward" /> Forward<br />
        <input type="radio" name="q10" value="striker" /> Striker<br />
        <input type="radio" name="q10" value="guard" /> Guard<br />
        <span class="feedback feedback-q10"></span>

      </div>
  
      <button class="submitbtn" type="submit">Submit</button>
    </form>
    </form>


const questions = [
  "1. Who was the 2025 dunk contest champion?",
  "Q2",
  "Q3",
  "Q4",
  "Q5",
];
const choices = [
  ["Mac Mclung", "Zach Lavine", "Stephon Castle", "Andre Jackon Jr"],
  ["4", "5", "6", "7"],
  [],
];
const answers = ["Mac Mclung", "5"];

document.querySelector(".quizForm").onsubmit = function (e) {
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
    q10: "striker",
  };
  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const qName = "q" + i;
    const selected = document.querySelector(`input[name="${qName}"]:checked`);
    const feedback = document.querySelector(`.feedback-q${i}`);

    if (selected) {
      if (selected.value === answers[qName]) {
        feedback.textContent = "Correct!";
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
  let result = document.querySelector(".result");
  if (!result) {
    result = document.createElement("div");
    result.className = "result";
    document.querySelector(".quizForm").appendChild(result);
  }
  result.textContent = `Your score: ${score}/10`;
  result.style.fontWeight = "bold";
  result.style.marginTop = "20px";
};
