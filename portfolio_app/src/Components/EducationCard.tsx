// components/EducationCard.tsx
import React from 'react';

interface EducationCardProps {
  iconSrc: string;
  school: string;
  degree: string;
  year: string;
  description: string;
  statements: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({ iconSrc, school, degree, year, description, statements }) => {
  return (
    <div className="flex items-start bg-white shadow-md rounded-lg p-6 mb-4">
      <img src={iconSrc} alt={`${school} logo`} className="w-16 h-16 mr-4" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{school}</h2>
        <p className="text-xl text-gray-700">{degree}</p>
        <p className="text-gray-500">{year}</p>
        <p className="mt-4">{description}</p>
        <ul className="list-disc list-inside mt-2">
          {statements.map((statement, index) => (
            <li key={index} className="text-gray-700">{statement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
