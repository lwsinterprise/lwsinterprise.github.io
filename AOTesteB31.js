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
    question: 'Circular a 125 km/h com um automóvel ligeiro de passageiros sem reboque dentro das localidades (limite de 60 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros sem reboque em auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: '110 km/h.',
        correct: false,
      },
      {
        answer: '120 km/h.',
        correct: true,
      },
      {
        answer: '130 km/h.',
        correct: false,
      },
      {
        answer: '140 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 140 km/h com um automóvel ligeiro de passageiros sem reboque em auto-estradas ou vias equiparadas (limite de 120 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 165 km/h com um automóvel ligeiro de passageiros sem reboque em auto-estradas ou vias equiparadas (limite de 120 km/h) é punido com:',
    answers: [
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 185 km/h com um automóvel ligeiro de passageiros sem reboque em auto-estradas ou vias equiparadas (limite de 120 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros sem reboque em vias reservadas a automóveis e motociclos?',
    answers: [
      {
        answer: '110 km/h.',
        correct: false,
      },
      {
        answer: '100 km/h.',
        correct: true,
      },
      {
        answer: '120 km/h.',
        correct: false,
      },
      {
        answer: '90 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 120 km/h com um automóvel ligeiro de passageiros sem reboque em vias reservadas a automóveis e motociclos (limite de 100 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 145 km/h com um automóvel ligeiro de passageiros sem reboque em vias reservadas a automóveis e motociclos (limite de 100 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 165 km/h com um automóvel ligeiro de passageiros sem reboque em vias reservadas a automóveis e motociclos (limite de 100 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros sem reboque nas restantes vias públicas fora das localidades?',
    answers: [
      {
        answer: '100 km/h.',
        correct: false,
      },
      {
        answer: '90 km/h.',
        correct: true,
      },
      {
        answer: '80 km/h.',
        correct: false,
      },
      {
        answer: '110 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 110 km/h com um automóvel ligeiro de passageiros sem reboque nas restantes vias públicas fora das localidades (limite de 90 km/h) é punido com:',
    answers: [
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 135 km/h com um automóvel ligeiro de passageiros sem reboque nas restantes vias públicas fora das localidades (limite de 90 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 155 km/h com um automóvel ligeiro de passageiros sem reboque nas restantes vias públicas fora das localidades (limite de 90 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros com reboque dentro das localidades?',
    answers: [
      {
        answer: '70 km/h.',
        correct: false,
      },
      {
        answer: '50 km/h.',
        correct: true,
      },
      {
        answer: '40 km/h.',
        correct: false,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 70 km/h com um automóvel ligeiro de passageiros com reboque dentro das localidades (limite de 50 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 95 km/h com um automóvel ligeiro de passageiros com reboque dentro das localidades (limite de 50 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 115 km/h com um automóvel ligeiro de passageiros com reboque dentro das localidades (limite de 50 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros com reboque em auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: '120 km/h.',
        correct: false,
      },
      {
        answer: '100 km/h.',
        correct: true,
      },
      {
        answer: '90 km/h.',
        correct: false,
      },
      {
        answer: '110 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 120 km/h com um automóvel ligeiro de passageiros com reboque em auto-estradas ou vias equiparadas (limite de 100 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 145 km/h com um automóvel ligeiro de passageiros com reboque em auto-estradas ou vias equiparadas (limite de 100 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 165 km/h com um automóvel ligeiro de passageiros com reboque em auto-estradas ou vias equiparadas (limite de 100 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros com reboque em vias reservadas a automóveis e motociclos?',
    answers: [
      {
        answer: '100 km/h.',
        correct: false,
      },
      {
        answer: '80 km/h.',
        correct: true,
      },
      {
        answer: '90 km/h.',
        correct: false,
      },
      {
        answer: '70 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 100 km/h com um automóvel ligeiro de passageiros com reboque em vias reservadas a automóveis e motociclos (limite de 80 km/h) é punido com:',
    answers: [
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 125 km/h com um automóvel ligeiro de passageiros com reboque em vias reservadas a automóveis e motociclos (limite de 80 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 145 km/h com um automóvel ligeiro de passageiros com reboque em vias reservadas a automóveis e motociclos (limite de 80 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro de passageiros com reboque nas restantes vias públicas fora das localidades?',
    answers: [
      {
        answer: '80 km/h.',
        correct: false,
      },
      {
        answer: '70 km/h.',
        correct: true,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
      {
        answer: '90 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 90 km/h com um automóvel ligeiro de passageiros com reboque nas restantes vias públicas fora das localidades (limite de 70 km/h) é punido com:',
    answers: [
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa de 60 a 300 UCF (sem inibição de conduzir).',
        correct: true,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Circular a 115 km/h com um automóvel ligeiro de passageiros com reboque nas restantes vias públicas fora das localidades (limite de 70 km/h) é punido com:',
    answers: [
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
      {
        answer: 'Multa de 120 a 600 UCF e inibição de 1 a 12 meses (grave).',
        correct: true,
      },
    ],
  },
  {
    question: 'Circular a 135 km/h com um automóvel ligeiro de passageiros com reboque nas restantes vias públicas fora das localidades (limite de 70 km/h) é punido com:',
    answers: [
      {
        answer: 'Multa de 240 a 1200 UCF e inibição de 2 a 24 meses (muito grave).',
        correct: true,
      },
      {
        answer: 'Apenas advertência verbal sem multa.',
        correct: false,
      },
      {
        answer: 'Perda imediata do veículo a favor do Estado.',
        correct: false,
      },
      {
        answer: 'Multa fixa de 15 UCF sem registo de pontos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um automóvel ligeiro misto sem reboque dentro das localidades?',
    answers: [
      {
        answer: '70 km/h.',
        correct: false,
      },
      {
        answer: '60 km/h.',
        correct: true,
      },
      {
        answer: '80 km/h.',
        correct: false,
      },
      {
        answer: '50 km/h.',
        correct: false,
      },
    ],
  },
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
