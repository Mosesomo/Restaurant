import { useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Gallary = () => {
  const gallery = [
    {
      url: 'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery01.png?raw=true',
    },
    {
      url: 'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery02.png?raw=true',
    },
    {
      url: 'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery03.png?raw=true',
    },
    {
      url: 'https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/gallery04.png?raw=true',
    }
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () =>{
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? gallery.length - 1 : index - 1;
    setIndex(newIndex);
  };
  
  const nextSlide =() => {
    const isLastSlide = index === gallery.length - 1 ;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  }

   const goToSlide = (slideIndex) =>{
      setIndex(slideIndex);
   }

  return (
    <div className='w-[100%] p-9 mt-8 lg:flex justify-between items-center bg-black'>
      <div className='w-[100%] font-[italic] mb-4'>
        <h4 className='text-xl'>Instagram</h4>
        <img className='mb-4' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt=""></img>
        <h2 className='text-5xl text-yellow-100 font-semibold mb-7'>Photo  Gallery</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora tenetur reprehenderit nemo accusantium fugit, repudiandae dolorem.</p>
        <button className='bg-white p-3 text-black font-semibold mt-4 hover:bg-yellow-400 hover:scale-105 ease-in-out duration-300 rounded-sm'>View More</button>
      </div> 
      <div className='w-[100%] relative h-[300px]'>
        <div style={{backgroundImage: `url(${gallery[index].url})`}} className='w-[100%] h-full rounded-2xl bg-center bg-cover duration-500 hover:opacity-30'></div>
        <AiOutlineInstagram size={30} className='absolute top-[50%] left-[50%]'/>
        <div className='absolute  top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-black/70 cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} />
        </div>
        <div className=' absolute  top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-black/70 cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide}/>
        </div>
        <div className='flex top-4 py-2 justify-center'>
          {gallery.map((slide, slideIndex)=>(
            <div 
            key={slideIndex} onClick={() => goToSlide(slideIndex)} className='cursor-pointer hover:text-gray-600'>
              <RxDotFilled size={30}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallary