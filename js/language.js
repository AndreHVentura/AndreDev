document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    "Experiência e competências": "Experience and skills",
    "Projetos profissionais": "Professional projects",
    "Projetos acadêmicos": "Academic projects",
    Habilidades: "Skills",
    Contato: "Contact",
    Menu: "Menu",
    "Hello World! Eu sou": "Hello World! I'm",
    "Desenvolvedor Web &": "Web & Mobile",
    Mobile: "Developer",
    "Sou Analista de Requisitos e estudante de Desenvolvimento de Software Multiplataforma. Atuo no levantamento e documentação de requisitos, mapeamento de processos, organização de backlogs e testes de qualidade. Também tenho experiência prática com desenvolvimento web, integração de APIs, bancos de dados e suporte técnico, conectando as necessidades do negócio a soluções tecnológicas funcionais.":
      "I'm a Requirements Analyst and a Multiplatform Software Development student. I work with requirements gathering and documentation, process mapping, backlogs, and quality testing. I also have hands-on experience in web development, API integration, databases, and technical support, connecting business needs to functional technology solutions.",
    "Anos de experiência": "Years of experience",
    "Projetos desenvolvidos": "Projects developed",
    "Linguagens de programação": "Programming languages",
    "Experiência e Competências": "Experience and Skills",
    "Análise, tecnologia e qualidade": "Analysis, technology, and quality",
    "em projetos profissionais e acadêmicos":
      "in professional and academic projects",
    "Soluções desenvolvidas para clientes, com foco em resultado, qualidade e boas práticas.":
      "Solutions developed for clients, focusing on results, quality, and best practices.",
    "Projetos de aprendizagem que unem tecnologia, pesquisa e experiências práticas.":
      "Learning projects combining technology, research, and hands-on experience.",
    "Plataforma Web": "Web Platform",
    "Aplicação Web": "Web Application",
    Cliente: "Client",
    "Duração do projeto": "Project duration",
    Tecnologias: "Technologies",
    "Atividades e responsabilidades": "Activities and responsibilities",
    "Levantamento de requisitos, organização das entregas, documentação e acompanhamento da qualidade.":
      "Requirements gathering, delivery planning, documentation, and quality monitoring.",
    "Projeto acadêmico": "Academic project",
    "4 meses": "4 months",
    "6 meses": "6 months",
    "Ver no GitHub": "View on GitHub",
    "Plataforma de curso focado em ensinar Metodologias ágeis ao usuário, tendo como principal foco o Scrum.":
      "Course platform focused on teaching agile methodologies, especially Scrum.",
    "Plataforma de controle nutricional e acompanhamento de dieta, e visualização de progresso físico.":
      "Nutrition and diet tracking platform with physical progress monitoring.",
    "Plataforma de levantamento e monitoramento climático, dos ventos e altura das ondas na região do lado de Furnas.":
      "Platform for monitoring weather, wind, and wave heights in the Furnas Lake region.",
    "Desenvolvimento web e mobile": "Web and mobile development",
    "Banco de dados e integração de sistemas":
      "Databases and systems integration",
    "Controle de versão": "Version control",
    "Organização de projetos e metodologias ágeis":
      "Project management and agile methodologies",
    "Levantamento de requisitos": "Requirements gathering",
    "Inteligência Artificial e PLN": "Artificial Intelligence and NLP",
    Conteinerização: "Containerization",
    "CI/CD e automação": "CI/CD and automation",
    "APIs e integração de sistemas": "APIs and systems integration",
    "Análise e qualidade": "Analysis and quality",
    "Desenvolvimento web": "Web development",
    "Desenvolvimento mobile": "Mobile development",
    "Dados e integração": "Data and integration",
    "IA e DevOps": "AI and DevOps",
    "Ferramentas e métodos": "Tools and methods",
    "Análise de requisitos": "Requirements analysis",
    "Mapeamento de processos": "Process mapping",
    "Backlog e histórias de usuário": "Backlog and user stories",
    "Testes funcionais": "Functional testing",
    Documentação: "Documentation",
    "Inteligência Artificial": "Artificial Intelligence",
    "Suporte técnico": "Technical support",
    "Criação e modernização de sites e interfaces responsivas, com atenção\n              à usabilidade, organização visual, desempenho e experiência do usuário.":
      "Creating and modernizing responsive websites and interfaces, with attention to usability, visual organization, performance, and user experience.",
    "Experiência acadêmica e prática com bancos relacionais e NoSQL,\n              consultas, estruturação de dados e integração com aplicações.":
      "Academic and hands-on experience with relational and NoSQL databases, queries, data modeling, and application integration.",
    "Utilização de sistemas de controle de versão como Git e\n              plataformas como GitHub para colaboração e gerenciamento de\n              código.":
      "Using version control systems such as Git and platforms such as GitHub for collaboration and code management.",
    "Organização de demandas, priorização de atividades e acompanhamento\n              de entregas. Vivência com Scrum e Kanban em equipes e projetos.":
      "Organizing requests, prioritizing activities, and tracking deliveries. Experience with Scrum and Kanban in teams and projects.",
    "Condução de reuniões, levantamento e documentação de requisitos,\n              mapeamento de processos e organização de backlogs alinhados às\n              necessidades dos clientes e aos objetivos do negócio.":
      "Conducting meetings, gathering and documenting requirements, mapping processes, and organizing backlogs aligned with client and business needs.",
    "Desenvolvimento de aplicações com recursos de inteligência artificial,\n              modelos de linguagem e processamento de linguagem natural (PLN),\n              incluindo fluxos conversacionais para chatbots e assistentes.":
      "Building applications with AI, language models, and natural language processing (NLP), including conversational flows for chatbots and assistants.",
    "Uso de Docker e contêineres para padronizar ambientes de execução,\n              organizar dependências e facilitar a configuração e execução de aplicações.":
      "Using Docker and containers to standardize environments, organize dependencies, and simplify application setup and execution.",
    "Conceitos de integração e entrega contínuas, automação de etapas do fluxo\n              de desenvolvimento e organização de pipelines para apoiar testes e entregas.":
      "Continuous integration and delivery concepts, automating development workflows and organizing pipelines to support testing and releases.",
    "Integração de sistemas com APIs e serviços externos para ampliar\n              funcionalidades e conectar aplicações a dados e serviços.":
      "Integrating systems through APIs and external services to extend features and connect applications to data and services.",
  };
  Object.assign(translations, {
    Cargo: "Role",
    "A informar": "To be provided",
    "Descrição do projeto": "Project description",
    "Front-end": "Front-end",
    "Back-end": "Back-end",
    Infraestrutura: "Infrastructure",
    "Descreva aqui suas atividades e responsabilidades neste projeto.":
      "Describe your activities and responsibilities on this project here.",
  });
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest("script,style")) continue;
    const key = node.textContent.trim().replace(/\s+/g, " ");
    if (Object.prototype.hasOwnProperty.call(translations, key))
      nodes.push({
        node,
        original: node.textContent,
        translated: translations[key],
      });
  }
  const button = document.getElementById("languageToggle"),
    label = document.getElementById("languageLabel");
  function setLanguage(lang) {
    const en = lang === "en";
    nodes.forEach((item) => {
      const lead = item.original.match(/^\s*/)[0],
        trail = item.original.match(/\s*$/)[0];
      item.node.textContent = en
        ? lead + item.translated + trail
        : item.original;
    });
    document.documentElement.lang = en ? "en" : "pt-BR";
    document.title = en
      ? "Portfolio - André Ventura"
      : "Portfólio - André Ventura";
    label.textContent = en ? "PT" : "EN";
    button.setAttribute(
      "aria-label",
      en ? "Mudar para português" : "Switch to English",
    );
    try {
      localStorage.setItem("portfolio-language", lang);
    } catch (e) {}
  }
  let saved = "pt";
  try {
    if (localStorage.getItem("portfolio-language") === "en") saved = "en";
  } catch (e) {}
  setLanguage(saved);
  button.addEventListener("click", () =>
    setLanguage(document.documentElement.lang === "en" ? "pt" : "en"),
  );
});
