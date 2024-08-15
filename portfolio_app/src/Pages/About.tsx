import React, { useEffect, useRef } from 'react';
import { Img } from 'react-image';
import { gsap } from 'gsap';
import EducationCard from "../Components/EducationCard";
import JourneyCarousel from "../Components/Carousal";
import SkillsSection from "../Components/SkillsSection";

// TypeScript interfaces for props (optional, if you're using TypeScript)
interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

interface ContentItemProps {
  title: string;
  children: React.ReactNode;
}

export default function AboutMe() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(overlayRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  const journeyDetails = [
    {
      imgSrc: '/assets/images/dummy.jpg',
      description: 'Journey',
      statements: [
        "From the first time I wrote a line of code to today, my journey has been fueled by curiosity and a relentless desire to learn. With a Bachelor’s degree in Computer Science and a Master’s in progress, I've delved deep into the realms of front-end and back-end development, constantly pushing the boundaries of what’s possible.",
      ],
    },
    {
      imgSrc: '/assets/images/dummy2.jpg',
      description: 'My Mission',
      statements: [
        "My mission is to build software that not only meets today’s needs but also anticipates the challenges of tomorrow. Whether it’s creating user-friendly web applications or designing scalable backend systems, I’m committed to delivering solutions that are both innovative and impactful.",
      ],
    },
  ];

  const educationDetails = [
    {
      iconSrc: '/assets/images/vit.png',
      school: 'VELLORE INSTITUTE OF TECHNOLOGY',
      degree: 'Master Of Computer Application',
      year: '2023 - 2025',
      description: '',
      statements: [],
    },
    {
      iconSrc: '/assets/images/KMG.jpeg',
      school: 'K.M.G. COLLEGE OF ARTS AND SCIENCE',
      degree: 'Bachelor Of Computer Science',
      year: '2020 - 2023',
      description: '',
      statements: [],
    },
    {
      iconSrc: '/assets/images/vidnik.jpg',
      school: 'VIDYANIKETAN',
      degree: 'HSC',
      year: '2018 - 2020',
      description: '',
      statements: [],
    },
    {
      iconSrc: '/assets/images/bmd.jpg',
      school: 'B.M.D JAIN SCHOOL',
      degree: 'ICSE',
      year: '2005 - 2018',
      description: '',
      statements: [],
    },
  ];

  return (
    <section className="relative bg-gray-100 p-8 pt-16">
      <div className="relative z-10 max-w-8xl mx-auto">
        <div className="relative w-full" style={{ height: "80vh" }}>
          <Img
            src="/assets/images/my_img.jpg"
            alt="Madhan Kumar"
            className="rounded-lg"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 36%" }}
          />
          <div
            ref={overlayRef}
            className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-100 bg-black bg-opacity-40 z-20"
          >
            <h2 className="text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Hi, I&apos;m Madhan Kumar. A passionate individual who believes that code is not just a tool but a medium to craft solutions that make a difference. With a solid foundation in Computer Science and a keen eye for detail, I have honed my skills to turn ideas into digital realities.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">My Education</h1>
        {educationDetails.map((edu, index) => (
          <EducationCard
            key={index}
            iconSrc={edu.iconSrc}
            school={edu.school}
            degree={edu.degree}
            year={edu.year}
            description={edu.description}
            statements={edu.statements}
          />
        ))}
      </div>
      <div className="container mx-auto p-4">
        <JourneyCarousel items={journeyDetails} />
        <ContentSection title="What Drives Me">
          <ul className="list-disc list-inside space-y-4">
            <ContentItem title="Innovation">
              I thrive on creating solutions that are not only functional but also innovative. I&apos;m driven by the challenge of turning complex problems into elegant solutions.
            </ContentItem>
            <ContentItem title="Collaboration">
              I believe that the best ideas emerge when great minds come together. My experience working with cross-functional teams has taught me the power of collaboration and the importance of clear communication.
            </ContentItem>
            <ContentItem title="Continuous Learning">
              The tech world evolves rapidly, and so do I. From mastering new programming languages to exploring cutting-edge frameworks, I&apos;m always on the lookout for the next big thing to add to my skill set.
            </ContentItem>
          </ul>
        </ContentSection>
        <SkillsSection />
        <ContentSection title="Beyond the Code">
          When I&apos;m not coding, you&apos;ll find me exploring the latest trends in technology, mentoring fellow developers, or perhaps enjoying a good book on AI and machine learning. I&apos;m always open to new experiences and challenges, believing that the best way to grow is by stepping out of my comfort zone.
        </ContentSection>
        <ContentSection title="Let&apos;s Connect">
          I&apos;m excited about the possibilities of the future and the opportunities to collaborate with like-minded individuals. Let&apos;s connect and create something amazing together!
        </ContentSection>
      </div>
    </section>
  );
}

// ContentSection Component
function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="mb-6 leading-relaxed">{children}</p>
    </div>
  );
}

// ContentItem Component
function ContentItem({ title, children }: ContentItemProps) {
  return (
    <li>
      <span className="text-xl font-semibold">{title}:</span>
      <p className="ml-6 leading-relaxed">{children}</p>
    </li>
  );
}
