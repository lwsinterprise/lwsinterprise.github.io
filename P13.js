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
    question: "What should you expect if you see this sign ahead?",
    answers: [
      { answer: "The road will go steeply uphill", correct: false },
      { answer: "The road will go steeply downhill", correct: false },
      { answer: "The road will bend sharply to the left", correct: true },
      { answer: "The road will bend sharply to the right ", correct: false }
    ]
  },
  {
    question: "What should you do as you approach this cyclist?",
    answers: [
      { answer: "Try to overtake before the cyclist gets to the junction", correct: false },
      { answer: "Flash your headlights at the cyclist", correct: false },
      { answer: "Slow down and allow the cyclist to turn", correct: true },
      { answer: "Rev your engine so the cyclist knows you're following behind", correct: false }
    ]
  },
  {
    question: "Why must you take great care when emerging from this junction?",
    answers: [
      { answer: "The road surface is poor", correct: false },
      { answer: "The footpath is narrow", correct: false },
      { answer: "The kerbs are high", correct: false },
      { answer: "The view is restricted", correct: true }
    ]
  },
  {
    question: "Which type of vehicle should you be ready to give way to as you approach this bridge?",
    answers: [
      { answer: "Bicycles", correct: false },
      { answer: "Buses", correct: true },
      { answer: "Motorcycles", correct: false },
      { answer: "Cars", correct: false }
    ]
  },
  {
    question: "What type of vehicle could you expect to meet in the middle of the road?",
    answers: [
      { answer: "Lorry", correct: true },
      { answer: "Bicycle", correct: false },
      { answer: "Car", correct: false },
      { answer: "Motorcycle", correct: false }
    ]
  },
  {
    question: "What must you do at this junction?",
    answers: [
      { answer: "Stop behind the line, then edge forward to see clearly", correct: true },
      { answer: "Stop beyond the line, at a point where you can see clearly", correct: false },
      { answer: "Stop only if there's traffic on the main road", correct: false },
      { answer: "Stop only if you're turning right", correct: false }
    ]
  },
  {
    question: "What should you do if a driver pulls out of a side road in front of you, causing you to brake hard?",
    answers: [
      { answer: "Ignore the error and stay calm", correct: true },
      { answer: "Flash your lights to show your annoyance", correct: false },
      { answer: "Sound your horn to show your annoyance", correct: false },
      { answer: "Overtake as soon as possible", correct: false }
    ]
  },
  {
    question: "How would age affect an older person's driving ability?",
    answers: [
      { answer: "They won't be able to obtain car insurance", correct: false },
      { answer: "They'll need glasses to read road signs", correct: false },
      { answer: "They'll take longer to react to hazards", correct: true },
      { answer: "They won't signal at junctions", correct: false }
    ]
  },
  {
    question: "Do you need to plan rest stops when you’re planning a long journey?",
    answers: [
      { answer: "Yes, you should plan to stop every half an hour", correct: false },
      { answer: "Yes, regular stops help concentration", correct: true },
      { answer: "No, you’ll be less tired if you get there as soon as possible", correct: false },
      { answer: "No, only fuel stops will be needed", correct: false }
    ]
  },
  {
    question: "What should you do if the red lights start flashing as you approach a level crossing?",
    answers: [
      { answer: "Go over it quickly", correct: false },
      { answer: "Go over it carefully", correct: false },
      { answer: "Stop before the barrier", correct: true },
      { answer: "Switch on your hazard warning lights", correct: false }
    ]
  },
  {
    question: "You're approaching a crossroads. What should you do if the traffic lights have failed?",
    answers: [
      { answer: "Brake and stop only for large vehicles", correct: false },
      { answer: "Brake sharply to a stop before looking", correct: false },
      { answer: "Be prepared to brake sharply to a stop", correct: false },
      { answer: "Be prepared to stop for any traffic", correct: true }
    ]
  },
  {
    question: "What should the driver of the red car (arrowed) do?",
    answers: [
      { answer: "Wave towards the pedestrians who are waiting to cross", correct: false },
      { answer: "Wait for the pedestrian in the road to cross", correct: true },
      { answer: "Quickly drive behind the pedestrian in the road", correct: false },
      { answer: "Tell the pedestrian in the road she shouldn't have crossed", correct: false }
    ]
  },
  {
    question: "You're following a slower-moving vehicle. What should you do if there's a junction just ahead on the right?",
    answers: [
      { answer: "Overtake after checking your mirrors and signalling", correct: false },
      { answer: "Only consider overtaking when you're past the junction", correct: true },
      { answer: "Accelerate quickly to overtake before reaching the junction", correct: false },
      { answer: "Slow down and prepare to overtake on the left", correct: false }
    ]
  },
  {
    question: "What should you do as you approach this overhead bridge?",
    answers: [
      { answer: "Move out to the centre of the road before going through", correct: false },
      { answer: "Find another route; this one is only for high vehicles", correct: false },
      { answer: "Be prepared to give way to large vehicles in the middle of the road", correct: true },
      { answer: "Move across to the right-hand side before going through", correct: false }
    ]
  },
  {
    question: "Why are vehicle mirrors often slightly curved (convex)?",
    answers: [
      { answer: "They give a wider field of vision", correct: true },
      { answer: "They totally cover blind spots", correct: false },
      { answer: "They make it easier to judge the speed of the traffic behind", correct: false },
      { answer: "They make the traffic behind look bigger", correct: false }
    ]
  },
  {
    question: "You're on a three-lane motorway. How should you overtake a slow-moving lorry in the middle lane if it's showing this sign?",
    answers: [
      { answer: "Cautiously approach the lorry, then overtake on either side", correct: false },
      { answer: "Follow the lorry until you can leave the motorway", correct: false },
      { answer: "Use the right-hand lane and overtake the lorry normally", correct: false },
      { answer: "Approach with care and overtake on the left of the lorry", correct: true }
    ]
  },
  {
    question: "What should you do if you think the driver of the vehicle in front has forgotten to cancel their right indicator?",
    answers: [
      { answer: "Flash your lights to alert the driver", correct: false },
      { answer: "Sound your horn before overtaking", correct: false },
      { answer: "Overtake on the left if there's room", correct: false },
      { answer: "Stay behind and don't overtake", correct: true }
    ]
  },
  {
    question: "What's the main hazard the driver of the red car (arrowed) should be aware of?",
    answers: [
      { answer: "Glare from the sun may affect the driver's vision", correct: false },
      { answer: "The black car may stop suddenly", correct: false },
      { answer: "The bus may move out into the road", correct: true },
      { answer: "Oncoming vehicles will assume the driver is turning right", correct: false }
    ]
  },
  {
    question: "What type of vehicle displays this yellow sign?",
    answers: [
      { answer: "A broken-down vehicle", correct: false },
      { answer: "A school bus", correct: true },
      { answer: "An ice-cream van", correct: false },
      { answer: "A private ambulance", correct: false }
    ]
  },
  {
    question: "What hazard should you be aware of when travelling along this street?",
    answers: [
      { answer: "Glare from the sun", correct: false },
      { answer: "Lack of road markings", correct: false },
      { answer: "Children running out between vehicles", correct: true },
      { answer: "Large goods vehicles", correct: false }
    ]
  },
  {
    question: "What's the main hazard you should be aware of when following this cyclist?",
    answers: [
      { answer: "The cyclist may move to the left and dismount", correct: false },
      { answer: "The cyclist may swerve into the road", correct: true },
      { answer: "The cyclist may get off and push their bicycle", correct: false },
      { answer: "The cyclist may wish to turn right at the end of the road", correct: false }
    ]
  },
  {
    question: "A driver’s behaviour has upset you. How can you get over this incident safely?",
    answers: [
      { answer: "Stop and take a break", correct: true },
      { answer: "Shout abusive language", correct: false },
      { answer: "Gesture to them with your hand", correct: false },
      { answer: "Follow them, flashing your headlights", correct: false }
    ]
  },
  {
    question: "How should you drive or ride in areas with traffic-calming measures?",
    answers: [
      { answer: "At a reduced speed", correct: true },
      { answer: "At the speed limit ", correct: false },
      { answer: "In the centre of the road", correct: false },
      { answer: "With headlights on dipped beam", correct: false }
    ]
  },
  {
    question: "Why should you slow down as you approach this hazard?",
    answers: [
      { answer: "Because of the level crossing", correct: true },
      { answer: "Because it’s hard to see to the right", correct: false },
      { answer: "Because of approaching traffic", correct: false },
      { answer: "Because of animals crossing", correct: false }
    ]
  },
  {
    question: "Why are place names painted on the road surface?",
    answers: [
      { answer: "To restrict the flow of traffic", correct: false },
      { answer: "To warn of oncoming traffic", correct: false },
      { answer: "To help you select the correct lane in good time", correct: true },
      { answer: "To prevent you from changing lanes", correct: false }
    ]
  },
  {
    question: "Some two-way roads are divided into three lanes. Why are they particularly dangerous?",
    answers: [
      { answer: "Traffic in both directions can use the middle lane to overtake", correct: true },
      { answer: "Traffic can travel faster in poor weather conditions", correct: false },
      { answer: "Traffic can overtake on the left", correct: false },
      { answer: "Traffic uses the middle lane for emergencies only", correct: false }
    ]
  },
  {
    question: "What type of vehicle uses an amber flashing beacon on a dual carriageway?",
    answers: [
      { answer: "An ambulance", correct: false },
      { answer: "A fire engine", correct: false },
      { answer: "A doctor on call", correct: false },
      { answer: "A tractor", correct: true }
    ]
  },
  {
    question: "What does this signal from a police officer mean to oncoming traffic?",
    answers: [
      { answer: "Go ahead", correct: false },
      { answer: "Stop", correct: true },
      { answer: "Turn left", correct: false },
      { answer: "Turn right", correct: false }
    ]
  },
  {
    question: "Why should you be cautious when going past this bus waiting at a bus stop?",
    answers: [
      { answer: "There's a zebra crossing ahead", correct: false },
      { answer: "There are driveways on the left", correct: false },
      { answer: "People may cross the road in front of it", correct: true },
      { answer: "The road surface will be slippery", correct: false }
    ]
  },
  {
    question: "Where would it be unsafe to overtake?",
    answers: [
      { answer: "On a single carriageway", correct: false },
      { answer: "On a one-way street", correct: false },
      { answer: "Approaching a junction", correct: true },
      { answer: "Travelling up a long hill", correct: false }
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