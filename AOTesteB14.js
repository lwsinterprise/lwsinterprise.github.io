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
    question: 'Num troço fiscalizado, se a faixa de rodagem estiver parcialmente obstruída num dos lados, quem deve ceder a passagem?',
    answers: [
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
      {
        answer: 'O condutor que tiver de utilizar a parte esquerda da faixa de rodagem para contornar o obstáculo.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, numa via estreita de forte inclinação onde não é possível o cruzamento simultâneo (sem marcha atrás), quem cede a passagem?',
    answers: [
      {
        answer: 'O condutor do veículo que desce.',
        correct: true,
      },
      {
        answer: 'O veículo que tiver menos passageiros.',
        correct: false,
      },
      {
        answer: 'O condutor do veículo que sobe.',
        correct: false,
      },
      {
        answer: 'O veículo de menor cilindrada.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, numa via estreita, a distâncias iguais do local de cruzamento, quem deve fazer marcha atrás entre um ligeiro e um pesado?',
    answers: [
      {
        answer: 'Recua o veículo de cor mais escura.',
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
      {
        answer: 'Recua sempre quem vai a descer.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, que obrigação tem o condutor que está a ser ultrapassado por outro veículo?',
    answers: [
      {
        answer: 'Travar bruscamente a fundo.',
        correct: false,
      },
      {
        answer: 'Desviar-se para o eixo da via.',
        correct: false,
      },
      {
        answer: 'Desviar-se o mais possível para a direita e não aumentar a velocidade enquanto não for ultrapassado.',
        correct: true,
      },
      {
        answer: 'Aumentar a velocidade para testar a potência do outro veículo.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, é permitido ultrapassar imediatamente antes ou sobre uma passadeira assinalada para peões?',
    answers: [
      {
        answer: 'Sim, desde que o condutor buzine previamente.',
        correct: false,
      },
      {
        answer: 'Sim, se não houver peões visíveis na passadeira.',
        correct: false,
      },
      {
        answer: 'Sim, se circular a menos de 40 km/h.',
        correct: false,
      },
      {
        answer: 'Não, é sempre proibida a ultrapassagem imediatamente antes e nas passagens de peões.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, como deve ser executada a manobra de mudança de direcção para a direita?',
    answers: [
      {
        answer: 'Aproximando-se com antecedência do limite direito da faixa de rodagem e efectuando a manobra no trajecto mais curto.',
        correct: true,
      },
      {
        answer: 'Pelo trajecto mais longo no centro do cruzamento.',
        correct: false,
      },
      {
        answer: 'Abrindo a trajectória para a faixa da esquerda antes de virar.',
        correct: false,
      },
      {
        answer: 'Sem reduzir a velocidade nem ligar o pisca.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, em qual dos seguintes locais é proibida a manobra de inversão do sentido de marcha?',
    answers: [
      {
        answer: 'Em todas as estradas fora das localidades com boa visibilidade.',
        correct: false,
      },
      {
        answer: 'Nas lombas, curvas/cruzamentos de visibilidade reduzida, pontes, passagens de nível, túneis e com trânsito intenso.',
        correct: true,
      },
      {
        answer: 'Nas praças largas sem trânsito.',
        correct: false,
      },
      {
        answer: 'Nas ruas de dois sentidos com linha descontínua e boa visibilidade.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, como deve ser efectuada a marcha atrás quando permitida?',
    answers: [
      {
        answer: 'Em alta velocidade ao longo de toda a rua.',
        correct: false,
      },
      {
        answer: 'Para percorrer 500 metros em sentido contrário numa ponte.',
        correct: false,
      },
      {
        answer: 'Apenas como manobra auxiliar ou de recurso, lentamente e no menor trajecto possível.',
        correct: true,
      },
      {
        answer: 'Nas rotundas e túneis quando o condutor se engana na saída.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, o que distingue legalmente a «paragem» do «estacionamento»?',
    answers: [
      {
        answer: 'O estacionamento ocorre quando o veículo pára num semáforo vermelho.',
        correct: false,
      },
      {
        answer: 'Não existe diferença legal entre paragem e estacionamento.',
        correct: false,
      },
      {
        answer: 'A paragem dura até 2 horas com o motor desligado e sem condutor.',
        correct: false,
      },
      {
        answer: 'A paragem dura apenas o tempo estritamente necessário para entrada/saída de passageiros ou breves cargas/descargas, com o condutor pronto a retomar a marcha.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, por que lado devem os passageiros entrar e sair de um automóvel parado à direita da faixa de rodagem?',
    answers: [
      {
        answer: 'Pelo lado direito do veículo (e apenas com o veículo completamente imobilizado).',
        correct: true,
      },
      {
        answer: 'Pela janela ou com o veículo ainda em movimento lento.',
        correct: false,
      },
      {
        answer: 'Apenas pela porta do condutor.',
        correct: false,
      },
      {
        answer: 'Pelo lado esquerdo voltado para o trânsito.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, quando é obrigatório usar luzes mesmo durante o dia e com bom tempo?',
    answers: [
      {
        answer: 'Apenas quando o veículo transporta mais de 3 passageiros.',
        correct: false,
      },
      {
        answer: 'Nos túneis e nas vias de trânsito de sentido reversível (além dos veículos de mercadorias perigosas).',
        correct: true,
      },
      {
        answer: 'Em todas as ruas residenciais asfaltadas.',
        correct: false,
      },
      {
        answer: 'Nos parques de estacionamento descobertos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, quando é proibido utilizar as luzes de nevoeiro e as luzes de estrada (máximos)?',
    answers: [
      {
        answer: 'Os máximos podem ser usados a 20 metros do carro da frente.',
        correct: false,
      },
      {
        answer: 'É proibido usar médios dentro das localidades.',
        correct: false,
      },
      {
        answer: 'As de nevoeiro quando as condições meteorológicas não o justifiquem; e os máximos a menos de 100 m do veículo da frente, no cruzamento com outros ou parado.',
        correct: true,
      },
      {
        answer: 'As luzes de nevoeiro devem estar sempre acesas à noite.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, com avaria de luzes à noite, que iluminação mínima à frente permite continuar a circular normalmente?',
    answers: [
      {
        answer: 'Apenas um farol médio do lado direito.',
        correct: false,
      },
      {
        answer: 'Apenas a luz interior do habitáculo acesa.',
        correct: false,
      },
      {
        answer: 'Apenas a luz de marcha atrás ligada.',
        correct: false,
      },
      {
        answer: 'Dois médios, ou um médio do lado esquerdo e dois mínimos (além de presença esquerda e luz de travagem atrás).',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, perante um semáforo vermelho ou sinal STOP, como deve agir o condutor de uma ambulância em missão urgente?',
    answers: [
      {
        answer: 'É obrigado a suspender a marcha (parar), podendo prosseguir no semáforo vermelho após tomar as devidas precauções sem esperar que mude.',
        correct: true,
      },
      {
        answer: 'Tem de aguardar sempre que o semáforo fique verde como qualquer veículo.',
        correct: false,
      },
      {
        answer: 'Pode desobedecer às ordens do agente regulador do trânsito.',
        correct: false,
      },
      {
        answer: 'Pode atravessar o sinal vermelho e o STOP a alta velocidade sem parar.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, como deve proceder o condutor se o veículo avariar e ficar imobilizado sobre uma passagem de nível?',
    answers: [
      {
        answer: 'Tentar mudar o óleo do motor sobre os carris.',
        correct: false,
      },
      {
        answer: 'Promover a sua imediata remoção ou, não sendo possível, tomar medidas imediatas para avisar os condutores ferroviários do obstáculo.',
        correct: true,
      },
      {
        answer: 'Ficar sentado dentro do veículo a aguardar um mecânico.',
        correct: false,
      },
      {
        answer: 'Colocar o triângulo a 5 metros na estrada e abandonar o local.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, qual das seguintes manobras é expressamente proibida nas auto-estradas e vias equiparadas?',
    answers: [
      {
        answer: 'Ultrapassar pela esquerda a 110 km/h.',
        correct: false,
      },
      {
        answer: 'Utilizar a via de aceleração para entrar na auto-estrada.',
        correct: false,
      },
      {
        answer: 'Parar ou estacionar (mesmo nas bermas), fazer marcha atrás, inverter o sentido de marcha ou transpor o separador central.',
        correct: true,
      },
      {
        answer: 'Circular na via mais à direita a 90 km/h.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, em que condição é permitido ao condutor falar ao telemóvel durante a marcha do veículo?',
    answers: [
      {
        answer: 'Segurando o telemóvel na mão esquerda a baixa velocidade.',
        correct: false,
      },
      {
        answer: 'Usando auscultadores nos dois ouvidos simultaneamente.',
        correct: false,
      },
      {
        answer: 'Escrevendo apenas mensagens de texto nos cruzamentos.',
        correct: false,
      },
      {
        answer: 'Apenas através de aparelho dotado de um auricular ou com sistema de alta voz.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, se o condutor não trouxer consigo a carta de condução ou o livrete na fiscalização, como pode reduzir a multa?',
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
        answer: 'Pagando metade do valor ao reboque privado.',
        correct: false,
      },
      {
        answer: 'Enviando uma fotografia do documento 60 dias depois.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, resultando feridos de um acidente de viação, qual é o dever legal imediato do condutor interveniente?',
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
    question: 'Num troço fiscalizado, nos motociclos e ciclomotores, que passageiros é proibido transportar?',
    answers: [
      {
        answer: 'Qualquer passageiro fora das localidades.',
        correct: false,
      },
      {
        answer: 'Passageiros com mais de 60 anos.',
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
    question: 'Num troço fiscalizado, como deve proceder o condutor ao aproximar-se de uma passadeira ou ao mudar de direcção onde peões atravessam?',
    answers: [
      {
        answer: 'Contornar os peões pela berma em alta velocidade.',
        correct: false,
      },
      {
        answer: 'Avançar primeiro se o condutor tiver pressa.',
        correct: false,
      },
      {
        answer: 'Buzinar para que os peões corram ou recuem.',
        correct: false,
      },
      {
        answer: 'Deixar passar os peões que já tenham iniciado a travessia na passadeira ou na via em que o veículo vai entrar.',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, qual é a regra sobre veículos com volante à direita e qual o prazo para comunicar mudança de residência ou compra?',
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
    question: 'Num troço fiscalizado, nas contravenções ao Código de Estrada Angolano, a negligência (falta de cuidado) é punida?',
    answers: [
      {
        answer: 'Não, só são punidas as infracções cometidas com intenção dolosa.',
        correct: false,
      },
      {
        answer: 'Sim, nas contravenções rodoviárias a negligência é sempre sancionada.',
        correct: true,
      },
      {
        answer: 'Só é punida nos condutores com carta provisória.',
        correct: false,
      },
      {
        answer: 'Só é punida se provocar um acidente com feridos.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, qual é o adicional aplicado sobre as multas rodoviárias e que redução beneficia os condutores de velocípedes?',
    answers: [
      {
        answer: 'Não existe adicional e os velocípedes estão isentos de multas.',
        correct: false,
      },
      {
        answer: 'O adicional é de 50% e os velocípedes pagam o dobro.',
        correct: false,
      },
      {
        answer: 'As multas têm um adicional de 10% para os governos provinciais; e para os condutores de velocípedes os limites reduzem-se a metade.',
        correct: true,
      },
      {
        answer: 'O adicional é de 25% apenas nas auto-estradas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, dando positivo no teste de álcool no ar expirado, por quanto tempo fica o condutor impedido de conduzir?',
    answers: [
      {
        answer: 'Por 48 horas sem direito a contraprova.',
        correct: false,
      },
      {
        answer: 'Por 2 horas apenas.',
        correct: false,
      },
      {
        answer: 'Por 30 dias sem possibilidade de exame médico.',
        correct: false,
      },
      {
        answer: 'Por 12 horas (podendo requerer de imediato contraprova por novo aparelho aprovado ou análise de sangue).',
        correct: true,
      },
    ],
  },
  {
    question: 'Num troço fiscalizado, havendo indícios de influência de substâncias entorpecentes, por quanto tempo fica o condutor impedido de conduzir?',
    answers: [
      {
        answer: 'Pelo período de 48 horas, salvo se antes disso o exame laboratorial de rastreio apresentar resultado negativo.',
        correct: true,
      },
      {
        answer: 'Apenas por 12 horas.',
        correct: false,
      },
      {
        answer: 'Fica impedido durante 15 dias úteis.',
        correct: false,
      },
      {
        answer: 'Apenas por 6 horas.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em condições normais de trânsito, por que lado da faixa de rodagem se deve fazer o trânsito de veículos em Angola?',
    answers: [
      {
        answer: 'Sempre pelo eixo central da estrada.',
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
        answer: 'Pelo lado esquerdo da faixa de rodagem.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em condições normais de trânsito, existindo duas ou mais filas de trânsito no mesmo sentido, qual deve o condutor utilizar como regra?',
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
        answer: 'Qualquer via indistintamente mesmo sem trânsito.',
        correct: false,
      },
      {
        answer: 'A via de trânsito mais à direita, podendo usar outra à esquerda para ultrapassar ou mudar de direcção.',
        correct: true,
      },
    ],
  },
  {
    question: 'Em condições normais de trânsito, em filas paralelas de trânsito intenso, o facto de a fila da direita avançar mais rápido é considerado ultrapassagem?',
    answers: [
      {
        answer: 'Não, em filas paralelas compactas não é considerado ultrapassagem.',
        correct: true,
      },
      {
        answer: 'Só não é ultrapassagem nas auto-estradas.',
        correct: false,
      },
      {
        answer: 'Sim, é uma ultrapassagem proibida pela direita.',
        correct: false,
      },
      {
        answer: 'Sim, dá direito a inibição de conduzir de 1 a 12 meses.',
        correct: false,
      },
    ],
  },
  {
    question: 'Em condições normais de trânsito, em que situação podem os veículos atravessar bermas ou passeios?',
    answers: [
      {
        answer: 'Para estacionar gratuitamente dentro das localidades.',
        correct: false,
      },
      {
        answer: 'Apenas desde que o acesso aos prédios ou propriedades o exija (salvo excepções em regulamento local).',
        correct: true,
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
