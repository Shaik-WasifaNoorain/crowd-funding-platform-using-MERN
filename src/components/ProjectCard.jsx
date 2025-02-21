import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Support this Project</button>
    </div>
  );
};

export default ProjectCard;
