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
    question: 'Nas vias públicas angolanas, dentro das localidades, como deve agir perante um autocarro que assinala retomar a marcha à saída da paragem?',
    answers: [
      {
        answer: 'Abrandar a marcha e, se necessário, parar para lhe permitir retomar a marcha.',
        correct: true,
      },
      {
        answer: 'Manter a velocidade, pois o autocarro nunca tem prioridade.',
        correct: false,
      },
      {
        answer: 'Ultrapassar o autocarro subindo o passeio oposto.',
        correct: false,
      },
      {
        answer: 'Acelerar e buzinar para passar antes do autocarro.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas vias públicas angolanas, até que momento deve ser mantido o sinal luminoso indicador de uma manobra (pisca)?',
    answers: [
      {
        answer: 'Deve manter-se ligado durante mais 500 metros após a manobra.',
        correct: false,
      },
      {
        answer: 'Enquanto se efectua a manobra, devendo cessar logo que ela esteja concluída.',
        correct: true,
      },
      {
        answer: 'Deve desligar-se antes de iniciar a manobra.',
        correct: false,
      },
      {
        answer: 'Só é obrigatório ligar nos primeiros 2 segundos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas vias públicas angolanas, é permitido transitar em marcha tão lenta que cause embaraço injustificado aos restantes utentes?',
    answers: [
      {
        answer: 'Sim, desde que o veículo circule na via da esquerda.',
        correct: false,
      },
      {
        answer: 'Sim, não existe qualquer proibição de marcha lenta.',
        correct: false,
      },
      {
        answer: 'Não, é proibido transitar em marcha lenta que cause embaraço sem causa que o justifique.',
        correct: true,
      },
      {
        answer: 'Sim, se o condutor ligar os mínimos durante o dia.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nas vias públicas angolanas, qual é o limite mínimo de velocidade instantânea nas auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: '50 km/h.',
        correct: false,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
      {
        answer: '40 km/h.',
        correct: true,
      },
    ],
  },
  {
    question: 'Nas vias públicas angolanas, o que deve fazer o condutor sobre quem recaia o dever de ceder a passagem?',
    answers: [
      {
        answer: 'Abrandar a marcha e, se necessário, parar ou recuar para permitir a passagem sem que o outro altere velocidade ou direcção.',
        correct: true,
      },
      {
        answer: 'Avançar lentamente obrigando o outro veículo a desviar-se.',
        correct: false,
      },
      {
        answer: 'Parar apenas se o outro veículo buzinar.',
        correct: false,
      },
      {
        answer: 'Acelerar para passar antes do veículo com prioridade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a sinalização que prevalece sobre todas as outras indicações e regras de trânsito?',
    answers: [
      {
        answer: 'As indicações dos sinais luminosos.',
        correct: false,
      },
      {
        answer: 'As ordens dos agentes reguladores do trânsito.',
        correct: true,
      },
      {
        answer: 'As marcas rodoviárias pintadas no pavimento.',
        correct: false,
      },
      {
        answer: 'As indicações dos sinais verticais.',
        correct: false,
      },
    ],
  },
  {
    question: 'Perante um sinal luminoso verde e sinalização temporária que proíbe seguir em frente, o que prevalece?',
    answers: [
      {
        answer: 'As marcas rodoviárias permanentes.',
        correct: false,
      },
      {
        answer: 'A regra geral da prioridade da direita.',
        correct: false,
      },
      {
        answer: 'A sinalização temporária que modifica o regime normal da via.',
        correct: true,
      },
      {
        answer: 'O sinal luminoso verde.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num cruzamento com semáforo verde aceso e um sinal vertical STOP no mesmo poste, como deve agir?',
    answers: [
      {
        answer: 'Parar obrigatoriamente devido ao sinal STOP.',
        correct: false,
      },
      {
        answer: 'Ceder a passagem apenas aos veículos da direita.',
        correct: false,
      },
      {
        answer: 'Inverter o sentido de marcha.',
        correct: false,
      },
      {
        answer: 'Avançar com precaução, pois os sinais luminosos prevalecem sobre os sinais verticais.',
        correct: true,
      },
    ],
  },
  {
    question: 'Quando se considera que a visibilidade é reduzida ou insuficiente no Código de Estrada Angolano?',
    answers: [
      {
        answer: 'Quando não se avista a faixa de rodagem em toda a sua largura numa extensão de pelo menos 50 metros.',
        correct: true,
      },
      {
        answer: 'Apenas durante a condução nocturna sem luar.',
        correct: false,
      },
      {
        answer: 'Quando não se avista a via numa extensão de 100 metros.',
        correct: false,
      },
      {
        answer: 'Quando os faróis médios iluminam menos de 30 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como devem ser os sinais sonoros e quando é permitido o seu uso dentro das localidades?',
    answers: [
      {
        answer: 'Podem ser longos para chamar passageiros.',
        correct: false,
      },
      {
        answer: 'Devem ser breves e só são permitidos em caso de perigo iminente (durante o dia).',
        correct: true,
      },
      {
        answer: 'São permitidos à noite nos cruzamentos urbanos.',
        correct: false,
      },
      {
        answer: 'Podem ser usados como protesto no trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Dentro das localidades e durante a noite, como deve o condutor substituir os sinais sonoros?',
    answers: [
      {
        answer: 'Buzinando de forma muito breve.',
        correct: false,
      },
      {
        answer: 'Ligando apenas as luzes de marcha atrás.',
        correct: false,
      },
      {
        answer: 'Utilizando sinais luminosos (luzes intermitentes ou alternando máximos e médios sem encandear).',
        correct: true,
      },
      {
        answer: 'Ligando as luzes de nevoeiro traseiras.',
        correct: false,
      },
    ],
  },
  {
    question: 'Nos cruzamentos e entroncamentos sem sinalização, a quem deve o condutor ceder a passagem?',
    answers: [
      {
        answer: 'Apenas aos veículos pesados de mercadorias.',
        correct: false,
      },
      {
        answer: 'Aos veículos que circulem a maior velocidade.',
        correct: false,
      },
      {
        answer: 'Aos veículos que se apresentem pela esquerda.',
        correct: false,
      },
      {
        answer: 'Aos veículos que se apresentem pela direita.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao entrar numa rotunda, que regra de prioridade e de circulação deve o condutor cumprir?',
    answers: [
      {
        answer: 'Ceder a passagem a quem já circula na rotunda e contornar a placa central dando-lhe a esquerda.',
        correct: true,
      },
      {
        answer: 'Avançar com prioridade sobre quem circula na rotunda.',
        correct: false,
      },
      {
        answer: 'Dar a direita à placa central da rotunda.',
        correct: false,
      },
      {
        answer: 'Parar sempre a meio da rotunda para ceder passagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Como deve proceder qualquer condutor perante um veículo que está a sair de uma passagem de nível?',
    answers: [
      {
        answer: 'Ceder passagem apenas se for um veículo pesado.',
        correct: false,
      },
      {
        answer: 'É obrigado a ceder sempre a passagem ao veículo que sai da passagem de nível.',
        correct: true,
      },
      {
        answer: 'Buzinar para que o veículo recue para os carris.',
        correct: false,
      },
      {
        answer: 'Avançar primeiro se estiver à direita da passagem de nível.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num cruzamento não sinalizado, quem deve ceder a passagem entre um velocípede e um automóvel?',
    answers: [
      {
        answer: 'Tem prioridade o velocípede se vier pela direita.',
        correct: false,
      },
      {
        answer: 'O automóvel deve ceder sempre a passagem ao velocípede.',
        correct: false,
      },
      {
        answer: 'O condutor do velocípede deve ceder a passagem ao veículo a motor.',
        correct: true,
      },
      {
        answer: 'Ambos devem parar e recuar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Por que lado se faz a ultrapassagem como regra geral, e quando deve ser feita pela direita?',
    answers: [
      {
        answer: 'Faz-se sempre pela direita em todas as vias.',
        correct: false,
      },
      {
        answer: 'Nunca é permitido ultrapassar pela direita em Angola.',
        correct: false,
      },
      {
        answer: 'Faz-se pela direita sempre que o veículo da frente seja lento.',
        correct: false,
      },
      {
        answer: 'Faz-se pela esquerda; e pela direita quando o veículo da frente assinale virar à esquerda (ou parar à esquerda em sentido único) deixando livre a direita.',
        correct: true,
      },
    ],
  },
  {
    question: 'Quando é permitido ultrapassar numa lomba, curva de visibilidade reduzida ou cruzamento?',
    answers: [
      {
        answer: 'Quando existam duas ou mais filas no mesmo sentido e a manobra não utilize a faixa do sentido oposto.',
        correct: true,
      },
      {
        answer: 'Durante a noite se ligar as luzes de estrada (máximos).',
        correct: false,
      },
      {
        answer: 'Nunca é permitido em circunstância alguma.',
        correct: false,
      },
      {
        answer: 'Sempre que o condutor toque a buzina antes da manobra.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para virar à esquerda numa via de dois sentidos para outra via de dois sentidos, como deve proceder?',
    answers: [
      {
        answer: 'Encostar-se à berma direita e virar de imediato.',
        correct: false,
      },
      {
        answer: 'Aproximar-se do eixo da faixa de rodagem e dar a esquerda ao centro de intersecção das duas vias.',
        correct: true,
      },
      {
        answer: 'Aproximar-se do limite esquerdo total da estrada.',
        correct: false,
      },
      {
        answer: 'Contornar o centro do cruzamento dando-lhe a direita.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao estacionar um automóvel manual numa descida acentuada, que mudança deve deixar engatada?',
    answers: [
      {
        answer: 'Ponto morto (neutro).',
        correct: false,
      },
      {
        answer: 'Primeira velocidade.',
        correct: false,
      },
      {
        answer: 'Marcha atrás (e orientar as rodas dianteiras para a direita ou colocar um calço se necessário).',
        correct: true,
      },
      {
        answer: 'Terceira velocidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o limite de idade e altura abaixo do qual é proibido transportar crianças no banco da frente?',
    answers: [
      {
        answer: 'Crianças até aos 7 anos e com menos de 1,2 m.',
        correct: false,
      },
      {
        answer: 'Crianças até aos 5 anos apenas fora das localidades.',
        correct: false,
      },
      {
        answer: 'Crianças até aos 14 anos, independentemente da altura.',
        correct: false,
      },
      {
        answer: 'Crianças com idade inferior a 12 anos e com menos de 1,5 m de altura (salvo se o veículo não tiver banco traseiro).',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o alcance regulamentar das luzes de estrada (máximos) e das luzes de cruzamento (médios)?',
    answers: [
      {
        answer: 'Os máximos iluminam a uma distância não inferior a 100 metros e os médios até 30 metros.',
        correct: true,
      },
      {
        answer: 'Os máximos iluminam 200 metros e os médios 80 metros.',
        correct: false,
      },
      {
        answer: 'Os máximos iluminam até 50 metros e os médios até 15 metros.',
        correct: false,
      },
      {
        answer: 'Ambos iluminam exatamente 50 metros.',
        correct: false,
      },
    ],
  },
  {
    question: 'A partir de que taxa de álcool no sangue (TAS) é proibido conduzir, e quando constitui crime?',
    answers: [
      {
        answer: 'Proibido a partir de 0,2 g/l e crime a partir de 0,8 g/l.',
        correct: false,
      },
      {
        answer: 'É proibido quando superior a 0,6 g/l (muito grave a partir de 0,8 g/l) e é crime a partir de 1,2 g/l.',
        correct: true,
      },
      {
        answer: 'Proibido apenas a partir de 1,2 g/l.',
        correct: false,
      },
      {
        answer: 'Proibido a partir de 0,5 g/l e crime a partir de 1,0 g/l.',
        correct: false,
      },
    ],
  },
  {
    question: 'A que distância mínima deve ser colocado o sinal de pré-sinalização de perigo (triângulo)?',
    answers: [
      {
        answer: 'A 10 metros do veículo, visível a 50 metros.',
        correct: false,
      },
      {
        answer: 'A 50 metros do veículo, sem necessidade de colete.',
        correct: false,
      },
      {
        answer: 'A pelo menos 30 metros da retaguarda do veículo, visível a pelo menos 100 metros, usando o colete retrorreflector.',
        correct: true,
      },
      {
        answer: 'Encostado ao pára-choques traseiro do veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Durante quanto tempo o primeiro título de condução tem carácter provisório em Angola?',
    answers: [
      {
        answer: 'Durante 5 anos até atingir 6 pontos.',
        correct: false,
      },
      {
        answer: 'Durante 1 ano, renovável automaticamente mesmo com infracções graves.',
        correct: false,
      },
      {
        answer: 'Durante 3 anos apenas para condutores com menos de 21 anos.',
        correct: false,
      },
      {
        answer: 'Durante os 2 primeiros anos, caducando se o titular cometer crime ou contravenção punida com inibição de conduzir.',
        correct: true,
      },
    ],
  },
  {
    question: 'Quantos pontos valem as contravenções graves e muito graves, e com quantos pontos ocorre a cassação?',
    answers: [
      {
        answer: 'Grave vale 1 ponto, muito grave vale 2 pontos, e a cassação ocorre ao acumular 6 pontos em 5 anos.',
        correct: true,
      },
      {
        answer: 'Apenas os crimes contam pontos no registo do condutor.',
        correct: false,
      },
      {
        answer: 'Grave vale 2 pontos, muito grave 4 pontos e cassação aos 12 pontos.',
        correct: false,
      },
      {
        answer: 'É um sistema de desconto a partir de 15 pontos iniciais.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via pública»?',
    answers: [
      {
        answer: 'Berma lateral destinada a peões.',
        correct: false,
      },
      {
        answer: 'Via de comunicação terrestre afecta ao trânsito público.',
        correct: true,
      },
      {
        answer: 'Via do domínio privado fechada ao público.',
        correct: false,
      },
      {
        answer: 'Zona exclusiva para estacionamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via de comunicação terrestre afecta ao trânsito público»?',
    answers: [
      {
        answer: 'Via de aceleração.',
        correct: false,
      },
      {
        answer: 'Auto-estrada.',
        correct: false,
      },
      {
        answer: 'Via pública.',
        correct: true,
      },
      {
        answer: 'Faixa de rodagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «via equiparada à via pública»?',
    answers: [
      {
        answer: 'Via exclusiva para veículos de emergência.',
        correct: false,
      },
      {
        answer: 'Auto-estrada com portagem obrigatória.',
        correct: false,
      },
      {
        answer: 'Caminho rural vedado a automóveis.',
        correct: false,
      },
      {
        answer: 'Via terrestre do domínio privado aberta ao trânsito público.',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual é o termo legal para: «via terrestre do domínio privado aberta ao trânsito público»?',
    answers: [
      {
        answer: 'Via equiparada à via pública.',
        correct: true,
      },
      {
        answer: 'Via reservada a automóveis e motociclos.',
        correct: false,
      },
      {
        answer: 'Eixo da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Via de abrandamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Segundo o Código de Estrada Angolano, o que se entende por «auto-estrada»?',
    answers: [
      {
        answer: 'Via urbana com cruzamentos de nível e semáforos.',
        correct: false,
      },
      {
        answer: 'Via destinada ao trânsito rápido, com separação física de faixas e acessos condicionados.',
        correct: true,
      },
      {
        answer: 'Via reservada apenas a transporte público.',
        correct: false,
      },
      {
        answer: 'Caminho destinado ao trânsito local em zonas rurais.',
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
