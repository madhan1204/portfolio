import React from 'react';
import ProjectCard from '../Components/ProjectCard';

const projectData = [
  {
    title: 'NGO App',
    description: "A Web Application for an NGO",
    imageUrl: '/assets/images/ngo.png', // Update with your image path
    projectLink: 'https://ngo-app-tau.vercel.app/',
    githubLink: 'https://github.com/madhan1204/NgoApp',
    screenshots: ['/assets/images/ngo_projects.png', '/assets/images/ngo_contact.png', '/assets/images/ngo_volunteer.png'], // Update with your screenshot paths
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  // Add more project objects here
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              screenshots={project.screenshots}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
