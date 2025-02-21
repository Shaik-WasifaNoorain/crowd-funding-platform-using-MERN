import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <div className="project-list">
      <ProjectCard title="Space Exploration" description="Help fund space missions!" />
      <ProjectCard title="Eco-Friendly Products" description="Support eco-conscious businesses." />
      {/* Add more ProjectCards as needed */}
    </div>
  );
};

export default ProjectList;
