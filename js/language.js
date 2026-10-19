// Portuguese / English language switcher (no external dependencies).
(() => {
  const translations = {
  "Sobre": "About",
  "Projetos": "Projects",
  "Habilidades": "Skills",
  "Contato": "Contact",
  "Hello World! eu sou": "Hello World! I'm",
  "Desenvolvedor Web & Mobile": "Web & Mobile Developer",
  "Estudo Desenvolvimento de Software Multiplataforma na FATEC de Jacareí. Tenho paixão por transformar ideias em interfaces funcionais, utilizando tecnologias modernas para criar experiências digitais acessíveis, performáticas e visualmente agradáveis.": "I'm studying Multiplatform Software Development at FATEC Jacareí. I'm passionate about turning ideas into functional interfaces, using modern technologies to create accessible, high-performance, and visually appealing digital experiences.",
  "Anos de experiência": "Years of experience",
  "Projetos completos": "Completed projects",
  "Linguagens de programação": "Programming languages",
  "Experiência e Habilidades": "Experience and Skills",
  "desenvolvidas em projetos": "developed through projects",
  "Desenvolvimento web e mobile": "Web and mobile development",
  "Desenvolvimento de interfaces responsivas e intuitivas utilizando ferramentas de desenvolvimento web e desenvolvimento mobile, com foco em usabilidade e performance e melhor experiência do usuário.": "Development of responsive, intuitive web and mobile interfaces focused on usability, performance, and user experience.",
  "Gestão de banco de dados": "Database management",
  "Modelagem, criação e manutenção de bancos de dados relacionais e NoSQL.": "Design, creation, and maintenance of relational and NoSQL databases.",
  "Controle de versão": "Version control",
  "Utilização de sistemas de controle de versão como Git e plataformas como GitHub para colaboração e gerenciamento de código.": "Using version control systems such as Git and platforms like GitHub for collaboration and code management.",
  "Metodologias ágeis": "Agile methodologies",
  "Experiência com metodologias Scrum e Kanban para organização de tarefas, sprints e entregas contínuas em equipe.": "Experience with Scrum and Kanban to organize tasks, sprints, and continuous team delivery.",
  "Levantamento de requisitos": "Requirements gathering",
  "Entrevistas com stakeholders e documentação de requisitos funcionais e não funcionais para garantir a aderência aos objetivos do projeto.": "Stakeholder interviews and documentation of functional and non-functional requirements to align solutions with project goals.",
  "Integração com AI": "AI integration",
  "Criação de aplicações que integram APIs de inteligência artificial, como OpenAI e modelos de linguagem, para automação e análise de dados.": "Building applications that integrate AI APIs, including OpenAI and language models, for automation and data analysis.",
  "informações do projeto": "Project details",
  "Plataforma de curso focado em ensinar Metodologias ágeis ao usuário, tendo como principal foco o Scrum.": "Learning platform focused on teaching agile methodologies, especially Scrum.",
  "Cliente:": "Client:",
  "Projeto acadêmico": "Academic project",
  "Duração do projeto:": "Project duration:",
  "6 meses": "6 months",
  "Tecnologias:": "Technologies:",
  "Ver no GitHub": "View on GitHub",
  "Plataforma de controle nutricional e acompanhamento de dieta, e visualização de progresso físico.": "Platform for nutritional tracking, diet management, and physical progress visualization.",
  "Plataforma de levantamento e monitoramento climático, dos ventos e altura das ondas na região do lado de Furnas.": "Platform for monitoring weather conditions, wind, and wave heights in the Furnas Lake region.",
  "Banco de Dados:": "Databases:",
  "Ferramentas e Plataformas:": "Tools and Platforms:",
  "Outros:": "Other:"
};
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement?.closest('script, style')) continue;
    const original = node.textContent;
    const key = original.trim().replace(/\\s+/g, ' ');
    if (Object.prototype.hasOwnProperty.call(translations, key)) {
      nodes.push({ node, original, translated: translations[key] });
    }
  }
  const button = document.getElementById('languageToggle');
  const label = document.getElementById('languageLabel');
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description?.content;
  const photo = document.querySelector('.profile-photo-light');
  function setLanguage(language) {
    const english = language === 'en';
    for (const item of nodes) {
      const leading = item.original.match(/^\\s*/)[0];
      const trailing = item.original.match(/\\s*$/)[0];
      item.node.textContent = english ? leading + item.translated + trailing : item.original;
    }
    document.documentElement.lang = english ? 'en' : 'pt-BR';
    document.title = english ? 'Portfolio - André Ventura' : 'Portfólio - André Ventura';
    if (description) description.content = english
      ? 'Portfolio of André Ventura - Front-End Developer specializing in Web and Mobile applications.'
      : originalDescription;
    if (photo) photo.alt = english ? 'Photo of André Ventura' : 'Foto de André Ventura';
    label.textContent = english ? 'PT' : 'EN';
    button.setAttribute('aria-label', english ? 'Mudar para português' : 'Switch to English');
    button.title = english ? 'Mudar para português' : 'Switch to English';
    try { localStorage.setItem('portfolio-language', language); } catch (_) {}
  }
  let saved = 'pt';
  try { if (localStorage.getItem('portfolio-language') === 'en') saved = 'en'; } catch (_) {}
  setLanguage(saved);
  button.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'pt' : 'en');
  });
})();
