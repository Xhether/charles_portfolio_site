'use client';


import { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface CarouselProps {
  images: (string | StaticImageData)[];
  descriptions: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide1 = () => {
    setCurrentIndex((prevIndex) => (0));
  };
  const slide2 = () => {
    setCurrentIndex((prevIndex) => (1));
  };

  const slide3 = () => {
    setCurrentIndex((prevIndex) => (2));
  };

  const slide4 = () => {
    setCurrentIndex((prevIndex) => (3));
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
        <button onClick={slide1} className=" z-20 w-10 h-10 rounded-full bg-white border-4 border-black mr-12 ml-2 "></button>
        <button onClick={slide2} className=" z-20 w-10 h-10 rounded-full bg-white border-4 border-black mr-12 ml-2"></button>
        <div className="relative text-white text-center z-30 border-2 rounded-lg p-2 mr-8 bg-black ">
          <p>{descriptions[currentIndex]}</p>
        </div>
        <button onClick={slide3} className=" z-20 w-10 h-10 rounded-full bg-white border-4 border-black mr-12 ml-2"></button>
        <button onClick={slide4} className=" z-20 w-10 h-10 rounded-full bg-white border-4 border-black mr-12 ml-2"></button>
      </div>

    </div>
  );
};

export default Carousel;