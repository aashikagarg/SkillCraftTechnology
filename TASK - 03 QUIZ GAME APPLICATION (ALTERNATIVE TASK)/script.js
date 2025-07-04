const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "What language is used for web apps?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option");
    btn.onclick = () => selectAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }
  document.querySelectorAll('.option').forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = '#28a745';
    } else {
      btn.style.backgroundColor = '#dc3545';
    }
  });
  document.getElementById("next-btn").style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("next-btn").style.display = 'none';
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").style.display = 'none';
  document.getElementById("restart-btn").style.display = 'inline-block';
  document.getElementById("result").innerText = `Your Score: ${score}/${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-box").style.display = 'block';
  document.getElementById("restart-btn").style.display = 'none';
  document.getElementById("result").innerText = "";
  document.getElementById("next-btn").style.display = 'none';
  showQuestion();
}

window.onload = showQuestion;