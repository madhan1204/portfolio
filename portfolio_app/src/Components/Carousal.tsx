// components/Carousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


interface CarouselItem {
  imgSrc: string;
  description: string;
  statements: string[];
}

interface CarouselProps {
  items: CarouselItem[];
}

const JourneyCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
      {items.map((item, index) => (
        <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <img src={item.imgSrc} className="w-full h-64 object-cover object-[50%_30%] " />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-white text-lg font-bold">{item.description}</p>
              <ul>
                {item.statements.map((statement, idx) => (
                  <li key={idx} className="text-gray-200">{statement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default JourneyCarousel;
