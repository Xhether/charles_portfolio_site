'use client';

import React, { useState } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

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
      {/* <div className="relative text-white text-center border-2 rounded-lg p-2 mt-4 bg-black">
        <p>{descriptions[currentIndex]}</p>
      </div> */}
      <div className="relative w-[600px] h-[400px]">
        <div className="overflow-hidden rounded-lg w-full h-full">
          <Image
            src={typeof images[currentIndex] === 'string'
              ? images[currentIndex] as string
              : (images[currentIndex] as StaticImageData).src}
            alt={`Slide ${currentIndex}`}
            fill
            className="object-cover rounded-3xl border-4 border-stone-700"
            priority
          />
        </div>
      </div>

      <div className='mt-4 w-[600px]'>
        <input
          type="range"
          min="0"
          max="100"
          value={currentIndex * (100 / (images.length - 1))}
          onChange={handleSliderChange}
          className="w-full h-8 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[120px] [&::-webkit-slider-thumb]:h-[30px] [&::-webkit-slider-thumb]:bg-[#74778F] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#FFE4E1] [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-[30px] [&::-moz-range-thumb]:h-[30px] [&::-moz-range-thumb]:bg-[#E6E6FA] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#FFE4E1] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
          style={{
            WebkitAppearance: 'none',
            background: 'linear-gradient(90deg, #FFE4E1, #E6E6FA)',
            borderRadius: '10px',
            border: '2px solid #E6E6FA'
          }}
        />
      </div>


    </div>
  );
};

export default Slider;

