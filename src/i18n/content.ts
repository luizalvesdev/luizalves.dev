export type Locale = 'en' | 'pt'

export const EMAIL = 'luiz@luizalves.dev'
export const LINKEDIN = 'https://www.linkedin.com/in/luizalvesdev/'
export const GITHUB = 'https://github.com/luizalvesdev'

type Service = { name: string; tag?: string; text: string; proof: string }
type Case = { title: string; company: string; text: string; result: string; tags: string[] }
type Step = { title: string; text: string }
type Job = { role: string; company: string; period: string; text: string }
type Proof = { num: number; format: 'int' | 'dec' | 'tilde'; prefix?: string; suffix?: string; desc: string }

const marquee = [
  'C#', '.NET', 'ASP.NET Core', 'EF Core', 'Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ',
  'Docker', 'Jenkins', 'GitHub Actions', 'AWS', 'Cloudflare', 'nginx', 'React', 'Next.js',
]

const stack = ['C#/.NET', 'ASP.NET Core', 'EF Core', 'Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Jenkins', 'GitHub Actions', 'AWS', 'Cloudflare', 'nginx', 'React', 'Next.js']

const caseTags = [
  ['nginx', 'robots.txt', 'Next.js'],
  ['Jenkins', 'Docker', 'Docker Hub', 'systemd'],
  ['Node.js', 'Go', 'Redis', 'RabbitMQ'],
  ['NestJS', 'PostgreSQL', 'Redis', 'BullMQ'],
  ['C#/.NET', 'ASP.NET Core', 'EF Core', 'PostgreSQL'],
]

const broadcast = {
  stack: ['React', 'TypeScript', 'Firebase', 'Cloud Functions', 'Firestore', 'Vitest'],
  demo: 'https://broadcast-paulofilho.web.app',
  code: 'https://github.com/luizalvesdev/broadcast',
}

export const content = {
  en: {
    lang: 'en',
    path: '/',
    title: 'Luiz Alves · Software engineer for marketplaces and e-commerce',
    description:
      'I help marketplaces and e-commerce platforms cut infrastructure costs, ship faster and keep integrations from breaking. .NET and Node.js, working in your time zone.',
    mailSubject: 'Project inquiry',
    nav: [
      ['services', 'Services'],
      ['work', 'Work'],
      ['process', 'How I work'],
      ['experience', 'Experience'],
      ['contact', 'Contact'],
    ],
    ui: {
      sections: 'Sections',
      language: 'Language',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
      lightLabel: 'Light theme',
      darkLabel: 'Dark theme',
      cta: 'Get in touch',
      ctaFull: 'Email me',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skip: 'Skip to content',
    },
    hero: {
      hello: 'Luiz Alves · Software engineer',
      photoAlt: 'Photo of Luiz Alves',
      title: ['I help marketplaces and e-commerce platforms', 'cut infrastructure costs, ship faster and keep integrations from breaking.'],
      subtitle: 'Full stack engineer working with .NET and Node.js on production e-commerce. Based in Brazil, ',
      subtitleStrong: 'working in your time zone',
      cta1: 'Tell me about your problem',
      cta2: 'See selected work',
    },
    proof: {
      title: 'results · measured in production',
      items: [
        { num: 49.5, format: 'dec', prefix: '−', suffix: '%', desc: 'page-rendering load from bots' },
        { num: 3.5, format: 'dec', prefix: '~', suffix: ' min', desc: 'from merge to production, no manual deploys' },
        { num: 1000000, format: 'tilde', desc: 'products on a multi-tenant platform' },
        { num: 0, format: 'int', desc: 'records lost in a legacy finance migration' },
      ] as Proof[],
    },
    marquee,
    marqueeLabel: 'Technologies',
    services: {
      label: '01 / Services',
      title: 'Services',
      subtitle: 'Focused engagements with a clear scope. We talk first, I understand the problem, then I send a written proposal with scope, timeline and a fixed price.',
      cta: "Let's talk",
      list: [
        {
          name: 'Bot and crawler traffic audit',
          tag: 'Start here',
          text: 'Bots and crawlers can account for a large share of what your servers process. I map your traffic by source, separate what helps you (search engines, partners) from what only costs you, and put the right rule in front of each. You get a written report and the fixes in place.',
          proof: '−49.5% page-rendering load',
        },
        {
          name: 'Faster, safer deploys',
          text: 'Manual or slow deploys make teams ship less and batch more risk into each release. I automate the path from merge to production: build only what changed, lean images, servers that update themselves, and no one logging in over SSH to ship.',
          proof: 'Manual SSH deploys → ~3.5 min automated',
        },
        {
          name: 'Reliable integrations',
          text: "Marketplace, payment and ERP integrations that don't silently drop orders or stock updates: webhooks, queues, background jobs, retries and the monitoring to know when something fails.",
          proof: 'Tens of thousands of webhooks and jobs a day',
        },
        {
          name: 'Payments and financial reconciliation',
          text: 'Matching what your platform says was sold with what actually reached the bank: statement import, matching rules, divergence review, and finance flows tied to sales in the same transaction.',
          proof: 'Reconciliation backend built from scratch',
        },
        {
          name: 'Engineer on retainer',
          text: 'A monthly block of hours as an extension of your team, for when you need someone who already knows your system to keep things moving.',
          proof: 'Monthly, scoped up front',
        },
      ] as Service[],
    },
    work: {
      label: '02 / Selected work',
      title: 'Selected work',
      subtitle: 'Systems I built end to end, followed by work done as a software engineer at the companies listed under Experience. Clients are kept anonymous and figures about their operations are given in ranges.',
      result: 'Result',
      featured: {
        kind: 'Internal system · in production',
        name: 'Reimbursement receipts system',
        description: 'Four institutes send a monthly spreadsheet of expenses, and the client issued reimbursement receipts from them, with the numbering tracked in a separate sheet. I built the whole system alone, from requirements to production on AWS: import with line-by-line review, a registry of the people being reimbursed, and receipts generated as PDFs in the background, ready to download one by one or in a batch.',
        decisions: [
          'Receipts are immutable once generated, with one global sequence across all institutes that restarts every year.',
          'Re-importing an unchanged spreadsheet is blocked; a changed one only updates what can still change.',
          'Fixed costs cut after launch: the SQS queue was replaced by a queue in the database and PostgreSQL moved to a serverless free tier.',
        ],
        result: '~US$86/month of fixed infrastructure cost removed, and cold starts down from ~22 s to ~5 s.',
        resultLabel: 'Result',
        stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'AWS Lambda', 'S3', 'CloudFront', 'Serverless Framework'],
        links: [] as { label: string; href: string }[],
        url: 'prestacontas · monthly report',
        image: '/projects/receipts.webp',
        width: 1600,
        height: 1258,
        alt: 'Monthly report under review, with sample data',
      },
      cases: [
        {
          title: 'Crawler traffic was eating the rendering budget',
          company: 'ecenture',
          text: 'On a multi-tenant e-commerce platform with dozens of stores and around a million products, I measured where the rendering work went: about three out of four rendered pages were served to bots, not shoppers, and five SEO crawlers alone accounted for half of it. I blocked those by user agent in nginx across every store, blocked AI and social-media crawlers on the image endpoint (plus an old scraper pulling tens of thousands of images a day), put smaller bots on a crawl delay and took internal search out of the index. I evaluated rate limiting and dropped it: the remaining volume didn’t justify it.',
          result: '−49.5% page-rendering load, with no new infrastructure.',
          tags: caseTags[0],
        },
        {
          title: 'From manual SSH deploys to ~3.5 minutes, automated',
          company: 'ecenture',
          text: 'The legacy platform was deployed by hand, over SSH, folder by folder. The new pipeline builds only the service that changed, ships lean standalone images (~195MB instead of the whole monorepo) through Jenkins and Docker Hub, and each server pulls the new version on its own every couple of minutes, recreating only the containers that changed.',
          result: '~3.5 min from merge to production. Nobody logs in over SSH to deploy anymore.',
          tags: caseTags[1],
        },
        {
          title: 'Integrations at marketplace scale',
          company: 'ecenture',
          text: 'Integrations with large Brazilian marketplaces and e-commerce platforms, with async processing on Redis, RabbitMQ and Go workers. I also traced intermittent runtime crashes in production and moved the affected services to Node.js.',
          result: 'Tens of thousands of webhooks and background jobs a day.',
          tags: caseTags[2],
        },
        {
          title: 'Custom systems built from scratch',
          company: 'iDw Soluções',
          text: 'At a software house, I built custom systems for clients from zero to production. One was a financial reconciliation backend that imports bank statements, normalizes them, matches entries automatically and sends only the divergences to human review. Others included a help desk with real-time chat and SLA tracking, and payment features (QR code, transfers, virtual cards) added to existing apps.',
          result: 'Each one taken from an empty repository to production.',
          tags: caseTags[3],
        },
        {
          title: 'Legacy finance migration with no data loss',
          company: 'ecenture',
          text: 'Replaced a legacy financial system with a new multi-company module in .NET, with tenant isolation through PostgreSQL Row-Level Security. Legacy and new ran side by side with automated comparison and stayed in sync until cutover. Sales now post to finance in the same transaction, with idempotent automatic settlements. I also recovered tens of thousands of products and the settings of dozens of stores from the old platform.',
          result: 'Cutover with no data lost.',
          tags: caseTags[4],
        },
      ] as Case[],
      side: {
        kind: 'SaaS · multi-tenant',
        name: 'Broadcast',
        description: 'Each customer manages connections, contacts and messages, with instant or scheduled sending and real-time per-recipient status.',
        decisions: [
          'Scheduling runs on Cloud Functions, independent of an open browser.',
          'Zod schemas shared between frontend and backend, one source of rules.',
          'Cascade deletes with a preview of what will be removed.',
        ],
        stack: broadcast.stack,
        links: [
          { label: 'Demo', href: broadcast.demo },
          { label: 'Code', href: broadcast.code },
        ],
        url: 'broadcast · messages',
        image: '/projects/broadcast.webp',
        alt: 'Broadcast message sending screen',
      },
    },
    process: {
      label: '03 / How I work',
      title: 'How I work',
      steps: [
        { title: 'Written first', text: 'Send me an email describing the problem. I reply in writing, usually within one business day, with questions or a first read.' },
        { title: 'Scope before work', text: "Once I understand the problem, you get a short proposal: what I'll do, what you'll get, timeline and a fixed price. Nothing starts before you approve it." },
        { title: 'Async, with overlap', text: "I'm in Natal, Brazil (UTC−3): 2–3 hours behind the UK and Ireland, and 1–2 hours ahead of US Eastern. Written updates as the work moves; calls when they actually help." },
        { title: 'You own everything', text: 'Code, docs and access stay with you. I leave the system documented so your team can run it without me.' },
      ] as Step[],
    },
    experience: {
      label: '04 / Experience',
      title: 'Experience',
      stackLabel: 'Stack',
      stack,
      jobs: [
        { role: 'Software Engineer', company: 'ecenture', period: 'Nov 2025 – present', text: 'Multi-tenant e-commerce platform and an ERP with a financial module in C#/.NET.' },
        { role: 'Software Engineer', company: 'iDw Soluções', period: 'Aug 2025 – Aug 2026', text: 'Software house. Custom systems for clients: financial reconciliation, help desk, payment features, SaaS frontend.' },
        { role: 'Frontend Developer', company: 'Super1', period: 'Feb – Aug 2025', text: 'Frontend for online stores and the company website.' },
        { role: 'Full Stack Developer', company: 'Agência Gentileza', period: 'Oct 2024 – Feb 2025', text: 'Certification platform from day one to production, with AWS Cognito auth and PDF certificates.' },
      ] as Job[],
    },
    contact: {
      label: '05 / Contact',
      title: 'Have a problem like these?',
      text: "Available for contract and project work. Tell me what's going on and I'll reply in writing.",
      email: 'Email',
    },
    footer: { built: 'Built with Astro' },
  },
  pt: {
    lang: 'pt-BR',
    path: '/pt/',
    title: 'Luiz Alves · Engenheiro de software para marketplaces e e-commerce',
    description:
      'Ajudo marketplaces e e-commerces a reduzir custo de infraestrutura, entregar mais rápido e manter as integrações de pé. .NET e Node.js, no seu fuso.',
    mailSubject: 'Contato sobre projeto',
    nav: [
      ['services', 'Serviços'],
      ['work', 'Trabalhos'],
      ['process', 'Como trabalho'],
      ['experience', 'Experiência'],
      ['contact', 'Contato'],
    ],
    ui: {
      sections: 'Seções',
      language: 'Idioma',
      toLight: 'Alternar para tema claro',
      toDark: 'Alternar para tema escuro',
      lightLabel: 'Tema claro',
      darkLabel: 'Tema escuro',
      cta: 'Falar comigo',
      ctaFull: 'Mandar e-mail',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      skip: 'Pular para o conteúdo',
    },
    hero: {
      hello: 'Luiz Alves · Engenheiro de software',
      photoAlt: 'Foto de Luiz Alves',
      title: ['Ajudo marketplaces e e-commerces a', 'reduzir custo de infraestrutura, entregar mais rápido e manter as integrações de pé.'],
      subtitle: 'Engenheiro full stack com .NET e Node.js em e-commerce em produção. Baseado no Brasil, ',
      subtitleStrong: 'trabalhando no seu fuso',
      cta1: 'Me conte seu problema',
      cta2: 'Ver trabalhos',
    },
    proof: {
      title: 'resultados · medidos em produção',
      items: [
        { num: 49.5, format: 'dec', prefix: '−', suffix: '%', desc: 'de carga de renderização com bots' },
        { num: 3.5, format: 'dec', prefix: '~', suffix: ' min', desc: 'do merge à produção, sem deploy manual' },
        { num: 1000000, format: 'tilde', desc: 'de produtos numa plataforma multi-tenant' },
        { num: 0, format: 'int', desc: 'registros perdidos na migração de um financeiro legado' },
      ] as Proof[],
    },
    marquee,
    marqueeLabel: 'Tecnologias',
    services: {
      label: '01 / Serviços',
      title: 'Serviços',
      subtitle: 'Trabalhos com escopo claro. Primeiro a gente conversa, eu entendo o problema e depois mando uma proposta por escrito com escopo, prazo e preço fechado.',
      cta: 'Vamos conversar',
      list: [
        {
          name: 'Auditoria de tráfego de bots e crawlers',
          tag: 'Comece aqui',
          text: 'Bots e crawlers podem ser boa parte do que seus servidores processam. Mapeio o tráfego por origem, separo o que te ajuda (buscadores, parceiros) do que só custa e coloco a regra certa na frente de cada um. Você recebe um relatório escrito e as correções aplicadas.',
          proof: '−49,5% de carga de renderização',
        },
        {
          name: 'Deploys mais rápidos e seguros',
          text: 'Deploy manual ou lento faz o time entregar menos e acumular risco em cada release. Automatizo o caminho do merge até a produção: build só do que mudou, imagens enxutas, servidores que se atualizam sozinhos e ninguém entrando por SSH para publicar.',
          proof: 'Deploy manual por SSH → ~3,5 min automático',
        },
        {
          name: 'Integrações confiáveis',
          text: 'Integrações com marketplaces, pagamentos e ERP que não perdem pedido nem atualização de estoque em silêncio: webhooks, filas, jobs, retries e o monitoramento para saber quando algo falha.',
          proof: 'Dezenas de milhares de webhooks e jobs por dia',
        },
        {
          name: 'Pagamentos e conciliação financeira',
          text: 'Bater o que a plataforma diz que vendeu com o que de fato caiu no banco: importação de extratos, regras de conciliação, revisão de divergências e financeiro ligado à venda na mesma transação.',
          proof: 'Backend de conciliação construído do zero',
        },
        {
          name: 'Engenheiro em retainer',
          text: 'Um bloco mensal de horas como extensão do seu time, para quando você precisa de alguém que já conhece o sistema para manter as coisas andando.',
          proof: 'Mensal, com escopo combinado antes',
        },
      ] as Service[],
    },
    work: {
      label: '02 / Trabalhos',
      title: 'Trabalhos selecionados',
      subtitle: 'Sistemas que construí de ponta a ponta e, depois, trabalhos como engenheiro de software nas empresas listadas em Experiência. Os clientes ficam anônimos e os números da operação deles aparecem em faixas.',
      result: 'Resultado',
      featured: {
        kind: 'Sistema interno · em produção',
        name: 'Sistema de recibos de reembolso',
        description: 'Quatro institutos mandam uma planilha mensal de despesas, e o cliente emitia os recibos de reembolso a partir delas, com a numeração controlada numa planilha à parte. Construí o sistema inteiro sozinho, do levantamento à produção na AWS: importação com revisão linha a linha, cadastro das pessoas reembolsadas e recibos gerados em PDF em segundo plano, para baixar um a um ou em lote.',
        decisions: [
          'Recibo gerado é imutável, com uma numeração única entre todos os institutos que reinicia a cada ano.',
          'Reimportar uma planilha sem mudança é bloqueado; uma planilha alterada só atualiza o que ainda pode mudar.',
          'Custo fixo cortado depois do lançamento: a fila do SQS virou uma fila no banco e o PostgreSQL foi para um plano serverless gratuito.',
        ],
        result: '~US$ 86/mês de custo fixo de infraestrutura eliminados, e cold start de ~22 s para ~5 s.',
        resultLabel: 'Resultado',
        stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'AWS Lambda', 'S3', 'CloudFront', 'Serverless Framework'],
        links: [] as { label: string; href: string }[],
        url: 'prestacontas · prestação mensal',
        image: '/projects/receipts.webp',
        width: 1600,
        height: 1258,
        alt: 'Prestação mensal em revisão, com dados de exemplo',
      },
      cases: [
        {
          title: 'Tráfego de crawlers consumia a renderização',
          company: 'ecenture',
          text: 'Numa plataforma de e-commerce multi-tenant com dezenas de lojas e cerca de um milhão de produtos, medi para onde ia o trabalho de renderização: cerca de três em cada quatro páginas renderizadas eram para bots, não para compradores, e cinco crawlers de SEO sozinhos faziam metade disso. Bloqueei esses por user agent no nginx em todas as lojas, barrei crawlers de IA e de redes sociais no endpoint de imagens (e um scraper antigo que puxava dezenas de milhares de imagens por dia), coloquei os bots menores com crawl delay e tirei a busca interna da indexação. Avaliei rate limit e descartei: o volume restante não justificava.',
          result: '−49,5% de carga de renderização, sem infraestrutura nova.',
          tags: caseTags[0],
        },
        {
          title: 'De deploy manual por SSH para ~3,5 minutos, automático',
          company: 'ecenture',
          text: 'A plataforma legada era publicada na mão, por SSH, pasta por pasta. O pipeline novo builda só o serviço alterado, gera imagens standalone enxutas (~195MB em vez do monorepo inteiro) via Jenkins e Docker Hub, e cada servidor puxa a versão nova sozinho a cada dois minutos, recriando só os containers que mudaram.',
          result: '~3,5 min do merge à produção. Ninguém mais entra por SSH para publicar.',
          tags: caseTags[1],
        },
        {
          title: 'Integrações em escala de marketplace',
          company: 'ecenture',
          text: 'Integrações com grandes marketplaces e plataformas de e-commerce brasileiras, com processamento assíncrono em Redis, RabbitMQ e workers em Go. Também investiguei travamentos intermitentes em produção e migrei os serviços afetados para Node.js.',
          result: 'Dezenas de milhares de webhooks e jobs por dia.',
          tags: caseTags[2],
        },
        {
          title: 'Sistemas sob medida do zero',
          company: 'iDw Soluções',
          text: 'Numa software house, construí sistemas sob medida para clientes, do zero à produção. Um deles foi um backend de conciliação financeira que importa extratos, normaliza, concilia automaticamente e manda só as divergências para revisão humana. Outros: uma central de chamados com chat em tempo real e SLA, e funcionalidades de pagamento (QR Code, transferências, cartão virtual) em apps existentes.',
          result: 'Cada um levado do repositório vazio até a produção.',
          tags: caseTags[3],
        },
        {
          title: 'Migração de financeiro legado sem perda de dados',
          company: 'ecenture',
          text: 'Substituí um financeiro legado por um módulo multiempresa novo em .NET, com isolamento por empresa via Row-Level Security no PostgreSQL. Legado e novo rodaram lado a lado, com conferência automática, sincronizados até a virada. Venda agora entra no financeiro na mesma transação, com baixas automáticas idempotentes. Também recuperei dezenas de milhares de produtos e a configuração de dezenas de lojas da plataforma antiga.',
          result: 'Virada sem nenhum dado perdido.',
          tags: caseTags[4],
        },
      ] as Case[],
      side: {
        kind: 'SaaS · multi-tenant',
        name: 'Broadcast',
        description: 'Cada cliente gerencia conexões, contatos e mensagens, com envio imediato ou agendado e status por destinatário em tempo real.',
        decisions: [
          'Agendamento processado por Cloud Functions, sem depender do navegador aberto.',
          'Schemas Zod compartilhados entre frontend e backend, uma única fonte de regras.',
          'Exclusão em cascata com prévia do que será apagado.',
        ],
        stack: broadcast.stack,
        links: [
          { label: 'Demo', href: broadcast.demo },
          { label: 'Código', href: broadcast.code },
        ],
        url: 'broadcast · mensagens',
        image: '/projects/broadcast.webp',
        alt: 'Tela de envio de mensagens do Broadcast',
      },
    },
    process: {
      label: '03 / Como trabalho',
      title: 'Como trabalho',
      steps: [
        { title: 'Por escrito primeiro', text: 'Me mande um e-mail descrevendo o problema. Respondo por escrito, normalmente em até um dia útil, com perguntas ou uma primeira análise.' },
        { title: 'Escopo antes do trabalho', text: 'Entendido o problema, você recebe uma proposta curta: o que vou fazer, o que você recebe, prazo e preço fechado. Nada começa antes da sua aprovação.' },
        { title: 'Assíncrono, com horário em comum', text: 'Estou em Natal (UTC−3), com boa sobreposição de horário com Europa e EUA. Atualizações por escrito durante o trabalho; call quando realmente ajuda.' },
        { title: 'Tudo fica com você', text: 'Código, documentação e acessos são seus. Deixo o sistema documentado para o seu time tocar sem mim.' },
      ] as Step[],
    },
    experience: {
      label: '04 / Experiência',
      title: 'Experiência',
      stackLabel: 'Stack',
      stack,
      jobs: [
        { role: 'Software Engineer', company: 'ecenture', period: 'nov 2025 – presente', text: 'Plataforma de e-commerce multi-tenant e ERP com módulo financeiro em C#/.NET.' },
        { role: 'Software Engineer', company: 'iDw Soluções', period: 'ago 2025 – ago 2026', text: 'Software house. Sistemas sob medida para clientes: conciliação financeira, central de chamados, pagamentos, frontend de SaaS.' },
        { role: 'Desenvolvedor Frontend', company: 'Super1', period: 'fev – ago 2025', text: 'Frontend de lojas virtuais e do site institucional.' },
        { role: 'Desenvolvedor Full Stack', company: 'Agência Gentileza', period: 'out 2024 – fev 2025', text: 'Plataforma de certificação do início à produção, com autenticação AWS Cognito e certificados em PDF.' },
      ] as Job[],
    },
    contact: {
      label: '05 / Contato',
      title: 'Tem um problema parecido?',
      text: 'Disponível para projetos e contratos. Me conte o que está acontecendo e eu respondo por escrito.',
      email: 'E-mail',
    },
    footer: { built: 'Feito com Astro' },
  },
}

export type Content = (typeof content)['en']
export const mailto = (locale: Locale) => `mailto:${EMAIL}?subject=${encodeURIComponent(content[locale].mailSubject)}`
