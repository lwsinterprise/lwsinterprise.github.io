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
    question: 'Para segurança da circulação, com avaria de luzes à noite, que iluminação mínima à frente permite continuar a circular normalmente?',
    answers: [
      {
        answer: 'Apenas a luz de marcha atrás ligada.',
        correct: false,
      },
      {
        answer: 'Apenas a luz interior do habitáculo acesa.',
        correct: false,
      },
      {
        answer: 'Apenas um farol médio do lado direito.',
        correct: false,
      },
      {
        answer: 'Dois médios, ou um médio do lado esquerdo e dois mínimos (além de presença esquerda e luz de travagem atrás).',
        correct: true,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, perante um semáforo vermelho ou sinal STOP, como deve agir o condutor de uma ambulância em missão urgente?',
    answers: [
      {
        answer: 'É obrigado a suspender a marcha (parar), podendo prosseguir no semáforo vermelho após tomar as devidas precauções sem esperar que mude.',
        correct: true,
      },
      {
        answer: 'Pode desobedecer às ordens do agente regulador do trânsito.',
        correct: false,
      },
      {
        answer: 'Pode atravessar o sinal vermelho e o STOP a alta velocidade sem parar.',
        correct: false,
      },
      {
        answer: 'Tem de aguardar sempre que o semáforo fique verde como qualquer veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, como deve proceder o condutor se o veículo avariar e ficar imobilizado sobre uma passagem de nível?',
    answers: [
      {
        answer: 'Colocar o triângulo a 5 metros na estrada e abandonar o local.',
        correct: false,
      },
      {
        answer: 'Promover a sua imediata remoção ou, não sendo possível, tomar medidas imediatas para avisar os condutores ferroviários do obstáculo.',
        correct: true,
      },
      {
        answer: 'Tentar mudar o óleo do motor sobre os carris.',
        correct: false,
      },
      {
        answer: 'Ficar sentado dentro do veículo a aguardar um mecânico.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, qual das seguintes manobras é expressamente proibida nas auto-estradas e vias equiparadas?',
    answers: [
      {
        answer: 'Circular na via mais à direita a 90 km/h.',
        correct: false,
      },
      {
        answer: 'Ultrapassar pela esquerda a 110 km/h.',
        correct: false,
      },
      {
        answer: 'Parar ou estacionar (mesmo nas bermas), fazer marcha atrás, inverter o sentido de marcha ou transpor o separador central.',
        correct: true,
      },
      {
        answer: 'Utilizar a via de aceleração para entrar na auto-estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, em que condição é permitido ao condutor falar ao telemóvel durante a marcha do veículo?',
    answers: [
      {
        answer: 'Escrevendo apenas mensagens de texto nos cruzamentos.',
        correct: false,
      },
      {
        answer: 'Usando auscultadores nos dois ouvidos simultaneamente.',
        correct: false,
      },
      {
        answer: 'Segurando o telemóvel na mão esquerda a baixa velocidade.',
        correct: false,
      },
      {
        answer: 'Apenas através de aparelho dotado de um auricular ou com sistema de alta voz.',
        correct: true,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, se o condutor não trouxer consigo a carta de condução ou o livrete na fiscalização, como pode reduzir a multa?',
    answers: [
      {
        answer: 'Apresentando os documentos no prazo de 8 dias à autoridade indicada (reduzindo a multa de 60–300 UCF para 30–150 UCF).',
        correct: true,
      },
      {
        answer: 'Não existe redução possível e o veículo é perdido para o Estado.',
        correct: false,
      },
      {
        answer: 'Enviando uma fotografia do documento 60 dias depois.',
        correct: false,
      },
      {
        answer: 'Pagando metade do valor ao reboque privado.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, resultando feridos de um acidente de viação, qual é o dever legal imediato do condutor interveniente?',
    answers: [
      {
        answer: 'Abandonar o local para avisar a família.',
        correct: false,
      },
      {
        answer: 'Aguardar no local a chegada de agente de autoridade e providenciar do modo mais diligente o socorro aos feridos.',
        correct: true,
      },
      {
        answer: 'Dar água ou bebidas alcoólicas às vítimas inconscientes.',
        correct: false,
      },
      {
        answer: 'Retirar o veículo e seguir viagem se tiver seguro válido.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, nos motociclos e ciclomotores, que passageiros é proibido transportar?',
    answers: [
      {
        answer: 'Passageiros com mais de 60 anos.',
        correct: false,
      },
      {
        answer: 'Qualquer passageiro fora das localidades.',
        correct: false,
      },
      {
        answer: 'Crianças de idade inferior a 7 anos (salvo se o veículo tiver caixa rígida não destinada apenas a carga).',
        correct: true,
      },
      {
        answer: 'Passageiros com menos de 18 anos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, como deve proceder o condutor ao aproximar-se de uma passadeira ou ao mudar de direcção onde peões atravessam?',
    answers: [
      {
        answer: 'Contornar os peões pela berma em alta velocidade.',
        correct: false,
      },
      {
        answer: 'Buzinar para que os peões corram ou recuem.',
        correct: false,
      },
      {
        answer: 'Avançar primeiro se o condutor tiver pressa.',
        correct: false,
      },
      {
        answer: 'Deixar passar os peões que já tenham iniciado a travessia na passadeira ou na via em que o veículo vai entrar.',
        correct: true,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, qual é a regra sobre veículos com volante à direita e qual o prazo para comunicar mudança de residência ou compra?',
    answers: [
      {
        answer: 'É proibido o registo e matrícula de automóveis com volante à direita; e o prazo de comunicação à autoridade é de 30 dias.',
        correct: true,
      },
      {
        answer: 'Apenas os camiões podem ser matriculados com volante à direita.',
        correct: false,
      },
      {
        answer: 'O prazo de comunicação é de 5 dias úteis.',
        correct: false,
      },
      {
        answer: 'O volante à direita é livre; o prazo de comunicação é de 90 dias.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, nas contravenções ao Código de Estrada Angolano, a negligência (falta de cuidado) é punida?',
    answers: [
      {
        answer: 'Só é punida se provocar um acidente com feridos.',
        correct: false,
      },
      {
        answer: 'Sim, nas contravenções rodoviárias a negligência é sempre sancionada.',
        correct: true,
      },
      {
        answer: 'Não, só são punidas as infracções cometidas com intenção dolosa.',
        correct: false,
      },
      {
        answer: 'Só é punida nos condutores com carta provisória.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, qual é o adicional aplicado sobre as multas rodoviárias e que redução beneficia os condutores de velocípedes?',
    answers: [
      {
        answer: 'O adicional é de 50% e os velocípedes pagam o dobro.',
        correct: false,
      },
      {
        answer: 'O adicional é de 25% apenas nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'As multas têm um adicional de 10% para os governos provinciais; e para os condutores de velocípedes os limites reduzem-se a metade.',
        correct: true,
      },
      {
        answer: 'Não existe adicional e os velocípedes estão isentos de multas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, dando positivo no teste de álcool no ar expirado, por quanto tempo fica o condutor impedido de conduzir?',
    answers: [
      {
        answer: 'Por 30 dias sem possibilidade de exame médico.',
        correct: false,
      },
      {
        answer: 'Por 48 horas sem direito a contraprova.',
        correct: false,
      },
      {
        answer: 'Por 2 horas apenas.',
        correct: false,
      },
      {
        answer: 'Por 12 horas (podendo requerer de imediato contraprova por novo aparelho aprovado ou análise de sangue).',
        correct: true,
      },
    ],
  },
  {
    question: 'Para segurança da circulação, havendo indícios de influência de substâncias entorpecentes, por quanto tempo fica o condutor impedido de conduzir?',
    answers: [
      {
        answer: 'Pelo período de 48 horas, salvo se antes disso o exame laboratorial de rastreio apresentar resultado negativo.',
        correct: true,
      },
      {
        answer: 'Apenas por 6 horas.',
        correct: false,
      },
      {
        answer: 'Apenas por 12 horas.',
        correct: false,
      },
      {
        answer: 'Fica impedido durante 15 dias úteis.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, por que lado da faixa de rodagem se deve fazer o trânsito de veículos em Angola?',
    answers: [
      {
        answer: 'Pelo lado esquerdo da faixa de rodagem.',
        correct: false,
      },
      {
        answer: 'Pela berma pavimentada em qualquer circunstância.',
        correct: false,
      },
      {
        answer: 'Pelo lado direito da faixa de rodagem e o mais próximo possível das bermas ou passeios.',
        correct: true,
      },
      {
        answer: 'Sempre pelo eixo central da estrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, existindo duas ou mais filas de trânsito no mesmo sentido, qual deve o condutor utilizar como regra?',
    answers: [
      {
        answer: 'A via mais à esquerda se conduzir um automóvel novo.',
        correct: false,
      },
      {
        answer: 'Qualquer via indistintamente mesmo sem trânsito.',
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
    ],
  },
  {
    question: 'No trânsito em via pública, em filas paralelas de trânsito intenso, o facto de a fila da direita avançar mais rápido é considerado ultrapassagem?',
    answers: [
      {
        answer: 'Não, em filas paralelas compactas não é considerado ultrapassagem.',
        correct: true,
      },
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
    ],
  },
  {
    question: 'No trânsito em via pública, em que situação podem os veículos atravessar bermas ou passeios?',
    answers: [
      {
        answer: 'Para contornar filas de trânsito em hora de ponta.',
        correct: false,
      },
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
    ],
  },
  {
    question: 'No trânsito em via pública, dentro das localidades, como deve agir perante um autocarro que assinala retomar a marcha à saída da paragem?',
    answers: [
      {
        answer: 'Manter a velocidade, pois o autocarro nunca tem prioridade.',
        correct: false,
      },
      {
        answer: 'Ultrapassar o autocarro subindo o passeio oposto.',
        correct: false,
      },
      {
        answer: 'Abrandar a marcha e, se necessário, parar para lhe permitir retomar a marcha.',
        correct: true,
      },
      {
        answer: 'Acelerar e buzinar para passar antes do autocarro.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, até que momento deve ser mantido o sinal luminoso indicador de uma manobra (pisca)?',
    answers: [
      {
        answer: 'Só é obrigatório ligar nos primeiros 2 segundos.',
        correct: false,
      },
      {
        answer: 'Deve manter-se ligado durante mais 500 metros após a manobra.',
        correct: false,
      },
      {
        answer: 'Deve desligar-se antes de iniciar a manobra.',
        correct: false,
      },
      {
        answer: 'Enquanto se efectua a manobra, devendo cessar logo que ela esteja concluída.',
        correct: true,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, é permitido transitar em marcha tão lenta que cause embaraço injustificado aos restantes utentes?',
    answers: [
      {
        answer: 'Não, é proibido transitar em marcha lenta que cause embaraço sem causa que o justifique.',
        correct: true,
      },
      {
        answer: 'Sim, desde que o veículo circule na via da esquerda.',
        correct: false,
      },
      {
        answer: 'Sim, não existe qualquer proibição de marcha lenta.',
        correct: false,
      },
      {
        answer: 'Sim, se o condutor ligar os mínimos durante o dia.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, qual é o limite mínimo de velocidade instantânea nas auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: '50 km/h.',
        correct: false,
      },
      {
        answer: '40 km/h.',
        correct: true,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
      {
        answer: '30 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, o que deve fazer o condutor sobre quem recaia o dever de ceder a passagem?',
    answers: [
      {
        answer: 'Acelerar para passar antes do veículo com prioridade.',
        correct: false,
      },
      {
        answer: 'Parar apenas se o outro veículo buzinar.',
        correct: false,
      },
      {
        answer: 'Abrandar a marcha e, se necessário, parar ou recuar para permitir a passagem sem que o outro altere velocidade ou direcção.',
        correct: true,
      },
      {
        answer: 'Avançar lentamente obrigando o outro veículo a desviar-se.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, como deve proceder ao sair de um posto de abastecimento de combustível ou de um parque de estacionamento?',
    answers: [
      {
        answer: 'Só cede a passagem a veículos pesados.',
        correct: false,
      },
      {
        answer: 'Tem prioridade sobre os veículos que venham pela esquerda.',
        correct: false,
      },
      {
        answer: 'Tem prioridade se ligar os quatro piscas.',
        correct: false,
      },
      {
        answer: 'Deve ceder sempre a passagem a todos os veículos que circulem na via pública.',
        correct: true,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, se a faixa de rodagem estiver parcialmente obstruída num dos lados, quem deve ceder a passagem?',
    answers: [
      {
        answer: 'O condutor que tiver de utilizar a parte esquerda da faixa de rodagem para contornar o obstáculo.',
        correct: true,
      },
      {
        answer: 'O condutor cuja via está livre de obstáculos.',
        correct: false,
      },
      {
        answer: 'O veículo que for mais pesado.',
        correct: false,
      },
      {
        answer: 'O veículo que vier a descer, mesmo em estrada plana.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, numa via estreita de forte inclinação onde não é possível o cruzamento simultâneo (sem marcha atrás), quem cede a passagem?',
    answers: [
      {
        answer: 'O veículo que tiver menos passageiros.',
        correct: false,
      },
      {
        answer: 'O condutor do veículo que desce.',
        correct: true,
      },
      {
        answer: 'O veículo de menor cilindrada.',
        correct: false,
      },
      {
        answer: 'O condutor do veículo que sobe.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, numa via estreita, a distâncias iguais do local de cruzamento, quem deve fazer marcha atrás entre um ligeiro e um pesado?',
    answers: [
      {
        answer: 'Recua o veículo de cor mais escura.',
        correct: false,
      },
      {
        answer: 'Recua sempre quem vai a descer.',
        correct: false,
      },
      {
        answer: 'O condutor do veículo ligeiro recua perante o veículo pesado.',
        correct: true,
      },
      {
        answer: 'O veículo pesado recua sempre perante o ligeiro.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, que obrigação tem o condutor que está a ser ultrapassado por outro veículo?',
    answers: [
      {
        answer: 'Desviar-se para o eixo da via.',
        correct: false,
      },
      {
        answer: 'Travar bruscamente a fundo.',
        correct: false,
      },
      {
        answer: 'Aumentar a velocidade para testar a potência do outro veículo.',
        correct: false,
      },
      {
        answer: 'Desviar-se o mais possível para a direita e não aumentar a velocidade enquanto não for ultrapassado.',
        correct: true,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, é permitido ultrapassar imediatamente antes ou sobre uma passadeira assinalada para peões?',
    answers: [
      {
        answer: 'Não, é sempre proibida a ultrapassagem imediatamente antes e nas passagens de peões.',
        correct: true,
      },
      {
        answer: 'Sim, se não houver peões visíveis na passadeira.',
        correct: false,
      },
      {
        answer: 'Sim, desde que o condutor buzine previamente.',
        correct: false,
      },
      {
        answer: 'Sim, se circular a menos de 40 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'No trânsito em via pública, como deve ser executada a manobra de mudança de direcção para a direita?',
    answers: [
      {
        answer: 'Abrindo a trajectória para a faixa da esquerda antes de virar.',
        correct: false,
      },
      {
        answer: 'Aproximando-se com antecedência do limite direito da faixa de rodagem e efectuando a manobra no trajecto mais curto.',
        correct: true,
      },
      {
        answer: 'Sem reduzir a velocidade nem ligar o pisca.',
        correct: false,
      },
      {
        answer: 'Pelo trajecto mais longo no centro do cruzamento.',
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
