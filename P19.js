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
    question: "Why should you test your brakes after this hazard?",
    answers: [
      { answer: "You'll be on a slippery road", correct: false },
      { answer: "Your brakes will be wet", correct: true },
      { answer: "You'll be going down a long hill", correct: false },
      { answer: "You'll have just crossed a long bridge", correct: false }
    ]
  },
  {
    question: "Why should you reduce your speed when you're driving or riding in fog?",
    answers: [
      { answer: "The brakes don't work as well", correct: false },
      { answer: "You'll be dazzled by other headlights", correct: false },
      { answer: "The engine will take longer to warm up", correct: false },
      { answer: "It's more difficult to see what's ahead", correct: true }
    ]
  },
  {
    question: "What will happen to your car when you drive up a steep hill?",
    answers: [
      { answer: "The high gears will pull better", correct: false },
      { answer: "The steering will feel heavier", correct: false },
      { answer: "Overtaking will be easier", correct: false },
      { answer: "The engine will work harder", correct: true }
    ]
  },
  {
    question: "You're driving on the motorway in windy conditions. What should you do as you overtake a high-sided vehicle?",
    answers: [
      { answer: "Increase your speed", correct: false },
      { answer: "Be wary of a sudden gust", correct: true },
      { answer: "Drive alongside very closely", correct: false },
      { answer: "Expect normal conditions", correct: false }
    ]
  },
  {
    question: "You're driving in fog. Why should you keep well back from the vehicle in front?",
    answers: [
      { answer: "In case it changes direction suddenly", correct: false },
      { answer: "In case its fog lights dazzle you", correct: false },
      { answer: "In case it stops suddenly", correct: true },
      { answer: "In case its brake lights dazzle you", correct: false }
    ]
  },
  {
    question: "What should you do if you park on the road when it's foggy?",
    answers: [
      { answer: "Leave parking lights switched on", correct: true },
      { answer: "Leave dipped headlights and fog lights switched on", correct: false },
      { answer: "Leave dipped headlights switched on", correct: false },
      { answer: "Leave main-beam headlights switched on", correct: false }
    ]
  },
  {
    question: "You're driving at night. What should you do if you're dazzled by headlights coming towards you?",
    answers: [
      { answer: "Pull down your sun visor", correct: false },
      { answer: "Slow down or stop", correct: true },
      { answer: "Flash your main-beam headlights", correct: false },
      { answer: "Shade your eyes with your hand", correct: false }
    ]
  },
  {
    question: "When may front fog lights be used?",
    answers: [
      { answer: "When visibility is seriously reduced", correct: true },
      { answer: "When they're fitted above the bumper", correct: false },
      { answer: "When they aren't as bright as the headlights", correct: false },
      { answer: "When an audible warning device is used", correct: false }
    ]
  },
  {
    question: "You're driving with your front fog lights switched on. What should you do if the fog has cleared?",
    answers: [
      { answer: "Leave them on if other drivers have their lights on", correct: false },
      { answer: "Switch them off as long as visibility remains good", correct: true },
      { answer: "Flash them to warn oncoming traffic that it's foggy", correct: false },
      { answer: "Drive with them on instead of your headlights", correct: false }
    ]
  },
  {
    question: "Why should you switch off your rear fog lights when the fog has cleared?",
    answers: [
      { answer: "To allow your headlights to work", correct: false },
      { answer: "To stop draining the battery", correct: false },
      { answer: "To stop the engine losing power", correct: false },
      { answer: "To prevent dazzling drivers behind", correct: true }
    ]
  },
  {
    question: "What will happen if you use rear fog lights in good conditions?",
    answers: [
      { answer: "They'll make it safer when towing a trailer", correct: false },
      { answer: "They'll protect you from larger vehicles", correct: false },
      { answer: "They'll dazzle other drivers", correct: true },
      { answer: "They'll make drivers behind keep back", correct: false }
    ]
  },
  {
    question: "Why would you fit chains to your wheels?",
    answers: [
      { answer: "To help prevent damage to the road surface", correct: false },
      { answer: "To help prevent wear to the tyres", correct: false },
      { answer: "To help prevent skidding in deep snow", correct: true },
      { answer: "To help prevent the brakes locking", correct: false }
    ]
  },
  {
    question: "How can you use your vehicle's engine to control your speed?",
    answers: [
      { answer: "By changing to a lower gear", correct: true },
      { answer: "By selecting reverse gear", correct: false },
      { answer: "By changing to a higher gear", correct: false },
      { answer: "By selecting neutral", correct: false }
    ]
  },
  {
    question: "Why could it be dangerous to keep the clutch down, or select neutral, for long periods of time while you're driving?",
    answers: [
      { answer: "Fuel spillage will occur", correct: false },
      { answer: "Engine damage may be caused", correct: false },
      { answer: "You'll have less steering and braking control", correct: true },
      { answer: "It will wear tyres out more quickly", correct: false }
    ]
  },
  {
    question: "You're driving on an icy road. What distance from the car in front should you drive?",
    answers: [
      { answer: "Four times the normal distance", correct: false },
      { answer: "Six times the normal distance", correct: false },
      { answer: "Eight times the normal distance", correct: false },
      { answer: "Ten times the normal distance", correct: true }
    ]
  },
  {
    question: "Which lights must you use if you're driving on a well-lit motorway at night?",
    answers: [
      { answer: "Use only your sidelights", correct: false },
      { answer: "Use your headlights", correct: true },
      { answer: "Use rear fog lights", correct: false },
      { answer: "Use front fog lights", correct: false }
    ]
  },
  {
    question: "You're driving on a motorway at night. Which lights should you have on if there are other vehicles just ahead of you?",
    answers: [
      { answer: "Front fog lights", correct: false },
      { answer: "Main-beam headlights", correct: false },
      { answer: "Sidelights only", correct: false },
      { answer: "Dipped headlights", correct: true }
    ]
  },
  {
    question: "What will affect your vehicle's stopping distance?",
    answers: [
      { answer: "The speed limit", correct: false },
      { answer: "The street lighting", correct: false },
      { answer: "The time of day", correct: false },
      { answer: "The condition of the tyres", correct: true }
    ]
  },
  {
    question: "When will you feel the effects of engine braking?",
    answers: [
      { answer: "When you only use the parking brake", correct: false },
      { answer: "When you're in neutral", correct: false },
      { answer: "When you change to a lower gear", correct: true },
      { answer: "When you change to a higher gear", correct: false }
    ]
  },
  {
    question: "Which lights should you switch on when daytime visibility is poor but not seriously reduced?",
    answers: [
      { answer: "Headlights and fog lights", correct: false },
      { answer: "Front fog lights", correct: false },
      { answer: "Dipped headlights", correct: true },
      { answer: "Rear fog lights", correct: false }
    ]
  },
  {
    question: "Why are vehicles fitted with rear fog lights?",
    answers: [
      { answer: "To make them more visible when driving at high speed", correct: false },
      { answer: "To show when they've broken down in a dangerous position", correct: false },
      { answer: "To make them more visible in thick fog", correct: true },
      { answer: "To warn drivers following closely to drop back", correct: false }
    ]
  },
  {
    question: "There's been a heavy fall of snow. What should you consider before driving in these conditions?",
    answers: [
      { answer: "Whether you should fit an amber flashing beacon to your car", correct: false },
      { answer: "Whether you should drive without wearing your seat belt", correct: false },
      { answer: "Whether you should wear sunglasses to reduce the glare", correct: false },
      { answer: "Whether your journey is essential", correct: true }
    ]
  },
  {
    question: "What should you check before you start a journey in foggy weather?",
    answers: [
      { answer: "The radiator has enough anti-freeze", correct: false },
      { answer: "You have a warning triangle in the vehicle", correct: false },
      { answer: "The windows and lights are clean and clear", correct: true },
      { answer: "You have a mobile phone with you", correct: false }
    ]
  },
  {
    question: "You've been driving in fog. What must you do when the visibility improves?",
    answers: [
      { answer: "Switch off your fog lights", correct: true },
      { answer: "Keep your rear fog lights switched on", correct: false },
      { answer: "Keep your front fog lights switched on", correct: false },
      { answer: "Leave your fog lights switched on in case the fog returns", correct: false }
    ]
  },
  {
    question: "Why is it dangerous to leave rear fog lights switched on after the fog has cleared?",
    answers: [
      { answer: "They may be confused with brake lights", correct: true },
      { answer: "The bulbs would fail", correct: false },
      { answer: "Electrical systems could be overloaded", correct: false },
      { answer: "Direction indicators may not work properly", correct: false }
    ]
  },
  {
    question: "What will happen if you hold the clutch pedal down or roll in neutral for too long?",
    answers: [
      { answer: "It will use more fuel", correct: false },
      { answer: "It will cause the engine to overheat", correct: false },
      { answer: "It will reduce your control", correct: true },
      { answer: "It will improve tyre wear", correct: false }
    ]
  },
  {
    question: "Why is it bad technique to coast when you're driving downhill?",
    answers: [
      { answer: "The fuel consumption will increase", correct: false },
      { answer: "The engine will overheat", correct: false },
      { answer: "The tyres will wear more quickly", correct: false },
      { answer: "The vehicle will gain speed more quickly", correct: true }
    ]
  },
  {
    question: "What should you do when dealing with this hazard?",
    answers: [
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Use a low gear and drive slowly", correct: true },
      { answer: "Use a high gear to prevent wheelspin", correct: false },
      { answer: "Switch on your windscreen wipers", correct: false }
    ]
  },
  {
    question: "Why is travelling in neutral for long distances (known as coasting) bad driving technique?",
    answers: [
      { answer: "It will cause the car to skid", correct: false },
      { answer: "It will make the engine stall", correct: false },
      { answer: "The engine will run faster", correct: false },
      { answer: "There won't be any engine braking", correct: true }
    ]
  },
  {
    question: "When must you use dipped headlights during the day?",
    answers: [
      { answer: "All the time you're driving", correct: false },
      { answer: "When you're driving along narrow streets", correct: false },
      { answer: "When you're driving in poor visibility", correct: true },
      { answer: "When you're parking", correct: false }
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