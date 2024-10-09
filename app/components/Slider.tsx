'use client';

import React, { useState } from 'react';
import { StaticImageData } from 'next/image';

interface CarouselProps {
  images: (string | StaticImageData)[];
  descriptions: string[];
}

const Slider: React.FC<CarouselProps> = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    const index = Math.round((value / 100) * (images.length - 1));
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative inline-block rounded-background">
        <div className="overflow-hidden rounded-lg">
          <img
            src={typeof images[currentIndex] === 'string' ? images[currentIndex] : images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className="w-full transition-transform duration-500 rounded-xl border-2 border-stone-700 relative z-10"
          />
        </div>
      </div>

      <div className='mt-12 w-full max-w-md'>
        <input
          type="range"
          min="0"
          max="100"
          value={currentIndex * (100 / (images.length - 1))}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>

      <div className="relative text-white text-center z-30 border-2 rounded-lg p-2 mt-4 bg-black">
        <p>{descriptions[currentIndex]}</p>
      </div>
    </div>
  );
};

export default Slider;