/**
 * FONTE ÚNICA DE VERDADE do site.
 *
 * Todo texto institucional, telefone, link e dado do escritório vive aqui.
 * Para trocar o número de WhatsApp, o e-mail ou qualquer rede social,
 * edite APENAS este arquivo.
 *
 * Campos entre {{CHAVES}} são placeholders aguardando dados reais —
 * a lista completa está no README, seção "Pendências".
 */

export const site = {
  nome: "GSC Advocacia",
  nomeCompleto: "GSC Advocacia — Aposentadorias e Benefícios do INSS",
  slogan: "Lutamos para defender o direito que o INSS negou.",
  descricao:
    "Escritório de advocacia previdenciária. Ações contra o INSS: salário-maternidade, BPC/LOAS, aposentadorias e auxílios. Atendimento 100% online para todo o Brasil.",

  advogada: {
    nome: "Gisele dos Santos",
    tratamento: "Dra. Gisele dos Santos",
    oab: "{{OAB_NUMERO}}", // TODO: inscrição real — bloqueante para publicar
  },

  // Contato -----------------------------------------------------------------
  whatsapp: {
    numeroExibicao: "(24) 99216-6665",
    numeroInternacional: "5524992166665",
  },
  email: "{{EMAIL}}", // TODO: e-mail real do escritório
  telefoneExibicao: "(24) 99216-6665",

  // Endereço (perfil do Google, confirmado em 12/08/2026) --------------------
  endereco: {
    rua: "Rua Marechal Deodoro, 79",
    complemento: "salas 605, 606 e 611",
    cidade: "Petrópolis",
    uf: "RJ",
    cep: "25620-150",
  },
  horario: "Segunda a sexta, das 10h às 19h",

  // Presença digital ---------------------------------------------------------
  dominio: "https://www.gsc.adv.br", // TODO: confirmar domínio final ({{DOMINIO}})
  instagram: "https://www.instagram.com/gscadvparamaes/",
  facebook: "https://www.facebook.com/gscadvocacia/",
  googlePerfil: "https://share.google/lVOqZ056jvrPxbO53",
  googleMaps:
    "https://www.google.com/maps/search/?api=1&query=GSC%20Advocacia&query_place_id=ChIJr-3CqEwJmQAR0o0FefNofuU",

  // Reputação pública no Google (coletada em 12/08/2026) ---------------------
  google: {
    nota: "5,0",
    totalAvaliacoes: 405,
  },

  cnpj: "{{CNPJ}}", // TODO: CNPJ para footer e política de privacidade
} as const;

/** Situações reais em que o visitante se reconhece — seção central da home. */
export const situacoes = [
  "Trabalho na roça a vida inteira e me disseram que não tenho direito à aposentadoria.",
  "Pedi o salário-maternidade e o INSS negou, mesmo com a minha carteira assinada.",
  "O BPC do meu filho foi cortado sem aviso nenhum.",
  "Recebi a carta de indeferimento e não entendi o motivo.",
  "Estou doente, sem poder trabalhar, e o perito disse que estou apta.",
  "Meu marido faleceu e a pensão que ficou para a família foi negada.",
] as const;

/** Passos do atendimento — sequência real, do primeiro contato à conclusão. */
export const passos = [
  {
    titulo: "Você chama no WhatsApp",
    texto:
      "Conte o que aconteceu com as suas palavras. Não precisa saber termo jurídico nenhum: é uma conversa, não um formulário.",
  },
  {
    titulo: "Analisamos o seu caso",
    texto:
      "Você envia os documentos por foto, pelo próprio WhatsApp. A equipe estuda tudo e explica, em linguagem simples, se você tem direito e qual é o caminho.",
  },
  {
    titulo: "Cuidamos de tudo",
    texto:
      "Preparamos o recurso ou a ação contra o INSS e conduzimos cada etapa. Você não precisa ir a fórum, agência ou cartório.",
  },
  {
    titulo: "Você acompanha de onde estiver",
    texto:
      "Mandamos as atualizações do processo pelo WhatsApp, do início ao fim. De qualquer cidade do Brasil.",
  },
] as const;
