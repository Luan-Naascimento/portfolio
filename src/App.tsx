import { useState } from 'react'

type Project = {
  title: string
  type: string
  description: string
  href: string
  tags: string[]
  art: 'nexus' | 'norte'
}

const projects: Project[] = [
  {
    title: 'Barbearia Nexus',
    type: 'React Native · App publicado',
    description: 'App de reservas para clientes, barbeiros e donos, com agenda, autenticação e leitura de QR code.',
    href: 'https://app-barbearia-nexus.vercel.app',
    tags: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    art: 'nexus',
  },
  {
    title: 'Imagem Norte',
    type: 'Web · Projeto publicado',
    description: 'Projeto publicado para apresentar uma presença digital clara, moderna e funcional.',
    href: 'https://imagemnorte.vercel.app',
    tags: ['Web', 'Vercel', 'UI'],
    art: 'norte',
  },
]

function Eyebrow({ children, dot = false }: { children: React.ReactNode; dot?: boolean }) {
  return (
    <div className="eyebrow">
      {dot && <i />}
      {children}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={project.href} target="_blank" rel="noreferrer">
      <div className={`project-art art-${project.art}`}>
        {project.art === 'nexus' ? (
          <>
            <span className="barber-mark">N</span>
            <span>
              BARBEARIA
              <br />
              <b>NEXUS</b>
            </span>
          </>
        ) : (
          <>
            <span className="art-badge">DIGITAL PRESENCE</span>
            <strong>
              IMAGEM
              <span>NORTE</span>
            </strong>
            <small>website experience</small>
          </>
        )}
      </div>
      <div className="project-info">
        <div>
          <span className="project-type">{project.type}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className="project-arrow">↗</span>
      </div>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span>LN</span>
          <small>Digital Solutions</small>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Navegação principal">
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>
          <a className="nav-contact" href="#contato" onClick={closeMenu}>
            Contato <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="hero section-wrap">
          <div className="hero-copy">
            <Eyebrow dot>Disponível para oportunidades</Eyebrow>
            <h1>
              Transformo ideias em <em>soluções digitais.</em>
            </h1>
            <p className="hero-lead">
              Desenvolvedor de Sistemas com experiência em .NET, SQL e desenvolvimento web. Criando aplicações, sites
              e soluções orientadas a dados.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos <span>↗</span>
              </a>
              <a className="button button-ghost" href="#contato">
                Falar comigo
              </a>
            </div>
            <div className="hero-meta">
              <span>↳ Ananindeua – PA · Brasil</span>
              <div>
                <a href="https://github.com/Luan-Naascimento" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <b>solution.cs</b>
              </div>
              <pre>
                <code>
                  <span className="purple">public</span> <span className="blue">class</span>{' '}
                  <span className="yellow">DigitalSolution</span>
                  {'\n'}
                  {'{'}
                  {'\n'}
                  {'  '}
                  <span className="purple">public</span> <span className="blue">string</span> Focus =&gt;
                  {'\n'}
                  {'    '}
                  <span className="green">"real-world impact"</span>;
                  {'\n'}
                  {'\n'}
                  {'  '}
                  <span className="purple">public</span> <span className="blue">void</span>{' '}
                  <span className="yellow">Build</span>()
                  {'\n'}
                  {'  '}
                  {'{'}
                  {'\n'}
                  {'    '}Web.
                  <span className="yellow">Create</span>();
                  {'\n'}
                  {'    '}Data.
                  <span className="yellow">Connect</span>();
                  {'\n'}
                  {'    '}Systems.
                  <span className="yellow">Evolve</span>();
                  {'\n'}
                  {'  '}
                  {'}'}
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="visual-label">
              <strong>01</strong>
              <span>Web · Sistemas · Dados</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projetos" className="section-wrap projects-section">
          <div className="section-heading">
            <div>
              <Eyebrow>02 — Seleção de trabalho</Eyebrow>
              <h2>
                Projetos que <em>resolvem.</em>
              </h2>
            </div>
            <p>
              Uma seleção de experiências e estudos construídos para transformar necessidades em produtos funcionais.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <a className="text-link" href="https://github.com/Luan-Naascimento" target="_blank" rel="noreferrer">
            Explorar todos os projetos <span>↗</span>
          </a>
        </section>

        {/* About */}
        <section id="sobre" className="section-wrap about-section">
          <Eyebrow>03 — Sobre mim</Eyebrow>
          <div className="about-grid">
            <h2>
              Tecnologia com contexto, <em>não só código.</em>
            </h2>
            <div>
              <p>
                Sou formado em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento .NET, suporte
                técnico e banco de dados.
              </p>
              <p>
                Meu trabalho conecta tecnologia, organização de processos e análise de dados para construir aplicações
                úteis, eficientes e bem estruturadas.
              </p>
              <a className="text-link" href="mailto:luangabrielsn05@gmail.com">
                Vamos conversar <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="section-wrap services-section">
          <div className="section-heading">
            <div>
              <Eyebrow>04 — Como posso ajudar</Eyebrow>
              <h2>
                Especialidades para <em>avançar.</em>
              </h2>
            </div>
          </div>
          <div className="service-grid">
            {[
              ['01', 'Sites', 'Sites institucionais, landing pages e páginas comerciais com clareza e personalidade.'],
              [
                '02',
                'Sistemas',
                'Aplicações web, cadastros, painéis e automações que organizam sua operação.',
              ],
              ['03', 'Dados', 'Dashboards, indicadores e análises que ajudam a enxergar o próximo passo.'],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contato">
                  Conhecer serviço <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="section-wrap process-section">
          <Eyebrow>05 — Processo</Eyebrow>
          <div className="process-grid">
            <h2>
              Do problema ao <em>próximo nível.</em>
            </h2>
            <div className="process-list">
              {[
                ['01', 'Entendimento', 'Entendo a necessidade e o objetivo do projeto.'],
                ['02', 'Planejamento', 'Defino funcionalidades, estrutura e proposta.'],
                ['03', 'Desenvolvimento', 'Construo e apresento as etapas do projeto.'],
                ['04', 'Entrega', 'Testes, implantação e orientações de uso.'],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <b>{number}</b>
                  <span>
                    <strong>{title}</strong>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="section-wrap contact-section">
          <div className="contact-card">
            <Eyebrow>06 — Vamos conversar</Eyebrow>
            <h2>
              Uma boa ideia merece <em>começar.</em>
            </h2>
            <p>Aberto a oportunidades profissionais, projetos freelance e colaborações.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="https://contate.me/5591993500368" target="_blank" rel="noreferrer">
                Conversar pelo WhatsApp <span>↗</span>
              </a>
              <a className="button button-ghost" href="mailto:luangabrielsn05@gmail.com">
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>LN.</span>
        <p>Desenvolvido por Luan Gabriel Nascimento · 2026</p>
        <div>
          <a href="https://github.com/Luan-Naascimento" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </footer>
    </>
  )
}
