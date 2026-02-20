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
    question: "Traffic officers operate on motorways and some primary routes in England and Wales. What are they authorised to do?",
    answers: [
      { answer: "Stop and arrest drivers who break the law", correct: false },
      { answer: "Repair broken-down vehicles on the motorway", correct: false },
      { answer: "Issue fixed penalty notices", correct: false },
      { answer: "Stop and direct anyone on a motorway", correct: true }
    ]
  },
  {
    question: "You're on a smart motorway. What does it mean when a red cross is displayed above the hard shoulder?",
    answers: [
      { answer: "Pull up in this lane to answer your mobile phone", correct: false },
      { answer: "Use this lane as a running lane", correct: false },
      { answer: "This lane can be used if you need a rest", correct: false },
      { answer: "You must not travel in this lane", correct: true }
    ]
  },
  {
    question: "You're on a smart motorway. What does it mean when a mandatory speed limit is displayed above the hard shoulder?",
    answers: [
      { answer: "You shouldn't travel in this lane", correct: false },
      { answer: "The hard shoulder can be used as a running lane", correct: true },
      { answer: "You can park on the hard shoulder if you feel tired", correct: false },
      { answer: "You can pull up in this lane to answer a mobile phone", correct: false }
    ]
  },
  {
    question: "How do smart motorways prevent traffic bunching?",
    answers: [
      { answer: "By using higher speed limits", correct: false },
      { answer: "By using advisory speed limits", correct: false },
      { answer: "By using minimum speed limits", correct: false },
      { answer: "By using variable speed limits", correct: true }
    ]
  },
  {
    question: "What helps to reduce traffic bunching on a motorway?",
    answers: [
      { answer: "Variable speed limits", correct: true },
      { answer: "Contraflow systems", correct: false },
      { answer: "National speed limits", correct: false },
      { answer: "Lane closures", correct: false }
    ]
  },
  {
    question: "When may you stop on a motorway?",
    answers: [
      { answer: "If you have to read a map", correct: false },
      { answer: "When you're tired and need a rest", correct: false },
      { answer: "If your mobile phone rings", correct: false },
      { answer: "In an emergency or breakdown", correct: true }
    ]
  },
  {
    question: "What's the national speed limit for a car or motorcycle on a motorway?",
    answers: [
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: false },
      { answer: "70 mph", correct: true },
      { answer: "80 mph", correct: false }
    ]
  },
  {
    question: "You stop on the hard shoulder of a motorway and use the emergency telephone. Where's the best place to wait for help to arrive?",
    answers: [
      { answer: "Next to the phone", correct: false },
      { answer: "Well away from the carriageway", correct: true },
      { answer: "With your vehicle", correct: false },
      { answer: "On the hard shoulder", correct: false }
    ]
  },
  {
    question: "You're on a motorway. What must you do if there's a red cross showing above every lane?",
    answers: [
      { answer: "Pull onto the hard shoulder", correct: false },
      { answer: "Slow down and watch for further signals", correct: false },
      { answer: "Leave at the next exit", correct: false },
      { answer: "Stop and wait", correct: true }
    ]
  },
  {
    question: "You're on a smart motorway. What does it mean if a red cross is showing above the hard shoulder and mandatory speed limits above all other lanes?",
    answers: [
      { answer: "The hard shoulder can be used as a rest area if you feel tired", correct: false },
      { answer: "The hard shoulder is for emergency or breakdown use only", correct: true },
      { answer: "The hard shoulder can be used as a normal running lane", correct: false },
      { answer: "The hard shoulder has a speed limit of 50 mph", correct: false }
    ]
  },
  {
    question: "On a smart motorway, what does this sign mean?",
    answers: [
      { answer: "Use any lane except the hard shoulder", correct: false },
      { answer: "Use the hard shoulder only", correct: false },
      { answer: "Use the three right-hand lanes only", correct: false },
      { answer: "Use all the lanes, including the hard shoulder", correct: true }
    ]
  },
  {
    question: "Where should you stop to rest if you feel tired while you're travelling along a motorway?",
    answers: [
      { answer: "On the hard shoulder", correct: false },
      { answer: "At the nearest service area", correct: true },
      { answer: "On a slip road", correct: false },
      { answer: "On the central reservation", correct: false }
    ]
  },
  {
    question: "You have stopped in an emergency refuge area. What must you do before you rejoin the carriageway?",
    answers: [
      { answer: "Use the emergency telephone", correct: true },
      { answer: "Give an arm signal as you are moving off", correct: false },
      { answer: "Switch on your vehicle's headlights", correct: false },
      { answer: "Move away with your hazard lights on", correct: false }
    ]
  },
  {
    question: "How should you rejoin the motorway after a breakdown on the hard shoulder?",
    answers: [
      { answer: "Build up speed on the hard shoulder before looking for a safe gap in the traffic", correct: true },
      { answer: "Move straight out into the left-hand lane as you are not allowed to drive on the hard shoulder", correct: false },
      { answer: "Wait until a vehicle in the left-hand lane signals to you that it's safe to rejoin", correct: false },
      { answer: "Keep your hazard lights flashing until you have safely rejoined the carriageway.", correct: false }
    ]
  },
  {
    question: "What's the speed limit for a car towing a trailer on a motorway?",
    answers: [
      { answer: "40 mph", correct: false },
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: true },
      { answer: "70 mph", correct: false }
    ]
  },
  {
    question: "When should you use the left-hand lane of a motorway?",
    answers: [
      { answer: "When your vehicle breaks down", correct: false },
      { answer: "When you're overtaking slower traffic in the other lanes", correct: false },
      { answer: "When you're making a phone call", correct: false },
      { answer: "When the road ahead is clear", correct: true }
    ]
  },
  {
    question: "You're driving on a motorway and have to slow down suddenly due to a hazard ahead. How can you warn drivers behind of the hazard?",
    answers: [
      { answer: "Switch on your hazard warning lights", correct: true },
      { answer: "Switch on your headlights", correct: false },
      { answer: "Sound your horn", correct: false },
      { answer: "Flash your headlights", correct: false }
    ]
  },
  {
    question: "Your car gets a puncture while you're driving on the motorway. What should you do when you've stopped on the hard shoulder?",
    answers: [
      { answer: "Carefully change the wheel yourself", correct: false },
      { answer: "Use an emergency telephone and call for help", correct: true },
      { answer: "Try to wave down another vehicle for help", correct: false },
      { answer: "Only change the wheel if you have a passenger to help you", correct: false }
    ]
  },
  {
    question: "What should you do if you're driving on a motorway and you miss the exit that you wanted to take?",
    answers: [
      { answer: "Carefully reverse along the hard shoulder", correct: false },
      { answer: "Carry on to the next exit", correct: true },
      { answer: "Carefully reverse in the left-hand lane", correct: false },
      { answer: "Make a U-turn at the next gap in the central reservation", correct: false }
    ]
  },
  {
    question: "Your vehicle has broken down on a motorway. What should you do if you aren't able to get onto the hard shoulder?",
    answers: [
      { answer: "Switch on your hazard warning lights", correct: true },
      { answer: "Stop the traffic behind and ask for help", correct: false },
      { answer: "Attempt to repair your vehicle quickly", correct: false },
      { answer: "Stand behind your vehicle to warn others", correct: false }
    ]
  },
  {
    question: "Why is it particularly important to check your vehicle before making a long motorway journey?",
    answers: [
      { answer: "You'll have to do more harsh braking on motorways", correct: false },
      { answer: "Motorway services areas don't deal with breakdowns", correct: false },
      { answer: "The road surface will wear down the tyres faster", correct: false },
      { answer: "Continuous high speeds increase the risk of your vehicle breaking down", correct: true }
    ]
  },
  {
    question: "You're driving on a motorway. What does it mean if the car in front shows its hazard warning lights for a short time?",
    answers: [
      { answer: "The driver wants you to overtake", correct: false },
      { answer: "The other car is going to change lanes", correct: false },
      { answer: "Traffic ahead is slowing or stopping suddenly", correct: true },
      { answer: "There's a police speed check ahead", correct: false }
    ]
  },
  {
    question: "You're driving on the motorway. Which lane should you get into well before you reach your exit?",
    answers: [
      { answer: "The middle lane", correct: false },
      { answer: "The left-hand lane", correct: true },
      { answer: "The hard shoulder", correct: false },
      { answer: "The right-hand lane", correct: false }
    ]
  },
  {
    question: "What restrictions apply to people who have a provisional driving licence?",
    answers: [
      { answer: "They can't drive over 30 mph", correct: false },
      { answer: "They can't drive at night", correct: false },
      { answer: "They can't drive unaccompanied", correct: true },
      { answer: "They can't drive with more than one passenger", correct: false }
    ]
  },
  {
    question: "Your vehicle breaks down on a motorway and you manage to stop on the hard shoulder. What should you do if you use your mobile phone to call for help?",
    answers: [
      { answer: "Stand at the rear of the vehicle while making the call", correct: false },
      { answer: "Phone a friend and ask them to come and collect you", correct: false },
      { answer: "Wait in the car for the emergency services to arrive", correct: false },
      { answer: "Check your location from the nearest marker posts beside the hard shoulder", correct: true }
    ]
  },
  {
    question: "You're towing a trailer along a three-lane motorway. When may you use the right-hand lane?",
    answers: [
      { answer: "When there are lane closures", correct: true },
      { answer: "When there's slow-moving traffic", correct: false },
      { answer: "When you can maintain a high speed", correct: false },
      { answer: "When large vehicles are in the left and centre lanes", correct: false }
    ]
  },
  {
    question: "What would you expect to find at a contraflow system on a motorway?",
    answers: [
      { answer: "Temporary traffic lights", correct: false },
      { answer: "Lower speed limits", correct: true },
      { answer: "Wider lanes than normal", correct: false },
      { answer: "Road humps", correct: false }
    ]
  },
  {
    question: "What's the meaning of this sign?",
    answers: [
      { answer: "Local speed limit applies", correct: false },
      { answer: "No waiting on the carriageway", correct: false },
      { answer: "National speed limit applies", correct: true },
      { answer: "No entry for vehicles", correct: false }
    ]
  },
  {
    question: "What's the national speed limit for cars and motorcycles on a dual carriageway?",
    answers: [
      { answer: "30 mph", correct: false },
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: false },
      { answer: "70 mph", correct: true }
    ]
  },
  {
    question: "There are no speed-limit signs on the road. How is a 30 mph limit generally indicated?",
    answers: [
      { answer: "By hazard warning lines", correct: false },
      { answer: "By street lighting", correct: true },
      { answer: "By pedestrian islands", correct: false },
      { answer: "By double or single yellow lines", correct: false }
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