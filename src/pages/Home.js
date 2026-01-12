import React, { useEffect, useRef, useState } from 'react';
import '../components/Home.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import projects from '../data/projects';
import ufLogo from '../assets/uf.png';
import vitLogo from '../assets/vit.png';
import profilePhoto from '../assets/me.jpg';
import resumePdf from '../assets/Resume_temp.pdf';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const education = [
  {
    school: 'University of Florida, Gainesville, FL',
    degree: 'Master of Science, Computer & Information Science',
    time: 'Aug 2023 — May 2025',
    highlights: ['CGPA 3.7/4.0', 'Graduate research on Machine Learning'],
    logo: ufLogo,
  },
  {
    school: 'Vellore Institute of Technology, Vellore, India',
    degree: 'Bachelor of Technology, Electronics & Communication Engineering',
    time: 'Jul 2019 — May 2023',
    highlights: ['CGPA 3.8/4.0', 'Minor in Applied Mathematics for Machine Learning'],
    logo: vitLogo,
  },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Intersect Healthcare Systems, United States',
    time: 'Jun 2025 — Present',
    summary:
      'Building scalable microservices and deployment pipelines for a high-volume healthcare platform.',
  highlights: [
    'Improved API performance by 52% using .NET Core, Java, async processing, and caching.',
    'Optimized data access, cutting query latency by 30%.',
    'Reduced deployment errors by 35% by enhancing CI/CD, Docker, and Kubernetes.',
    'Delivered modular MVC architecture to accelerate development and improve maintainability.'
    ],
    tags: ['.NET Core', 'Spring Boot', 'RESTful APIs', 'MySQL', 'Docker', 'Kubernetes', 'Redis']
  },
  {
    role: 'Software Developer',
    company: 'University of Florida, United States',
    time: 'Jan 2024 — May 2025',
    summary:
      'Developed ML-powered workflows, full-stack solutions, optimized databases, and automated workflows on cloud.',
    highlights: [
      'Boosted system reliability by 40% by automating prediction workflows using Python and machine learning.',
      'Cut PostgreSQL retrieval time by 30%, enabling sub-second responses for 90% of requests.',
      'Increased customer engagement by 25% using React.js, Node.js, and Power BI.',
      'Reduced cloud costs by 25% by deploying scalable pipelines on AWS.'
    ],
    tags: ['Python', 'Machine Learning', 'PostgreSQL', 'ASP.NET Core', 'React.js', 'Node.js', 'Power BI', 'PyTorch', 'CUDA', 'AWS']
  },
  {
    role: 'Software Engineer (Research)',
    company: 'Vellore Institute of Technology, India',
    time: 'Dec 2022 — Jun 2023',
    summary:
      'Designed ML and NLP inference pipelines tailored for high-performance, real-time microservices.',
    highlights: [
      'Improved translation accuracy by 30% using RNN, LSTM, and Transformer models.',
      'Accelerated inference by 32% through optimized OpenCV processing in Flask microservices.'
    ],
    tags: ['Python', 'Flask microservices', 'RNN', 'LSTM', 'Hugging Face Transformers', 'OpenCV', 'NLP']
  },
  {
    role: 'Software Development Intern',
    company: 'Abbeysoft IT Services, India',
    time: 'Jan 2022 — Jul 2022',
    summary:
      'Built backend automation and automated data pipelines for large-scale systems.',
    highlights: [
      'Automated Spark ETL workflows with Java and Spring Boot, boosting productivity by 45%.',
      'Reduced alerting latency by 63% by integrating Kafka consumers with MongoDB and WebSockets.',
      'Reached 85% client satisfaction through reliable real-time monitoring solutions.'
    ],
    tags: ['Java', 'Spring Boot', 'Spark', 'Kafka', 'MongoDB', 'REST APIs']
  },
];

const Home = ({ onViewArchive = () => {} }) => {
  const sectionRefs = useRef([]);
  const rightPanelRef = useRef(null);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const [isDesktopLayout, setIsDesktopLayout] = useState(() => (typeof window !== 'undefined' ? window.innerWidth > 900 : false));

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleResize = () => {
      setIsDesktopLayout(window.innerWidth > 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const panel = isDesktopLayout ? rightPanelRef.current : window;
    if (!panel) return undefined;

    let rafId = null;
    const updateSections = () => {
      rafId = null;
      const panelRect = panel === window ? { top: 0 } : panel.getBoundingClientRect();
      const panelHeight = panel === window ? window.innerHeight : panel.clientHeight;
      const focusLine = panelHeight * 0.35;

      sectionRefs.current.forEach(section => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const relativeTop = rect.top - panelRect.top;
        const relativeBottom = relativeTop + rect.height;

        if (relativeTop < panelHeight * 0.85) {
          section.classList.add('section-visible');
        }

        if (relativeTop <= focusLine && relativeBottom > focusLine) {
          setActiveSection(section.id);
        }
      });
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateSections);
    };

    updateSections();

    const target = panel === window ? window : panel;
    target.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      target.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isDesktopLayout]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...cursor };
    let rafId = null;

    const animate = () => {
      cursor.x += (target.x - cursor.x) * 0.12;
      cursor.y += (target.y - cursor.y) * 0.12;

      document.documentElement.style.setProperty('--cursor-x', `${cursor.x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${cursor.y}px`);

      rafId = requestAnimationFrame(animate);
    };

    const handlePointerMove = event => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    window.addEventListener('pointermove', handlePointerMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const setSectionRef = index => element => {
    sectionRefs.current[index] = element;
  };

  const handleNavClick = (event, sectionId) => {
    if (!isDesktopLayout) return;
    const panel = rightPanelRef.current;
    const targetSection = sectionRefs.current.find(section => section && section.id === sectionId);
    if (!panel || !targetSection) return;
    event.preventDefault();
    const targetTop = targetSection.offsetTop - 24;
    panel.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  return (
    <section className="home-grid">
      <aside className="left-panel">
        <div className="left-block">
          <div>
            <h1 className="hero-title">Sujan Nadiminti</h1>
            <p className="hero-subtitle">Software Engineer</p>
            <p className="hero-summary">2+ years experience building scalable software systems.</p>
            <div className="hero-photo">
              <img src={profilePhoto} alt="Sujan Nadiminti portrait" />
            </div>
          </div>

          <nav className="section-nav">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : undefined}
                onClick={event => handleNavClick(event, item.id)}
              >
                <span className="nav-marker" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="social-links">
          <a href="https://github.com/NadimintiSujan" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sujann21/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:nsujan2001@gmail.com">
            <FaEnvelope />
          </a>
          <a href={resumePdf} download className="resume-download">
            Resume
          </a>
        </div>
      </aside>

      <div className="right-panel" ref={rightPanelRef}>
        <section id="about" ref={setSectionRef(0)} className="content-section reveal-section">
          <p className="eyebrow">ABOUT</p>
          <h2>Software Engineer</h2>
          <p>
            I build reliable, high-performance systems across healthcare, cloud platforms, 
            and machine learning. My work centers on distributed backend engineering and data-intensive 
            workflows, optimizing APIs, scaling microservices, optimizing databases and cloud pipelines so products feel fast, stable, 
            and effortless.
          </p>
          <p>
            I’ve designed systems using Java, Python, Spring Boot, AWS, PostgreSQL, React.js, and Machine Learning, consistently improving latency, 
            throughput, and development efficiency. I thrive in cross-functional environments to turn ambiguous requirements into polished, 
            production-ready features.
          </p>
        </section>

        <section id="education" ref={setSectionRef(1)} className="content-section reveal-section">
          <p className="eyebrow">EDUCATION</p>
          {education.map(school => (
            <article key={school.school} className="education-card">
              <div className="education-logo-wrapper">
                <img src={school.logo} alt={`${school.school} logo`} />
              </div>
              <div>
                <h3>{school.school}</h3>
                <p className="education-degree">{school.degree}</p>
              </div>
              <div className="education-meta">
                <span>{school.time}</span>
              </div>
              <ul>
                {school.highlights.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="experience" ref={setSectionRef(2)} className="content-section reveal-section">
          <p className="eyebrow">EXPERIENCE</p>
          {experience.map(role => (
            <article key={`${role.company}-${role.role}`} className="experience-card">
              <header className="experience-card-header">
                <h3>{role.role}</h3>
                <span className="experience-duration">{role.time}</span>
              </header>
              <p className="experience-company">{role.company}</p>
              <div className="experience-divider" />
              <p className="experience-summary">{role.summary}</p>
              <ul className="experience-list">
                {role.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="experience-skills-row">
                <span className="experience-skills-label">Skills</span>
                <div className="experience-skills tag-row">
                  {role.tags.map(tag => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" ref={setSectionRef(3)} className="content-section reveal-section">
          <p className="eyebrow">PROJECTS</p>
          <div className="project-grid">
            {projects.slice(0, 4).map(project => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div className="project-card-header">
                  <h3>
                    {project.name}
                    <span className="project-arrow">↗</span>
                  </h3>
                </div>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="project-archive">
            <button type="button" onClick={onViewArchive}>
              View Full Project Archive ↗
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
