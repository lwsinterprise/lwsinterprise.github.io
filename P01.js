// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste01.js
const questions = [
  {
    question: "What should you do as you approach this bridge?",
    answers: [
      { answer: "Move to the right", correct: false },
      { answer: "Slow down", correct: true },
      { answer: "Change gear", correct: false },
      { answer: "Keep to 30 mph", correct: false }
    ]
  },
  {
    question: "Where should you avoid overtaking?",
    answers: [
      { answer: "Just after a bend", correct: false },
      { answer: "In a one-way street", correct: false },
      { answer: "On a 30 mph road", correct: false },
      { answer: "Approaching a dip in the road", correct: true }
    ]
  },
  {
    question: "What does this curved arrow road marking mean?",
    answers: [
      { answer: "Heavy vehicles should take the next road on the left to avoid a weight limit", correct: false },
      { answer: "The road ahead bends to the left", correct: false },
      { answer: "Overtaking traffic should move back to the left", correct: true },
      { answer: "The road ahead has a camber to the left", correct: false }
    ]
  },
  {
    question: "What should you do if your mobile phone rings while you're driving or riding?",
    answers: [
      { answer: "Stop immediately", correct: false },
      { answer: "Answer it immediately", correct: false },
      { answer: "Leave it until you have stopped in a safe place", correct: true },
      { answer: "Pull up at the nearest kerb", correct: false }
    ]
  },
  {
    question: "Why are these yellow lines painted across the road?",
    answers: [
      { answer: "To help you choose the correct lane", correct: false },
      { answer: "To help you keep the correct separation distance", correct: false },
      { answer: "To make you aware of your speed", correct: true },
      { answer: "To tell you the distance to the roundabout", correct: false }
    ]
  },
  {
    question: "What should you do when you're approaching traffic lights that have been green for some time?",
    answers: [
      { answer: "Accelerate hard", correct: false },
      { answer: "Maintain your speed", correct: false },
      { answer: "Be ready to stop", correct: true },
      { answer: "Brake hard", correct: false }
    ]
  },
  {
    question: "What should you do before slowing down or stopping your vehicle?",
    answers: [
      { answer: "Sound the horn", correct: false },
      { answer: "Use the mirrors", correct: true },
      { answer: "Select a higher gear", correct: false },
      { answer: "Flash the headlights", correct: false }
    ]
  },
  {
    question: "You're following a large vehicle. Why should you stay a safe distance behind it?",
    answers: [
      { answer: "You'll be able to corner more quickly", correct: false },
      { answer: "You'll help the large vehicle to stop more easily", correct: false },
      { answer: "You'll give the driver a chance to see you in their mirrors", correct: true },
      { answer: "You'll keep out of the wind better", correct: false }
    ]
  },
  {
    question: "Why should you use your mirrors when you see a hazard ahead?",
    answers: [
      { answer: "Because you'll need to accelerate out of danger", correct: false },
      { answer: "To assess how your actions will affect the traffic behind", correct: true },
      { answer: "Because you'll need to brake sharply and stop", correct: false },
      { answer: "To check what's happening on the road ahead", correct: false }
    ]
  },
  {
    question: "You're waiting to turn right at the end of a road. What should you do if your view is obstructed by parked vehicles?",
    answers: [
      { answer: "Stop and then move forward slowly and carefully for a clear view", correct: true },
      { answer: "Move quickly to where you can see so you only block traffic from one direction", correct: false },
      { answer: "Wait for a pedestrian to let you know when it's safe for you to emerge", correct: false },
      { answer: "Turn your vehicle around immediately and find another junction to use", correct: false }
    ]
  },
  {
    question: "There are objects hanging from your interior mirror. Why could this be a hazard?",
    answers: [
      { answer: "Your view could be obstructed", correct: true },
      { answer: "Your sun visor might get tangled", correct: false },
      { answer: "Your radio reception might be affected", correct: false },
      { answer: "Your windscreen could mist up more easily", correct: false }
    ]
  },
  {
    question: "You're on a long motorway journey. What should you do if you start to feel sleepy?",
    answers: [
      { answer: "Play some loud music", correct: false },
      { answer: "Stop on the hard shoulder for a rest", correct: false },
      { answer: "Drive faster to complete your journey sooner", correct: false },
      { answer: "Leave the motorway and stop in a safe place", correct: true }
    ]
  },
  {
    question: "Why should you switch your headlights on when it first starts to get dark?",
    answers: [
      { answer: "To make your dials easier to see", correct: false },
      { answer: "So others can see you more easily", correct: true },
      { answer: "So that you blend in with other drivers", correct: false },
      { answer: "Because the street lights are lit", correct: false }
    ]
  },
  {
    question: "What’s most likely to distract you while you’re driving?",
    answers: [
      { answer: "Using a mobile phone", correct: true },
      { answer: "Using the windscreen wipers", correct: false },
      { answer: "Using the demisters", correct: false },
      { answer: "Using the mirrors", correct: false }
    ]
  },
  {
    question: "You're driving your car. When may you use a hand-held mobile phone?",
    answers: [
      { answer: "When you're receiving a call", correct: false },
      { answer: "When you've parked safely", correct: true },
      { answer: "When you're driving at less than 30 mph", correct: false },
      { answer: "When your car has automatic transmission", correct: false }
    ]
  },
  {
    question: "You're driving on a wet road. What should you do if you have to stop your vehicle in an emergency?",
    answers: [
      { answer: "Apply the parking brake and footbrake together", correct: false },
      { answer: "Keep both hands on the steering wheel", correct: true },
      { answer: "Select reverse gear", correct: false },
      { answer: "Give an arm signal", correct: false }
    ]
  },
  {
    question: "What should you do when you move off from behind a parked car?",
    answers: [
      { answer: "Give a signal after moving off", correct: false },
      { answer: "Look around before moving off", correct: true },
      { answer: "Look around after moving off", correct: false },
      { answer: "Use the exterior mirrors only", correct: false }
    ]
  },
  {
    question: "You're travelling along this road. How should you pass the cyclist?",
    answers: [
      { answer: "Sound your horn as you pass", correct: false },
      { answer: "Keep close to them as you pass", correct: false },
      { answer: "Leave them plenty of room as you pass", correct: true },
      { answer: "Change down one gear before you pass", correct: false }
    ]
  },
  {
    question: "When do windscreen pillars cause a serious obstruction to your view?",
    answers: [
      { answer: "When you're driving on a motorway", correct: false },
      { answer: "When you're driving on a dual carriageway", correct: false },
      { answer: "When you're approaching a one-way street", correct: false },
      { answer: "When you're approaching bends and junctions", correct: true }
    ]
  },
  {
    question: "What should you do if you can't see clearly behind when you're reversing?",
    answers: [
      { answer: "Open the window to look behind", correct: false },
      { answer: "Open the door to look behind", correct: false },
      { answer: "Look in the nearside mirror", correct: false },
      { answer: "Ask someone to guide you", correct: true }
    ]
  },
  {
    question: "What does the term ‘blind spot’ mean?",
    answers: [
      { answer: "An area covered by your right-hand mirror", correct: false },
      { answer: "An area not covered by your headlights", correct: false },
      { answer: "An area covered by your left-hand mirror", correct: false },
      { answer: "An area not visible to the driver", correct: true }
    ]
  },
  {
    question: "What's likely to happen if you use a hands-free phone while you're driving?",
    answers: [
      { answer: "It will improve your safety", correct: false },
      { answer: "It will increase your concentration", correct: false },
      { answer: "It will reduce your view", correct: false },
      { answer: "It will divert your attention", correct: true }
    ]
  },
  {
    question: "You're turning right onto a dual carriageway. What should you do before emerging?",
    answers: [
      { answer: "Stop, apply the parking brake and then select a low gear", correct: false },
      { answer: "Position your vehicle well to the left of the side road", correct: false },
      { answer: "Check that the central reservation is wide enough for your vehicle", correct: true },
      { answer: "Make sure that you leave enough room for a vehicle behind", correct: false }
    ]
  },
  {
    question: "You're waiting to emerge from a junction. The windscreen pillar is restricting your view. What should you be particularly aware of?",
    answers: [
      { answer: "Lorries", correct: false },
      { answer: "Buses", correct: false },
      { answer: "Motorcyclists", correct: true },
      { answer: "Coaches", correct: false }
    ]
  },
  {
    question: "How can you make sure that a satellite navigation (satnav) system doesn't distract you when you're driving?",
    answers: [
      { answer: "Turn it off while you're driving in built-up areas", correct: false },
      { answer: "Choose a voice that you find calming", correct: false },
      { answer: "Only set the destination when you're lost", correct: false },
      { answer: "Set it before starting your journey", correct: true }
    ]
  },
  {
    question: "What must you do when the amber light is flashing at a pelican crossing?",
    answers: [
      { answer: "Stop and wait for the green light", correct: false },
      { answer: "Stop and wait for the red light", correct: false },
      { answer: "Give way to pedestrians waiting to cross", correct: false },
      { answer: "Give way to pedestrians already on the crossing", correct: true }
    ]
  },
  {
    question: "Why should you never wave people across at pedestrian crossings?",
    answers: [
      { answer: "Another vehicle may be coming", correct: true },
      { answer: "They may not be looking", correct: false },
      { answer: "It's safer for you to carry on", correct: false },
      { answer: "They may not be ready to cross", correct: false }
    ]
  },
  {
    question: "Why is it dangerous to travel too close to the vehicle ahead?",
    answers: [
      { answer: "Your engine will overheat", correct: false },
      { answer: "Your mirrors will need adjusting", correct: false },
      { answer: "Your view of the road ahead will be restricted", correct: true },
      { answer: "Your satnav will be confused", correct: false }
    ]
  },
  {
    question: "What will happen if you follow this vehicle too closely?",
    answers: [
      { answer: "Your brakes will overheat", correct: false },
      { answer: "Your fuel consumption will be increased", correct: false },
      { answer: "Your engine will overheat", correct: false },
      { answer: "Your view ahead will be reduced", correct: true }
    ]
  },
  {
    question: "What's the minimum time gap you should leave when following a vehicle on a wet road?",
    answers: [
      { answer: "One second", correct: false },
      { answer: "Two seconds", correct: false },
      { answer: "Three seconds", correct: false },
      { answer: "Four seconds", correct: true }
    ]
  }
];

// substituição do quizz para a primeira pergunta
function init() {
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach((answer, i) => {
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    answerBox.appendChild(answerTemplate);

    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  const buttons = answerBox.querySelectorAll('button');

  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');
      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  nextQuestion();
}

// exibe a próxima pergunta no quizz
function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 4050); // Mantido o tempo original de 4.05s
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();