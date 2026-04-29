import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowUpRight, Bot, BrainCircuit, Code2, Gamepad2, Github, Linkedin, MonitorDot, Sparkles, TerminalSquare } from 'lucide-react';
import './styles.css';

type Project = {
  name: string;
  description: string;
  href: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
};

const projects: Project[] = [
  {
    name: 'Digiclaw',
    description: 'A Discord-first AI agent running on a Raspberry Pi, built for automation, system control, and self-improvement loops.',
    href: 'https://github.com/Digized/digiclaw',
    status: 'Core platform',
    icon: Bot,
    tags: ['AI agents', 'Python', 'Raspberry Pi'],
  },
  {
    name: 'Kahf Game',
    description: 'A browser-based narrative game inspired by the stories of Surah Al-Kahf.',
    href: 'https://github.com/Digized/kahf-game',
    status: 'Game',
    icon: Gamepad2,
    tags: ['JavaScript', 'Narrative', 'Web'],
  },
  {
    name: 'Digiclaw Dashboard',
    description: 'A lightweight operations dashboard for watching autonomous Pi activity and agent health.',
    href: 'https://github.com/Digized/digiclaw-dashboard',
    status: 'Ops',
    icon: MonitorDot,
    tags: ['Monitoring', 'HTML', 'Internal tools'],
  },
  {
    name: 'Bookworth',
    description: 'An early-stage product experiment around book discovery, personal libraries, and extracting more value from reading.',
    href: 'https://github.com/Digized/bookworth',
    status: 'Experiment',
    icon: BrainCircuit,
    tags: ['TypeScript', 'Product', 'Discovery'],
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function Badge({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'brand' }) {
  return <span className={cn('badge', tone === 'brand' && 'badge-brand')}>{children}</span>;
}

function Button({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' }) {
  return (
    <a className={cn('button', variant === 'secondary' && 'button-secondary')} href={href}>
      {children}
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <a className="project-card" href={project.href} aria-label={`${project.name} project`}>
      <div className="project-card-header">
        <div className="icon-tile">
          <Icon className="icon" />
        </div>
        <Badge>{project.status}</Badge>
      </div>
      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-footer">
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <ArrowUpRight className="arrow" />
      </div>
    </a>
  );
}

function App() {
  return (
    <main>
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />

      <header className="site-header">
        <a className="brand" href="/" aria-label="Digized Software Inc. home">
          <span className="brand-mark">D</span>
          <span>Digized Software Inc.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="https://github.com/Digized">GitHub</a>
          <a href="resume.pdf">Resume</a>
        </nav>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <Badge tone="brand"><Sparkles className="badge-icon" /> AI-native software studio</Badge>
          <h1>Building practical software with leverage.</h1>
          <p>
            Digized Software Inc. is a founder-led studio focused on AI agents, automation, internal tooling, and focused product experiments.
          </p>
          <div className="hero-actions">
            <Button href="#work">View active work</Button>
            <Button href="https://github.com/Digized" variant="secondary">Open GitHub <Github className="button-icon" /></Button>
          </div>
        </div>

        <div className="hero-panel" aria-label="Studio snapshot">
          <div className="panel-topline">
            <div className="window-dots"><span /><span /><span /></div>
            <span>studio.ts</span>
          </div>
          <div className="terminal-card">
            <p><span>const</span> focus = [</p>
            <p className="terminal-indent">'agents',</p>
            <p className="terminal-indent">'automation',</p>
            <p className="terminal-indent">'web products',</p>
            <p>];</p>
          </div>
          <div className="metric-grid">
            <div><strong>01</strong><span>Founder-led</span></div>
            <div><strong>24/7</strong><span>Agent lab</span></div>
            <div><strong>Lean</strong><span>Shipping bias</span></div>
          </div>
        </div>
      </section>

      <section id="work" className="section-shell section-block">
        <div className="section-heading">
          <Badge>Active projects</Badge>
          <h2>Focused bets, not a grab bag.</h2>
          <p>
            A concise view of the projects with clear public context. Internal or unclear experiments stay off the homepage until they have a sharper story.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section id="approach" className="section-shell section-block approach-grid">
        <div className="approach-card primary-approach">
          <Badge>Approach</Badge>
          <h2>Small surface area. Real utility.</h2>
          <p>
            The goal is not to look busy. The goal is to ship useful systems: AI workflows that save time, interfaces that clarify work, and products that can survive contact with real users.
          </p>
        </div>
        <div className="approach-card">
          <TerminalSquare className="approach-icon" />
          <h3>Prototype fast</h3>
          <p>Compress the path from idea to running software.</p>
        </div>
        <div className="approach-card">
          <Code2 className="approach-icon" />
          <h3>Keep stacks boring</h3>
          <p>Use mature tools where they create speed and reliability.</p>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} Digized Software Inc.</span>
        <div>
          <a href="https://github.com/Digized"><Github className="footer-icon" /> GitHub</a>
          <a href="https://linkedin.com/in/zuraizzafar"><Linkedin className="footer-icon" /> LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
