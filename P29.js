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
    question: "What must you check before you drive someone else's vehicle?",
    answers: [
      { answer: "That the vehicle owner has third-party insurance cover", correct: false },
      { answer: "That your own vehicle has insurance cover", correct: false },
      { answer: "That the vehicle is insured for your use", correct: true },
      { answer: "That the insurance documents are in the vehicle", correct: false }
    ]
  },
  {
    question: "Your car needs to pass an MOT test. What may be invalidated if you drive the car without a current MOT certificate?",
    answers: [
      { answer: "The vehicle service record", correct: false },
      { answer: "The vehicle insurance", correct: true },
      { answer: "The vehicle tax", correct: false },
      { answer: "The vehicle registration document", correct: false }
    ]
  },
  {
    question: "What legal requirement must be met by a newly qualified driver?",
    answers: [
      { answer: "They must display green L plates", correct: false },
      { answer: "They must have a new photograph taken for their full licence", correct: false },
      { answer: "They must be accompanied on their first motorway journey", correct: false },
      { answer: "They must have valid motor insurance", correct: true }
    ]
  },
  {
    question: "What's covered by third-party insurance?",
    answers: [
      { answer: "Damage to your vehicle", correct: false },
      { answer: "Fire damage to your vehicle", correct: false },
      { answer: "Flood damage to your vehicle", correct: false },
      { answer: "Damage to other vehicles", correct: true }
    ]
  },
  {
    question: "Who's responsible for paying the vehicle tax?",
    answers: [
      { answer: "The driver of the vehicle", correct: false },
      { answer: "The registered keeper of the vehicle", correct: true },
      { answer: "The car dealer", correct: false },
      { answer: "The Driver and Vehicle Licensing Agency (DVLA)", correct: false }
    ]
  },
  {
    question: "What information is found on a vehicle registration document?",
    answers: [
      { answer: "The registered keeper", correct: true },
      { answer: "The type of insurance cover", correct: false },
      { answer: "The service history details", correct: false },
      { answer: "The date of the MOT", correct: false }
    ]
  },
  {
    question: "When must you contact the Driver and Vehicle Licensing Agency (DVLA)?",
    answers: [
      { answer: "When you get a parking ticket", correct: false },
      { answer: "When you change your vehicle", correct: true },
      { answer: "When you use your vehicle for work", correct: false },
      { answer: "When your vehicle's insurance is due", correct: false }
    ]
  },
  {
    question: "What circumstances require you to notify the Driver and Vehicle Licensing Agency (DVLA)?",
    answers: [
      { answer: "When your health affects your driving", correct: true },
      { answer: "When you have to work abroad", correct: false },
      { answer: "When you lend your vehicle to someone", correct: false },
      { answer: "When your vehicle needs an MOT certificate", correct: false }
    ]
  },
  {
    question: "When could the cost of your insurance be reduced?",
    answers: [
      { answer: "When you're under 25 years old", correct: false },
      { answer: "When you don't wear glasses", correct: false },
      { answer: "When you pass the driving test first time", correct: false },
      { answer: "When you complete the Pass Plus scheme", correct: true }
    ]
  },
  {
    question: "In order to supervise a learner driver you need to have held a full driving licence for the same category of vehicle, for at least three years. What other requirement must you meet?",
    answers: [
      { answer: "To have a car with dual controls", correct: false },
      { answer: "To be at least 21 years old", correct: true },
      { answer: "To be an approved driving instructor", correct: false },
      { answer: "To hold an advanced driving certificate", correct: false }
    ]
  },
  {
    question: "Your car requires an MOT certificate. When is it legal to drive it without an MOT certificate?",
    answers: [
      { answer: "Up to seven days after the old certificate has run out", correct: false },
      { answer: "When driving to an MOT centre to arrange an appointment", correct: false },
      { answer: "When driving the car with the owner’s permission", correct: false },
      { answer: "When driving to an appointment at an MOT centre", correct: true }
    ]
  },
  {
    question: "When will a new car need its first MOT test?",
    answers: [
      { answer: "When it's one year old", correct: false },
      { answer: "When it's three years old", correct: true },
      { answer: "When it's five years old", correct: false },
      { answer: "When it's seven years old", correct: false }
    ]
  },
  {
    question: "What does third-party insurance cover?",
    answers: [
      { answer: "Damage to your vehicle", correct: false },
      { answer: "Damage to other vehicles", correct: true },
      { answer: "Injury to yourself", correct: false },
      { answer: "All damage and injury", correct: false }
    ]
  },
  {
    question: "What's the legal minimum insurance cover you must have to drive on public roads?",
    answers: [
      { answer: "Third party, fire and theft", correct: false },
      { answer: "Comprehensive", correct: false },
      { answer: "Third party only", correct: true },
      { answer: "Personal injury cover", correct: false }
    ]
  },
  {
    question: "What does it mean if your insurance policy has an excess of £500?",
    answers: [
      { answer: "The insurance company will pay the first £500 of any claim", correct: false },
      { answer: "You'll be paid £500 if you don't claim within one year", correct: false },
      { answer: "Your vehicle is insured for a value of £500 if it's stolen", correct: false },
      { answer: "You'll have to pay the first £500 of the cost of any claim", correct: true }
    ]
  },
  {
    question: "When are you allowed to use hazard warning lights?",
    answers: [
      { answer: "When stopped and temporarily obstructing traffic", correct: true },
      { answer: "When travelling during darkness without headlights", correct: false },
      { answer: "When parked on double yellow lines to visit a shop", correct: false },
      { answer: "When travelling slowly because you're lost", correct: false }
    ]
  },
  {
    question: "What should you do if you have to stop while you're going through a congested tunnel?",
    answers: [
      { answer: "Pull up very close to the vehicle in front to save space", correct: false },
      { answer: "Ignore any message signs, as they're never up to date", correct: false },
      { answer: "Keep a safe distance from the vehicle in front", correct: true },
      { answer: "Make a U-turn and find another route", correct: false }
    ]
  },
  {
    question: "You arrive at the scene of a crash where someone is bleeding heavily from a wound in their arm. Nothing is embedded in the wound. What could you do to help?",
    answers: [
      { answer: "Walk them around and keep them talking", correct: false },
      { answer: "Dab the wound", correct: false },
      { answer: "Get them a drink", correct: false },
      { answer: "Apply pressure over the wound", correct: true }
    ]
  },
  {
    question: "You're at an incident. What could you do to help an unconscious casualty?",
    answers: [
      { answer: "Take photographs of the scene", correct: false },
      { answer: "Check that they're breathing normally", correct: true },
      { answer: "Move them to somewhere more comfortable", correct: false },
      { answer: "Splash their face with cool water", correct: false }
    ]
  },
  {
    question: "A casualty isn't breathing normally and needs CPR. At what rate should you press down and release on the centre of their chest?",
    answers: [
      { answer: "10 times per minute", correct: false },
      { answer: "120 times per minute", correct: true },
      { answer: "60 times per minute", correct: false },
      { answer: "240 times per minute", correct: false }
    ]
  },
  {
    question: "Following a collision, a person has been injured. What would be a warning sign for shock?",
    answers: [
      { answer: "Flushed complexion", correct: false },
      { answer: "Warm dry skin", correct: false },
      { answer: "Slow pulse", correct: false },
      { answer: "Rapid shallow breathing", correct: true }
    ]
  },
  {
    question: "An injured person has been placed in the recovery position. They're unconscious but breathing normally. What else should be done?",
    answers: [
      { answer: "Press firmly between their shoulders", correct: false },
      { answer: "Place their arms by their side", correct: false },
      { answer: "Give them a hot sweet drink", correct: false },
      { answer: "Check their airway remains open", correct: true }
    ]
  },
  {
    question: "An injured motorcyclist is lying unconscious in the road. The traffic has stopped and there's no further danger. What could you do to help?",
    answers: [
      { answer: "Remove their safety helmet", correct: false },
      { answer: "Seek medical assistance", correct: true },
      { answer: "Move the person off the road", correct: false },
      { answer: "Remove their leather jacket", correct: false }
    ]
  },
  {
    question: "What should you do if you see a large box fall from a lorry onto the motorway?",
    answers: [
      { answer: "Go to the next emergency telephone and report the hazard", correct: true },
      { answer: "Catch up with the lorry and try to get the driver's attention", correct: false },
      { answer: "Stop close to the box until the police arrive", correct: false },
      { answer: "Pull over to the hard shoulder, then remove the box", correct: false }
    ]
  },
  {
    question: "You're going through a long tunnel. What will warn you of congestion or an incident ahead?",
    answers: [
      { answer: "Hazard warning lines", correct: false },
      { answer: "Other drivers flashing their lights", correct: false },
      { answer: "Variable message signs", correct: true },
      { answer: "Areas with hatch markings", correct: false }
    ]
  },
  {
    question: "An adult casualty isn't breathing. To maintain circulation, CPR should be given. What's the correct depth to press down on their chest?",
    answers: [
      { answer: "1 to 2 centimetres", correct: false },
      { answer: "5 to 6 centimetres", correct: true },
      { answer: "10 to 15 centimetres", correct: false },
      { answer: "15 to 20 centimetres", correct: false }
    ]
  },
  {
    question: "You're the first person to arrive at an incident where people are badly injured. You’ve switched on your hazard warning lights and checked all engines are stopped. What else should you do?",
    answers: [
      { answer: "Make sure that an ambulance has been called", correct: true },
      { answer: "Stop other cars and ask the drivers for help", correct: false },
      { answer: "Try and get people who are injured to drink something", correct: false },
      { answer: "Move the people who are injured clear of their vehicles", correct: false }
    ]
  },
  {
    question: "You arrive at the scene of a motorcycle crash. The rider is injured. When should their helmet be removed?",
    answers: [
      { answer: "Only when it's essential", correct: true },
      { answer: "Always straight away", correct: false },
      { answer: "Only when the motorcyclist asks", correct: false },
      { answer: "Always, unless they're in shock", correct: false }
    ]
  },
  {
    question: "You arrive at an incident. There's no danger from fire or further collisions and the emergency services have been called. What's your first priority when attending to an unconscious motorcyclist?",
    answers: [
      { answer: "Check whether they're breathing normally", correct: true },
      { answer: "Check whether they're bleeding", correct: false },
      { answer: "Check whether they have any broken bones", correct: false },
      { answer: "Check whether they have any bruising", correct: false }
    ]
  },
  {
    question: "At an incident, someone is unconscious and you want to help. What would be the first thing to check?",
    answers: [
      { answer: "Whether their vehicle is insured", correct: false },
      { answer: "Whether they have any allergies", correct: false },
      { answer: "Whether they're comfortable", correct: false },
      { answer: "Whether their airway is open", correct: true }
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