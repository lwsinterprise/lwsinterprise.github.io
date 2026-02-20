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
    question: "At night, what does it mean if you see a pedestrian wearing reflective clothing and carrying a bright red light?",
    answers: [
      { answer: "You're approaching roadworks", correct: false },
      { answer: "You're approaching an organised walk", correct: true },
      { answer: "You're approaching a slow-moving vehicle", correct: false },
      { answer: "You're approaching a traffic danger spot", correct: false }
    ]
  },
  {
    question: "You’ve just passed your driving test. How can you reduce your risk of being involved in a collision?",
    answers: [
      { answer: "By always staying close to the vehicle in front", correct: false },
      { answer: "By never going over 40 mph", correct: false },
      { answer: "By staying in the left-hand lane on all roads", correct: false },
      { answer: "By taking further training", correct: true }
    ]
  },
  {
    question: "You're turning right from a main road into a side road. There's no oncoming traffic. What should you do if pedestrians are standing on the pavement waiting to cross the side road?",
    answers: [
      { answer: "Turn in because the pedestrians are safe on the pavement", correct: false },
      { answer: "Wave at the pedestrians, inviting them to cross the road", correct: false },
      { answer: "Wait and give way to the pedestrians", correct: true },
      { answer: "Sound your horn to alert the pedestrians to your presence", correct: false }
    ]
  },
  {
    question: "You're travelling on a narrow section of road. What should you do if a horse rider ahead is riding in the centre of the lane?",
    answers: [
      { answer: "Sound your horn to alert them to your presence", correct: false },
      { answer: "Stay behind and allow them to ride in this position", correct: true },
      { answer: "Move across to the right and try to ease past them", correct: false },
      { answer: "Get up close behind to encourage them to move aside", correct: false }
    ]
  },
  {
    question: "You’re about to overtake a cyclist on a road that has a 30 mph speed limit. How much room should you leave them as you overtake?",
    answers: [
      { answer: "At least as much room as you would if you were overtaking a car", correct: true },
      { answer: "At least a car’s width", correct: false },
      { answer: "At least a car’s length", correct: false },
      { answer: "At least 2 car widths", correct: false }
    ]
  },
  {
    question: "You're turning left from a main road into a side road. What should you do if there’s a pedestrian on the pavement waiting to cross the side road?",
    answers: [
      { answer: "Flash your lights to encourage the pedestrian to cross", correct: false },
      { answer: "Carry on turning into the side road", correct: false },
      { answer: "Sound your horn to let the pedestrian know you’re there", correct: false },
      { answer: "Wait and give way to the pedestrian", correct: true }
    ]
  },
  {
    question: "You want to reverse into a side road. What should you do if you aren't sure that the area behind your car is clear?",
    answers: [
      { answer: "Look through the rear window only", correct: false },
      { answer: "Get out and check", correct: true },
      { answer: "Check the mirrors only", correct: false },
      { answer: "Carry on, assuming it's clear", correct: false }
    ]
  },
  {
    question: "You're about to reverse into a side road. What should you do if a pedestrian is waiting to cross behind your car?",
    answers: [
      { answer: "Wave to the pedestrian to stop", correct: false },
      { answer: "Give way to the pedestrian", correct: true },
      { answer: "Sound your horn to warn the pedestrian", correct: false },
      { answer: "Reverse before the pedestrian starts to cross", correct: false }
    ]
  },
  {
    question: "Which road users are most difficult to see when you're reversing your car?",
    answers: [
      { answer: "Motorcyclists", correct: false },
      { answer: "Car drivers", correct: false },
      { answer: "Cyclists", correct: false },
      { answer: "Children", correct: true }
    ]
  },
  {
    question: "You want to turn right from a junction. What should you do if your view is restricted by parked vehicles?",
    answers: [
      { answer: "Move out quickly, but be prepared to stop", correct: false },
      { answer: "Sound your horn and pull out if there's no reply", correct: false },
      { answer: "Stop, then move forward slowly until you have a clear view", correct: true },
      { answer: "Stop, get out and look along the main road to check", correct: false }
    ]
  },
  {
    question: "You're at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
    answers: [
      { answer: "To look for pedestrians about to cross", correct: false },
      { answer: "To check for overtaking vehicles", correct: true },
      { answer: "To make sure the side road is clear", correct: false },
      { answer: "To check for emerging traffic", correct: false }
    ]
  },
  {
    question: "You've driven up to a pelican crossing. What must you do while the amber light is flashing?",
    answers: [
      { answer: "Signal the pedestrian to cross", correct: false },
      { answer: "Always wait for the green light before proceeding", correct: false },
      { answer: "Give way to any pedestrians on the crossing", correct: true },
      { answer: "Wait for the red-and-amber light before proceeding", correct: false }
    ]
  },
  {
    question: "You've stopped at a pelican crossing. What should you do if a disabled person is crossing slowly in front of you and the lights change to green?",
    answers: [
      { answer: "Wait for them to finish crossing", correct: true },
      { answer: "Drive in front of them", correct: false },
      { answer: "Edge forward slowly", correct: false },
      { answer: "Sound your horn", correct: false }
    ]
  },
  {
    question: "You're driving past a line of parked cars. What should you do if a ball bounces out into the road ahead?",
    answers: [
      { answer: "Continue driving at the same speed and sound your horn", correct: false },
      { answer: "Continue driving at the same speed and flash your headlights", correct: false },
      { answer: "Slow down and be prepared to stop for children", correct: true },
      { answer: "Stop and wave the children across to fetch their ball", correct: false }
    ]
  },
  {
    question: "You want to turn right from a main road into a side road. What should you do just before turning?",
    answers: [
      { answer: "Cancel your right-turn signal", correct: false },
      { answer: "Select first gear", correct: false },
      { answer: "Check for traffic overtaking on your right", correct: true },
      { answer: "Stop and set the parking brake", correct: false }
    ]
  },
  {
    question: "You're driving in a slow-moving queue of traffic. What should you do just before changing lane?",
    answers: [
      { answer: "Sound the horn and flash your lights", correct: false },
      { answer: "Look for motorcyclists filtering through the traffic", correct: true },
      { answer: "Give a ‘slowing down’ arm signal", correct: false },
      { answer: "Change down to first gear", correct: false }
    ]
  },
  {
    question: "You're driving in town. Why should you be careful if there's a bus at a bus stop on the other side of the road?",
    answers: [
      { answer: "The bus might have broken down", correct: false },
      { answer: "Pedestrians might come from behind the bus", correct: true },
      { answer: "The bus might move off suddenly", correct: false },
      { answer: "The bus might remain stationary", correct: false }
    ]
  },
  {
    question: "How should you overtake horse riders?",
    answers: [
      { answer: "Drive up close and overtake as soon as possible", correct: false },
      { answer: "Speed isn't important but allow plenty of room", correct: false },
      { answer: "Use your horn just once to warn them", correct: false },
      { answer: "Drive slowly and leave plenty of room", correct: true }
    ]
  },
  {
    question: "Why should you allow extra room while overtaking a motorcyclist on a windy day?",
    answers: [
      { answer: "The rider may turn off suddenly to get out of the wind", correct: false },
      { answer: "The rider may be blown in front of you", correct: true },
      { answer: "The rider may stop suddenly", correct: false },
      { answer: "The rider may be travelling faster than normal", correct: false }
    ]
  },
  {
    question: "Where should you take particular care to look for motorcyclists and cyclists?",
    answers: [
      { answer: "On dual carriageways", correct: false },
      { answer: "At junctions", correct: true },
      { answer: "At zebra crossings", correct: false },
      { answer: "On one-way streets", correct: false }
    ]
  },
  {
    question: "The road outside this school is marked with yellow zigzag lines. What do these lines mean?",
    answers: [
      { answer: "You may park on the lines when dropping off schoolchildren", correct: false },
      { answer: "You may park on the lines when picking up schoolchildren", correct: false },
      { answer: "You shouldn't wait or park your vehicle here", correct: true },
      { answer: "You must stay with your vehicle if you park here", correct: false }
    ]
  },
  {
    question: "You're driving past parked cars. What should you do if you see a bicycle wheel sticking out between the cars?",
    answers: [
      { answer: "Accelerate past quickly and sound your horn", correct: false },
      { answer: "Slow down and wave the cyclist across", correct: false },
      { answer: "Brake sharply and flash your headlights", correct: false },
      { answer: "Slow down and be prepared to stop for a cyclist", correct: true }
    ]
  },
  {
    question: "You're driving at night. What should you do if you're dazzled by a vehicle behind you?",
    answers: [
      { answer: "Set your mirror to the anti-dazzle position", correct: true },
      { answer: "Set your mirror to dazzle the other driver", correct: false },
      { answer: "Brake sharply to a stop", correct: false },
      { answer: "Switch your rear lights on and off", correct: false }
    ]
  },
  {
    question: "You're driving towards a zebra crossing. What should you do if a person in a wheelchair is waiting to cross?",
    answers: [
      { answer: "Continue on your way", correct: false },
      { answer: "Wave to the person to cross", correct: false },
      { answer: "Wave to the person to wait", correct: false },
      { answer: "Be prepared to stop", correct: true }
    ]
  },
  {
    question: "You're about to overtake a slow-moving motorcyclist. Which sign would make you take special care?",
    answers: [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "You're waiting to turn right out of a minor road. It's clear to the left but a lorry is coming from the right. Why should you wait, even if you have enough time to turn?",
    answers: [
      { answer: "Anything overtaking the lorry will be hidden from view", correct: true },
      { answer: "The lorry could suddenly speed up", correct: false },
      { answer: "The lorry might be slowing down", correct: false },
      { answer: "The load on the lorry might be unstable", correct: false }
    ]
  },
  {
    question: "You're following a long vehicle as it approaches a crossroads. What should you do if it signals left but moves out to the right?",
    answers: [
      { answer: "Get closer in order to pass it quickly", correct: false },
      { answer: "Stay well back and give it room", correct: true },
      { answer: "Assume the signal is wrong and that it's turning right", correct: false },
      { answer: "Overtake it as it starts to slow down", correct: false }
    ]
  },
  {
    question: "You're following a long vehicle approaching a crossroads. What should you do if the driver signals right but moves close to the left-hand kerb?",
    answers: [
      { answer: "Warn the driver about the wrong signal", correct: false },
      { answer: "Wait behind the long vehicle", correct: true },
      { answer: "Report the driver to the police", correct: false },
      { answer: "Overtake on the right-hand side", correct: false }
    ]
  },
  {
    question: "You’re approaching a mini-roundabout. What should you do if a long vehicle in front signals left but positions over to the right?",
    answers: [
      { answer: "Sound your horn", correct: false },
      { answer: "Overtake on the left", correct: false },
      { answer: "Follow the same course as the lorry", correct: false },
      { answer: "Keep well back", correct: true }
    ]
  },
  {
    question: "You're driving on a single carriageway road. Why should you keep well back while you're following a large vehicle?",
    answers: [
      { answer: "To give yourself acceleration space if you decide to overtake", correct: false },
      { answer: "To get the best view of the road ahead", correct: true },
      { answer: "To leave a gap in case the vehicle stops and rolls back", correct: false },
      { answer: "To offer other drivers a safe gap if they want to overtake you", correct: false }
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