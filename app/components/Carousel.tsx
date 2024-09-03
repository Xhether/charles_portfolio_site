'use client';


import { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface CarouselProps {
  images: (string | StaticImageData)[];
  descriptions: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const slide = (index: number) => {
    setCurrentIndex(index);
    setActiveButton(index);
    console.log(`Button ${index} clicked, activeButton: ${activeButton}`);
  };

  return (
    <div className=" flex flex-col items-center mx-auto">
      <div className="relative inline-block rounded-background ">
        <div className="overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={typeof image === 'string' ? image : image.src}
              alt={`Slide ${index}`}
              className={`w-full transition-transform duration-500 rounded-xl border-2 border-stone-700  relative z-10 ${index === currentIndex ? 'block' : 'hidden'}`}
            />
          ))}
        </div>
      </div>



      <div className=' flex flex-row ml-2 mt-12 items-center '>
        <button
          onClick={() => slide(0)}
          style={{ backgroundColor: activeButton === 0 ? 'black' : 'white' }}
          className=" z-20 w-10 h-10 rounded-full border-4 border-black mr-12 ml-2 "></button>
        <button
          onClick={() => slide(1)}
          style={{ backgroundColor: activeButton === 1 ? 'black' : 'white' }}
          className="z-20 w-10 h-10 rounded-full border-4 border-black mr-12 ml-2 ${activeButton === 1 ? 'bg-black' : 'bg-indigo-800'}"></button>
        <div className="relative text-white text-center z-30 border-2 rounded-lg p-2 mr-8 bg-black ">
          <p>{descriptions[currentIndex]}</p>
        </div>
        <button
          onClick={() => slide(2)}
          style={{ backgroundColor: activeButton === 2 ? 'black' : 'white' }}
          className="z-20 w-10 h-10 rounded-full border-4 border-black mr-12 ml-2 ${activeButton === 2 ? 'bg-black' : 'bg-black'}"></button>
        <button
          onClick={() => slide(3)}
          style={{ backgroundColor: activeButton === 3 ? 'black' : 'white' }}
          className="z-20 w-10 h-10 rounded-full border-4 border-black mr-12 ml-2 ${activeButton === 3 ? 'bg-black' : 'bg-black'}"></button>
      </div>

    </div>
  );
};

export default Carousel;