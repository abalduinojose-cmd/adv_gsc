/**
 * Áreas de atuação do escritório.
 *
 * Cada item vira uma página em /servicos/[slug], gerada por um único
 * template. Para criar uma nova área, basta adicionar um objeto aqui.
 *
 * Regras de conteúdo (Provimento 205/2021 da OAB): informar o direito e o
 * processo, sem promessa de resultado, valores ou urgência artificial.
 */

export type PerguntaResposta = {
  pergunta: string;
  resposta: string;
};

export type Servico = {
  slug: string;
  /** Nome curto, usado em cards e menus. */
  titulo: string;
  /** Título da página, com a dor real de busca. */
  tituloLongo: string;
  /** Nome do ícone (lucide) usado no card da home. */
  icone: "baby" | "helpingHand" | "sun" | "stethoscope" | "flower" | "fileSearch";
  /** Uma frase para o card da home. */
  resumo: string;
  /** Descrição para <meta description>. */
  metaDescricao: string;
  /** Situações em que a pessoa se reconhece. */
  sintomas: string[];
  /** Parágrafos explicando o direito, em linguagem simples. */
  entenda: string[];
  /** Parágrafos sobre como o escritório conduz esse tipo de caso. */
  comoAjudamos: string[];
  /** Documentos que costumam ser úteis (enviados por foto no WhatsApp). */
  documentos: string[];
  faq: PerguntaResposta[];
};

export const servicos: Servico[] = [
  {
    slug: "salario-maternidade",
    titulo: "Salário-Maternidade",
    tituloLongo: "Salário-maternidade negado pelo INSS",
    icone: "baby",
    resumo:
      "O benefício de quem teve filho, adotou ou perdeu o bebê — inclusive para quem está desempregada ou trabalha na roça.",
    metaDescricao:
      "Salário-maternidade negado? Mesmo desempregada, MEI, autônoma ou trabalhadora rural, você pode ter direito. Entenda como reverter a negativa do INSS.",
    sintomas: [
      "Tive meu bebê e o INSS negou o salário-maternidade.",
      "Estou desempregada e me disseram que por isso eu não tenho direito.",
      "Trabalho na roça e o INSS não aceitou minhas provas de atividade rural.",
      "Sou MEI ou autônoma e o pedido foi indeferido.",
      "Adotei uma criança e não sabia que também tenho direito.",
    ],
    entenda: [
      "O salário-maternidade é o benefício pago pelo INSS a quem se afasta por causa do nascimento de um filho, de uma adoção ou de uma guarda judicial para fins de adoção. Ele também é devido em casos de parto de natimorto e, em algumas situações, de aborto não criminoso — momentos dolorosos em que a proteção é ainda mais necessária.",
      "Muita gente perde esse direito por acreditar em informação errada. Quem está desempregada pode ter direito enquanto durar o chamado período de graça, que é o tempo em que a pessoa mantém a qualidade de segurada mesmo sem contribuir. Quem trabalha na roça em regime de economia familiar pode comprovar a atividade rural com documentos simples do dia a dia, sem precisar de carteira assinada.",
      "A negativa do INSS costuma vir por falta de qualidade de segurada, carência ou falta de prova da atividade. Só que esses três pontos podem ser demonstrados com a documentação certa — e é exatamente aí que a análise técnica do caso faz diferença.",
    ],
    comoAjudamos: [
      "Primeiro, lemos com calma a carta de indeferimento para entender o motivo exato da negativa. Depois, montamos a prova que faltou: vínculos no CNIS, notas de produtor rural, declarações, contratos, registros de sindicato, o que o seu caso pedir.",
      "Com o caso montado, apresentamos recurso administrativo ou entramos com ação judicial contra o INSS, conforme a estratégia mais adequada. Você acompanha tudo pelo WhatsApp, sem precisar sair de casa.",
    ],
    documentos: [
      "Certidão de nascimento do bebê (ou termo de guarda/adoção)",
      "Documento com foto e CPF",
      "Carta de indeferimento do INSS, se houver",
      "Carteira de trabalho ou comprovantes de contribuição",
      "Para seguradas rurais: documentos da terra, notas de produtor, declaração de sindicato",
    ],
    faq: [
      {
        pergunta: "Desempregada tem direito ao salário-maternidade?",
        resposta:
          "Muitas vezes, sim. Depois que a pessoa para de contribuir, existe um período em que ela continua protegida pelo INSS, chamado período de graça. Se o parto aconteceu dentro desse período, o benefício pode ser devido. É preciso analisar as datas do seu caso concreto.",
      },
      {
        pergunta: "Trabalhadora rural precisa de carteira assinada?",
        resposta:
          "Não. Quem trabalha em regime de economia familiar comprova a atividade rural por documentos como notas de produtor, contratos de parceria, declarações e registros — além de outros indícios que ajudam a contar a sua história.",
      },
      {
        pergunta: "Quanto tempo tenho para pedir?",
        resposta:
          "Em regra, o direito de cobrar as parcelas alcança até cinco anos. Mesmo que o nascimento tenha acontecido há algum tempo, vale a pena analisar — em muitos casos ainda é possível receber.",
      },
    ],
  },
  {
    slug: "bpc-loas",
    titulo: "BPC/LOAS",
    tituloLongo: "BPC/LOAS negado ou cortado",
    icone: "helpingHand",
    resumo:
      "Um salário mínimo por mês para idosos a partir de 65 anos e pessoas com deficiência em situação de baixa renda.",
    metaDescricao:
      "BPC/LOAS negado ou cessado? O benefício de um salário mínimo para idosos e pessoas com deficiência pode ser recuperado. Veja como funciona a revisão da negativa.",
    sintomas: [
      "Meu BPC foi cortado sem aviso e sem explicação.",
      "O INSS disse que a renda da minha família é alta demais, mas mal dá para os remédios.",
      "Meu filho tem deficiência e o pedido foi negado.",
      "Tenho mais de 65 anos, nunca consegui contribuir e não sei se tenho direito.",
      "A perícia disse que a deficiência não conta para o benefício.",
    ],
    entenda: [
      "O BPC — Benefício de Prestação Continuada, criado pela LOAS — garante um salário mínimo por mês ao idoso com 65 anos ou mais e à pessoa com deficiência de qualquer idade que comprovem baixa renda. Ele não exige contribuição ao INSS: é um direito de assistência social, pensado justamente para quem nunca teve condições de contribuir.",
      "O critério de renda usado pelo INSS — um quarto do salário mínimo por pessoa da família — não é absoluto. A Justiça entende que a realidade de cada casa importa: gastos com remédios, fraldas, tratamentos e cuidadores podem ser descontados dessa conta, e outras despesas comprovadas também entram na análise.",
      "No caso da pessoa com deficiência, o que a lei exige é impedimento de longo prazo — físico, mental, intelectual ou sensorial — que dificulte a participação plena na sociedade. Não é preciso ser incapaz para tudo: condições como autismo, deficiência intelectual e doenças graves podem se enquadrar.",
      "Também é comum o benefício ser cessado em revisões em massa, sem que a pessoa entenda o motivo. Essa cessação pode ser questionada, e em muitos casos o benefício é restabelecido com o pagamento do período em que ficou suspenso.",
    ],
    comoAjudamos: [
      "Analisamos o motivo real da negativa ou do corte: renda, deficiência ou documentação. Reunimos laudos, receitas, comprovantes de gastos com saúde e o CadÚnico atualizado para reconstruir o retrato fiel da sua realidade.",
      "Com isso, apresentamos recurso ou ação judicial pedindo a concessão ou o restabelecimento do benefício. Tudo à distância: os documentos vão por foto no WhatsApp e as atualizações chegam a você da mesma forma.",
    ],
    documentos: [
      "Documento com foto e CPF do requerente e dos familiares da casa",
      "CadÚnico atualizado",
      "Laudos e relatórios médicos, no caso de deficiência",
      "Comprovantes de renda e de gastos com saúde da família",
      "Carta de indeferimento ou de cessação do INSS",
    ],
    faq: [
      {
        pergunta: "Quem nunca contribuiu para o INSS pode receber o BPC?",
        resposta:
          "Sim. O BPC é um benefício assistencial: não exige contribuição. O que se comprova é a idade (65 anos ou mais) ou a deficiência, e a situação de baixa renda da família.",
      },
      {
        pergunta: "A renda da minha família passa um pouco do limite. Perdi o direito?",
        resposta:
          "Não necessariamente. A Justiça permite descontar da renda gastos comprovados com remédios, tratamentos e cuidados, e analisa a vulnerabilidade real da família, não só o número frio.",
      },
      {
        pergunta: "Meu BPC foi cortado. Posso voltar a receber?",
        resposta:
          "Em muitos casos, sim. Cortes feitos em revisão sem a devida análise podem ser revertidos, inclusive com o pagamento dos meses em que o benefício ficou suspenso indevidamente.",
      },
    ],
  },
  {
    slug: "aposentadorias",
    titulo: "Aposentadorias",
    tituloLongo: "Aposentadoria negada pelo INSS",
    icone: "sun",
    resumo:
      "Por idade, por tempo de contribuição, rural ou especial — inclusive quando o INSS ignora vínculos e períodos trabalhados.",
    metaDescricao:
      "O INSS negou sua aposentadoria? Idade, tempo de contribuição, rural ou especial: entenda por que a negativa acontece e como comprovar o tempo que o INSS ignorou.",
    sintomas: [
      "Trabalhei a vida inteira e o INSS diz que falta tempo.",
      "Períodos que trabalhei não aparecem no meu CNIS.",
      "Trabalhei na roça quando era jovem e esse tempo não foi contado.",
      "Trabalhei em atividade insalubre e ninguém reconheceu isso.",
      "Me disseram que ainda não atingi os pontos da regra de transição.",
    ],
    entenda: [
      "A aposentadoria tem hoje várias portas de entrada: por idade, pelas regras de transição de quem já contribuía antes da Reforma da Previdência de 2019, a aposentadoria do trabalhador rural e a aposentadoria especial de quem passou anos exposto a agentes nocivos como ruído, produtos químicos ou agentes biológicos.",
      "Grande parte das negativas nasce de um problema silencioso: o CNIS — o extrato de contribuições que o INSS usa — vem incompleto. Vínculos antigos, empregos com carteira assinada que a empresa não repassou direito, trabalho rural na juventude, tempo especial não convertido: nada disso entra na conta automaticamente. O INSS decide com base no que está no sistema, não no que você viveu.",
      "Recuperar esse tempo é um trabalho de reconstrução: carteiras de trabalho antigas, fichas de registro de empregado, PPP e laudos técnicos para o tempo especial, documentos rurais da família. Cada ano recuperado muda a conta — e às vezes muda a regra de aposentadoria aplicável, o que afeta diretamente o valor.",
      "Antes de qualquer pedido, vale fazer um planejamento previdenciário: simular os caminhos possíveis e escolher o momento e a regra mais vantajosa, em vez de pedir às cegas e receber uma negativa que atrasa tudo.",
    ],
    comoAjudamos: [
      "Começamos pelo seu CNIS: pente-fino em cada vínculo, procurando períodos ignorados, salários errados e lacunas que podem ser provadas por documentos. Traduzimos o resultado para você em linguagem simples: quanto tempo o INSS reconhece, quanto dá para recuperar e quais regras se aplicam.",
      "Depois, conduzimos o caminho escolhido: requerimento bem instruído, recurso administrativo ou ação judicial para reconhecer o tempo negado. Você acompanha cada etapa pelo WhatsApp, de onde estiver.",
    ],
    documentos: [
      "Documento com foto, CPF e extrato CNIS (podemos orientar como obter)",
      "Carteiras de trabalho — inclusive as antigas",
      "Carta de indeferimento, se o pedido já foi negado",
      "Para tempo especial: PPP e laudos da empresa",
      "Para tempo rural: documentos da terra e da produção da família",
    ],
    faq: [
      {
        pergunta: "O INSS diz que falta tempo, mas eu trabalhei mais do que isso. E agora?",
        resposta:
          "É um dos cenários mais comuns. O extrato do INSS (CNIS) muitas vezes não registra vínculos antigos ou períodos rurais. Esses períodos podem ser comprovados por documentos e incluídos na contagem, por via administrativa ou judicial.",
      },
      {
        pergunta: "O que é aposentadoria especial?",
        resposta:
          "É a aposentadoria de quem trabalhou exposto a agentes nocivos à saúde — ruído alto, produtos químicos, agentes biológicos, entre outros. Esse tempo vale mais na contagem e, comprovado por PPP e laudos, pode antecipar a aposentadoria.",
      },
      {
        pergunta: "Já recebi a negativa. Preciso começar tudo de novo?",
        resposta:
          "Não necessariamente. A negativa pode ser atacada por recurso administrativo ou por ação judicial, aproveitando o requerimento já feito — inclusive com efeitos financeiros desde a data em que você pediu.",
      },
    ],
  },
  {
    slug: "auxilio-por-incapacidade",
    titulo: "Auxílio por Incapacidade",
    tituloLongo: "Auxílio-doença negado ou cortado",
    icone: "stethoscope",
    resumo:
      "O antigo auxílio-doença e a aposentadoria por invalidez, para quem não pode trabalhar por motivo de saúde.",
    metaDescricao:
      "Auxílio-doença negado ou cortado mesmo você estando doente? Saiba o que fazer quando a perícia do INSS diz que você está apto, e como reverter a decisão.",
    sintomas: [
      "Estou doente, com atestado, e a perícia disse que estou apto para trabalhar.",
      "Meu auxílio foi cortado, mas eu ainda não tenho condições de voltar.",
      "Passei pela perícia e nem fui examinado direito.",
      "Minha doença é grave e me falaram em aposentadoria por invalidez.",
      "Sofri um acidente e não sei qual benefício pedir.",
    ],
    entenda: [
      "Quando a doença ou o acidente impedem o trabalho por mais de 15 dias, entra em cena o auxílio por incapacidade temporária — o antigo auxílio-doença. Quando a incapacidade é definitiva e não há como se readaptar em outra função, o caminho é a aposentadoria por incapacidade permanente, a antiga invalidez.",
      "O ponto decisivo é a perícia médica do INSS. E é ali que mora a maior parte das injustiças: consultas de poucos minutos, laudos que não são lidos, doenças invisíveis a um exame rápido — dor crônica, depressão, ansiedade grave, fibromialgia. O resultado é um carimbo de “apto” para quem claramente não consegue trabalhar.",
      "A decisão da perícia não é o fim. Ela pode ser combatida com pedido de reconsideração, recurso administrativo ou ação judicial — na Justiça, quem examina é um perito independente, que costuma ter mais tempo e mais atenção com a documentação médica.",
      "Também é comum a chamada alta programada: o INSS marca uma data para o fim do benefício sem nova perícia, mesmo que você continue doente. Nesses casos, é possível pedir a prorrogação e, se negada, buscar o restabelecimento.",
    ],
    comoAjudamos: [
      "Organizamos a sua prova médica: laudos, exames, receitas e relatórios do seu médico, estruturados do jeito que perícia e Justiça esperam ler. Documentação médica bem montada é o que decide esses casos.",
      "A partir daí, conduzimos o recurso ou a ação de restabelecimento ou concessão, pedindo inclusive os valores atrasados desde a data em que o benefício foi negado ou cortado. Tudo com acompanhamento pelo WhatsApp.",
    ],
    documentos: [
      "Documento com foto e CPF",
      "Laudos, exames e receitas — quanto mais recentes, melhor",
      "Relatório do seu médico com CID e limitações para o trabalho",
      "Comunicação de decisão da perícia (resultado do INSS)",
      "Carteira de trabalho ou comprovantes de contribuição",
    ],
    faq: [
      {
        pergunta: "A perícia me deu apto, mas eu continuo doente. O que faço?",
        resposta:
          "Você pode apresentar pedido de reconsideração ou recurso e, se a via administrativa falhar, entrar com ação judicial. Na Justiça, um perito independente reavalia o caso com base nos seus laudos.",
      },
      {
        pergunta: "Qual a diferença entre auxílio-doença e aposentadoria por invalidez?",
        resposta:
          "O auxílio é temporário: pressupõe que você vai se recuperar e voltar a trabalhar. A aposentadoria por incapacidade permanente é para quando não há perspectiva de retorno a nenhuma atividade. A perícia e os laudos definem o enquadramento.",
      },
      {
        pergunta: "Meu benefício tem data para acabar, mas não estou recuperado.",
        resposta:
          "É a alta programada. Antes de o benefício cessar, você pode pedir a prorrogação. Se o INSS negar e você seguir incapacitado, é possível buscar o restabelecimento, inclusive judicialmente.",
      },
    ],
  },
  {
    slug: "pensao-por-morte",
    titulo: "Pensão por Morte",
    tituloLongo: "Pensão por morte negada",
    icone: "flower",
    resumo:
      "O amparo devido à família — cônjuge, companheiro e filhos — quando quem contribuía falece.",
    metaDescricao:
      "Pensão por morte negada? União estável, dependência econômica e qualidade de segurado podem ser comprovadas. Entenda o direito da família e como reverter a negativa.",
    sintomas: [
      "Meu marido faleceu e o INSS negou a pensão.",
      "Vivíamos juntos sem casamento no papel e disseram que não tenho direito.",
      "Negaram porque ele estaria “sem qualidade de segurado”.",
      "Meus filhos ficaram sem nada depois que o pai faleceu.",
      "Sou dependente e nem sabia que tinha direito à pensão.",
    ],
    entenda: [
      "A pensão por morte protege quem dependia de quem faleceu: cônjuge, companheira ou companheiro em união estável, filhos menores de 21 anos ou inválidos e, em situações específicas, pais e irmãos. É o benefício que segura a casa em pé no momento mais difícil.",
      "As negativas costumam girar em torno de dois pontos. O primeiro é a união estável: quem vivia junto sem certidão de casamento precisa comprovar a vida em comum — contas no mesmo endereço, fotos, filhos, plano de saúde, testemunhas. O segundo é a qualidade de segurado de quem faleceu: o INSS às vezes considera que a pessoa havia perdido a proteção, ignorando o período de graça, o desemprego involuntário e contribuições que não aparecem no sistema.",
      "A duração da pensão varia com a idade do dependente e o tempo de contribuição e de união — mas o primeiro passo é garantir o reconhecimento do direito. Os efeitos financeiros costumam retroagir à data do óbito quando o pedido é feito nos prazos legais.",
    ],
    comoAjudamos: [
      "Ajudamos a família a montar a prova da união e da dependência, documento por documento, com sensibilidade que esse momento exige. Verificamos também o histórico contributivo de quem faleceu, porque muitas negativas caem quando o CNIS é corrigido.",
      "Cuidamos do requerimento, do recurso ou da ação judicial, conforme o caso — sempre à distância, sem que a família precise enfrentar filas de agência em pleno luto.",
    ],
    documentos: [
      "Certidão de óbito",
      "Documentos com foto e CPF do dependente e de quem faleceu",
      "Certidão de casamento ou provas da união estável (contas, fotos, declarações)",
      "Certidão de nascimento dos filhos",
      "Carteira de trabalho ou comprovantes de contribuição de quem faleceu",
    ],
    faq: [
      {
        pergunta: "Não éramos casados no papel. Tenho direito?",
        resposta:
          "A união estável dá direito à pensão. O que muda é a necessidade de comprovar a vida em comum, com documentos e testemunhas. Essa prova pode ser construída mesmo depois da negativa do INSS.",
      },
      {
        pergunta: "O INSS disse que ele tinha perdido a qualidade de segurado.",
        resposta:
          "Esse argumento merece sempre uma segunda análise. O período de graça pode se estender por desemprego involuntário e por tempo de contribuição, e contribuições ausentes do CNIS podem ser comprovadas.",
      },
      {
        pergunta: "A pensão vale desde quando?",
        resposta:
          "Pedida dentro dos prazos legais, a pensão retroage à data do óbito. Depois desses prazos, vale da data do requerimento. Por isso é importante não deixar o pedido esfriar.",
      },
    ],
  },
  {
    slug: "revisao-de-beneficio",
    titulo: "Revisão de Benefício",
    tituloLongo: "Revisão de benefício do INSS",
    icone: "fileSearch",
    resumo:
      "Para quem já recebe, mas desconfia que o valor foi calculado errado ou que algum período ficou de fora.",
    metaDescricao:
      "Seu benefício do INSS parece menor do que deveria? Erros de cálculo e períodos ignorados podem ser revisados. Entenda quando a revisão vale a pena e os prazos.",
    sintomas: [
      "Me aposentei, mas o valor ficou bem menor do que eu esperava.",
      "Trabalhei anos que não entraram no cálculo.",
      "Tive salários altos que não aparecem no extrato do INSS.",
      "Trabalhei em atividade insalubre e isso não foi considerado.",
      "Quero saber se a minha aposentadoria foi calculada certa.",
    ],
    entenda: [
      "Conceder o benefício não significa calcular certo. O INSS processa milhões de pedidos de forma automatizada, e erros são frequentes: salários de contribuição que não entraram na média, vínculos ignorados, tempo especial não convertido, regras aplicadas de forma equivocada.",
      "A revisão é o instrumento para corrigir isso. Ela pode incluir períodos esquecidos, corrigir salários e até mudar a regra de cálculo aplicada — refletindo no valor mensal e gerando diferenças a receber dos últimos anos, respeitada a prescrição de cinco anos das parcelas.",
      "Existe um prazo importante: em regra, o direito de pedir revisão do ato de concessão decai em dez anos, contados do primeiro pagamento. Por isso, quem desconfia do valor não deve adiar a análise.",
      "Nem toda revisão vale a pena — às vezes o recálculo muda pouco, ou até reduziria o valor. Uma análise honesta diz se o seu caso justifica o pedido antes de qualquer medida.",
    ],
    comoAjudamos: [
      "Fazemos a conferência técnica do seu benefício: carta de concessão, CNIS e memória de cálculo, lado a lado com a sua vida real de trabalho. Você recebe um parecer claro: existe erro, qual é, e o que dá para corrigir.",
      "Se a revisão fizer sentido, conduzimos o pedido administrativo ou a ação revisional, buscando o novo valor e as diferenças em atraso. Se não fizer, dizemos com a mesma clareza — revisão só vale a pena quando melhora a sua situação.",
    ],
    documentos: [
      "Carta de concessão do benefício",
      "Extrato CNIS",
      "Carteiras de trabalho e comprovantes de vínculos",
      "PPP e laudos, se houve trabalho em condições especiais",
      "Contracheques antigos, se disponíveis",
    ],
    faq: [
      {
        pergunta: "Como sei se a minha aposentadoria foi calculada errada?",
        resposta:
          "Comparando a carta de concessão e o CNIS com a sua vida real de contribuições. Vínculos ausentes, salários zerados na média e tempo especial ignorado são os sinais mais comuns de erro.",
      },
      {
        pergunta: "Existe prazo para pedir revisão?",
        resposta:
          "Em regra, dez anos a partir do primeiro pagamento do benefício para revisar a concessão. As diferenças em atraso, quando devidas, alcançam os últimos cinco anos.",
      },
      {
        pergunta: "A revisão pode diminuir meu benefício?",
        resposta:
          "Se o recálculo apontar valor menor, simplesmente não seguimos com o pedido — a análise vem antes de qualquer medida. Por isso o primeiro passo é sempre o parecer, não a ação.",
      },
    ],
  },
];

export function servicoPorSlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}
