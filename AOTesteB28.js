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
    question: 'Qual é o termo legal para: «via destinada ao trânsito rápido, com separação física de faixas e acessos condicionados»?',
    answers: [
      {
        answer: 'Caminho.',
        correct: false,
      },
      {
        answer: 'Berma.',
        correct: false,
      },
      {
        answer: 'Auto-estrada.',
        correct: true,
      },
      {
        answer: 'Via de trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via reservada a automóveis e motociclos»?',
    answers: [
      {
        answer: 'Pista exclusiva para velocípedes e peões.',
        correct: false,
      },
      {
        answer: 'Estrada rural destinada a veículos agrícolas.',
        correct: false,
      },
      {
        answer: 'Corredor urbano exclusivo para autocarros.',
        correct: false,
      },
      {
        answer: 'Via pública onde vigoram as normas de auto-estrada e sinalizada como tal.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via pública onde vigoram as normas de auto-estrada e sinalizada como tal»?',
    answers: [
      {
        answer: 'Via reservada a automóveis e motociclos.',
        correct: true,
      },
      {
        answer: 'Via de sentido reversível.',
        correct: false,
      },
      {
        answer: 'Faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Passeio.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «caminho»?',
    answers: [
      {
        answer: 'Superfície sobrelevada destinada a peões.',
        correct: false,
      },
      {
        answer: 'Via pública especialmente destinada ao trânsito local em zonas rurais.',
        correct: true,
      },
      {
        answer: 'Zona de intersecção de duas avenidas.',
        correct: false,
      },
      {
        answer: 'Via rápida com separador central físico.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via pública especialmente destinada ao trânsito local em zonas rurais»?',
    answers: [
      {
        answer: 'Via de aceleração.',
        correct: false,
      },
      {
        answer: 'Eixo da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Caminho.',
        correct: true,
      },
      {
        answer: 'Corredor de circulação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «faixa de rodagem»?',
    answers: [
      {
        answer: 'Linha que divide os sentidos de trânsito.',
        correct: false,
      },
      {
        answer: 'Local exclusivo para paragem de autocarros.',
        correct: false,
      },
      {
        answer: 'Superfície lateral destinada apenas a peões.',
        correct: false,
      },
      {
        answer: 'Parte da via especialmente destinada ao trânsito de veículos.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «parte da via especialmente destinada ao trânsito de veículos»?',
    answers: [
      {
        answer: 'Faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'Via de trânsito.',
        correct: false,
      },
      {
        answer: 'Via de abrandamento.',
        correct: false,
      },
      {
        answer: 'Pista especial.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «eixo da faixa de rodagem»?',
    answers: [
      {
        answer: 'Zona interdita delimitada por lancil.',
        correct: false,
      },
      {
        answer: 'Linha longitudinal que divide a faixa de rodagem em duas partes, cada uma afecta a um sentido.',
        correct: true,
      },
      {
        answer: 'Berma exterior adjacente ao passeio.',
        correct: false,
      },
      {
        answer: 'Linha transversal de paragem obrigatória.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «linha longitudinal que divide a faixa de rodagem em duas partes, cada uma afecta a um sentido»?',
    answers: [
      {
        answer: 'Cruzamento.',
        correct: false,
      },
      {
        answer: 'Berma.',
        correct: false,
      },
      {
        answer: 'Eixo da faixa de rodagem.',
        correct: true,
      },
      {
        answer: 'Via de sentido reversível.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via de trânsito»?',
    answers: [
      {
        answer: 'Conjunto das bermas e passeios da estrada.',
        correct: false,
      },
      {
        answer: 'Cruzamento de duas estradas ao mesmo nível.',
        correct: false,
      },
      {
        answer: 'Local exclusivo para cargas e descargas.',
        correct: false,
      },
      {
        answer: 'Zona longitudinal da faixa de rodagem destinada à circulação de uma única fila de veículos.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «zona longitudinal da faixa de rodagem destinada à circulação de uma única fila de veículos»?',
    answers: [
      {
        answer: 'Via de trânsito.',
        correct: true,
      },
      {
        answer: 'Entroncamento.',
        correct: false,
      },
      {
        answer: 'Passeio.',
        correct: false,
      },
      {
        answer: 'Via de aceleração.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via de sentido reversível»?',
    answers: [
      {
        answer: 'Via exclusiva para inversão do sentido de marcha.',
        correct: false,
      },
      {
        answer: 'Via de trânsito afecta alternadamente, por sinalização, a um ou outro sentido.',
        correct: true,
      },
      {
        answer: 'Via onde é permitido fazer marcha atrás livremente.',
        correct: false,
      },
      {
        answer: 'Ramal de saída de uma auto-estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via de trânsito afecta alternadamente, por sinalização, a um ou outro sentido»?',
    answers: [
      {
        answer: 'Rotunda.',
        correct: false,
      },
      {
        answer: 'Corredor de circulação.',
        correct: false,
      },
      {
        answer: 'Via de sentido reversível.',
        correct: true,
      },
      {
        answer: 'Via de abrandamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via de aceleração»?',
    answers: [
      {
        answer: 'Via destinada a diminuir a velocidade ao sair da estrada.',
        correct: false,
      },
      {
        answer: 'Faixa exclusiva para veículos pesados lentos.',
        correct: false,
      },
      {
        answer: 'Corredor reservado a ambulâncias e bombeiros.',
        correct: false,
      },
      {
        answer: 'Via resultante do alargamento da faixa para adquirir velocidade ao entrar numa via pública.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via resultante do alargamento da faixa para adquirir velocidade ao entrar numa via pública»?',
    answers: [
      {
        answer: 'Via de aceleração.',
        correct: true,
      },
      {
        answer: 'Pista especial.',
        correct: false,
      },
      {
        answer: 'Berma.',
        correct: false,
      },
      {
        answer: 'Parque de estacionamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via de abrandamento»?',
    answers: [
      {
        answer: 'Via central destinada a ultrapassagens.',
        correct: false,
      },
      {
        answer: 'Via resultante do alargamento da faixa para diminuir a velocidade ao sair de uma via pública.',
        correct: true,
      },
      {
        answer: 'Via destinada a ganhar velocidade antes de entrar na auto-estrada.',
        correct: false,
      },
      {
        answer: 'Zona de estacionamento de duração limitada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via resultante do alargamento da faixa para diminuir a velocidade ao sair de uma via pública»?',
    answers: [
      {
        answer: 'Cruzamento.',
        correct: false,
      },
      {
        answer: 'Passeio.',
        correct: false,
      },
      {
        answer: 'Via de abrandamento.',
        correct: true,
      },
      {
        answer: 'Localidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «berma»?',
    answers: [
      {
        answer: 'Via de trânsito mais à direita nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'Placa central de uma rotunda giratória.',
        correct: false,
      },
      {
        answer: 'Superfície sobrelevada destinada ao trânsito de peões.',
        correct: false,
      },
      {
        answer: 'Superfície da via pública não especialmente destinada ao trânsito de veículos que ladeia a faixa de rodagem.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «superfície da via pública não especialmente destinada ao trânsito de veículos que ladeia a faixa de rodagem»?',
    answers: [
      {
        answer: 'Berma.',
        correct: true,
      },
      {
        answer: 'Zona de estacionamento.',
        correct: false,
      },
      {
        answer: 'Entroncamento.',
        correct: false,
      },
      {
        answer: 'Corredor de circulação.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «passeio»?',
    answers: [
      {
        answer: 'Berma não pavimentada das estradas rurais.',
        correct: false,
      },
      {
        answer: 'Superfície da via pública, em geral sobrelevada, destinada ao trânsito de peões.',
        correct: true,
      },
      {
        answer: 'Zona da faixa de rodagem para ultrapassagens.',
        correct: false,
      },
      {
        answer: 'Corredor reservado a motociclos e ciclomotores.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «superfície da via pública, em geral sobrelevada, destinada ao trânsito de peões»?',
    answers: [
      {
        answer: 'Ilhéu direccional.',
        correct: false,
      },
      {
        answer: 'Pista especial.',
        correct: false,
      },
      {
        answer: 'Passeio.',
        correct: true,
      },
      {
        answer: 'Rotunda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «corredor de circulação»?',
    answers: [
      {
        answer: 'Via rápida onde vigoram regras de auto-estrada.',
        correct: false,
      },
      {
        answer: 'Bifurcação de duas vias públicas rurais.',
        correct: false,
      },
      {
        answer: 'Parque fechado para recolha de viaturas.',
        correct: false,
      },
      {
        answer: 'Via de trânsito reservada a veículos de certa espécie ou afectos a determinados transportes.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via de trânsito reservada a veículos de certa espécie ou afectos a determinados transportes»?',
    answers: [
      {
        answer: 'Corredor de circulação.',
        correct: true,
      },
      {
        answer: 'Cruzamento.',
        correct: false,
      },
      {
        answer: 'Veículos afectos à prestação de serviço urgente.',
        correct: false,
      },
      {
        answer: 'Parque de estacionamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «pista especial»?',
    answers: [
      {
        answer: 'Zona central de um cruzamento urbano.',
        correct: false,
      },
      {
        answer: 'Via ou fila destinada, por sinalização, ao trânsito de peões, animais ou certa espécie de veículos.',
        correct: true,
      },
      {
        answer: 'Faixa reservada a corridas de automóveis.',
        correct: false,
      },
      {
        answer: 'Via de aceleração em acesso de auto-estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via ou fila destinada, por sinalização, ao trânsito de peões, animais ou certa espécie de veículos»?',
    answers: [
      {
        answer: 'Entroncamento.',
        correct: false,
      },
      {
        answer: 'Localidade.',
        correct: false,
      },
      {
        answer: 'Pista especial.',
        correct: true,
      },
      {
        answer: 'Via pública.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «cruzamento»?',
    answers: [
      {
        answer: 'Zona de estacionamento pago.',
        correct: false,
      },
      {
        answer: 'Praça de sentido exclusivamente giratório.',
        correct: false,
      },
      {
        answer: 'Passagem superior ou túnel desnivelado.',
        correct: false,
      },
      {
        answer: 'Zona de intersecção de vias públicas ao mesmo nível.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «zona de intersecção de vias públicas ao mesmo nível»?',
    answers: [
      {
        answer: 'Cruzamento.',
        correct: true,
      },
      {
        answer: 'Rotunda.',
        correct: false,
      },
      {
        answer: 'Zona de estacionamento.',
        correct: false,
      },
      {
        answer: 'Via equiparada à via pública.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «entroncamento»?',
    answers: [
      {
        answer: 'Ilhéu direccional pintado no pavimento.',
        correct: false,
      },
      {
        answer: 'Zona de junção ou bifurcação de vias públicas.',
        correct: true,
      },
      {
        answer: 'Intersecção onde duas vias se atravessam totalmente.',
        correct: false,
      },
      {
        answer: 'Passagem de nível com guarda-barreiras.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «zona de junção ou bifurcação de vias públicas»?',
    answers: [
      {
        answer: 'Parque de estacionamento.',
        correct: false,
      },
      {
        answer: 'Ilhéu direccional.',
        correct: false,
      },
      {
        answer: 'Entroncamento.',
        correct: true,
      },
      {
        answer: 'Auto-estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «rotunda»?',
    answers: [
      {
        answer: 'Curva fechada numa descida perigosa.',
        correct: false,
      },
      {
        answer: 'Parque circular de estacionamento urbano.',
        correct: false,
      },
      {
        answer: 'Placa triangular situada num ramal de saída.',
        correct: false,
      },
      {
        answer: 'Praça formada por cruzamento ou entroncamento onde o trânsito se processa em sentido giratório.',
        correct: true,
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
