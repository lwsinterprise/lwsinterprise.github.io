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
    question: 'É permitido o trânsito de um tractor agrícola ou florestal em vias reservadas a automóveis e motociclos?',
    answers: [
      {
        answer: 'Sim, até à velocidade máxima de 60 km/h.',
        correct: false,
      },
      {
        answer: 'Sim, desde que circule apenas pela berma direita.',
        correct: false,
      },
      {
        answer: 'Sim, durante o período diurno com luzes acesas.',
        correct: false,
      },
      {
        answer: 'Não, o trânsito desse veículo é proibido nessa via.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para um tractor agrícola ou florestal nas restantes vias públicas fora das localidades?',
    answers: [
      {
        answer: '40 km/h.',
        correct: true,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
      {
        answer: '50 km/h.',
        correct: false,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para uma máquina industrial ou tracto-carro dentro das localidades?',
    answers: [
      {
        answer: '50 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: true,
      },
      {
        answer: '20 km/h.',
        correct: false,
      },
      {
        answer: '40 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'É permitido o trânsito de uma máquina industrial ou tracto-carro em auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: 'Sim, durante o período diurno com luzes acesas.',
        correct: false,
      },
      {
        answer: 'Sim, até à velocidade máxima de 60 km/h.',
        correct: false,
      },
      {
        answer: 'Não, o trânsito desse veículo é proibido nessa via.',
        correct: true,
      },
      {
        answer: 'Sim, desde que circule apenas pela berma direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'É permitido o trânsito de uma máquina industrial ou tracto-carro em vias reservadas a automóveis e motociclos?',
    answers: [
      {
        answer: 'Sim, desde que circule apenas pela berma direita.',
        correct: false,
      },
      {
        answer: 'Sim, durante o período diurno com luzes acesas.',
        correct: false,
      },
      {
        answer: 'Sim, até à velocidade máxima de 60 km/h.',
        correct: false,
      },
      {
        answer: 'Não, o trânsito desse veículo é proibido nessa via.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para uma máquina industrial ou tracto-carro nas restantes vias públicas fora das localidades?',
    answers: [
      {
        answer: '40 km/h.',
        correct: true,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
      {
        answer: '50 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para uma máquina agrícola ou motocultivador dentro das localidades?',
    answers: [
      {
        answer: '10 km/h.',
        correct: false,
      },
      {
        answer: '20 km/h.',
        correct: true,
      },
      {
        answer: '40 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'É permitido o trânsito de uma máquina agrícola ou motocultivador em auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: 'Sim, desde que circule apenas pela berma direita.',
        correct: false,
      },
      {
        answer: 'Sim, até à velocidade máxima de 60 km/h.',
        correct: false,
      },
      {
        answer: 'Não, o trânsito desse veículo é proibido nessa via.',
        correct: true,
      },
      {
        answer: 'Sim, durante o período diurno com luzes acesas.',
        correct: false,
      },
    ],
  },
  {
    question: 'É permitido o trânsito de uma máquina agrícola ou motocultivador em vias reservadas a automóveis e motociclos?',
    answers: [
      {
        answer: 'Sim, durante o período diurno com luzes acesas.',
        correct: false,
      },
      {
        answer: 'Sim, até à velocidade máxima de 60 km/h.',
        correct: false,
      },
      {
        answer: 'Sim, desde que circule apenas pela berma direita.',
        correct: false,
      },
      {
        answer: 'Não, o trânsito desse veículo é proibido nessa via.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é a velocidade máxima para uma máquina agrícola ou motocultivador nas restantes vias públicas fora das localidades?',
    answers: [
      {
        answer: '20 km/h.',
        correct: true,
      },
      {
        answer: '10 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
      {
        answer: '40 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'É permitido parar ou estacionar em pontes, túneis, rotundas ou passagens de nível?',
    answers: [
      {
        answer: 'Sim, se a via tiver duas filas de trânsito.',
        correct: false,
      },
      {
        answer: 'Não, é sempre proibido parar ou estacionar nesses locais.',
        correct: true,
      },
      {
        answer: 'Sim, parar até 5 minutos com luzes de perigo.',
        correct: false,
      },
      {
        answer: 'Sim, durante o dia com boa visibilidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades, a que distância mínima dos cruzamentos ou entroncamentos é proibido parar ou estacionar?',
    answers: [
      {
        answer: 'A menos de 15 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 3 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 5 metros para um e outro lado (salvo semáforos à entrada).',
        correct: true,
      },
      {
        answer: 'A menos de 50 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância do sinal de paragem de autocarros é proibido parar ou estacionar?',
    answers: [
      {
        answer: 'A menos de 5 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 25 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 3 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 15 metros para um e outro lado do sinal.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que distância do sinal de paragem de veículos sobre carris é proibido parar ou estacionar?',
    answers: [
      {
        answer: 'A menos de 3 metros para um e outro lado do sinal.',
        correct: true,
      },
      {
        answer: 'A menos de 10 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 15 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 20 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância antes de uma passadeira de peões ou de velocípedes é proibido parar ou estacionar?',
    answers: [
      {
        answer: 'A menos de 2 metros antes da passadeira.',
        correct: false,
      },
      {
        answer: 'A menos de 5 metros antes e sobre a passadeira.',
        correct: true,
      },
      {
        answer: 'A menos de 10 metros antes e depois.',
        correct: false,
      },
      {
        answer: 'A menos de 20 metros antes da passadeira.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância antes dos semáforos colocados à entrada dos cruzamentos é proibido parar ou estacionar?',
    answers: [
      {
        answer: 'A menos de 10 metros antes dos semáforos.',
        correct: false,
      },
      {
        answer: 'A menos de 5 metros antes dos semáforos.',
        correct: false,
      },
      {
        answer: 'A menos de 20 metros antes dos sinais luminosos.',
        correct: true,
      },
      {
        answer: 'A menos de 15 metros antes dos semáforos.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância antes de um sinal vertical é proibido parar se o veículo ou a carga o encobrir?',
    answers: [
      {
        answer: 'A menos de 5 metros antes do sinal.',
        correct: false,
      },
      {
        answer: 'A menos de 30 metros antes do sinal.',
        correct: false,
      },
      {
        answer: 'A menos de 10 metros antes do sinal.',
        correct: false,
      },
      {
        answer: 'A menos de 20 metros antes do sinal.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que distância das passagens de nível não podem parar ou estacionar veículos com mercadorias perigosas?',
    answers: [
      {
        answer: 'A menos de 10 metros das passagens de nível.',
        correct: true,
      },
      {
        answer: 'A menos de 5 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 15 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 30 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual a distância mínima que deve restar até uma linha longitudinal contínua ao parar na faixa de rodagem?',
    answers: [
      {
        answer: 'Pelo menos 2 metros.',
        correct: false,
      },
      {
        answer: 'Pelo menos 3 metros entre o veículo e a linha contínua.',
        correct: true,
      },
      {
        answer: 'Pelo menos 1,5 metros.',
        correct: false,
      },
      {
        answer: 'Pelo menos 5 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Fora das localidades, a que distância de cruzamentos, curvas ou lombas de visibilidade reduzida é proibido parar ou estacionar?',
    answers: [
      {
        answer: 'A menos de 20 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 100 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 50 metros para um e outro lado.',
        correct: true,
      },
      {
        answer: 'A menos de 30 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância para um e outro lado das passagens de nível é proibido estacionar qualquer veículo?',
    answers: [
      {
        answer: 'A menos de 20 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 50 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 5 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 10 metros das passagens de nível.',
        correct: true,
      },
    ],
  },
  {
    question: 'A que distância dos postos de abastecimento de combustível é proibido estacionar?',
    answers: [
      {
        answer: 'A menos de 5 metros para um e outro lado.',
        correct: true,
      },
      {
        answer: 'A menos de 20 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 10 metros.',
        correct: false,
      },
      {
        answer: 'A menos de 15 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Fora das localidades, em que faixas de rodagem é especialmente proibido o estacionamento?',
    answers: [
      {
        answer: 'Apenas nas bermas de terra batida durante o dia.',
        correct: false,
      },
      {
        answer: 'De noite nas faixas de rodagem e nas vias assinaladas com o sinal «via com prioridade».',
        correct: true,
      },
      {
        answer: 'Nas estradas municipais com menos de 8 metros de largura.',
        correct: false,
      },
      {
        answer: 'Apenas a menos de 5 metros das árvores marginais.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como se conta a distância de proibição de paragem nas curvas ou lombas e nos cruzamentos?',
    answers: [
      {
        answer: 'Sempre a partir do eixo central do cruzamento ou do ponto mais alto da lomba.',
        correct: false,
      },
      {
        answer: 'A partir do último sinal vertical colocado 100 metros antes.',
        correct: false,
      },
      {
        answer: 'Do início ou fim da curva/lomba, e do prolongamento do limite mais próximo da faixa transversal nos cruzamentos.',
        correct: true,
      },
      {
        answer: 'A partir da berma oposta da faixa de rodagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Após quantos dias seguidos num local isento de taxa o estacionamento é considerado indevido ou abusivo?',
    answers: [
      {
        answer: 'Após 5 dias úteis consecutivos.',
        correct: false,
      },
      {
        answer: 'Apenas após 1 ano de imobilização.',
        correct: false,
      },
      {
        answer: 'Após 15 dias em qualquer rua gratuita.',
        correct: false,
      },
      {
        answer: 'Após 60 dias ininterruptos (ou 10 dias se apresentar sinais evidentes de abandono).',
        correct: true,
      },
    ],
  },
  {
    question: 'Removido um veículo estacionado abusivamente, qual é o prazo para o proprietário o levantar após notificação?',
    answers: [
      {
        answer: '45 dias (reduzido a 30 dias se houver risco previsível de deterioração).',
        correct: true,
      },
      {
        answer: '90 dias seguidos.',
        correct: false,
      },
      {
        answer: '8 dias úteis em todos os casos.',
        correct: false,
      },
      {
        answer: '180 dias antes de reverter para o Estado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Por que lado da faixa de rodagem se deve fazer o trânsito de veículos em Angola?',
    answers: [
      {
        answer: 'Pelo lado esquerdo da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Pelo lado direito da faixa de rodagem e o mais próximo possível das bermas ou passeios.',
        correct: true,
      },
      {
        answer: 'Pela berma pavimentada em qualquer circunstância.',
        correct: false,
      },
      {
        answer: 'Sempre pelo eixo central da estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Existindo duas ou mais filas de trânsito no mesmo sentido, qual deve o condutor utilizar como regra?',
    answers: [
      {
        answer: 'A via mais à esquerda se conduzir um automóvel novo.',
        correct: false,
      },
      {
        answer: 'A via central para evitar peões no passeio.',
        correct: false,
      },
      {
        answer: 'A via de trânsito mais à direita, podendo usar outra à esquerda para ultrapassar ou mudar de direcção.',
        correct: true,
      },
      {
        answer: 'Qualquer via indistintamente mesmo sem trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em filas paralelas de trânsito intenso, o facto de a fila da direita avançar mais rápido é considerado ultrapassagem?',
    answers: [
      {
        answer: 'Sim, é uma ultrapassagem proibida pela direita.',
        correct: false,
      },
      {
        answer: 'Sim, dá direito a inibição de conduzir de 1 a 12 meses.',
        correct: false,
      },
      {
        answer: 'Só não é ultrapassagem nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'Não, em filas paralelas compactas não é considerado ultrapassagem.',
        correct: true,
      },
    ],
  },
  {
    question: 'Em que situação podem os veículos atravessar bermas ou passeios?',
    answers: [
      {
        answer: 'Apenas desde que o acesso aos prédios ou propriedades o exija (salvo excepções em regulamento local).',
        correct: true,
      },
      {
        answer: 'Para estacionar gratuitamente dentro das localidades.',
        correct: false,
      },
      {
        answer: 'Para ultrapassar veículos lentos pela direita.',
        correct: false,
      },
      {
        answer: 'Para contornar filas de trânsito em hora de ponta.',
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
