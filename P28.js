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
    question: "Which sign shows that you're entering a one-way system?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "With-flow bus and cycle lane", correct: true },
      { answer: "Contraflow bus and cycle lane", correct: false },
      { answer: "No buses and cycles allowed", correct: false },
      { answer: "No waiting for buses and cycles", correct: false }
    ]
  },
  {
    question: "Which of these signs warns you of a zebra crossing?",
    answers: [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "School crossing patrol", correct: false },
      { answer: "No pedestrians allowed", correct: false },
      { answer: "Pedestrian zone - no vehicles", correct: false },
      { answer: "Zebra crossing ahead", correct: true }
    ]
  },
  {
    question: "Which sign means there will be two-way traffic crossing your route ahead?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "Which arm signal tells you that the car you're following is going to pull up?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false }
    ]
  },
  {
    question: "Which sign means turn left ahead?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What should you be aware of if you've just passed this sign?",
    answers: [
      { answer: "This is a single-track road", correct: false },
      { answer: "You can't stop on this road", correct: false },
      { answer: "Only one lane is in use", correct: false },
      { answer: "All traffic is going one way", correct: true }
    ]
  },
  {
    question: "You're approaching traffic lights and the red light is showing. What signal will show next?",
    answers: [
      { answer: "Red and amber", correct: true },
      { answer: "Green alone", correct: false },
      { answer: "Amber alone", correct: false },
      { answer: "Green and amber", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Low bridge ahead", correct: false },
      { answer: "Tunnel ahead", correct: true },
      { answer: "Ancient monument ahead", correct: false },
      { answer: "Traffic danger spot ahead", correct: false }
    ]
  },
  {
    question: "What does the white line along the side of the road indicate?",
    answers: [
      { answer: "The edge of the carriageway", correct: true },
      { answer: "The approach to a hazard", correct: false },
      { answer: "No parking", correct: false },
      { answer: "No overtaking", correct: false }
    ]
  },
  {
    question: "What does this white arrow on the road mean?",
    answers: [
      { answer: "Entrance on the left", correct: false },
      { answer: "All vehicles turn left", correct: false },
      { answer: "Return to your side of the road", correct: true },
      { answer: "Road bends to the left", correct: false }
    ]
  },
  {
    question: "How should you give an arm signal to turn left?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false }
    ]
  },
  {
    question: "You're waiting at a T-junction. What should you do if a vehicle is coming from the right, with its left indicator flashing?",
    answers: [
      { answer: "Move out and accelerate hard", correct: false },
      { answer: "Wait until the vehicle starts to turn in", correct: true },
      { answer: "Pull out before the vehicle reaches the junction", correct: false },
      { answer: "Move out slowly", correct: false }
    ]
  },
  {
    question: "When may you use hazard warning lights while you're driving?",
    answers: [
      { answer: "Instead of sounding the horn in a built-up area between 11.30 pm and 7.00 am", correct: false },
      { answer: "On a motorway or unrestricted dual carriageway, to warn of a hazard ahead", correct: true },
      { answer: "On rural routes, after a sign warning of animals", correct: false },
      { answer: "On the approach to toucan crossings, where cyclists are waiting to cross", correct: false }
    ]
  },
  {
    question: "Why should you make sure that your indicators are cancelled after turning at a junction?",
    answers: [
      { answer: "To avoid flattening the battery", correct: false },
      { answer: "To avoid misleading other road users", correct: true },
      { answer: "To avoid dazzling other road users", correct: false },
      { answer: "To avoid damage to the indicator relay", correct: false }
    ]
  },
  {
    question: "You're driving in busy traffic. You want to pull up just after a junction on the left. When should you signal?",
    answers: [
      { answer: "As you're passing or just after the junction", correct: true },
      { answer: "Just before you reach the junction", correct: false },
      { answer: "Well before you reach the junction", correct: false },
      { answer: "It would be better not to signal at all", correct: false }
    ]
  },
  {
    question: "For how long is an MOT certificate normally valid?",
    answers: [
      { answer: "Three years after the date it was issued", correct: false },
      { answer: "10,000 miles", correct: false },
      { answer: "One year after the date it was issued", correct: true },
      { answer: "30,000 miles", correct: false }
    ]
  },
  {
    question: "What's a cover note?",
    answers: [
      { answer: "A document issued before you receive your driving licence", correct: false },
      { answer: "A document issued before you receive your insurance certificate", correct: true },
      { answer: "A document issued before you receive your registration document", correct: false },
      { answer: "A document issued before you receive your MOT certificate", correct: false }
    ]
  },
  {
    question: "You've just passed your first practical driving test. What will you have to do if you get six penalty points on your licence in the next two years?",
    answers: [
      { answer: "Retake only your theory test", correct: false },
      { answer: "Retake your theory and practical tests", correct: true },
      { answer: "Retake only your practical test", correct: false },
      { answer: "Reapply for your full licence immediately", correct: false }
    ]
  },
  {
    question: "For how long is a Statutory Off-Road Notification (SORN) valid?",
    answers: [
      { answer: "Until the vehicle is taxed, sold or scrapped", correct: true },
      { answer: "Until the vehicle is insured and MOT'd", correct: false },
      { answer: "Until the vehicle is repaired or modified", correct: false },
      { answer: "Until the vehicle is used on the road", correct: false }
    ]
  },
  {
    question: "What's a Statutory Off-Road Notification (SORN)?",
    answers: [
      { answer: "A notification to tell DVSA that a vehicle doesn't have a current MOT", correct: false },
      { answer: "Information kept by the police about the owner of a vehicle", correct: false },
      { answer: "A notification to tell DVLA that a vehicle isn't being used on the road", correct: true },
      { answer: "Information held by insurance companies to check a vehicle is insured", correct: false }
    ]
  },
  {
    question: "What's the maximum fine for driving or riding without insurance?",
    answers: [
      { answer: "Unlimited", correct: true },
      { answer: "£500", correct: false },
      { answer: "£1000", correct: false },
      { answer: "£5000", correct: false }
    ]
  },
  {
    question: "Who's legally responsible for ensuring that a vehicle registration certificate (V5C) is updated?",
    answers: [
      { answer: "The registered vehicle keeper", correct: true },
      { answer: "The vehicle manufacturer", correct: false },
      { answer: "Your insurance company", correct: false },
      { answer: "The licensing authority", correct: false }
    ]
  },
  {
    question: "Your insurer will issue you with an insurance certificate. When must you produce this document for inspection?",
    answers: [
      { answer: "When making a SORN", correct: false },
      { answer: "When buying or selling a vehicle", correct: false },
      { answer: "When a police officer asks you for it", correct: true },
      { answer: "When your vehicle is having an MOT test", correct: false }
    ]
  },
  {
    question: "When must your vehicle have valid insurance cover?",
    answers: [
      { answer: "Before you can make a SORN", correct: false },
      { answer: "Before you can sell the vehicle", correct: false },
      { answer: "Before you can scrap the vehicle", correct: false },
      { answer: "Before you can tax the vehicle", correct: true }
    ]
  },
  {
    question: "What do you need before you can legally use a motor vehicle on the road?",
    answers: [
      { answer: "An appropriate driving licence", correct: true },
      { answer: "Breakdown cover", correct: false },
      { answer: "Proof of your identity", correct: false },
      { answer: "A vehicle handbook", correct: false }
    ]
  },
  {
    question: "What must you have when you apply to renew your vehicle tax?",
    answers: [
      { answer: "Valid insurance", correct: true },
      { answer: "The vehicle's chassis number", correct: false },
      { answer: "The handbook", correct: false },
      { answer: "A valid driving licence", correct: false }
    ]
  },
  {
    question: "A police officer asks to see your documents. You don't have them with you. How many days do you have to produce them at a police station?",
    answers: [
      { answer: "5 days", correct: false },
      { answer: "7 days", correct: true },
      { answer: "14 days", correct: false },
      { answer: "21 days", correct: false }
    ]
  },
  {
    question: "When should you update your vehicle registration certificate?",
    answers: [
      { answer: "When you pass your driving test", correct: false },
      { answer: "When you move house", correct: true },
      { answer: "When your vehicle needs an MOT", correct: false },
      { answer: "When you have a collision", correct: false }
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