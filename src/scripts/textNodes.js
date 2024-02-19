import image1 from './../assets/the-ordinary-world.jpg'
import image2 from './../assets/the-portal.jpg'
import image3 from './../assets/start-btn.jpg'
import image4 from './../assets/AI.jpg'
import image5 from './../assets/skills.jpg'
import image6 from './../assets/html.jpg'
import image7 from './../assets/js.jpg'
import image8 from './../assets/react.jpg'
import image9 from './../assets/node.jpg'
import image10 from './../assets/delve-deeper.jpg'
import image11 from './../assets/allies.jpg'
import image12 from './../assets/cave.jpg'
import image13 from './../assets/ordeal.jpg'
import image14 from './../assets/reward.jpg'
import image15 from './../assets/dream.jpg'
import image16 from './../assets/resurrection.jpg'
import image17 from './../assets/elixir.jpg'
import image18 from './../assets/epilogue.jpg'


export const textNodes = [
  {
    id: 1,
    title: "Capítulo 1: O Começo",
    text: "Você é o Viajante, e se vê sobrecarregado por uma pilha de CVs idênticos. Justo quando você considera desistir, você sente uma estranha energia de outro mundo. Você sente seu chamado em direção ao deserto.",
    img: image1,
    options: [
      {
        text: "Siga a energia tentadora.",
        nextText: 2,
      },
      {
        text: "Ignore e continue com os CVs tradicionais.",
        nextText: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Capítulo 2: O Chamado para a Aventura",
    text: "Você descobriu um portfólio único no meio dos CVs comuns, um link que leva a um portal. É intrigante e fascinante.",
    img: image2,
    options: [
      {
        text: "Aventure-se no incomum e comece a aventura.",
        nextText: 3,
      },
      {
        text: "Dispense a aventura, aderindo aos métodos de recrutamento convencionais.",
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Capítulo 3: A Recusa do Chamado",
    text: "Enquanto você paira sobre o botão 'começar aventura', um arrepio de apreensão percorre você. É um território desconhecido, desviando do normal.",
    img: image3,
    options: [
      {
        text: "Abraçar o medo e a incerteza. Pressione o botão.",
        nextText: 4,
      },
      {
        text: "Não pressionar o botão, preferindo a familiaridade dos CVs comuns.",
        nextText: 1,
      },
    ],
  },
  {
    id: 4,
    title: "Capítulo 3: O Encontro com o Mentor",
    text: "Você encontra o guia, uma inteligência artificial sofisticada, que lhe fornece uma visão geral das habilidades e níveis de proficiência do desenvolvedor.",
    img: image4,
    options: [
      {
        text: "Ouça atentamente a IA, absorvendo cada detalhe.",
        nextText: 41, 
      },
      {
        text: "Acene educadamente, mas você está mais animado com a jornada.",
        nextText: 5,
      },
    ],
  },
  {
    id: 41,
    title: "Capítulo 3.1: Mergulho Profundo nas Habilidades",
    text: "A IA leva você em uma jornada pelas habilidades do desenvolvedor. Desde os conceitos básicos de HTML/CSS, até o comportamento assíncrono do Javascript, o DOM virtual do React e a arquitetura orientada a eventos do Node.js.",
    img: image5,
    options: [
      {
        text: "Peça para a IA explicar com mais detalhes.",
        nextText: 42,
      },
      {
        text: "Prossiga com a história, pulando o mergulho técnico.",
        nextText: 5,
      },
    ],
  },
  {
    id: 42,
    title: "Capítulo 3.2: Compreendendo os Conceitos Básicos",
    text: "A IA começa com o básico, destacando o entendimento do desenvolvedor sobre HTML e CSS. Você vê artefatos de design responsivo, layout flexbox, HTML semântico e CSS Grid.",
    img: image6,
    options: [
      {
        text: "Aprecie o conhecimento sólido e peça mais sobre Javascript.",
        nextText: 43,
      },
      {
        text: "Continue com a jornada, evitando os detalhes técnicos.",
        nextText: 5,
      },
    ],
  },
  {
    id: 43,
    title: "Capítulo 3.3: Adentrando no Javascript",
    text: "Você é levado ao âmago da proficiência do desenvolvedor em Javascript. Demonstrações da sintaxe ES6, Promises, async/await e conceitos de programação funcional ilustram a fluência do desenvolvedor.",
    img: image7,
    options: [
      {
        text: "Admire a maestria e peça para ver as habilidades do desenvolvedor em React.",
        nextText: 44,
      },
      {
        text: "Prossiga com a jornada, ansioso para a aventura continuar.",
        nextText: 5,
      },
    ],
  },
  {
    id: 44,
    title: "Capítulo 3.4: Revelando a Proficiência em React",
    text: "A IA destaca a expertise do desenvolvedor com React. Você vê componentes complexos, gerenciamento de estado com hooks e renderização de alto desempenho com DOM virtual.",
    img: image8,
    options: [
      {
        text: "Pergunte sobre a competência backend com Node.js.",
        nextText: 45,
      },
      {
        text: "Avance com a jornada, tendo visto a profundidade das habilidades do desenvolvedor.",
        nextText: 4,
      },
    ],
  },
  {
    id: 45,
    title: "Capítulo 3.5: Revelando o Node.js",
    text: "Por último, a IA revela a experiência backend do desenvolvedor. Você vê APIs robustas construídas com Express.js, práticas de autenticação segura e aplicações em tempo real com WebSockets.",
    img: image9,
    options: [
      {
        text: "Reconheça o conjunto abrangente de habilidades e continue com a jornada.",
        nextText: 5,
      },
    ],
  },

  {
    id: 5,
    title: "Capítulo 5: Cruzando o Limiar",
    text: "Você mergulha mais fundo na aventura, navegando por níveis que desdobram intricadamente a proficiência do desenvolvedor em HTML, CSS e JavaScript. Os desafios refletem a profundidade das habilidades do desenvolvedor.",
    img: image10,
    options: [
      {
        text: "Aprecie a elegância das soluções de código.",
        nextText: 6,
      },
      {
        text: "Passe pelos desafios superficialmente, sem considerar as implicações mais profundas.",
        nextText: 6,
      },
    ],
  },
  {
    id: 6

,
    title: "Capítulo 6: Testes, Aliados, Inimigos",
    text: "Você enfrenta provações e tribulações, apresentadas como desafios de codificação intricados. Cada solução desvenda uma nova faceta da experiência do desenvolvedor, retratando sua jornada por vários projetos e funções.",
    img: image11,
    options: [
      {
        text: "Examine as soluções, ganhando insights sobre as habilidades de resolução de problemas do desenvolvedor.",
        nextText: 7,
      },
      {
        text: "Corra pelos desafios, ansioso para alcançar o fim da aventura.",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    title: "Capítulo 7: Abordagem à Caverna Mais Profunda",
    text: "Você se aproxima do clímax da aventura, um desafio que sugere o conhecimento do desenvolvedor sobre tecnologias de ponta como React, Node.js ou Angular.",
    img: image12,
    options: [
      {
        text: "Dedique tempo para compreender o código, analisando a proficiência do desenvolvedor com frameworks modernos.",
        nextText: 8,
      },
      {
        text: "Prossiga sem parar para apreciar os detalhes.",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    title: "Capítulo 8: O Julgamento",
    text: "No cerne da aventura, você se depara com um desafio complexo que requer um entendimento nuances do desenvolvimento full-stack. A solução para esse desafio é um testemunho da competência do desenvolvedor.",
    img: image13,
    options: [
      {
        text: "Examine o código detalhadamente, maravilhando-se com a expertise do desenvolvedor.",
        nextText: 9,
      },
      {
        text: "Avance além do desafio, sem entender sua significância.",
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    title: "Capítulo 9: A Recompensa",
    text: "Ao resolver o desafio, você é recompensado com insights sobre as conquistas profissionais, contribuições e reconhecimentos do desenvolvedor. É um testemunho de sua jornada.",
    img: image14,
    options: [
      {
        text: "Reflexão sobre as conquistas do desenvolvedor, valorizando sua jornada.",
        nextText: 10,
      },
      {
        text: "Continue até o fim, sem refletir sobre a recompensa.",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    title: "Capítulo 10: O Caminho de Volta",
    text: "À medida que você se aproxima do fim, você volta atrás na aventura, relembrando os desafios que mostram a jornada do desenvolvedor de um novato a um especialista.",
    img: image15,
    options: [
      {
        text: "Revise os desafios, apreciando o crescimento e a evolução do desenvolvedor.",
        nextText: 11,
      },
      {
        text: "Corra para a conclusão da aventura, sem relembrar a jornada.",
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    title: "Capítulo 11: A Ressurreição",
    text: "No final da aventura, você enfrenta um desafio final que encapsula todas as habilidades do desenvolvedor, significando sua prontidão para quaisquer desafios profissionais que estejam por vir.",
    img: image16,
    options: [
      {
        text: "Reflexão sobre o desafio final, reconhecendo a prontidão do desenvolvedor.",
        nextText: 12,
      },
      {
        text: "Prossiga até o fim, sem contemplar o significado.",
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    title: "Capítulo 12: Retorno com o Elixir",
    text: "Ao sair da aventura, você carrega consigo um entendimento profundo das habilidades do desenvolvedor, experiências e seu potencial de crescimento. O CV convencional é apenas uma pálida comparação.",
    img: image17,
    options: [
      {
        text: "Reconheça o valor dessa abordagem de portfólio única.",
        nextText: 13,
      },
      {
        text: "Feche a aventura, sem refletir sobre os insights adquiridos.",
        nextText: 1,
      },
    ],
  },
  {
    id: 13,
    title: "Epílogo",
    text: "Sua aventura termina, deixando-o com um profundo entendimento das habilidades do desenvolvedor. O que você fará em seguida?",
    img: image18,
    options: [
      {
        text: "Entre em contato com o desenvolvedor em busca de uma oportunidade potencial.",
        nextText: 14,
        action: "link", 
        linkUrl: "https://www.linkedin.com/in/jo%C3%A3o-pedro-otoni-de-araujo-17360b24a/", 
      },
      {
        text: "Feche a aventura e continue sua busca.",
        nextText: 1,
      },
    ],
  },
  {
    id: 14,
    title: "O Novo Começo",
    text: "Você decidiu embarcar em uma nova jornada com o desenvolvedor. Parabéns! O fim é um novo começo.",
    img: image1,
    options: [
      {
        text: "Celebre o processo de recrutamento bem-sucedido.",
        nextText: 1,
      },
    ],
  },
];