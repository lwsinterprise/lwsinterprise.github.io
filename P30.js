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
    question: "What could you do to help injured people at an incident?",
    answers: [
      { answer: "Keep them warm and comfortable", correct: true },
      { answer: "Give them something to eat", correct: false },
      { answer: "Keep them on the move by walking them around", correct: false },
      { answer: "Give them a warm drink", correct: false }
    ]
  },
  {
    question: "There's been a collision. How can you help a driver who's suffering from shock?",
    answers: [
      { answer: "Give them a drink", correct: false },
      { answer: "Reassure them confidently", correct: true },
      { answer: "Ask who caused the incident", correct: false },
      { answer: "Offer them a cigarette", correct: false }
    ]
  },
  {
    question: "You arrive at the scene of a motorcycle crash. No other vehicle is involved. The rider is unconscious and lying in the middle of the road. What's the first thing you should do at the scene?",
    answers: [
      { answer: "Move the rider out of the road", correct: false },
      { answer: "Warn other traffic", correct: true },
      { answer: "Clear the road of debris", correct: false },
      { answer: "Give the rider reassurance", correct: false }
    ]
  },
  {
    question: "At an incident, how could you help a small child who isn't breathing?",
    answers: [
      { answer: "Find their parents and explain what's happening", correct: false },
      { answer: "Open their airway and begin CPR", correct: true },
      { answer: "Put them in the recovery position and slap their back", correct: false },
      { answer: "Talk to them confidently until an ambulance arrives", correct: false }
    ]
  },
  {
    question: "At an incident, a casualty isn't breathing. What should you do while helping them to start breathing again?",
    answers: [
      { answer: "Put their arms across their chest", correct: false },
      { answer: "Shake them firmly", correct: false },
      { answer: "Roll them onto their side", correct: false },
      { answer: "Open their airway", correct: true }
    ]
  },
  {
    question: "At an incident, someone is suffering from severe burns. How could you help them?",
    answers: [
      { answer: "Apply lotions to the injury", correct: false },
      { answer: "Burst any blisters", correct: false },
      { answer: "Remove anything sticking to the burns", correct: false },
      { answer: "Douse the burns with clean, cool water", correct: true }
    ]
  },
  {
    question: "You arrive at an incident. A pedestrian is bleeding heavily from a leg wound. The leg isn't broken and there's nothing in the wound. How could you help?",
    answers: [
      { answer: "Dab the wound to stop the bleeding", correct: false },
      { answer: "Keep the casualty's legs flat on the ground", correct: false },
      { answer: "Give them a warm drink", correct: false },
      { answer: "Apply firm pressure over the wound", correct: true }
    ]
  },
  {
    question: "At an incident, a casualty is unconscious but breathing. When should you move them?",
    answers: [
      { answer: "When an ambulance is on its way", correct: false },
      { answer: "When bystanders tell you to move them", correct: false },
      { answer: "When there's a risk of further danger", correct: true },
      { answer: "When bystanders offer to help you", correct: false }
    ]
  },
  {
    question: "At an incident, it's important to look after any casualties. What should you do with them when the area is safe?",
    answers: [
      { answer: "Move them away from the vehicles", correct: false },
      { answer: "Ask them how it happened", correct: false },
      { answer: "Give them something to eat", correct: false },
      { answer: "Keep them where they are", correct: true }
    ]
  },
  {
    question: "Which sign shows that a tanker is carrying dangerous goods?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "Which document may the police ask you to produce after you've been involved in a collision?",
    answers: [
      { answer: "Your vehicle registration document", correct: false },
      { answer: "Your driving licence", correct: true },
      { answer: "Your theory test certificate", correct: false },
      { answer: "Your vehicle service record", correct: false }
    ]
  },
  {
    question: "After a collision, someone is unconscious in their vehicle. When should you call the emergency services?",
    answers: [
      { answer: "Only as a last resort", correct: false },
      { answer: "As soon as possible", correct: true },
      { answer: "After you've woken them up", correct: false },
      { answer: "After checking for broken bones", correct: false }
    ]
  },
  {
    question: "A collision has just happened. An injured person is lying in a busy road. What’s the first thing you should do?",
    answers: [
      { answer: "Treat the person for shock", correct: false },
      { answer: "Warn other traffic", correct: true },
      { answer: "Place them in the recovery position", correct: false },
      { answer: "Make sure the injured person is kept warm", correct: false }
    ]
  },
  {
    question: "At an incident, how could you help a casualty who has stopped breathing?",
    answers: [
      { answer: "Keep their head tilted forwards as far as possible", correct: false },
      { answer: "Follow the DR ABC code", correct: true },
      { answer: "Raise their legs to help with circulation", correct: false },
      { answer: "Try to give them something to drink", correct: false }
    ]
  },
  {
    question: "You’re at the scene of an incident. How could you help someone who's suffering from shock?",
    answers: [
      { answer: "Reassure them confidently", correct: true },
      { answer: "Offer them a cigarette", correct: false },
      { answer: "Give them a warm drink", correct: false },
      { answer: "Offer them some food", correct: false }
    ]
  },
  {
    question: "There's been a collision. A motorcyclist is lying injured and unconscious. Why should you only remove their helmet if it’s essential?",
    answers: [
      { answer: "They might not want you to remove it", correct: false },
      { answer: "Removing it could make any injuries worse", correct: true },
      { answer: "Removing it could let them get cold", correct: false },
      { answer: "You could scratch the helmet as you remove it", correct: false }
    ]
  },
  {
    question: "You're on a motorway. When can you use hazard warning lights?",
    answers: [
      { answer: "When a vehicle is following too closely", correct: false },
      { answer: "When you slow down quickly because of danger ahead", correct: true },
      { answer: "When you're being towed by another vehicle", correct: false },
      { answer: "When you're using the hard shoulder as a running lane", correct: false }
    ]
  },
  {
    question: "You've broken down on a two-way road. You have a warning triangle. At least how far from your vehicle should you place the warning triangle?",
    answers: [
      { answer: "5 metres (16 feet)", correct: false },
      { answer: "25 metres (82 feet)", correct: false },
      { answer: "45 metres (147 feet)", correct: true },
      { answer: "100 metres (328 feet)", correct: false }
    ]
  },
  {
    question: "Your car breaks down on a level crossing. What's the first thing you should do?",
    answers: [
      { answer: "Tell drivers behind what's happened", correct: false },
      { answer: "Leave your vehicle and get everyone clear", correct: true },
      { answer: "Walk down the track and signal the next train", correct: false },
      { answer: "Stay in your car until you're told to move", correct: false }
    ]
  },
  {
    question: "What should you do if a tyre bursts while you’re driving?",
    answers: [
      { answer: "Pull on the parking brake", correct: false },
      { answer: "Brake as quickly as possible", correct: false },
      { answer: "Pull up slowly at the side of the road", correct: true },
      { answer: "Continue on at a normal speed", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle has a puncture on a motorway?",
    answers: [
      { answer: "Drive slowly to the next service area to get assistance", correct: false },
      { answer: "Pull up on the hard shoulder or in an emergency refuge area. Change the wheel as quickly as possible", correct: false },
      { answer: "Pull up on the hard shoulder or in an emergency refuge area and call for assistance", correct: true },
      { answer: "Switch on your hazard warning lights. Stop in your lane", correct: false }
    ]
  },
  {
    question: "Your vehicle has stalled in the middle of a level crossing. What should you do if the warning bells start to ring while you're trying to restart the engine?",
    answers: [
      { answer: "Get out of the car and clear of the crossing", correct: true },
      { answer: "Run down the track to warn the signal operator", correct: false },
      { answer: "Carry on trying to restart the engine", correct: false },
      { answer: "Push the vehicle clear of the crossing", correct: false }
    ]
  },
  {
    question: "What should you do before driving into a tunnel?",
    answers: [
      { answer: "Switch off your radio", correct: false },
      { answer: "Take off your sunglasses", correct: true },
      { answer: "Close your sunroof", correct: false },
      { answer: "Switch on your windscreen wipers", correct: false }
    ]
  },
  {
    question: "Which lights should you use when you're driving in a tunnel?",
    answers: [
      { answer: "Sidelights", correct: false },
      { answer: "Front spotlights", correct: false },
      { answer: "Dipped headlights", correct: true },
      { answer: "Rear fog lights", correct: false }
    ]
  },
  {
    question: "What should you do to reduce the risk of your vehicle catching fire?",
    answers: [
      { answer: "Keep water levels above maximum", correct: false },
      { answer: "Check out any strong smell of fuel", correct: true },
      { answer: "Avoid driving with a full tank of fuel", correct: false },
      { answer: "Use fuel additives", correct: false }
    ]
  },
  {
    question: "You're driving on the motorway. What should you do if luggage falls from your vehicle?",
    answers: [
      { answer: "Stop at the next emergency telephone and report the incident", correct: true },
      { answer: "Stop on the motorway and switch on hazard warning lights while you pick it up", correct: false },
      { answer: "Walk back up the motorway to pick it up", correct: false },
      { answer: "Pull up on the hard shoulder and wave traffic down", correct: false }
    ]
  },
  {
    question: "What should you do if an instrument panel warning light comes on while you're driving?",
    answers: [
      { answer: "Continue if the engine sounds all right", correct: false },
      { answer: "Hope that it's just a temporary electrical fault", correct: false },
      { answer: "Deal with the problem when there's more time", correct: false },
      { answer: "Check out the problem quickly and safely", correct: true }
    ]
  },
  {
    question: "What should you do if your vehicle breaks down in a tunnel?",
    answers: [
      { answer: "Stay in your vehicle and wait for the police", correct: false },
      { answer: "Stand in the lane behind your vehicle to warn others", correct: false },
      { answer: "Stand in front of your vehicle to warn oncoming drivers", correct: false },
      { answer: "Switch on hazard warning lights, then go and call for help", correct: true }
    ]
  },
  {
    question: "What should you do if your vehicle catches fire while you're driving through a tunnel?",
    answers: [
      { answer: "Leave it where it is, with the engine running", correct: false },
      { answer: "Pull up, then walk to an emergency telephone", correct: false },
      { answer: "Park it away from the carriageway", correct: false },
      { answer: "Drive it out of the tunnel if it's safe to do so", correct: true }
    ]
  },
  {
    question: "What should you do first if your vehicle has broken down on an automatic railway level crossing?",
    answers: [
      { answer: "Get everyone out of the vehicle and clear of the crossing", correct: true },
      { answer: "Telephone your vehicle recovery service to move it", correct: false },
      { answer: "Walk along the track to give warning to any approaching trains", correct: false },
      { answer: "Try to push the vehicle clear of the crossing as soon as possible", correct: false }
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