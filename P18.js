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
    question: "You're travelling behind a bus. What should you do if it pulls up at a bus stop?",
    answers: [
      { answer: "Accelerate past the bus", correct: false },
      { answer: "Look for pedestrians", correct: true },
      { answer: "Sound your horn", correct: false },
      { answer: "Pull in closely behind the bus", correct: false }
    ]
  },
  {
    question: "You're following a lorry on a wet road. What should you do when spray makes it difficult to see the road ahead?",
    answers: [
      { answer: "Drop back until you can see better", correct: true },
      { answer: "Put your headlights on full beam", correct: false },
      { answer: "Keep close to the lorry, away from the spray", correct: false },
      { answer: "Speed up and overtake quickly", correct: false }
    ]
  },
  {
    question: "You're leaving a safe gap as you follow a large vehicle. What should you do if a car moves into this gap?",
    answers: [
      { answer: "Sound your horn", correct: false },
      { answer: "Drop back further", correct: true },
      { answer: "Flash your headlights", correct: false },
      { answer: "Start to overtake", correct: false }
    ]
  },
  {
    question: "What should you do when you're approaching a bus that's signalling to move away from a bus stop?",
    answers: [
      { answer: "Get past before it moves", correct: false },
      { answer: "Allow it to pull away, if it's safe to do so", correct: true },
      { answer: "Flash your headlights as you approach", correct: false },
      { answer: "Signal left and wave the bus on", correct: false }
    ]
  },
  {
    question: "What should you do if you want to overtake a long, slow-moving vehicle on a busy road?",
    answers: [
      { answer: "Follow it closely and keep moving out to see the road ahead", correct: false },
      { answer: "Flash your headlights for the oncoming traffic to give way", correct: false },
      { answer: "Stay behind until the driver waves you past", correct: false },
      { answer: "Keep well back so that you get a good view of the road ahead", correct: true }
    ]
  },
  {
    question: "Which vehicles are least likely to be affected by side wind?",
    answers: [
      { answer: "Cyclists", correct: false },
      { answer: "Motorcyclists", correct: false },
      { answer: "High-sided vehicles", correct: false },
      { answer: "Cars", correct: true }
    ]
  },
  {
    question: "What should you do as you approach this lorry?",
    answers: [
      { answer: "Slow down and be prepared to wait", correct: true },
      { answer: "Make the lorry wait for you", correct: false },
      { answer: "Flash your lights at the lorry", correct: false },
      { answer: "Move to the right-hand side of the road", correct: false }
    ]
  },
  {
    question: "You're following a large vehicle as it approaches a crossroads. What should you do if the driver signals to turn left?",
    answers: [
      { answer: "Overtake if you can leave plenty of room", correct: false },
      { answer: "Overtake if there are no oncoming vehicles", correct: false },
      { answer: "Wait for the driver to cancel their signal", correct: false },
      { answer: "Wait for the vehicle to finish turning", correct: true }
    ]
  },
  {
    question: "Why is it more difficult to overtake a large vehicle than a car?",
    answers: [
      { answer: "It will take longer to overtake a large vehicle", correct: true },
      { answer: "A large vehicle will be fitted with a speed limiter", correct: false },
      { answer: "A large vehicle will have air brakes", correct: false },
      { answer: "It will take longer for a large vehicle to accelerate", correct: false }
    ]
  },
  {
    question: "It's very windy. What should you do if you're behind a motorcyclist who's overtaking a high-sided vehicle?",
    answers: [
      { answer: "Overtake the motorcyclist immediately", correct: false },
      { answer: "Keep well back", correct: true },
      { answer: "Stay level with the motorcyclist", correct: false },
      { answer: "Keep close to the motorcyclist", correct: false }
    ]
  },
  {
    question: "What should you do if there's a bus at a bus stop ahead of you?",
    answers: [
      { answer: "Flash your lights to warn the driver of your presence", correct: false },
      { answer: "Continue at the same speed but sound your horn as a warning", correct: false },
      { answer: "Watch carefully for the sudden appearance of pedestrians", correct: true },
      { answer: "Pass the bus as quickly as you possibly can", correct: false }
    ]
  },
  {
    question: "What should you be prepared to do in this situation?",
    answers: [
      { answer: "Sound your horn and continue", correct: false },
      { answer: "Slow down and give way", correct: true },
      { answer: "Report the driver to the police", correct: false },
      { answer: "Squeeze through the gap", correct: false }
    ]
  },
  {
    question: "Why should drivers be more careful on roads where trams also operate?",
    answers: [
      { answer: "Because trams don't have a horn", correct: false },
      { answer: "Because trams can't stop for cars", correct: false },
      { answer: "Because trams don't have lights", correct: false },
      { answer: "Because trams can't steer to avoid obstructions", correct: true }
    ]
  },
  {
    question: "You're towing a caravan. Which is the safest type of rear-view mirror to use?",
    answers: [
      { answer: "Interior wide-angle mirror", correct: false },
      { answer: "Extended-arm side mirrors", correct: true },
      { answer: "Ordinary door mirrors", correct: false },
      { answer: "Ordinary interior mirror", correct: false }
    ]
  },
  {
    question: "You're driving in heavy traffic on a wet road. Which lights should you use if there's a lot of surface spray?",
    answers: [
      { answer: "Main-beam headlights", correct: false },
      { answer: "Sidelights only", correct: false },
      { answer: "Rear fog lights if visibility is more than 100 metres (328 feet)", correct: false },
      { answer: "Dipped headlights", correct: true }
    ]
  },
  {
    question: "What should you do if you overtake a cyclist when it's very windy?",
    answers: [
      { answer: "Overtake very slowly", correct: false },
      { answer: "Keep close as you pass", correct: false },
      { answer: "Sound your horn repeatedly", correct: false },
      { answer: "Allow extra room", correct: true }
    ]
  },
  {
    question: "When may you overtake another vehicle on their left?",
    answers: [
      { answer: "When you’re in a one-way street", correct: true },
      { answer: "When approaching a motorway slip road where you’ll be turning off", correct: false },
      { answer: "When the vehicle in front is signalling to turn left", correct: false },
      { answer: "When a slower vehicle is travelling in the right-hand lane of a dual carriageway", correct: false }
    ]
  },
  {
    question: "You're travelling in very heavy rain. How is this likely to affect your overall stopping distance?",
    answers: [
      { answer: "It will be doubled", correct: true },
      { answer: "It will be halved", correct: false },
      { answer: "It will be ten times greater", correct: false },
      { answer: "It will be no different", correct: false }
    ]
  },
  {
    question: "What should you do when you're overtaking at night?",
    answers: [
      { answer: "Wait until a bend so that you can see oncoming headlights", correct: false },
      { answer: "Sound your horn twice before moving out", correct: false },
      { answer: "Go past slowly so that you can react to unseen hazards", correct: false },
      { answer: "Beware of bends in the road ahead", correct: true }
    ]
  },
  {
    question: "When may you wait in a box junction?",
    answers: [
      { answer: "When you're stationary in a queue of traffic", correct: false },
      { answer: "When approaching a pelican crossing", correct: false },
      { answer: "When approaching a zebra crossing", correct: false },
      { answer: "When oncoming traffic prevents you turning right", correct: true }
    ]
  },
  {
    question: "Which plate may appear with this road sign?",
    answers: [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What's the reason for traffic-calming measures?",
    answers: [
      { answer: "To stop road rage", correct: false },
      { answer: "To make overtaking easier", correct: false },
      { answer: "To slow traffic down", correct: true },
      { answer: "To make parking easier", correct: false }
    ]
  },
  {
    question: "What colour are the reflective studs along the left-hand edge of the motorway?",
    answers: [
      { answer: "Green", correct: false },
      { answer: "Amber", correct: false },
      { answer: "Red", correct: true },
      { answer: "White", correct: false }
    ]
  },
  {
    question: "What's a rumble device designed to do?",
    answers: [
      { answer: "Give directions", correct: false },
      { answer: "Prevent cattle escaping", correct: false },
      { answer: "Alert you to low tyre pressure", correct: false },
      { answer: "Alert you to a hazard", correct: true }
    ]
  },
  {
    question: "What should you do if you have to make a journey in foggy conditions?",
    answers: [
      { answer: "Follow other vehicles’ tail lights closely", correct: false },
      { answer: "Avoid using dipped headlights", correct: false },
      { answer: "Leave plenty of time for your journey", correct: true },
      { answer: "Keep two seconds behind the vehicle ahead", correct: false }
    ]
  },
  {
    question: "What must you do when you're overtaking a car at night?",
    answers: [
      { answer: "Flash your headlights before overtaking", correct: false },
      { answer: "Select a higher gear", correct: false },
      { answer: "Switch your headlights to main beam before overtaking", correct: false },
      { answer: "Make sure you don't dazzle other road users", correct: true }
    ]
  },
  {
    question: "You're travelling on a road that has road humps. What should you do when the driver in front is travelling more slowly than you?",
    answers: [
      { answer: "Sound your horn", correct: false },
      { answer: "Overtake as soon as you can", correct: false },
      { answer: "Flash your headlights", correct: false },
      { answer: "Slow down and stay behind", correct: true }
    ]
  },
  {
    question: "What’s the purpose of the yellow lines painted across the road?",
    answers: [
      { answer: "To show a safe distance between vehicles", correct: false },
      { answer: "To keep the area clear of traffic", correct: false },
      { answer: "To make you aware of your speed ", correct: true },
      { answer: "To warn you to change direction", correct: false }
    ]
  },
  {
    question: "What should you do when you meet an oncoming vehicle on a single-track road?",
    answers: [
      { answer: "Reverse back to the main road", correct: false },
      { answer: "Carry out an emergency stop", correct: false },
      { answer: "Stop at a passing place", correct: true },
      { answer: "Switch on your hazard warning lights", correct: false }
    ]
  },
  {
    question: "The road is wet. Why would a motorcyclist steer around drain covers while they were cornering?",
    answers: [
      { answer: "To avoid puncturing the tyres on the edge of the drain covers", correct: false },
      { answer: "To prevent the motorcycle sliding on the metal drain covers", correct: true },
      { answer: "To help judge the bend using the drain covers as marker points", correct: false },
      { answer: "To avoid splashing pedestrians on the pavement", correct: false }
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