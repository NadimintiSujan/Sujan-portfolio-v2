import React from 'react';
import '../components/Archive.css';
import projects from '../data/projects';

const ProjectArchive = ({ onBack = () => {} }) => {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <section className="archive-wrapper">
      <button type="button" className="archive-back" onClick={onBack}>
        ← Back
      </button>
      <h1>All Projects</h1>
      <p className="archive-intro">A chronological list with quick links to every project.</p>

      <div className="archive-table">
        <div className="archive-header">
          <span>Year</span>
          <span>Project</span>
          <span>Details</span>
        </div>
        {sortedProjects.map(project => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="archive-row"
          >
            <span className="archive-year">{project.year}</span>
            <div className="archive-title">
              <span>{project.name}</span>
            </div>
            <div className="archive-details">
              <p>{project.description}</p>
              <div className="archive-tags">
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="archive-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectArchive;
