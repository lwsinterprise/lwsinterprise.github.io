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
    question: "How can drinking alcohol affect your ability to drive or ride?",
    answers: [
      { answer: "Your ability to judge speed will be reduced", correct: true },
      { answer: "Your confidence will be reduced", correct: false },
      { answer: "Your reactions will be faster", correct: false },
      { answer: "Your awareness of danger will be improved", correct: false }
    ]
  },
  {
    question: "What does the solid white line at the side of the road indicate?",
    answers: [
      { answer: "Traffic lights ahead", correct: false },
      { answer: "Edge of the carriageway", correct: true },
      { answer: "Footpath on the left", correct: false },
      { answer: "Cycle path", correct: false }
    ]
  },
  {
    question: "You're driving towards this level crossing. What would be the first warning of an approaching train?",
    answers: [
      { answer: "Both half-barriers down", correct: false },
      { answer: "A steady amber light", correct: true },
      { answer: "One half-barrier down", correct: false },
      { answer: "Twin flashing red lights", correct: false }
    ]
  },
  {
    question: "You're behind this cyclist. When the traffic lights change, what should you do?",
    answers: [
      { answer: "Try to move off before the cyclist", correct: false },
      { answer: "Allow the cyclist time and room", correct: true },
      { answer: "Turn right but give the cyclist room", correct: false },
      { answer: "Tap your horn and drive through first", correct: false }
    ]
  },
  {
    question: "You intend to turn left at the traffic lights. What should you do just before turning?",
    answers: [
      { answer: "Check your right mirror", correct: false },
      { answer: "Move up closer to the car ahead", correct: false },
      { answer: "Move out to the right", correct: false },
      { answer: "Check for bicycles on your left", correct: true }
    ]
  },
  {
    question: "Why should you reduce your speed here?",
    answers: [
      { answer: "A staggered junction is ahead", correct: true },
      { answer: "A low bridge is ahead", correct: false },
      { answer: "The road surface changes ahead", correct: false },
      { answer: "The road narrows ahead", correct: false }
    ]
  },
  {
    question: "What might you expect to happen in this situation?",
    answers: [
      { answer: "Traffic will move into the right-hand lane", correct: false },
      { answer: "Traffic speed will increase", correct: false },
      { answer: "Traffic will move into the left-hand lane", correct: true },
      { answer: "Traffic won't need to change position", correct: false }
    ]
  },
  {
    question: "You're driving on a road with several lanes. What do these signs above the lanes mean?",
    answers: [
      { answer: "The two right lanes are open", correct: false },
      { answer: "The two left lanes are open", correct: true },
      { answer: "Traffic in the left lanes should stop", correct: false },
      { answer: "Traffic in the right lanes should stop", correct: false }
    ]
  },
  {
    question: "You're invited to a pub lunch. What should you do if you know that you'll have to drive in the evening?",
    answers: [
      { answer: "Avoid mixing your alcoholic drinks", correct: false },
      { answer: "Don't drink any alcohol at all", correct: true },
      { answer: "Have some milk before drinking alcohol", correct: false },
      { answer: "Eat a hot meal with your alcoholic drinks", correct: false }
    ]
  },
  {
    question: "What will become more expensive after you've been convicted of driving while unfit through drink or drugs?",
    answers: [
      { answer: "Road fund licence", correct: false },
      { answer: "Insurance premiums", correct: true },
      { answer: "Vehicle test certificate", correct: false },
      { answer: "Driving licence", correct: false }
    ]
  },
  {
    question: "What advice should you give to a driver who has had a few alcoholic drinks at a party?",
    answers: [
      { answer: "Have a strong cup of coffee and then drive home", correct: false },
      { answer: "Drive home carefully and slowly", correct: false },
      { answer: "Go home by public transport", correct: true },
      { answer: "Wait a short while and then drive home", correct: false }
    ]
  },
  {
    question: "What should you do about driving if you've been taking medicine that causes drowsiness?",
    answers: [
      { answer: "Only drive if your journey is necessary", correct: false },
      { answer: "Drive on quiet roads", correct: false },
      { answer: "Ask someone to come with you", correct: false },
      { answer: "Avoid driving and check with your doctor", correct: true }
    ]
  },
  {
    question: "What should you do if a doctor prescribes drugs that are likely to affect your driving?",
    answers: [
      { answer: "Only drive if someone is with you", correct: false },
      { answer: "Avoid driving on motorways", correct: false },
      { answer: "Get someone else to drive", correct: true },
      { answer: "Never drive at more than 30 mph", correct: false }
    ]
  },
  {
    question: "What must you do if your ability to drive is impaired during a period of illness?",
    answers: [
      { answer: "See your doctor each time before you drive", correct: false },
      { answer: "Take smaller doses of any medicines", correct: false },
      { answer: "Stop driving until you're fit to drive again", correct: true },
      { answer: "Take all your medicines with you when you drive", correct: false }
    ]
  },
  {
    question: "What should you do if you begin to feel drowsy while you're driving?",
    answers: [
      { answer: "Stop and rest as soon as possible", correct: true },
      { answer: "Turn the heater up to keep you warm and comfortable", correct: false },
      { answer: "Close the car windows to help you concentrate", correct: false },
      { answer: "Continue with your journey but drive more slowly", correct: false }
    ]
  },
  {
    question: "What should you do if you become tired while you're driving on a motorway?",
    answers: [
      { answer: "Pull up on the hard shoulder and change drivers", correct: false },
      { answer: "Leave the motorway at the next exit and rest", correct: true },
      { answer: "Increase your speed and turn up the radio volume", correct: false },
      { answer: "Close all your windows and set the heating to warm", correct: false }
    ]
  },
  {
    question: "You're about to drive home. What should you do if you feel very tired and have a severe headache?",
    answers: [
      { answer: "Wait until you're fit and well before driving", correct: true },
      { answer: "Drive home, but take a tablet for headaches", correct: false },
      { answer: "Drive home if you can stay awake for the journey", correct: false },
      { answer: "Wait for a short time, then drive home slowly", correct: false }
    ]
  },
  {
    question: "What can you do to help prevent tiredness on a long journey?",
    answers: [
      { answer: "Eat a large meal before driving", correct: false },
      { answer: "Take regular refreshment breaks", correct: true },
      { answer: "Play loud music in the car", correct: false },
      { answer: "Complete the journey without stopping", correct: false }
    ]
  },
  {
    question: "You take some cough medicine given to you by a friend. What should you do before driving your car?",
    answers: [
      { answer: "Ask your friend if taking the medicine affected their driving", correct: false },
      { answer: "Drink some strong coffee one hour before driving", correct: false },
      { answer: "Check the label to see if the medicine will affect your driving", correct: true },
      { answer: "Drive a short distance to see if the medicine is affecting your driving", correct: false }
    ]
  },
  {
    question: "You're driving on a one-way street. What should you do if you realise you've taken the wrong route?",
    answers: [
      { answer: "Reverse out of the road", correct: false },
      { answer: "Turn around in a side road", correct: false },
      { answer: "Continue and find another route", correct: true },
      { answer: "Reverse into a driveway", correct: false }
    ]
  },
  {
    question: "What will be a serious distraction while you're driving?",
    answers: [
      { answer: "Looking at road maps", correct: true },
      { answer: "Switching on your demister", correct: false },
      { answer: "Using your windscreen washers", correct: false },
      { answer: "Looking in your door mirror", correct: false }
    ]
  },
  {
    question: "What should you do if the vehicle starts reversing off the driveway?",
    answers: [
      { answer: "Move to the opposite side of the road", correct: false },
      { answer: "Drive through as you have priority", correct: false },
      { answer: "Sound your horn and be prepared to stop", correct: true },
      { answer: "Speed up and drive through quickly", correct: false }
    ]
  },
  {
    question: "You've been involved in an argument that's made you feel angry. What should you do before starting your journey?",
    answers: [
      { answer: "Open a window", correct: false },
      { answer: "Turn on your radio", correct: false },
      { answer: "Have an alcoholic drink", correct: false },
      { answer: "Calm down", correct: true }
    ]
  },
  {
    question: "You're driving on this dual carriageway. Why may you need to slow down?",
    answers: [
      { answer: "There's a broken white line in the centre", correct: false },
      { answer: "There are solid white lines on either side", correct: false },
      { answer: "There are roadworks ahead of you", correct: true },
      { answer: "There are no footpaths", correct: false }
    ]
  },
  {
    question: "You've just been overtaken by this motorcyclist. What should you do if the rider cuts in sharply?",
    answers: [
      { answer: "Sound the horn", correct: false },
      { answer: "Brake firmly", correct: false },
      { answer: "Keep a safe gap", correct: true },
      { answer: "Flash your lights", correct: false }
    ]
  },
  {
    question: "You're about to drive your car. What should you do if you can't find the glasses you need to wear?",
    answers: [
      { answer: "Drive home slowly, keeping to quiet roads", correct: false },
      { answer: "Borrow a friend’s glasses and use those", correct: false },
      { answer: "Drive home at night, so that the lights will help you", correct: false },
      { answer: "Find a way of getting home without driving ", correct: true }
    ]
  },
  {
    question: "How does drinking alcohol affect your driving behaviour?",
    answers: [
      { answer: "It improves judgement skills", correct: false },
      { answer: "It increases confidence", correct: true },
      { answer: "It leads to faster reactions", correct: false },
      { answer: "It increases concentration", correct: false }
    ]
  },
  {
    question: "Why should you check the information leaflet before taking any medicine?",
    answers: [
      { answer: "Drug companies want customer feedback on their products", correct: false },
      { answer: "You may have to let your insurance company know about the medicine", correct: false },
      { answer: "Some types of medicine can affect your ability to drive safely", correct: true },
      { answer: "The medicine you take may affect your hearing", correct: false }
    ]
  },
  {
    question: "You need glasses to read a vehicle number plate at the required distance. When must you wear them?",
    answers: [
      { answer: "Only in bad weather conditions", correct: false },
      { answer: "Whenever you're driving", correct: true },
      { answer: "When you think it's necessary", correct: false },
      { answer: "Only at night time", correct: false }
    ]
  },
  {
    question: "Which type of glasses would make driving at night more difficult?",
    answers: [
      { answer: "Half-moon", correct: false },
      { answer: "Round", correct: false },
      { answer: "Bifocal", correct: false },
      { answer: "Tinted", correct: true }
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