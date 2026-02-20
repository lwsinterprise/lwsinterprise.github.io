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
    question: "Why do motorcyclists often look round over their right shoulder just before turning right?",
    answers: [
      { answer: "To listen for traffic behind them", correct: false },
      { answer: "Motorcycles don't have mirrors", correct: false },
      { answer: "It helps them balance as they turn", correct: false },
      { answer: "To check for traffic in their blind area", correct: true }
    ]
  },
  {
    question: "Which is the most vulnerable road user?",
    answers: [
      { answer: "Car driver", correct: false },
      { answer: "Tractor driver", correct: false },
      { answer: "Lorry driver", correct: false },
      { answer: "Motorcyclist", correct: true }
    ]
  },
  {
    question: "You're approaching a roundabout. What should you do if there are horses being ridden in front of you?",
    answers: [
      { answer: "Sound your horn as a warning", correct: false },
      { answer: "Treat them like any other vehicle", correct: false },
      { answer: "Give them plenty of room", correct: true },
      { answer: "Accelerate past as quickly as possible", correct: false }
    ]
  },
  {
    question: "As you approach a pelican crossing, the lights change to green. What should you do if older people are still crossing?",
    answers: [
      { answer: "Wave them to cross as quickly as they can", correct: false },
      { answer: "Rev your engine to make them hurry", correct: false },
      { answer: "Flash your lights in case they haven't noticed you", correct: false },
      { answer: "Wait patiently while they cross", correct: true }
    ]
  },
  {
    question: "What action should you take when you see flashing amber lights under a school warning sign?",
    answers: [
      { answer: "Reduce speed until you're clear of the area", correct: true },
      { answer: "Keep up your speed and sound the horn", correct: false },
      { answer: "Increase your speed to clear the area quickly", correct: false },
      { answer: "Wait at the lights until they stop flashing", correct: false }
    ]
  },
  {
    question: "Why should these road markings be kept clear?",
    answers: [
      { answer: "To allow children to be dropped off at school", correct: false },
      { answer: "To allow teachers to park", correct: false },
      { answer: "To allow children to be picked up after school", correct: false },
      { answer: "To allow children to see and be seen when they're crossing the road", correct: true }
    ]
  },
  {
    question: "Where would you see this sign?",
    answers: [
      { answer: "Near a school crossing", correct: false },
      { answer: "At a playground entrance", correct: false },
      { answer: "On a school bus", correct: true },
      { answer: "At a ‘pedestrians only’ area", correct: false }
    ]
  },
  {
    question: "You're following two cyclists as they approach a roundabout in the left-hand lane. Where would you expect the cyclists to go?",
    answers: [
      { answer: "Left", correct: false },
      { answer: "Right", correct: false },
      { answer: "Any direction", correct: true },
      { answer: "Straight ahead", correct: false }
    ]
  },
  {
    question: "You're travelling behind a moped. What should you do if you want to turn left a short distance ahead?",
    answers: [
      { answer: "Overtake the moped before the junction", correct: false },
      { answer: "Pull alongside the moped and stay level until just before the junction", correct: false },
      { answer: "Sound your horn as a warning and pull in front of the moped", correct: false },
      { answer: "Stay behind until the moped has passed the junction", correct: true }
    ]
  },
  {
    question: "You see a horse rider as you approach a roundabout. What should you do if they're signalling right but keeping well to the left?",
    answers: [
      { answer: "Proceed as normal", correct: false },
      { answer: "Keep close to them", correct: false },
      { answer: "Cut in front of them", correct: false },
      { answer: "Stay well back", correct: true }
    ]
  },
  {
    question: "How should you react to inexperienced drivers?",
    answers: [
      { answer: "Sound your horn to warn them of your presence", correct: false },
      { answer: "Be patient and prepare for them to react more slowly", correct: true },
      { answer: "Flash your headlights to indicate that it's safe for them to proceed", correct: false },
      { answer: "Overtake them as soon as possible", correct: false }
    ]
  },
  {
    question: "What should you do when you're following a learner driver who stalls at a junction?",
    answers: [
      { answer: "Be patient, as you expect them to make mistakes", correct: true },
      { answer: "Stay very close behind and flash your headlights", correct: false },
      { answer: "Start to rev your engine if they take too long to restart", correct: false },
      { answer: "Immediately steer around them and drive on", correct: false }
    ]
  },
  {
    question: "You're on a country road. What should you expect to see coming towards you on your side of the road?",
    answers: [
      { answer: "Motorcycles", correct: false },
      { answer: "Bicycles", correct: false },
      { answer: "Pedestrians", correct: true },
      { answer: "Horse riders", correct: false }
    ]
  },
  {
    question: "You're following a cyclist. What should you do when you wish to turn left a short distance ahead?",
    answers: [
      { answer: "Overtake the cyclist before you reach the junction", correct: false },
      { answer: "Pull alongside the cyclist and stay level until after the junction", correct: false },
      { answer: "Hold back until the cyclist has passed the junction", correct: true },
      { answer: "Go around the cyclist on the junction", correct: false }
    ]
  },
  {
    question: "A horse rider is in the left-hand lane approaching a roundabout. Where should you expect the rider to go?",
    answers: [
      { answer: "In any direction", correct: true },
      { answer: "To the right", correct: false },
      { answer: "To the left", correct: false },
      { answer: "Straight ahead", correct: false }
    ]
  },
  {
    question: "Powered vehicles used by disabled people are small and can be hard to see. What must they display if they're travelling on a dual carriageway?",
    answers: [
      { answer: "Flashing red beacon", correct: false },
      { answer: "Flashing green beacon", correct: false },
      { answer: "Flashing blue beacon", correct: false },
      { answer: "Flashing amber beacon", correct: true }
    ]
  },
  {
    question: "What does it mean when a moving vehicle is showing a flashing amber beacon?",
    answers: [
      { answer: "The vehicle is slow moving", correct: true },
      { answer: "The vehicle has broken down", correct: false },
      { answer: "The vehicle is a doctor's car", correct: false },
      { answer: "The vehicle belongs to a school crossing patrol", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Contraflow cycle lane", correct: false },
      { answer: "With-flow cycle lane", correct: true },
      { answer: "Cycles and buses only", correct: false },
      { answer: "No cycles or buses", correct: false }
    ]
  },
  {
    question: "What should you do when you see these horse riders in front?",
    answers: [
      { answer: "Pull out to the middle of the road", correct: false },
      { answer: "Slow down and be ready to stop", correct: true },
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Give a right-turn signal", correct: false }
    ]
  },
  {
    question: "What's the purpose of these road markings?",
    answers: [
      { answer: "To ensure children can see and be seen when they're crossing the road", correct: true },
      { answer: "To enable teachers to have clear access to the school", correct: false },
      { answer: "To ensure delivery vehicles have easy access to the school", correct: false },
      { answer: "To enable parents to pick up or drop off children safely", correct: false }
    ]
  },
  {
    question: "What should you do if the left-hand pavement is closed due to street repairs?",
    answers: [
      { answer: "Watch out for pedestrians walking in the road", correct: true },
      { answer: "Use your right-hand mirror more often", correct: false },
      { answer: "Speed up to get past the roadworks more quickly", correct: false },
      { answer: "Position close to the left-hand kerb", correct: false }
    ]
  },
  {
    question: "What should you do when you're following a motorcyclist along a road that has a poor surface?",
    answers: [
      { answer: "Follow closely so they can see you in their mirrors", correct: false },
      { answer: "Overtake immediately to avoid delays", correct: false },
      { answer: "Allow extra room in case they swerve to avoid potholes", correct: true },
      { answer: "Allow the same room as normal to avoid wasting road space", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No cycling", correct: false },
      { answer: "Cycle route ahead", correct: true },
      { answer: "Cycle parking only", correct: false },
      { answer: "End of cycle route", correct: false }
    ]
  },
  {
    question: "You're approaching this roundabout. What should you do when a cyclist is keeping to the left while signalling to turn right?",
    answers: [
      { answer: "Sound your horn", correct: false },
      { answer: "Overtake them", correct: false },
      { answer: "Assume they're turning left", correct: false },
      { answer: "Allow them space to turn ", correct: true }
    ]
  },
  {
    question: "What should you do when you're approaching this crossing?",
    answers: [
      { answer: "Prepare to slow down and stop", correct: true },
      { answer: "Stop and wave the pedestrians across", correct: false },
      { answer: "Speed up and pass by quickly", correct: false },
      { answer: "Continue unless the pedestrians step out", correct: false }
    ]
  },
  {
    question: "What does it mean if you see a pedestrian with a dog that has a yellow or burgundy coat?",
    answers: [
      { answer: "The pedestrian is an older person", correct: false },
      { answer: "The pedestrian is a dog trainer", correct: false },
      { answer: "The pedestrian is colour-blind", correct: false },
      { answer: "The pedestrian is deaf", correct: true }
    ]
  },
  {
    question: "Who may use toucan crossings?",
    answers: [
      { answer: "Motorcyclists and cyclists", correct: false },
      { answer: "Motorcyclists and pedestrians", correct: false },
      { answer: "Only cyclists", correct: false },
      { answer: "Cyclists and pedestrians", correct: true }
    ]
  },
  {
    question: "This junction, controlled by traffic lights, has a marked area between two stop lines. What's this for?",
    answers: [
      { answer: "To allow taxis to position in front of other traffic", correct: false },
      { answer: "To allow people with disabilities to cross the road", correct: false },
      { answer: "To allow cyclists and pedestrians to cross the road together", correct: false },
      { answer: "To allow cyclists to position in front of other traffic", correct: true }
    ]
  },
  {
    question: "You're about to overtake a cyclist. Why should you leave them as much room as you would give to a car?",
    answers: [
      { answer: "The cyclist might speed up", correct: false },
      { answer: "The cyclist might get off their bicycle", correct: false },
      { answer: "The cyclist might be unsettled if you pass too near them", correct: true },
      { answer: "The cyclist might have to make a left turn", correct: false }
    ]
  },
  {
    question: "What should you do when you're passing loose sheep on the road?",
    answers: [
      { answer: "Briefly sound your horn", correct: false },
      { answer: "Go very slowly", correct: true },
      { answer: "Pass quickly but quietly", correct: false },
      { answer: "Herd them to the side of the road", correct: false }
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