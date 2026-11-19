import { HeroVisual } from './hero-visual';
import { work, featuredLab, additionalLab } from './projects';

const email = 'mailto:abdulkarim.alarmanazi@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/abdulkarim-alarmanazi/';
const github = 'https://github.com/kemdev';

function Arrow({ direction = 'up' }) {
  const path = direction === 'down' ? 'M12 5v14m-5-5 5 5 5-5' : 'M6 18 18 6M8 6h10v10';
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ExternalLink({ href, children, className, label }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}<Arrow /></a>;
}

function ProjectCard({ project, eager = false }) {
  const media = project.image ? (
    <img src={project.image} alt={project.alt || `${project.name} project screenshot`} width="800" height="450" loading={eager ? 'eager' : 'lazy'} decoding="async" />
  ) : (
    <span className="project-fallback" aria-hidden="true">{project.name}</span>
  );

  return (
    <article className="project-card">
      <div className="project-image">
        {project.url ? (
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}>
            {media}
            <span className="image-arrow"><Arrow /></span>
          </a>
        ) : media}
      </div>
      <div className="project-info">
        <p className="project-type mono">{project.type}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          {project.url && <ExternalLink href={project.url} label={`Open live demo for ${project.name}`}>{project.linkLabel || 'Live demo'}</ExternalLink>}
          {project.source && <ExternalLink href={project.source} label={`View source for ${project.name}`}>Source</ExternalLink>}
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
          <a className="brand" href="#top" aria-label="Kareem — home"><img src="/work/mark.svg" alt="" width="36" height="36" /><span>Kareem<span className="accent">.</span></span></a>
          <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#lab">Lab</a><a href="#about">About</a></nav>
          <a className="header-contact" href="#contact">Contact <Arrow /></a>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow mono"><span className="status-dot" /> Available for developer roles</p>
              <h1 id="hero-title">Creative<br /><em>developer.</em></h1>
              <p className="hero-name">Abdulkarim Alarmanazi</p>
              <p className="hero-description">I build web apps with React and Next.js, and explore what the browser can do with real-time 3D.</p>
              <div className="hero-actions">
                <a href="#work" className="button primary">Explore my work <Arrow direction="down" /></a>
                <a href="#lab" className="button secondary">Visit the 3D lab <Arrow /></a>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="shell hero-foot mono"><span>NÜRTINGEN · STUTTGART REGION, DE</span><a href="#work">SCROLL TO EXPLORE <Arrow direction="down" /></a></div>
        </section>

        <section className="shell section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow mono">PORTFOLIO</p><h2 id="work-title">Selected work<span className="accent">.</span></h2></div>
            <p>Web apps, developer tools, and client websites.</p>
          </div>
          <div className="project-grid">
            {work.map((project, index) => <ProjectCard key={project.name} project={project} eager={index < 2} />)}
          </div>
        </section>

        <section className="lab-section" id="lab" aria-labelledby="lab-title">
          <div className="shell section">
            <div className="section-heading">
              <div><p className="eyebrow mono">CREATIVE CODING</p><h2 id="lab-title">The 3D Lab<span className="accent">.</span></h2></div>
              <p>Shader studies, interactive scenes, and real-time graphics built with Three.js and React Three Fiber.</p>
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

        <section className="shell section about" id="about" aria-labelledby="about-title">
          <div><p className="eyebrow mono">ABOUT</p><h2 id="about-title">Hi, I’m Kareem<span className="accent">.</span></h2></div>
          <div>
            <p>I’m a full-stack web developer based in Nürtingen, near Stuttgart. I work across the stack with React, Next.js, Node.js, MongoDB, and Firebase. I’ve also tutored full-stack students, helping them work through the same kinds of problems I solve as a developer.</p>
            <p>Outside of app development, I build with Three.js, React Three Fiber, and TSL to explore shaders, motion, and interaction in the browser.</p>
            <ExternalLink href={github} className="text-link">GitHub profile</ExternalLink>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <div><p className="eyebrow mono">CONTACT</p><h2 id="contact-title">Let’s talk<span className="accent">.</span></h2><p>I’m open to frontend and full-stack developer roles.</p></div>
            <div className="contact-actions">
              <a href={email} className="button primary">Email me <Arrow /></a>
              <ExternalLink href={linkedIn} className="button secondary">LinkedIn</ExternalLink>
              <a className="text-link" href={`${email}?subject=CV%20request`}>Request my CV <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer mono"><span>© {new Date().getFullYear()} Abdulkarim Alarmanazi</span><a href="#top">BACK TO TOP <Arrow /></a></footer>
    </>
  );
}
