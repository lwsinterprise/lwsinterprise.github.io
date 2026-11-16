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
    question: 'Ao conduzir um veículo ligeiro, dentro das localidades, como deve agir perante um autocarro que assinala retomar a marcha à saída da paragem?',
    answers: [
      {
        answer: 'Ultrapassar o autocarro subindo o passeio oposto.',
        correct: false,
      },
      {
        answer: 'Manter a velocidade, pois o autocarro nunca tem prioridade.',
        correct: false,
      },
      {
        answer: 'Acelerar e buzinar para passar antes do autocarro.',
        correct: false,
      },
      {
        answer: 'Abrandar a marcha e, se necessário, parar para lhe permitir retomar a marcha.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, até que momento deve ser mantido o sinal luminoso indicador de uma manobra (pisca)?',
    answers: [
      {
        answer: 'Enquanto se efectua a manobra, devendo cessar logo que ela esteja concluída.',
        correct: true,
      },
      {
        answer: 'Deve manter-se ligado durante mais 500 metros após a manobra.',
        correct: false,
      },
      {
        answer: 'Só é obrigatório ligar nos primeiros 2 segundos.',
        correct: false,
      },
      {
        answer: 'Deve desligar-se antes de iniciar a manobra.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, é permitido transitar em marcha tão lenta que cause embaraço injustificado aos restantes utentes?',
    answers: [
      {
        answer: 'Sim, se o condutor ligar os mínimos durante o dia.',
        correct: false,
      },
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
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, qual é o limite mínimo de velocidade instantânea nas auto-estradas ou vias equiparadas?',
    answers: [
      {
        answer: '30 km/h.',
        correct: false,
      },
      {
        answer: '60 km/h.',
        correct: false,
      },
      {
        answer: '40 km/h.',
        correct: true,
      },
      {
        answer: '50 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, o que deve fazer o condutor sobre quem recaia o dever de ceder a passagem?',
    answers: [
      {
        answer: 'Acelerar para passar antes do veículo com prioridade.',
        correct: false,
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
        answer: 'Abrandar a marcha e, se necessário, parar ou recuar para permitir a passagem sem que o outro altere velocidade ou direcção.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, como deve proceder ao sair de um posto de abastecimento de combustível ou de um parque de estacionamento?',
    answers: [
      {
        answer: 'Deve ceder sempre a passagem a todos os veículos que circulem na via pública.',
        correct: true,
      },
      {
        answer: 'Tem prioridade se ligar os quatro piscas.',
        correct: false,
      },
      {
        answer: 'Só cede a passagem a veículos pesados.',
        correct: false,
      },
      {
        answer: 'Tem prioridade sobre os veículos que venham pela esquerda.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, se a faixa de rodagem estiver parcialmente obstruída num dos lados, quem deve ceder a passagem?',
    answers: [
      {
        answer: 'O veículo que vier a descer, mesmo em estrada plana.',
        correct: false,
      },
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
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, numa via estreita de forte inclinação onde não é possível o cruzamento simultâneo (sem marcha atrás), quem cede a passagem?',
    answers: [
      {
        answer: 'O condutor do veículo que sobe.',
        correct: false,
      },
      {
        answer: 'O veículo de menor cilindrada.',
        correct: false,
      },
      {
        answer: 'O condutor do veículo que desce.',
        correct: true,
      },
      {
        answer: 'O veículo que tiver menos passageiros.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, numa via estreita, a distâncias iguais do local de cruzamento, quem deve fazer marcha atrás entre um ligeiro e um pesado?',
    answers: [
      {
        answer: 'Recua sempre quem vai a descer.',
        correct: false,
      },
      {
        answer: 'O veículo pesado recua sempre perante o ligeiro.',
        correct: false,
      },
      {
        answer: 'Recua o veículo de cor mais escura.',
        correct: false,
      },
      {
        answer: 'O condutor do veículo ligeiro recua perante o veículo pesado.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, que obrigação tem o condutor que está a ser ultrapassado por outro veículo?',
    answers: [
      {
        answer: 'Desviar-se o mais possível para a direita e não aumentar a velocidade enquanto não for ultrapassado.',
        correct: true,
      },
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
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, é permitido ultrapassar imediatamente antes ou sobre uma passadeira assinalada para peões?',
    answers: [
      {
        answer: 'Sim, se não houver peões visíveis na passadeira.',
        correct: false,
      },
      {
        answer: 'Não, é sempre proibida a ultrapassagem imediatamente antes e nas passagens de peões.',
        correct: true,
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
    question: 'Ao conduzir um veículo ligeiro, como deve ser executada a manobra de mudança de direcção para a direita?',
    answers: [
      {
        answer: 'Sem reduzir a velocidade nem ligar o pisca.',
        correct: false,
      },
      {
        answer: 'Abrindo a trajectória para a faixa da esquerda antes de virar.',
        correct: false,
      },
      {
        answer: 'Aproximando-se com antecedência do limite direito da faixa de rodagem e efectuando a manobra no trajecto mais curto.',
        correct: true,
      },
      {
        answer: 'Pelo trajecto mais longo no centro do cruzamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, em qual dos seguintes locais é proibida a manobra de inversão do sentido de marcha?',
    answers: [
      {
        answer: 'Em todas as estradas fora das localidades com boa visibilidade.',
        correct: false,
      },
      {
        answer: 'Nas ruas de dois sentidos com linha descontínua e boa visibilidade.',
        correct: false,
      },
      {
        answer: 'Nas praças largas sem trânsito.',
        correct: false,
      },
      {
        answer: 'Nas lombas, curvas/cruzamentos de visibilidade reduzida, pontes, passagens de nível, túneis e com trânsito intenso.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, como deve ser efectuada a marcha atrás quando permitida?',
    answers: [
      {
        answer: 'Apenas como manobra auxiliar ou de recurso, lentamente e no menor trajecto possível.',
        correct: true,
      },
      {
        answer: 'Nas rotundas e túneis quando o condutor se engana na saída.',
        correct: false,
      },
      {
        answer: 'Em alta velocidade ao longo de toda a rua.',
        correct: false,
      },
      {
        answer: 'Para percorrer 500 metros em sentido contrário numa ponte.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, o que distingue legalmente a «paragem» do «estacionamento»?',
    answers: [
      {
        answer: 'A paragem dura até 2 horas com o motor desligado e sem condutor.',
        correct: false,
      },
      {
        answer: 'A paragem dura apenas o tempo estritamente necessário para entrada/saída de passageiros ou breves cargas/descargas, com o condutor pronto a retomar a marcha.',
        correct: true,
      },
      {
        answer: 'O estacionamento ocorre quando o veículo pára num semáforo vermelho.',
        correct: false,
      },
      {
        answer: 'Não existe diferença legal entre paragem e estacionamento.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, por que lado devem os passageiros entrar e sair de um automóvel parado à direita da faixa de rodagem?',
    answers: [
      {
        answer: 'Pela janela ou com o veículo ainda em movimento lento.',
        correct: false,
      },
      {
        answer: 'Pelo lado esquerdo voltado para o trânsito.',
        correct: false,
      },
      {
        answer: 'Pelo lado direito do veículo (e apenas com o veículo completamente imobilizado).',
        correct: true,
      },
      {
        answer: 'Apenas pela porta do condutor.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, quando é obrigatório usar luzes mesmo durante o dia e com bom tempo?',
    answers: [
      {
        answer: 'Em todas as ruas residenciais asfaltadas.',
        correct: false,
      },
      {
        answer: 'Apenas quando o veículo transporta mais de 3 passageiros.',
        correct: false,
      },
      {
        answer: 'Nos parques de estacionamento descobertos.',
        correct: false,
      },
      {
        answer: 'Nos túneis e nas vias de trânsito de sentido reversível (além dos veículos de mercadorias perigosas).',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, quando é proibido utilizar as luzes de nevoeiro e as luzes de estrada (máximos)?',
    answers: [
      {
        answer: 'As de nevoeiro quando as condições meteorológicas não o justifiquem; e os máximos a menos de 100 m do veículo da frente, no cruzamento com outros ou parado.',
        correct: true,
      },
      {
        answer: 'As luzes de nevoeiro devem estar sempre acesas à noite.',
        correct: false,
      },
      {
        answer: 'É proibido usar médios dentro das localidades.',
        correct: false,
      },
      {
        answer: 'Os máximos podem ser usados a 20 metros do carro da frente.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, com avaria de luzes à noite, que iluminação mínima à frente permite continuar a circular normalmente?',
    answers: [
      {
        answer: 'Apenas a luz interior do habitáculo acesa.',
        correct: false,
      },
      {
        answer: 'Dois médios, ou um médio do lado esquerdo e dois mínimos (além de presença esquerda e luz de travagem atrás).',
        correct: true,
      },
      {
        answer: 'Apenas um farol médio do lado direito.',
        correct: false,
      },
      {
        answer: 'Apenas a luz de marcha atrás ligada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, perante um semáforo vermelho ou sinal STOP, como deve agir o condutor de uma ambulância em missão urgente?',
    answers: [
      {
        answer: 'Tem de aguardar sempre que o semáforo fique verde como qualquer veículo.',
        correct: false,
      },
      {
        answer: 'Pode atravessar o sinal vermelho e o STOP a alta velocidade sem parar.',
        correct: false,
      },
      {
        answer: 'É obrigado a suspender a marcha (parar), podendo prosseguir no semáforo vermelho após tomar as devidas precauções sem esperar que mude.',
        correct: true,
      },
      {
        answer: 'Pode desobedecer às ordens do agente regulador do trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, como deve proceder o condutor se o veículo avariar e ficar imobilizado sobre uma passagem de nível?',
    answers: [
      {
        answer: 'Ficar sentado dentro do veículo a aguardar um mecânico.',
        correct: false,
      },
      {
        answer: 'Tentar mudar o óleo do motor sobre os carris.',
        correct: false,
      },
      {
        answer: 'Colocar o triângulo a 5 metros na estrada e abandonar o local.',
        correct: false,
      },
      {
        answer: 'Promover a sua imediata remoção ou, não sendo possível, tomar medidas imediatas para avisar os condutores ferroviários do obstáculo.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, qual das seguintes manobras é expressamente proibida nas auto-estradas e vias equiparadas?',
    answers: [
      {
        answer: 'Parar ou estacionar (mesmo nas bermas), fazer marcha atrás, inverter o sentido de marcha ou transpor o separador central.',
        correct: true,
      },
      {
        answer: 'Utilizar a via de aceleração para entrar na auto-estrada.',
        correct: false,
      },
      {
        answer: 'Ultrapassar pela esquerda a 110 km/h.',
        correct: false,
      },
      {
        answer: 'Circular na via mais à direita a 90 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, em que condição é permitido ao condutor falar ao telemóvel durante a marcha do veículo?',
    answers: [
      {
        answer: 'Usando auscultadores nos dois ouvidos simultaneamente.',
        correct: false,
      },
      {
        answer: 'Apenas através de aparelho dotado de um auricular ou com sistema de alta voz.',
        correct: true,
      },
      {
        answer: 'Segurando o telemóvel na mão esquerda a baixa velocidade.',
        correct: false,
      },
      {
        answer: 'Escrevendo apenas mensagens de texto nos cruzamentos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, se o condutor não trouxer consigo a carta de condução ou o livrete na fiscalização, como pode reduzir a multa?',
    answers: [
      {
        answer: 'Pagando metade do valor ao reboque privado.',
        correct: false,
      },
      {
        answer: 'Não existe redução possível e o veículo é perdido para o Estado.',
        correct: false,
      },
      {
        answer: 'Apresentando os documentos no prazo de 8 dias à autoridade indicada (reduzindo a multa de 60–300 UCF para 30–150 UCF).',
        correct: true,
      },
      {
        answer: 'Enviando uma fotografia do documento 60 dias depois.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, resultando feridos de um acidente de viação, qual é o dever legal imediato do condutor interveniente?',
    answers: [
      {
        answer: 'Retirar o veículo e seguir viagem se tiver seguro válido.',
        correct: false,
      },
      {
        answer: 'Dar água ou bebidas alcoólicas às vítimas inconscientes.',
        correct: false,
      },
      {
        answer: 'Abandonar o local para avisar a família.',
        correct: false,
      },
      {
        answer: 'Aguardar no local a chegada de agente de autoridade e providenciar do modo mais diligente o socorro aos feridos.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, nos motociclos e ciclomotores, que passageiros é proibido transportar?',
    answers: [
      {
        answer: 'Crianças de idade inferior a 7 anos (salvo se o veículo tiver caixa rígida não destinada apenas a carga).',
        correct: true,
      },
      {
        answer: 'Passageiros com mais de 60 anos.',
        correct: false,
      },
      {
        answer: 'Qualquer passageiro fora das localidades.',
        correct: false,
      },
      {
        answer: 'Passageiros com menos de 18 anos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, como deve proceder o condutor ao aproximar-se de uma passadeira ou ao mudar de direcção onde peões atravessam?',
    answers: [
      {
        answer: 'Buzinar para que os peões corram ou recuem.',
        correct: false,
      },
      {
        answer: 'Deixar passar os peões que já tenham iniciado a travessia na passadeira ou na via em que o veículo vai entrar.',
        correct: true,
      },
      {
        answer: 'Contornar os peões pela berma em alta velocidade.',
        correct: false,
      },
      {
        answer: 'Avançar primeiro se o condutor tiver pressa.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, qual é a regra sobre veículos com volante à direita e qual o prazo para comunicar mudança de residência ou compra?',
    answers: [
      {
        answer: 'Apenas os camiões podem ser matriculados com volante à direita.',
        correct: false,
      },
      {
        answer: 'O volante à direita é livre; o prazo de comunicação é de 90 dias.',
        correct: false,
      },
      {
        answer: 'É proibido o registo e matrícula de automóveis com volante à direita; e o prazo de comunicação à autoridade é de 30 dias.',
        correct: true,
      },
      {
        answer: 'O prazo de comunicação é de 5 dias úteis.',
        correct: false,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, nas contravenções ao Código de Estrada Angolano, a negligência (falta de cuidado) é punida?',
    answers: [
      {
        answer: 'Não, só são punidas as infracções cometidas com intenção dolosa.',
        correct: false,
      },
      {
        answer: 'Só é punida nos condutores com carta provisória.',
        correct: false,
      },
      {
        answer: 'Só é punida se provocar um acidente com feridos.',
        correct: false,
      },
      {
        answer: 'Sim, nas contravenções rodoviárias a negligência é sempre sancionada.',
        correct: true,
      },
    ],
  },
  {
    question: 'Ao conduzir um veículo ligeiro, qual é o adicional aplicado sobre as multas rodoviárias e que redução beneficia os condutores de velocípedes?',
    answers: [
      {
        answer: 'As multas têm um adicional de 10% para os governos provinciais; e para os condutores de velocípedes os limites reduzem-se a metade.',
        correct: true,
      },
      {
        answer: 'Não existe adicional e os velocípedes estão isentos de multas.',
        correct: false,
      },
      {
        answer: 'O adicional é de 25% apenas nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'O adicional é de 50% e os velocípedes pagam o dobro.',
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
