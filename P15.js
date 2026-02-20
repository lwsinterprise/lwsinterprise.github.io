// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: "What can seriously reduce your ability to concentrate?",
    answers: [
      { answer: "Drugs", correct: true },
      { answer: "Busy roads", correct: false },
      { answer: "Tinted windows", correct: false },
      { answer: "Weather conditions", correct: false }
    ]
  },
  {
    question: "What must you do if your eyesight has become very poor and you're no longer able to meet the driver's eyesight requirements?",
    answers: [
      { answer: "Tell the driver licensing authority", correct: true },
      { answer: "Tell your doctor", correct: false },
      { answer: "Tell the police ", correct: false },
      { answer: "Tell your optician", correct: false }
    ]
  },
  {
    question: "When should you use hazard warning lights?",
    answers: [
      { answer: "When you're double-parked on a two-way road", correct: false },
      { answer: "When your direction indicators aren't working", correct: false },
      { answer: "When warning oncoming traffic that you intend to stop", correct: false },
      { answer: "When your vehicle has broken down and is causing an obstruction", correct: true }
    ]
  },
  {
    question: "You want to turn left at this junction. What should you do if your view of the main road is restricted?",
    answers: [
      { answer: "Stay well back and wait to see if anything comes", correct: false },
      { answer: "Build up your speed so that you can emerge quickly", correct: false },
      { answer: "Stop and apply the parking brake even if the road is clear", correct: false },
      { answer: "Approach slowly and edge out until you can see more clearly", correct: true }
    ]
  },
  {
    question: "You're driving a car fitted with automatic transmission. When would you use ‘kick down’?",
    answers: [
      { answer: "To engage cruise control", correct: false },
      { answer: "To accelerate quickly", correct: true },
      { answer: "To brake progressively", correct: false },
      { answer: "To improve fuel economy", correct: false }
    ]
  },
  {
    question: "What should you do if it's raining and you're following this lorry on a motorway?",
    answers: [
      { answer: "Allow a two-second separation gap", correct: false },
      { answer: "Switch your headlights onto main beam", correct: false },
      { answer: "Move into a lane that has less spray", correct: false },
      { answer: "Be aware of spray reducing your vision", correct: true }
    ]
  },
  {
    question: "You're driving towards this left-hand bend. What danger should you be anticipating?",
    answers: [
      { answer: "A vehicle overtaking you", correct: false },
      { answer: "Mud on the road", correct: false },
      { answer: "The road getting narrower", correct: false },
      { answer: "Pedestrians walking towards you", correct: true }
    ]
  },
  {
    question: "What should you do if the traffic in the left-hand lane is slowing?",
    answers: [
      { answer: "Slow down, keeping a safe separation distance", correct: true },
      { answer: "Accelerate past the vehicles in the left-hand lane", correct: false },
      { answer: "Pull up on the left-hand verge", correct: false },
      { answer: "Move across and continue in the right-hand lane", correct: false }
    ]
  },
  {
    question: "When may you use hazard warning lights?",
    answers: [
      { answer: "When driving on a motorway to warn traffic behind of a hazard ahead", correct: true },
      { answer: "When you're double-parked on a two-way road", correct: false },
      { answer: "When your direction indicators aren't working", correct: false },
      { answer: "When warning oncoming traffic that you intend to stop", correct: false }
    ]
  },
  {
    question: "You're waiting to emerge at a junction. Your view is restricted by parked vehicles. What can help you to see traffic on the road you're joining?",
    answers: [
      { answer: "Looking for traffic behind you", correct: false },
      { answer: "Reflections of traffic in windows", correct: true },
      { answer: "Making eye contact with other road users", correct: false },
      { answer: "Checking for traffic in your interior mirror", correct: false }
    ]
  },
  {
    question: "What must you do if poor health affects your driving?",
    answers: [
      { answer: "Inform your local police", correct: false },
      { answer: "Avoid using motorways", correct: false },
      { answer: "Always drive accompanied", correct: false },
      { answer: "Inform the licensing authority", correct: true }
    ]
  },
  {
    question: "Why should the junction on the left be kept clear?",
    answers: [
      { answer: "To allow vehicles to enter and emerge", correct: true },
      { answer: "To allow the bus to reverse", correct: false },
      { answer: "To allow vehicles to make a U-turn", correct: false },
      { answer: "To allow vehicles to park", correct: false }
    ]
  },
  {
    question: "What should you do if you start to feel drowsy while you're driving on a motorway?",
    answers: [
      { answer: "Stop on the hard shoulder for a sleep", correct: false },
      { answer: "Open a window and stop as soon as it’s safe and legal", correct: true },
      { answer: "Speed up to arrive at your destination sooner", correct: false },
      { answer: "Slow down and let other drivers overtake", correct: false }
    ]
  },
  {
    question: "Which sign means that there may be people walking along the road?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true }
    ]
  },
  {
    question: "What should you do if you want to turn left at a junction where pedestrians have started to cross?",
    answers: [
      { answer: "Go around them, leaving plenty of room", correct: false },
      { answer: "Stop and wave at them to cross", correct: false },
      { answer: "Sound your horn and proceed", correct: false },
      { answer: "Give way to them", correct: true }
    ]
  },
  {
    question: "What hazard should you be especially aware of if you're turning left into a side road?",
    answers: [
      { answer: "One-way street", correct: false },
      { answer: "Pedestrians", correct: true },
      { answer: "Traffic congestion", correct: false },
      { answer: "Parked vehicles", correct: false }
    ]
  },
  {
    question: "Why should you check for motorcyclists just before turning right into a side road?",
    answers: [
      { answer: "They may be overtaking on your left", correct: false },
      { answer: "They may be following you closely", correct: false },
      { answer: "They may be emerging from the side road", correct: false },
      { answer: "They may be overtaking on your right", correct: true }
    ]
  },
  {
    question: "Why is a toucan crossing different from other crossings?",
    answers: [
      { answer: "Moped riders can use it", correct: false },
      { answer: "It's controlled by a traffic warden", correct: false },
      { answer: "It's controlled by two flashing lights", correct: false },
      { answer: "Pedestrians and cyclists can use it together", correct: true }
    ]
  },
  {
    question: "How will a school crossing patrol signal you to stop?",
    answers: [
      { answer: "By pointing to children waiting to cross", correct: false },
      { answer: "By displaying a red light", correct: false },
      { answer: "By displaying a 'stop' sign", correct: true },
      { answer: "By giving you an arm signal", correct: false }
    ]
  },
  {
    question: "Where would you see this sign?",
    answers: [
      { answer: "In the window of a car taking children to school", correct: false },
      { answer: "At the side of the road", correct: false },
      { answer: "At playground areas", correct: false },
      { answer: "On the rear of a school bus or coach", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No route for pedestrians and cyclists", correct: false },
      { answer: "A route for pedestrians only", correct: false },
      { answer: "A route for cyclists only", correct: false },
      { answer: "A route for pedestrians and cyclists", correct: true }
    ]
  },
  {
    question: "You see a pedestrian carrying a white stick that also has a red band. What does this mean?",
    answers: [
      { answer: "They have limited mobility", correct: false },
      { answer: "They're deaf", correct: false },
      { answer: "They're blind", correct: false },
      { answer: "They're deaf and blind", correct: true }
    ]
  },
  {
    question: "What would you do if you see older people crossing the road ahead?",
    answers: [
      { answer: "Wave them across so they know that you've seen them", correct: false },
      { answer: "Be patient and allow them to cross in their own time", correct: true },
      { answer: "Rev the engine to let them know that you're waiting", correct: false },
      { answer: "Tap the horn in case they're hard of hearing", correct: false }
    ]
  },
  {
    question: "What should you do when you see an older person about to cross the road ahead?",
    answers: [
      { answer: "Expect them to wait for you to pass", correct: false },
      { answer: "Speed up to get past them quickly", correct: false },
      { answer: "Stop and wave them across the road", correct: false },
      { answer: "Be careful; they may misjudge your speed", correct: true }
    ]
  },
  {
    question: "You're approaching a roundabout. What should you do if a cyclist ahead is signalling to turn right?",
    answers: [
      { answer: "Overtake on the right", correct: false },
      { answer: "Give a warning with your horn", correct: false },
      { answer: "Signal the cyclist to move across", correct: false },
      { answer: "Give the cyclist plenty of room", correct: true }
    ]
  },
  {
    question: "Which vehicle should you allow extra room as you overtake them?",
    answers: [
      { answer: "Lorry", correct: false },
      { answer: "Tractor", correct: false },
      { answer: "Bicycle", correct: true },
      { answer: "Road-sweeper", correct: false }
    ]
  },
  {
    question: "Why should you look carefully for motorcyclists and cyclists at junctions?",
    answers: [
      { answer: "They may want to turn into the side road", correct: false },
      { answer: "They may slow down to let you turn", correct: false },
      { answer: "They're harder to see", correct: true },
      { answer: "They might not see you turn", correct: false }
    ]
  },
  {
    question: "You're waiting to come out of a side road. Why should you look carefully for motorcycles?",
    answers: [
      { answer: "Motorcycles are usually faster than cars", correct: false },
      { answer: "Police patrols often use motorcycles", correct: false },
      { answer: "Motorcycles can easily be hidden behind obstructions", correct: true },
      { answer: "Motorcycles have right of way", correct: false }
    ]
  },
  {
    question: "Why do motorcyclists use dipped headlights in daylight?",
    answers: [
      { answer: "So that the rider can be seen more easily", correct: true },
      { answer: "To stop the battery overcharging", correct: false },
      { answer: "To improve the rider’s vision", correct: false },
      { answer: "The rider is inviting you to proceed", correct: false }
    ]
  },
  {
    question: "Why do motorcyclists wear bright clothing?",
    answers: [
      { answer: "They must do so by law", correct: false },
      { answer: "It helps keep them cool in summer", correct: false },
      { answer: "The colours are popular", correct: false },
      { answer: "To make them more visible", correct: true }
    ]
  }
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 4050);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();