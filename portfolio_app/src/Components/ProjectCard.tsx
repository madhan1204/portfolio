import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import ReactLogo from '/assets/images/logos/react.png';
import TypeScriptLogo from '/assets/images/logos/ts.png';
import TailwindLogo from '/assets/images/logos/tailwind.png';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  githubLink: string;
  screenshots: string[];
  techStack: string[];
}

const techIcons: { [key: string]: string } = {
  React: ReactLogo,
  TypeScript: TypeScriptLogo,
  'Tailwind CSS': TailwindLogo,
};


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectLink,
  githubLink,
  screenshots,
  techStack,
}) => {
  return (
    <div className="project-card bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="project-image w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700">
            GitHub
          </a>
        </div>
        {/* Optional: Carousel for screenshots */}
        {screenshots.length > 0 && (
          <div className="mt-4">
            <Carousel>
              {screenshots.map((screenshot, index) => (
                <div key={index}>
                  <img src={screenshot} alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        )}
        {/* Optional: Tech stack icons */}
        {techStack.length > 0 && (
          <div className="mt-4 flex space-x-2">
            {techStack.map((tech, index) => (
              <img
                key={index}
                src={techIcons[tech]} // Replace with actual path to tech stack icons
                alt={tech}
                className="w-6 h-6"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
