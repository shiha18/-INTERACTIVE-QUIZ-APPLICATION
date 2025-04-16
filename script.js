const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"],
      correct: 1
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      correct: 2
    },
    {
      question: "Which is not a JavaScript framework?",
      options: ["React", "Angular", "Vue", "Cassandra"],
      correct: 3
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const resultEl = document.getElementById('result');
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';
  
    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => checkAnswer(index);
      answersEl.appendChild(btn);
    });
  
    resultEl.textContent = '';
  }
  
  function checkAnswer(answer) {
    const correct = quizData[currentQuestion].correct;
    if (answer === correct) {
      score++;
      resultEl.textContent = "Correct!";
      resultEl.style.color = "blue";
    } else {
      resultEl.textContent = "Wrong!";
      resultEl.style.color = "red";
    }
  
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showFinalScore();
      }
    }, 1000);
  }
  
  function showFinalScore() {
    questionEl.textContent = "Quiz Completed!";
    answersEl.innerHTML = "";
    resultEl.textContent = `Your final score is ${score} out of ${quizData.length}`;
    resultEl.style.color = "black";
  }
  
  loadQuestion();
  