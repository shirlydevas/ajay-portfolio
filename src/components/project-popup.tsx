'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const ProjectPopup = ({ closeProjectPopup } : { closeProjectPopup : any}) => {
  const [curSlide, setCurSlide] = useState(0);
  const [slides, setSlides] = useState<Element[]>([]);
  

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    setSlides(Array.from(slides));
  }, []);

  const maxSlide = slides.length - 1;

  const nextSlide = () => {
    if (curSlide === maxSlide) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(maxSlide);
    } else {
      setCurSlide(curSlide - 1);
    }
  };

  const content = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is the first project',
      image: 'https://source.unsplash.com/random?landscape,image1'
    },
    {
      id: 2,
      title: 'Project 1',
      description: 'This is the first project',
      image: 'https://source.unsplash.com/random?landscape,image2'
    }
  ];

  return (
    <div className='fixed left-0 top-0 w-full h-full z-20 bg-[rgba(0,0,0,0.8)]'>
      <div className='block m-auto opacity-[1] bg-[#121212] rounded-lg py-32 px-10 h-[100vh] backdrop-blur-[8px]'>
        <div className='flex gap-5'>
          <div className="w-full max-w-[900px] max-h-[500px] relative overflow-hidden rounded-2xl">
            {content.map((slide, indx) => {
              const translateX = 100 * (indx - curSlide);
              return (
                <div
                  key={indx}
                  className="slide w-full max-w-[900px] max-h-[500px] absolute transition-all"
                  style={{ transform: `translateX(${translateX}%)`, transition: 'transform 0.5s' }}
                >
                  <img src={`https://source.unsplash.com/random?landscape,image${slide.id}`} alt="" className="w-full h-full object-cover" />
                </div>
              );
            })}
            <button className="carousel-btn top-[45%] left-[2%]" onClick={prevSlide}>
              <ChevronLeft />
            </button>
            <button className="carousel-btn top-[45%] right-[2%]" onClick={nextSlide}>
              <ChevronRight />
            </button>
          </div>

          <div className='w-[40%] rounded-lg p-3 bg-[#171717] border-[#232323] text-white max-h-[500px]'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='px-5 py-4 rounded-lg bg-[#1f1f1f] border-[#232323] w-[70%]'>Project</h3>
              <div className='w-[13%] py-4 px-5 rounded-lg bg-[#1f1f1f] border-[#232323]'>

                <SquareArrowOutUpRight />
              </div>
              <div className='w-[13%] py-4 px-5 rounded-lg bg-[#1f1f1f] border-[#232323]'>

                <X onClick={closeProjectPopup} />
              </div>
            </div>
            <div className='px-5 py-4 rounded-lg bg-[#1f1f1f] border-[#232323] flex gap-14 mb-4'>
              <div>
                <span className='mb-2 block'>Company</span>
                <h5 className='capitalize'>Test</h5>
              </div>
              <div>
                <span className='mb-2 block'>Year</span>
                <h5>2020</h5>
              </div>
            </div>
            <ScrollArea className='overflow-auto max-h-[280px]'>
              <div className='px-5 py-4 rounded-lg bg-[#1f1f1f] border-[#232323]'>
                <div>
                  <span className='mb-2 block'>Overview</span>
                  <p>In 2018, my team at Zello helped Rio de Janeiro's Botanical Garden lead its digital transformation. Visitors sought more information, and the garden's administration invested significantly in printed materials despite comparisons to other Rio tourist spots with dedicated mobile apps.</p>
                </div>
                <div>
                  <span className='mb-2 block'>My Contribution</span>
                  <ul>
                    <li>Conceptualized and designed a multilingual visitor companion mobile app for iOS and Android platforms.</li>
                    <li>Delivered essential information, interactive garden trails, and points of interest, enriched with 360º panoramic views.</li>
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;


