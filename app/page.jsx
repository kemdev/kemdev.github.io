import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { HeroVisual } from './hero-visual';
import { WorkGallery } from './work-gallery';
import { work, featuredLab, additionalLab } from './projects';

const email = 'mailto:abdulkarim.alarmanazi@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/abdulkarim-alarmanazi/';
const github = 'https://github.com/kemdev';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Material UI', 'Angular', 'Ionic'],
  },
  {
    title: 'Backend & data',
    skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'Firebase Auth', 'Cloud Firestore'],
  },
  {
    title: '3D & motion',
    skills: ['Three.js', 'React Three Fiber', 'Drei', 'TSL', 'WebGPU', 'GLSL', 'React Spring', 'Motion'],
  },
  {
    title: 'Tools & platforms',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'WordPress'],
  },
];

const documents = [
  { title: 'Lebenslauf', detail: 'German CV · PDF', file: 'abdulkarim-alarmanazi-cv.pdf' },
  { title: 'Certificates', detail: 'Zertifikate · PDF', file: 'abdulkarim-alarmanazi-certificates.pdf' },
].filter(({ file }) => existsSync(join(process.cwd(), 'public', 'downloads', file)));

function Icon({ name, size = 20 }) {
  const paths = {
    download: 'M12 3v12m-5-5 5 5 5-5M5 17v3h14v-3',
    file: 'M6 3h8l4 4v14H6zM14 3v5h4M9 12h6m-6 4h6',
    pin: 'M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
    mail: 'M3 5h18v14H3zm0 1 9 7 9-7',
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d={paths[name]} stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalLink({ href, children, className, label }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={project.alt || `${project.name} project screenshot`}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-info">
        <p className="project-type mono">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          {project.url && <ExternalLink href={project.url} label={`${project.linkLabel || 'Live demo'} — ${project.name}`}>{project.linkLabel || 'Live demo'}</ExternalLink>}
          {project.source && <ExternalLink href={project.source} label={`View source for ${project.name}`}>Source code</ExternalLink>}
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Kareem — home">
            <img src="/work/mark.svg" alt="" width="34" height="34" />
            <span>Kareem<span className="accent">.</span></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#lab">3D Lab</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="#contact">Contact</a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="shell hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-name mono"><span className="status-dot" /> Abdulkarim Alarmanazi</p>
              <h1 id="hero-title">Full-stack<br /><em>developer.</em></h1>
              <p className="hero-description">I build web apps with React and Next.js, and bring real-time 3D to the browser with Three.js.</p>
              <div className="hero-actions">
                <a href="#work" className="button primary">Explore my work</a>
                <a href={documents.length ? '#documents' : '#about'} className="button secondary">
                  {documents.length ? 'CV & certificates' : 'About me'}
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="hero-foot">
            <span><Icon name="pin" size={16} /> Nürtingen, Stuttgart region</span>
            <span><span className="status-dot" /> Open to developer roles</span>
          </div>
        </section>

        <section className="shell section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work<span className="accent">.</span></h2>
            <p>Web applications, developer tools, and business websites.</p>
          </div>
          <WorkGallery groups={work.map(({ name, category, ...project }) => ({
            name,
            category,
            card: <ProjectCard project={{ name, ...project }} />,
          }))} />
        </section>

        <section className="lab-section" id="lab" aria-labelledby="lab-title">
          <div className="shell section">
            <div className="section-heading">
              <h2 id="lab-title">The 3D Lab<span className="accent">.</span></h2>
              <p>Real-time graphics in the browser, from procedural textures and particles to fully interactive scenes.</p>
            </div>
            <div className="project-grid lab-grid">
              {featuredLab.map((project) => <ProjectCard key={project.name} project={project} />)}
            </div>
            <details className="archive">
              <summary>More 3D experiments <span className="mono">{additionalLab.length} projects</span><span className="expand-icon" aria-hidden="true" /></summary>
              <div className="project-grid lab-grid">
                {additionalLab.map((project) => <ProjectCard key={project.name} project={project} />)}
              </div>
            </details>
          </div>
        </section>

        <section className="shell section skills" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">Skills<span className="accent">.</span></h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map(({ title, skills }) => (
              <div className="skill-group" key={title}>
                <h3>{title}</h3>
                <ul className="tags">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="shell section about" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <h2 id="about-title">Hi, I’m Kareem<span className="accent">.</span></h2>
            <p>I’m a full-stack web developer based near Stuttgart. I enjoy building the whole experience, from the first interaction to the API and data behind it. I’ve also worked as a full-stack tutor, helping students debug code and build their own projects.</p>
            <p>I use my 3D Lab to explore how shaders, motion, and real-time graphics can make a browser experience more expressive.</p>
          </div>
          {documents.length > 0 && (
            <section className="documents" id="documents" aria-labelledby="documents-title">
              <h3 id="documents-title">CV &amp; certificates</h3>
              <ul>
                {documents.map(({ title, detail, file }) => (
                  <li key={file}>
                    <a href={`/downloads/${file}`} download>
                      <span className="file-icon"><Icon name="file" /></span>
                      <span><strong>{title}</strong><small>{detail}</small></span>
                      <Icon name="download" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <div>
              <h2 id="contact-title">Let’s talk<span className="accent">.</span></h2>
              <p>I’m open to frontend, full-stack, and creative developer roles.</p>
            </div>
            <div className="contact-actions">
              <a href={email} className="button primary"><Icon name="mail" size={18} /> Email me</a>
              <ExternalLink href={linkedIn} className="button secondary">LinkedIn</ExternalLink>
              <ExternalLink href={github} className="button secondary">GitHub</ExternalLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer"><span>© {new Date().getFullYear()} Abdulkarim Alarmanazi</span><a href="#top">Back to top</a></footer>
    </>
  );
}
