import React from 'react';
import jerryAvatar from './assets/jerry-avatar.png';
import bridgeLogo from './assets/bridge-logo.png';
import brandLogo from './assets/brand-logo.png';

const Portfolio = () => {
  const projects = [
    {
      id: 'seasonal-sips',
      title: 'Seasonal Sips',
      org: 'JerryWJackson',
      description:
        'CI/CD stabilization and Google Maps integration for a seasonal drink discovery app.',
      tech: ['React', 'Vite', 'Vitest', 'GitHub Actions'],
      highlights: [
        'Automated Pipeline',
        'Vitest 3.0.7 Stabilization',
        'Google Maps API',
      ],
      status: 'Live',
      link: 'http://JerryWJackson.github.io/seasonal-sips',
      repo: 'https://github.com/JerryWJackson/seasonal-sips',
      readme: 'https://github.com/JerryWJackson/seasonal-sips#readme',
    },
    {
      id: 'continuity-bridge',
      title: 'Continuity Bridge',
      org: 'continuity-bridge',
      description:
        'A robust architectural pattern for maintainability and seamless system transitions.',
      tech: ['Architecture', 'Design Patterns'],
      highlights: ['System Abstraction', 'Integration Patterns'],
      status: 'Reference',
      link: 'https://continuity-bridge.github.io',
      repo: 'https://github.com/continuity-bridge/continuity-bridge',
      readme: 'https://github.com/continuity-bridge/continuity-bridge#readme',
    },
    {
      id: 'wtwr',
      title: 'WTWR (Full Stack)',
      org: 'JerryWJackson',
      description:
        'A professional full-stack clothing discovery platform with backend and frontend consolidation.',
      tech: ['Node.js', 'Express', 'React', 'MongoDB'],
      highlights: [
        'Full Stack Integration',
        'REST API Design',
        'State Management',
      ],
      status: 'Consolidated',
      repo: 'https://github.com/JerryWJackson/wtwr',
      readme: 'https://github.com/JerryWJackson/wtwr#readme',
    },
    {
      id: 'wnwn',
      title: 'WNWN',
      org: 'JerryWJackson',
      description:
        'A community-focused "Win-Win" platform for resource sharing and collaboration.',
      tech: ['JavaScript', 'HTML/CSS'],
      highlights: ['Responsive UI', 'Community Features'],
      status: 'Project Jam',
      repo: 'https://github.com/JerryWJackson/wnwn',
      readme: 'https://github.com/JerryWJackson/wnwn#readme',
    },
    {
      id: 'sanguihedral',
      title: 'Sanguihedral',
      org: 'UncleTallest',
      description:
        'A personal creative project highlighting technical precision and design.',
      tech: ['JavaScript', 'Vite'],
      highlights: ['Custom Design System', 'Vite Optimization'],
      status: 'Development',
      link: 'https://uncletallest.github.io/sanguihedral',
      repo: 'https://github.com/UncleTallest/sanguihedral',
      readme: 'https://github.com/UncleTallest/sanguihedral#readme',
    },
    {
      id: 'kowm',
      title: 'koWM Core Suite',
      org: 'koWM',
      description:
        'The core engine and utility suite for the OhMyTallest Productions ecosystem.',
      tech: ['Ruby', 'Rake'],
      highlights: ['Infrastructure Code', 'Core Engine Utilities'],
      status: 'Infrastructure',
      repo: 'https://github.com/OhMyTallest/kowm',
      readme: 'https://github.com/OhMyTallest/kowm#readme',
    },
  ];

  const getOrgLogo = (org) => {
    switch (org) {
      case 'JerryWJackson':
        return jerryAvatar;
      case 'continuity-bridge':
        return bridgeLogo;
      default:
        return brandLogo; // UncleTallest and koWM use the brand logo
    }
  };

  return (
    <div className="portfolio-container">
      <header className="hero">
        <h1 className="gradient-text">Jerry Jackson</h1>
        <p className="subtitle">Software Engineer • Creative Technologist</p>
      </header>

      <main className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card card-${project.org.toLowerCase()}`}
          >
            <div
              className="card-watermark"
              style={{ backgroundImage: `url(${getOrgLogo(project.org)})` }}
            ></div>
            <div className="card-content">
              <span className={`org-badge org-${project.org.toLowerCase()}`}>
                <img
                  src={getOrgLogo(project.org)}
                  alt={`${project.org} logo`}
                  className="org-icon"
                />
                {project.org}
              </span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="highlights-list">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    className="project-link live-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Site ↗
                  </a>
                )}
                {!project.link && (
                  <div className="project-link live-link placeholder"></div>
                )}
                <a
                  href={project.readme}
                  className="project-link readme-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View README ↗
                </a>
                <a
                  href={project.repo}
                  className="project-link github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <div className="contact-links">
          <a
            href="https://github.com/JerryWJackson"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub (JerryWJackson)
          </a>
          <a
            href="https://github.com/UncleTallest"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub (UncleTallest)
          </a>
          <a
            href="https://ohmytallest.productions"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Main Website
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Jerry Jackson. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
