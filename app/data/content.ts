export const profile = {
  name: 'Kauã Rodrigues',
  role: 'Desenvolvedor Full Stack',
  location: 'Feira de Santana, BA · Remoto',
  email: 'kauarodrigues.fn@gmail.com',
  github: 'https://github.com/rodrigueskaua',
  linkedin: 'https://www.linkedin.com/in/kau%C3%A3-rodrigues-7a0980213/',
  cv: 'cv/Kaua-Rodrigues-CV.pdf'
}

export const tagline = 'Full Stack Developer com foco em back-end e automação de projetos com IA.'

export const techIcons = [
  { name: 'PHP', file: 'php' },
  { name: 'Laravel', file: 'laravel' },
  { name: 'Python', file: 'python' },
  { name: 'Ruby', file: 'ruby' },
  { name: 'Node.js', file: 'nodedotjs' },
  { name: 'JavaScript', file: 'javascript' },
  { name: 'TypeScript', file: 'typescript' },
  { name: 'Vue.js', file: 'vuedotjs' },
  { name: 'Nuxt', file: 'nuxt' },
  { name: 'React', file: 'react' },
  { name: 'Tailwind CSS', file: 'tailwindcss' },
  { name: 'Electron', file: 'electron' },
  { name: 'MySQL', file: 'mysql' },
  { name: 'Docker', file: 'docker' },
  { name: 'Cloudflare', file: 'cloudflare' },
  { name: 'Git', file: 'git' }
]

export const summary = [
  'Sou Full Stack Developer com foco em back-end e na automação de projetos com IA. Tenho experiência prática na construção de APIs e sistemas escaláveis com Node.js, Python e PHP, e no desenvolvimento de interfaces responsivas com Vue.js e React, sempre priorizando performance e experiência do usuário.',
  'Atualmente, atuo como terceirizado na Affectum Grupo, onde automatizo processos contábeis e fiscais com integrações à SEFAZ e ao e-CAC. Como freelancer, desenvolvo plataformas de grande porte, como o ProExtend, usado por uma rede de 20 mil alunos e professores, e soluções com IA, como o Prova Inteligente.',
  'Antes, pela BeHub, atuei como terceirizado na Gabster, onde fui responsável pela evolução de sistemas web em PHP e pela criação de plugins em Ruby integrados ao SketchUp, transformando processos complexos do setor moveleiro em fluxos automatizados, da customização 3D à geração de orçamentos e à integração com a produção. Esse trabalho me rendeu o reconhecimento de Destaque do Quarter no Q3 de 2025.',
  'Ao longo da carreira, trabalhei com ERPs, plataformas de delivery, automações com IA, como chatbots de atendimento e relatórios em linguagem natural, e sistemas 3D com orçamentação em tempo real, sempre com foco em resolver o problema de negócio de ponta a ponta.'
]

export const timeline = [
  { label: '2026', text: 'Atuo como terceirizado na Affectum Grupo, com automação de processos fiscais e tributários.' },
  { label: '2025', text: 'Atuo como terceirizado na Gabster, pela BeHub (Projectiva Holding), e entrego como freelancer o ProExtend, para a rede de unidades FTC, e o Prova Inteligente.' },
  { label: '2024', text: 'Atuo no Prefiro Delivery, pela Lince Web, e começo a trabalhar em projetos como freelancer.' },
  { label: '2023', text: 'Ingresso em Sistemas de Informação na UNEX e começo a estagiar na HubSys, no ERP da Egali Intercâmbio.' },
  { label: '2022', text: 'Concluo o técnico em Desenvolvimento de Sistemas no SENAI e, com a minha equipe, fico em 1º lugar na competição de projetos, na entrega do TCC.' },
  { label: '2021', text: 'Começo o técnico em Desenvolvimento de Sistemas no SENAI.' }
]

export const stack = [
  { group: 'Linguagens', items: ['PHP', 'JavaScript e TypeScript', 'Python', 'Ruby', 'Java', 'SQL'] },
  { group: 'Back-end', items: ['Laravel', 'CodeIgniter', 'Node.js', 'Django', 'FastAPI', 'Flask', 'APIs REST'] },
  { group: 'Front-end', items: ['Vue.js', 'Nuxt', 'React', 'Tailwind CSS'] },
  { group: 'Dados e infra', items: ['MySQL', 'Docker', 'Caddy', 'Cloudflare R2', 'Git'] },
  { group: 'Fiscal e integrações', items: ['SEFAZ', 'e-CAC', 'NF-e, CT-e, MDF-e, NFS-e', 'Certificado digital', 'Scraping'] },
  { group: 'IA', items: ['LLMs (Gemini)', 'Visão computacional', 'MCP', 'RAG'] }
]

export interface Recognition {
  text: string
  link: string
  linkLabel: string
  images: { src: string; alt: string }[]
}

export interface Mark {
  src: string
  initials: string
  dark?: boolean
}

export interface SubProject {
  name: string
  logo?: string
  initials: string
  dark?: boolean
  wide?: boolean
  xwide?: boolean
  text: string
  tags: string[]
}

export interface Job {
  id: string
  company: string
  initials: string
  logo?: string
  darkLogo?: boolean
  photo?: boolean
  marks?: Mark[]
  role: string
  period: string
  duration: string
  where: string
  type?: string
  projects: string[]
  description: string
  subprojects?: SubProject[]
  highlight?: string
  recognition?: Recognition
  skills: string[]
}

export const jobs: Job[] = [
  {
    id: 'affectum',
    company: 'Affectum Grupo',
    initials: 'AF',
    logo: 'logos/affectum.png',
    role: 'Desenvolvedor Full Stack',
    period: '04/2026 – atual',
    duration: '7 meses',
    where: 'Remoto',
    type: 'Terceirizado',
    projects: ['Extratos fiscais e financeiros', 'Integração SEFAZ e e-CAC', 'MCP'],
    description:
      'Atuo no desenvolvimento de sistemas internos, integrações e automações que otimizam processos contábeis, fiscais e operacionais, com foco no setor tributário. Automatizei a geração e o download de extratos fiscais e financeiros, que antes exigiam dias de trabalho manual e hoje saem em poucos minutos, com até 5 anos de extratos baixados e organizados automaticamente. Integrei os sistemas à SEFAZ e ao e-CAC, usando certificados digitais, para consultar, capturar e distribuir NF-e, CT-e, MDF-e e NFS-e e baixar os XMLs de entrada e saída, eliminando atividades manuais. Por fim, criei integrações com MCP (Model Context Protocol) para facilitar a consulta de dados e a execução de operações nos sistemas internos.',
    skills: ['PHP (Laravel)', 'Python', 'JavaScript', 'Vue.js', 'Nuxt', 'MySQL', 'APIs REST', 'Docker', 'Git', 'MCP', 'SEFAZ', 'e-CAC', 'Certificado digital']
  },
  {
    id: 'freela',
    company: 'Freelancer',
    initials: 'KR',
    logo: 'me.jpg',
    photo: true,
    role: 'Desenvolvedor, automação e integração',
    period: '09/2024 – atual',
    duration: '2 anos e 3 meses',
    where: 'Remoto',
    projects: ['ProExtend (rede FTC)', 'Prova Inteligente'],
    description:
      'Desenvolvo soluções web sob medida para clientes, fora do horário comercial, com foco em sistemas de gestão, automação de processos e APIs. Os projetos de maior destaque estão logo abaixo.',
    subprojects: [
      {
        name: 'ProExtend',
        logo: 'logos/proextend-wordmark.png',
        initials: 'PE',
        xwide: true,
        text:
          'SaaS educacional criado para a UNEX/REDE FTC e usado em todas as unidades da rede, que reúne 20 mil alunos e professores. Nele, os alunos desenvolvem os projetos de extensão ao longo do semestre, e professores e gestores acompanham projetos, eventos e cursos. Como único desenvolvedor do backend, fui responsável pela arquitetura e pela organização do código, pela API que alimenta o front-end e pela API de integração, que recebe os dados da instituição. Também organizava as novas demandas, gerava os relatórios, cuidava do armazenamento de arquivos em bucket Cloudflare R2 e corrigia os erros que surgiam em produção.',
        tags: ['Laravel', 'Arquitetura de backend', 'API para o front-end', 'API de integração', 'Cloudflare R2', 'Produção']
      },
      {
        name: 'Prova Inteligente',
        logo: 'logos/prova-inteligente.svg',
        initials: 'PI',
        dark: true,
        wide: true,
        text:
          'Plataforma para cursos pré-vestibulares que permite aplicar provas presenciais e online. Ela cobre todo o caminho da prova: a criação das avaliações, com questões geradas com apoio de LLMs ou cadastradas na plataforma, a impressão e a correção, com a leitura automática dos cartões-resposta por visão computacional. Fui responsável pelas integrações com IA, tanto pelas APIs de LLMs quanto pelo serviço de leitura de gabaritos.',
        tags: ['LLMs', 'Visão computacional', 'Leitura de cartão-resposta', 'Provas online', 'APIs']
      }
    ],
    skills: ['PHP (Laravel)', 'Node.js', 'Vue.js', 'Nuxt', 'React', 'Python', 'FastAPI', 'Flask', 'LLMs', 'Visão computacional', 'Cloudflare R2', 'APIs REST']
  },
  {
    id: 'gabster',
    company: 'BeHub (Projectiva Holding) · Gabster',
    initials: 'BG',
    marks: [
      { src: 'logos/projectiva.png', initials: 'BH' },
      { src: 'logos/gabster.png', initials: 'GB' }
    ],
    role: 'Desenvolvedor Full Stack',
    period: '02/2025 – 04/2026',
    duration: '1 ano e 3 meses',
    where: 'Remoto',
    type: 'Terceirizado, alocado na Gabster',
    projects: ['Portobello', 'G500', 'Sistema de recomendação com IA'],
    description:
      'Contratado pela BeHub, da Projectiva Holding, atuei como terceirizado na Gabster, ecossistema que conecta o design de ambientes 3D à produção industrial de móveis e é formado por uma plataforma web em PHP e um plugin para SketchUp em Ruby, em equipe ágil (Scrum). Meu trabalho levou o processo do setor moveleiro da customização 3D à geração de orçamentos e à integração com a produção. No projeto G500, criei a funcionalidade Lista de Peças, que permite alterar peças de projetos 3D finalizados e enviá-las direto para a produção, sem reabrir o projeto original. No plugin, implementei a especificação de furações e detalhes de usinagem no modelo 3D e a exportação para arquivos de produção CNC, reduzindo ajustes manuais na fábrica. Também contribuí com o projeto Portobello e com o sistema de recomendação com IA. Além disso, mantive sistemas legados da plataforma, incluindo o backend em Python/Django e o plugin Ruby para SketchUp, usados por clientes ativos.',
    highlight: 'Destaque do Quarter, Q3 2025',
    recognition: {
      text: 'Reconhecido como Destaque do Quarter (Q3 2025) na categoria Contribuição em Projetos, pelos projetos Portobello e G500 e pelo sistema de recomendação com IA. Recebi o reconhecimento no evento All Hands da Projectiva Holding.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7377737689443340288/',
      linkLabel: 'Ver a publicação no LinkedIn',
      images: [
        { src: 'projects/destaque/2.jpg', alt: 'Slide de Destaque Contribuição em Projetos com a foto de Kauã Rodrigues' },
        { src: 'projects/destaque/1.jpg', alt: 'Slide do Projeto Case IA com a equipe da Projectiva na Gabster' }
      ]
    },
    skills: ['PHP (CodeIgniter)', 'Ruby', 'SketchUp API', 'Python (Django)', 'Node.js', 'Docker', 'CNC', 'IA', 'Scrum']
  },
  {
    id: 'lince',
    company: 'Lince Web / Prefiro Delivery',
    initials: 'LW',
    logo: 'logos/prefiro.svg',
    role: 'Desenvolvedor Full Stack',
    period: '08/2024 – 11/2024',
    duration: '4 meses',
    where: 'Feira de Santana, BA',
    projects: ['Prefiro Delivery'],
    description:
      'Atuei em soluções para a plataforma Prefiro Delivery, com foco em automação e na comunicação entre estabelecimentos e clientes. Para agilizar o atendimento, desenvolvi e publiquei uma extensão de Chrome integrada ao WhatsApp Web, que mostra os dados e o histórico de pedidos do cliente dentro da conversa. Para recuperar carrinhos abandonados e incentivar novas compras, implementei notificações inteligentes baseadas no histórico de compras. Participei ainda de um gerador de relatórios com IA, que responde a perguntas em linguagem natural e entrega insights rápidos sobre o negócio, e ajustei soluções em Java para integrar impressoras e imprimir pedidos automaticamente nos computadores dos estabelecimentos.',
    skills: ['Python', 'PHP (Laravel)', 'Java', 'Vue.js', 'Docker', 'Extensão de Chrome', 'WhatsApp Web', 'IA']
  },
  {
    id: 'hubsys',
    company: 'HubSys / Egali Intercâmbio',
    initials: 'HS',
    logo: 'logos/egali.png',
    role: 'Estágio em Desenvolvimento de Software',
    period: '08/2023 – 08/2024',
    duration: '1 ano e 1 mês',
    where: 'Remoto',
    type: 'Estágio',
    projects: ['ERP TM da Egali Intercâmbio'],
    description:
      'Desenvolvi funcionalidades para o ERP TM da Egali Intercâmbio, a maior agência de intercâmbio da América Latina, em equipe ágil (Scrum), com foco em otimizar processos e melhorar a experiência do usuário. Aprimorei o Gerador de Orçamentos 2.0, com descontos automáticos baseados na variação cambial, e implementei o X-Ray, que trouxe vistos, escolas e acomodações para dentro das propostas comerciais exibidas aos clientes. Também otimizei relatórios internos, com novas métricas e consultas SQL reestruturadas, ganhando performance e precisão nos dados.',
    skills: ['PHP (MVC)', 'JavaScript (Ajax)', 'MySQL', 'SQL', 'Git', 'Scrum']
  }
]

export const education = [
  { school: 'Infnet', initials: 'IN', logo: 'logos/infnet.png', course: 'Análise e Desenvolvimento de Sistemas', period: '02/2025 – 12/2027' },
  { school: 'UNEX', initials: 'UN', logo: 'logos/unex.svg', course: 'Bacharelado em Sistemas de Informação (transferido)', period: '03/2023' },
  { school: 'SENAI', initials: 'SE', logo: 'logos/senai.png', course: 'Técnico em Desenvolvimento de Sistemas', period: '07/2021 – 12/2022' }
]

export interface Shot {
  src: string
  caption: string
}

export interface Project {
  id: string
  name: string
  kind: string
  tagline: string
  logo?: string
  paragraphs: string[]
  note?: string
  shots?: Shot[]
  layout?: 'wide' | 'hero' | 'tall'
  tags: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'central-kids',
    name: 'Central Kids Mídia',
    kind: 'Sistema web',
    logo: 'logos/central-kids.png',
    tagline: 'Sistema de mídia da igreja para guardar, organizar e compartilhar fotos e vídeos dos eventos',
    paragraphs: [
      'Sistema desenvolvido para a mídia da igreja. Os voluntários enviam as fotos e os vídeos dos cultos e eventos, que ficam guardados num bucket Cloudflare R2 e organizados em álbuns, um por evento. Cada álbum gera um link público, para compartilhar o evento com as famílias, com a opção de ocultar os vídeos.',
      'O sistema converte as mídias em filas, com fotos em formato aberto por qualquer navegador e vídeos em HD e numa versão leve para redes lentas, e tem uma linha do tempo com filtro por quem enviou. Também conta com reconhecimento de rostos, que permite achar as fotos de cada pessoa, recurso que fica desligado por padrão, por causa da LGPD, até haver autorização dos responsáveis.',
      'Um módulo de integração com o Instagram permite agendar e publicar posts, em foto, carrossel e reels, com calendário, acompanhamento do status e nova tentativa em caso de erro. Há ainda um painel com métricas de uso e perfis de administrador e de mídia. Migrei o front original, que usava o Supabase, para uma API Laravel própria.'
    ],
    note: 'As imagens das capturas estão desfocadas para proteger as crianças.',
    shots: [
      { src: 'projects/central-kids/album.jpg', caption: 'Álbum de um evento, com fotos e vídeos' },
      { src: 'projects/central-kids/timeline.jpg', caption: 'Linha do tempo, com os álbuns recentes' },
      { src: 'projects/central-kids/albuns.jpg', caption: 'Álbuns, um por evento' },
      { src: 'projects/central-kids/link-publico.jpg', caption: 'Link público para compartilhar o evento com as famílias' },
      { src: 'projects/central-kids/instagram.jpg', caption: 'Publicações do Instagram, com status e agendamento' },
      { src: 'projects/central-kids/painel.jpg', caption: 'Painel com métricas de uso' }
    ],
    layout: 'hero',
    tags: ['Laravel', 'Nuxt 4', 'PostgreSQL', 'Cloudflare R2', 'Redis e Horizon', 'FFmpeg', 'Reconhecimento de rostos', 'API do Instagram']
  },
  {
    id: 'estoque-facil',
    name: 'Estoque Fácil',
    kind: 'Sistema web',
    tagline: 'Estoque, vendas e encomendas para lojas',
    logo: 'logos/estoque-facil.svg',
    paragraphs: [
      'Loja pequena costuma controlar estoque, encomendas e clientes em planilha e caderno, e perde venda por não saber o que tem. O Estoque Fácil resolve isso com um sistema completo, que desenvolvi do back ao front: cada loja tem o seu próprio banco, com perfis de administrador e operador, cadastro de produtos com SKU e leitura de código de barras, tanto por leitor USB quanto pela câmera do celular.',
      'O sistema controla encomendas com reserva de estoque, vendas e relatórios com curva ABC, e envia e-mails da plataforma. Para proteger os dados, isolei o banco de cada loja, restringi o usuário do MySQL a ler e gravar dados e criei gatilhos que recusam escrita sem sessão válida. O servidor tem 161 testes automatizados e o sistema está no ar em produção, com Docker Compose e Caddy, com backup diário.'
    ],
    note: 'Capturas de uma loja de demonstração, com dados fictícios.',
    shots: [
      { src: 'projects/estoque-facil/inicio.jpg', caption: 'Início, com estoque baixo e movimentações recentes' },
      { src: 'projects/estoque-facil/produtos.jpg', caption: 'Produtos, com SKU, código de barras e situação do estoque' },
      { src: 'projects/estoque-facil/encomendas.jpg', caption: 'Encomendas, com reserva de estoque' }
    ],
    layout: 'hero',
    tags: ['Laravel', 'Nuxt', 'MySQL', 'Multi-tenant', 'Docker', 'Caddy', 'PHPUnit']
  },
  {
    id: 'wizarddocs',
    name: 'WizardDocs',
    kind: 'IA aplicada',
    tagline: 'Converse com seus PDFs usando RAG, com citações e sem alucinação',
    paragraphs: [
      'Achar uma informação dentro de PDFs longos é lento, e um chatbot comum responde com confiança mesmo quando não sabe. O WizardDocs indexa o conteúdo dos PDFs por significado e responde às perguntas com um LLM, OpenAI ou Gemini, trocável a cada pergunta. Toda resposta cita o arquivo e a página de onde veio a informação.',
      'Quando nenhum trecho relevante é encontrado, o LLM nem é chamado e o sistema diz que o documento não tem a resposta, em vez de inventar. Reenviar o mesmo PDF não reprocessa nada, porque cada arquivo é identificado por um hash. O backend tem testes automatizados e documentação da API em Swagger, e tudo sobe com Docker Compose.'
    ],
    shots: [
      { src: 'projects/wizarddocs/upload.png', caption: 'Envio de um PDF para indexação' },
      { src: 'projects/wizarddocs/chat-resposta.png', caption: 'Resposta com citação da página de origem' }
    ],
    layout: 'wide',
    tags: ['Python', 'FastAPI', 'RAG', 'ChromaDB', 'MongoDB', 'Vue', 'Docker'],
    links: [{ label: 'Código no GitHub', href: 'https://github.com/rodrigueskaua/wizarddocs' }]
  },
  {
    id: 'pixima',
    name: 'Pixima',
    kind: 'Extensão de navegador',
    tagline: 'Todas as imagens de qualquer site num só painel, publicada na Chrome Web Store',
    logo: 'projects/pixima/icon.png',
    paragraphs: [
      'Para baixar as imagens de uma página, é preciso clicar com o botão direito em cada uma. A extensão abre um painel lateral que lista fotos, fundos, SVGs e as imagens que carregam depois, sem repetidas, anúncios ou rastreadores. É possível selecionar as imagens, convertê-las para PNG, JPG ou WebP e baixar tudo em um ZIP.',
      'Está publicada na Chrome Web Store e tem site próprio. Tudo roda no navegador: não exige conta, não rastreia e nenhuma imagem passa por servidor.'
    ],
    shots: [
      { src: 'projects/pixima/demo.gif', caption: 'Ordenar, selecionar três imagens, converter para WebP e baixar em ZIP' },
      { src: 'projects/pixima/galeria.png', caption: 'Galeria' },
      { src: 'projects/pixima/selecao.png', caption: 'Seleção' },
      { src: 'projects/pixima/filtros.png', caption: 'Filtros' },
      { src: 'projects/pixima/exportar.png', caption: 'Conversão e exportação' }
    ],
    layout: 'tall',
    tags: ['TypeScript', 'Vue', 'WXT', 'Tailwind'],
    links: [
      { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/pixima/omdhkbejmhcaoofkpodmfhnajjafjpaf' },
      { label: 'Site', href: 'https://rodrigueskaua.github.io/pixima/' },
      { label: 'Código no GitHub', href: 'https://github.com/rodrigueskaua/pixima' }
    ]
  },
  {
    id: 'localplay',
    name: 'LocalPlay',
    kind: 'App desktop',
    tagline: 'Transforma uma pasta de vídeos em uma plataforma de curso, 100% offline',
    logo: 'projects/localplay/icon.png',
    paragraphs: [
      'Um curso baixado em pasta perde a ordem e o progresso, e as plataformas exigem internet e conta. O LocalPlay transforma a pasta em uma biblioteca de curso, com capas geradas a partir dos próprios vídeos, progresso por aula, retomada de onde parou, velocidade de reprodução e material de apoio junto da aula.',
      'Funciona 100% offline, sem enviar nada para fora da máquina, e tem release publicada para macOS.'
    ],
    shots: [
      { src: 'projects/localplay/demo.gif', caption: 'Biblioteca, player com material de apoio e preferências' },
      { src: 'projects/localplay/biblioteca.png', caption: 'Biblioteca' },
      { src: 'projects/localplay/curso.png', caption: 'Curso e aulas' }
    ],
    layout: 'hero',
    tags: ['Electron', 'Nuxt', 'Fastify'],
    links: [
      { label: 'Baixar para macOS', href: 'https://github.com/rodrigueskaua/localplay-desktop/releases/latest' },
      { label: 'Código no GitHub', href: 'https://github.com/rodrigueskaua/localplay-desktop' }
    ]
  },
  {
    id: 'alpes-one-api',
    name: 'Alpes One API',
    kind: 'API e nuvem',
    tagline: 'API em Laravel na AWS, com deploy automatizado',
    paragraphs: [
      'Desafio técnico que pedia uma API de veículos que importasse os dados de um JSON remoto. Construí a API em Laravel para listar, criar, atualizar e remover veículos, com um endpoint para consultar os logs do importador, ambiente local em Docker com o Laravel Sail e documentação interativa em Swagger.',
      'Em produção, a aplicação roda numa instância AWS EC2, atrás de um Nginx, com certificado SSL emitido e renovado automaticamente pelo Certbot. A cada push, um pipeline de CI/CD no GitHub Actions faz o deploy. A API está no ar, com documentação pública.'
    ],
    tags: ['Laravel', 'MySQL', 'Docker', 'AWS EC2', 'Nginx', 'GitHub Actions', 'Swagger'],
    links: [
      { label: 'Documentação da API', href: 'https://alpesapi.kauarodrigues.dev/api/documentation' },
      { label: 'Código no GitHub', href: 'https://github.com/rodrigueskaua/alpes-api' }
    ]
  }
]
