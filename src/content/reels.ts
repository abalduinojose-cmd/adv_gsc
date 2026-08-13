/**
 * Vídeos do Instagram @gscadvparamaes usados na seção "No dia a dia".
 *
 * Os arquivos ficam em public/video/ (recomprimidos para web, com poster do
 * primeiro frame). Para trocar um vídeo: substitua o .mp4 e o .jpg de mesmo
 * nome e ajuste o texto aqui.
 */

export type Reel = {
  arquivo: string;
  poster: string;
  /** Pergunta/tema do vídeo, como aparece na tela. */
  titulo: string;
  /** Uma linha de contexto, em linguagem do cliente. */
  descricao: string;
  duracao: string;
};

export const reels: Reel[] = [
  {
    arquivo: "/video/reel-1.mp4",
    poster: "/video/reel-1.jpg",
    titulo: "O app do Meu INSS pode errar?",
    descricao: "O que fazer quando o portal mostra uma informação que não bate com a sua vida.",
    duracao: "0:22",
  },
  {
    arquivo: "/video/reel-2.mp4",
    poster: "/video/reel-2.jpg",
    titulo: "Autismo dá direito?",
    descricao: "Quando o diagnóstico abre caminho para o BPC e o que a família precisa reunir.",
    duracao: "0:19",
  },
  {
    arquivo: "/video/reel-3.mp4",
    poster: "/video/reel-3.jpg",
    titulo: "Bolsa Família e benefício do INSS",
    descricao: "Dá para receber os dois? A resposta completa, sem juridiquês.",
    duracao: "1:43",
  },
];
