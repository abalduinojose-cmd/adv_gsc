import type { PerguntaResposta } from "./servicos";

/**
 * FAQ da home — dúvidas reais de quem chega com o benefício negado.
 * Linguagem simples, sem juridiquês, sem promessa de resultado.
 */
export const faq: PerguntaResposta[] = [
  {
    pergunta: "O INSS negou meu pedido. O que eu faço agora?",
    resposta:
      "Guarde a carta de indeferimento: ela diz o motivo oficial da negativa. A partir dela, dá para apresentar recurso dentro do próprio INSS ou entrar com ação na Justiça. Cada caminho tem prazos e vantagens diferentes — por isso o primeiro passo é uma análise do seu caso.",
  },
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "Tudo acontece pelo WhatsApp: você conta o que aconteceu, envia os documentos por foto e recebe as orientações e as atualizações do processo pelo celular. A procuração é assinada digitalmente. Atendemos famílias de todo o Brasil sem que ninguém precise viajar.",
  },
  {
    pergunta: "Quais documentos eu preciso ter em mãos?",
    resposta:
      "Em geral: documento com foto, CPF, a carta do INSS (se houver) e os papéis ligados ao seu caso — carteira de trabalho, laudos médicos, certidões. Não se preocupe se faltar algo: orientamos exatamente o que buscar e como conseguir cada documento.",
  },
  {
    pergunta: "O que é a carta de indeferimento?",
    resposta:
      "É a resposta oficial do INSS negando o pedido, com o motivo da recusa. Ela costuma chegar pelo Meu INSS ou pelos Correios. Essa carta é importante: é a partir do motivo escrito nela que se monta o recurso ou a ação.",
  },
  {
    pergunta: "O que é perícia médica e por que ela negou meu benefício?",
    resposta:
      "É o exame feito por um médico do INSS para avaliar se você pode trabalhar. As consultas costumam ser rápidas, e doenças que não aparecem num exame de minutos — dor crônica, depressão, fibromialgia — muitas vezes são subestimadas. A conclusão da perícia pode ser contestada com laudos e, se preciso, reavaliada por um perito independente na Justiça.",
  },
  {
    pergunta: "Quanto tempo demora um processo contra o INSS?",
    resposta:
      "Depende do caminho e da região. Recursos administrativos costumam levar meses; ações judiciais variam bastante de um caso para outro. O que garantimos é transparência: você recebe as atualizações reais do seu processo pelo WhatsApp, sem precisar ficar no escuro.",
  },
  {
    pergunta: "Preciso ir até Petrópolis em algum momento?",
    resposta:
      "Não. O atendimento é 100% digital, da primeira conversa à conclusão do processo. Quem preferir ser atendido presencialmente é bem-vindo no escritório, mas não existe nenhuma etapa que exija a sua presença física.",
  },
  {
    pergunta: "Posso pedir de novo um benefício que já foi negado?",
    resposta:
      "Sim. A negativa não encerra o assunto: dá para recorrer, entrar na Justiça ou, em alguns casos, fazer novo requerimento com a documentação reforçada. O ideal é entender primeiro por que o INSS negou, para atacar exatamente esse ponto.",
  },
  {
    pergunta: "Meu benefício foi cortado depois de anos. Isso é normal?",
    resposta:
      "O INSS faz revisões em massa e muitos benefícios são cessados sem uma análise cuidadosa. Quem recebeu por anos e foi cortado de repente pode questionar a decisão e, em muitos casos, retomar o pagamento — inclusive com os valores do período suspenso.",
  },
  {
    pergunta: "Sou de outro estado. Vocês atendem mesmo assim?",
    resposta:
      "Sim. Os processos do INSS correm de forma eletrônica, o que permite atuar em qualquer cidade do Brasil. A distância não muda nada no atendimento: o acompanhamento pelo WhatsApp é o mesmo para quem está em Petrópolis ou no outro lado do país.",
  },
];
