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
    question: "You're joining a motorway from a slip road. How should you deal with traffic already on the motorway?",
    answers: [
      { answer: "Carry on along the hard shoulder until you see a safe gap", correct: false },
      { answer: "Stop at the end of the slip road and look for a safe gap", correct: false },
      { answer: "Use the slip road to accelerate until you're moving much faster than the motorway traffic", correct: false },
      { answer: "Match your speed to traffic in the left-hand lane and filter into a safe gap", correct: true }
    ]
  },
  {
    question: "What's the national speed limit on motorways for cars and motorcycles?",
    answers: [
      { answer: "30 mph", correct: false },
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: false },
      { answer: "70 mph", correct: true }
    ]
  },
  {
    question: "Which vehicles should use the left-hand lane on a three-lane motorway?",
    answers: [
      { answer: "Any vehicle that isn't overtaking", correct: true },
      { answer: "Large vehicles only", correct: false },
      { answer: "Emergency vehicles only", correct: false },
      { answer: "Slow vehicles only", correct: false }
    ]
  },
  {
    question: "Which vehicles aren't allowed to use the right-hand lane of a three-lane motorway?",
    answers: [
      { answer: "Small delivery vans", correct: false },
      { answer: "Motorcycles", correct: false },
      { answer: "Vehicles towing a trailer", correct: true },
      { answer: "Motorcycle and sidecar outfits", correct: false }
    ]
  },
  {
    question: "Your vehicle breaks down on a motorway and you need to call for help. Why might it be better to use an emergency roadside telephone rather than a mobile phone?",
    answers: [
      { answer: "It connects you to a local garage", correct: false },
      { answer: "Using a mobile phone will distract other drivers", correct: false },
      { answer: "It allows easy location by the emergency services", correct: true },
      { answer: "Mobile phones don't work on motorways", correct: false }
    ]
  },
  {
    question: "Your vehicle broke down on the hard shoulder of a motorway, but has now been repaired. How should you rejoin the main carriageway?",
    answers: [
      { answer: "Move out onto the carriageway, then build up your speed", correct: false },
      { answer: "Move out onto the carriageway using your hazard warning lights", correct: false },
      { answer: "Gain speed on the hard shoulder before moving out onto the carriageway", correct: true },
      { answer: "Wait on the hard shoulder until someone flashes their headlights at you", correct: false }
    ]
  },
  {
    question: "You're travelling along a motorway. Where would you find a crawler or climbing lane?",
    answers: [
      { answer: "On a steep gradient", correct: true },
      { answer: "Before a service area", correct: false },
      { answer: "Before a junction", correct: false },
      { answer: "Along the hard shoulder", correct: false }
    ]
  },
  {
    question: "What do these motorway signs mean?",
    answers: [
      { answer: "They're countdown markers to a bridge", correct: false },
      { answer: "They're distance markers to the next telephone", correct: false },
      { answer: "They're countdown markers to the next exit", correct: true },
      { answer: "They warn of a police control ahead", correct: false }
    ]
  },
  {
    question: "Where are amber reflective studs found on a motorway?",
    answers: [
      { answer: "Between the hard shoulder and the carriageway", correct: false },
      { answer: "Between the acceleration lane and the carriageway", correct: false },
      { answer: "Between the central reservation and the carriageway", correct: true },
      { answer: "Between each pair of lanes", correct: false }
    ]
  },
  {
    question: "What colour are the reflective studs between the lanes on a motorway?",
    answers: [
      { answer: "Green", correct: false },
      { answer: "Amber", correct: false },
      { answer: "White", correct: true },
      { answer: "Red", correct: false }
    ]
  },
  {
    question: "What colour are the reflective studs between a motorway and a slip road?",
    answers: [
      { answer: "Amber", correct: false },
      { answer: "White", correct: false },
      { answer: "Green", correct: true },
      { answer: "Red", correct: false }
    ]
  },
  {
    question: "Your vehicle has broken down on a motorway. In which direction should you walk to find the nearest emergency telephone?",
    answers: [
      { answer: "With the traffic flow", correct: false },
      { answer: "Facing oncoming traffic", correct: false },
      { answer: "In the direction shown on the marker posts", correct: true },
      { answer: "In the direction of the nearest exit", correct: false }
    ]
  },
  {
    question: "Why is it important to make full use of the slip road as you join a motorway?",
    answers: [
      { answer: "Because there's space available to turn round if you need to", correct: false },
      { answer: "To allow you direct access to the overtaking lanes", correct: false },
      { answer: "To allow you to fit safely into the traffic flow in the left-hand lane", correct: true },
      { answer: "Because you can continue on the hard shoulder", correct: false }
    ]
  },
  {
    question: "How should you position yourself when you use the emergency telephone on a motorway?",
    answers: [
      { answer: "Stay close to the carriageway", correct: false },
      { answer: "Face the oncoming traffic", correct: true },
      { answer: "Keep your back to the traffic", correct: false },
      { answer: "Stand on the hard shoulder", correct: false }
    ]
  },
  {
    question: "What colour are the reflective studs between the hard shoulder and the left-hand lane of a motorway?",
    answers: [
      { answer: "Green", correct: false },
      { answer: "Red", correct: true },
      { answer: "White", correct: false },
      { answer: "Amber", correct: false }
    ]
  },
  {
    question: "On a three-lane motorway, which lane should you use if there's no traffic ahead?",
    answers: [
      { answer: "Left", correct: true },
      { answer: "Right", correct: false },
      { answer: "Centre", correct: false },
      { answer: "Either the right or centre", correct: false }
    ]
  },
  {
    question: "What should you do when going through a contraflow system on a motorway?",
    answers: [
      { answer: "Use dipped headlights", correct: false },
      { answer: "Keep a good distance from the vehicle ahead", correct: true },
      { answer: "Switch lanes to keep the traffic flowing", correct: false },
      { answer: "Stay close to the vehicle ahead to reduce queues", correct: false }
    ]
  },
  {
    question: "You're on a three-lane motorway. Which lane are you in if there are red reflective studs on your left and white ones to your right?",
    answers: [
      { answer: "In the right-hand lane", correct: false },
      { answer: "In the middle lane", correct: false },
      { answer: "On the hard shoulder", correct: false },
      { answer: "In the left-hand lane", correct: true }
    ]
  },
  {
    question: "What should you do when you're approaching roadworks on a motorway?",
    answers: [
      { answer: "Speed up to clear the area quickly", correct: false },
      { answer: "Always use the hard shoulder", correct: false },
      { answer: "Obey the speed limit", correct: true },
      { answer: "Stay very close to the vehicle in front", correct: false }
    ]
  },
  {
    question: "Which vehicles are prohibited from using the motorway?",
    answers: [
      { answer: "Powered mobility scooters", correct: true },
      { answer: "Motorcycles over 50 cc", correct: false },
      { answer: "Double-deck buses", correct: false },
      { answer: "Cars with automatic transmission", correct: false }
    ]
  },
  {
    question: "What should you do while you're driving or riding along a motorway?",
    answers: [
      { answer: "Look much further ahead than you would on other roads", correct: true },
      { answer: "Travel much faster than you would on other roads", correct: false },
      { answer: "Maintain a shorter separation distance than you would on other roads", correct: false },
      { answer: "Concentrate more than you would on other roads", correct: false }
    ]
  },
  {
    question: "What should you do immediately after joining a motorway?",
    answers: [
      { answer: "Try to overtake", correct: false },
      { answer: "Re-adjust your mirrors", correct: false },
      { answer: "Position your vehicle in the centre lane", correct: false },
      { answer: "Stay in the left-hand lane", correct: true }
    ]
  },
  {
    question: "When would you use the right-hand lane on a three-lane motorway?",
    answers: [
      { answer: "When you're turning right", correct: false },
      { answer: "When you're overtaking", correct: true },
      { answer: "When you're travelling above the speed limit", correct: false },
      { answer: "When you're trying to save fuel", correct: false }
    ]
  },
  {
    question: "You're on a motorway that isn't subject to smart motorway regulations. When should you use the hard shoulder?",
    answers: [
      { answer: "When you're stopping in an emergency", correct: true },
      { answer: "When you're leaving the motorway", correct: false },
      { answer: "When you're stopping for a rest", correct: false },
      { answer: "When you're joining the motorway", correct: false }
    ]
  },
  {
    question: "You're in the right-hand lane of a three-lane motorway. What do these overhead signs mean?",
    answers: [
      { answer: "Move to the left and reduce your speed to 50 mph", correct: true },
      { answer: "There are roadworks 50 metres (55 yards) ahead", correct: false },
      { answer: "Use the hard shoulder until you've passed the hazard", correct: false },
      { answer: "Leave the motorway at the next exit", correct: false }
    ]
  },
  {
    question: "When are you allowed to stop on a motorway?",
    answers: [
      { answer: "When you need to walk and get fresh air", correct: false },
      { answer: "When you wish to pick up hitchhikers", correct: false },
      { answer: "When you're signalled to do so by traffic signals", correct: true },
      { answer: "When you need to use a mobile telephone", correct: false }
    ]
  },
  {
    question: "You're travelling in the left-hand lane of a three-lane motorway. How should you react to traffic joining from a slip road?",
    answers: [
      { answer: "Increase your speed to ensure they join behind you", correct: false },
      { answer: "Adjust your speed or change lane if you can do so safely", correct: true },
      { answer: "Maintain a steady speed", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false }
    ]
  },
  {
    question: "How should you use the lanes on a motorway?",
    answers: [
      { answer: "Use the lane that has the least traffic", correct: false },
      { answer: "Keep to the left-hand lane unless you're overtaking", correct: true },
      { answer: "Overtake using the lane that’s clearest", correct: false },
      { answer: "Stay in one lane until you reach your exit", correct: false }
    ]
  },
  {
    question: "You're travelling along a motorway. When are you allowed to overtake on the left?",
    answers: [
      { answer: "When you can see well ahead that the hard shoulder is clear", correct: false },
      { answer: "When the traffic in the right-hand lane is signalling right", correct: false },
      { answer: "When you warn drivers behind by signalling left", correct: false },
      { answer: "When in queues and traffic to your right is moving more slowly than you are", correct: true }
    ]
  },
  {
    question: "When would you use an emergency refuge area on a smart motorway?",
    answers: [
      { answer: "In cases of emergency or breakdown", correct: true },
      { answer: "If you think you'll be involved in a road rage incident", correct: false },
      { answer: "To stop and check where you are", correct: false },
      { answer: "To make a private phone call", correct: false }
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