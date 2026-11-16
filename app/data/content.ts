export const profile = {
  name: 'Kauã Rodrigues',
  role: 'Desenvolvedor Full Stack',
  location: 'Feira de Santana, BA · Remoto',
  email: 'kauarodrigues.fn@gmail.com',
  github: 'https://github.com/rodrigueskaua',
  linkedin: 'https://www.linkedin.com/in/kau%C3%A3-rodrigues-7a0980213/'
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
