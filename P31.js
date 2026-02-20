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
    question: "What's the first thing you must do if you have a collision while you're driving your car?",
    answers: [
      { answer: "Stop only if someone waves at you", correct: false },
      { answer: "Call the emergency services", correct: false },
      { answer: "Stop at the scene of the incident", correct: true },
      { answer: "Call your insurance company", correct: false }
    ]
  },
  {
    question: "What information should you share if you’re involved in a collision that causes damage to another vehicle?",
    answers: [
      { answer: "Your occupation and reason for your journey", correct: false },
      { answer: "Your name, address and vehicle registration number", correct: true },
      { answer: "Your national insurance number", correct: false },
      { answer: "Your internet service provider", correct: false }
    ]
  },
  {
    question: "You lose control of your car and damage a garden wall. What must you do if the property owner isn't available?",
    answers: [
      { answer: "Report the incident to the police within 24 hours", correct: true },
      { answer: "Go back to tell the house owner the next day", correct: false },
      { answer: "Report the incident to your insurance company when you get home", correct: false },
      { answer: "Find someone in the area to tell them about it immediately", correct: false }
    ]
  },
  {
    question: "What restrictions apply if you're towing a trailer on a three-lane motorway?",
    answers: [
      { answer: "You mustn't exceed 50 mph", correct: false },
      { answer: "You mustn't overtake", correct: false },
      { answer: "You must have a stabiliser fitted", correct: false },
      { answer: "You mustn't use the right-hand lane", correct: true }
    ]
  },
  {
    question: "What should you do if you're towing a trailer and it starts to swing from side to side?",
    answers: [
      { answer: "Ease off the accelerator to reduce your speed", correct: true },
      { answer: "Let go of the steering wheel and let it correct itself", correct: false },
      { answer: "Brake hard and hold the pedal down", correct: false },
      { answer: "Accelerate until it stabilises", correct: false }
    ]
  },
  {
    question: "When would you increase the pressure in your tyres so that it's above the normal value?",
    answers: [
      { answer: "When the roads are slippery", correct: false },
      { answer: "When the vehicle is fitted with anti-lock brakes", correct: false },
      { answer: "When the tyre tread is worn below 2 mm", correct: false },
      { answer: "When carrying a heavy load", correct: true }
    ]
  },
  {
    question: "How will a heavy load on your roof rack affect your vehicle's handling?",
    answers: [
      { answer: "It will improve the road holding", correct: false },
      { answer: "It will reduce the stopping distance", correct: false },
      { answer: "It will make the steering lighter", correct: false },
      { answer: "It will reduce stability", correct: true }
    ]
  },
  {
    question: "What would be affected if you carry a very heavy load on your vehicle?",
    answers: [
      { answer: "The vehicle's gearbox", correct: false },
      { answer: "The vehicle's ventilation", correct: false },
      { answer: "The vehicle's handling", correct: true },
      { answer: "The vehicle's battery", correct: false }
    ]
  },
  {
    question: "Who's responsible for making sure that a vehicle isn't overloaded?",
    answers: [
      { answer: "The driver of the vehicle", correct: true },
      { answer: "The owner of the items being carried", correct: false },
      { answer: "The person who loaded the vehicle", correct: false },
      { answer: "The licensing authority", correct: false }
    ]
  },
  {
    question: "You're planning to tow a caravan. What will help the handling of the combination?",
    answers: [
      { answer: "A jockey wheel fitted to the tow bar", correct: false },
      { answer: "Power steering fitted to the towing vehicle", correct: false },
      { answer: "Anti-lock brakes fitted to the towing vehicle", correct: false },
      { answer: "A stabiliser fitted to the tow bar", correct: true }
    ]
  },
  {
    question: "Are passengers allowed to ride in a caravan that's being towed?",
    answers: [
      { answer: "Yes, if they're over 14", correct: false },
      { answer: "No, not at any time", correct: true },
      { answer: "Only if all the seats in the towing vehicle are full", correct: false },
      { answer: "Only if a stabiliser is fitted", correct: false }
    ]
  },
  {
    question: "What safety device must be fitted to a trailer braking system?",
    answers: [
      { answer: "Stabiliser", correct: false },
      { answer: "Jockey wheel", correct: false },
      { answer: "Corner steadies", correct: false },
      { answer: "Breakaway cable", correct: true }
    ]
  },
  {
    question: "You wish to tow a trailer. Where would you find the maximum noseweight for your vehicle’s tow hitch?",
    answers: [
      { answer: "In the vehicle handbook", correct: true },
      { answer: "In The Highway Code", correct: false },
      { answer: "In your vehicle registration certificate", correct: false },
      { answer: "In your licence documents", correct: false }
    ]
  },
  {
    question: "How should a load be carried on your roof rack?",
    answers: [
      { answer: "Securely fastened with suitable restraints", correct: true },
      { answer: "Loaded towards the rear of the vehicle", correct: false },
      { answer: "Visible in your exterior mirror", correct: false },
      { answer: "Covered with plastic sheeting", correct: false }
    ]
  },
  {
    question: "You're carrying a child under three years old in your car. Which restraint is suitable for a child of this age?",
    answers: [
      { answer: "A child seat", correct: true },
      { answer: "An adult holding a child", correct: false },
      { answer: "An adult seat belt", correct: false },
      { answer: "An adult lap belt", correct: false }
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