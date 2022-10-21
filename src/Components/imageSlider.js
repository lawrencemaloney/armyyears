// import userEvent from '@testing-library/user-event';
import React, {useState, useEffect, useRef } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineCloseSquare } from "react-icons/ai";



const ImageSlider = ({ setSelectedImg, selectedImg,  filteredImages }) => {

  const imageIndex = (element) => element.url === selectedImg;
  const imageLoc  = filteredImages.findIndex(imageIndex);
  const imgArrayLen  = filteredImages.length;
  const [currentIndex, setCurrentIndex] = useState(imageLoc);

  const handleClick = () => {
    setSelectedImg(null);
  }

  // const expandImage = () => {
  //   {
  //     setImageAnchor('<a href={filteredImages[currentIndex].url} target="_blank"></a>')
      
  // }

  const goToPrevious = () =>{
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex -1);
    } else {
     setCurrentIndex(imgArrayLen-1);     
    }
    }
    
    const goToNext = () =>{
      if(currentIndex < imgArrayLen-1) {
        setCurrentIndex(currentIndex+1);
      } else {
        setCurrentIndex(0)
      }
    }

  return (
    <>
    <div className="backdrop z-[21] fixed  w-[100%] h-[100%] bg-black overflow-hidden	 justify-center items-center inset-0 " >
    {/* <div className="backdrop z-[21] fixed top-0 left-0 w-[100%] h-[100%] bg-[#bdb9af]   " > */}
    <AiOutlineCloseSquare className='absolute text-white  top-6 cursor-pointer right-[30px]  mx-auto h-[62px] w-[62px]' onClick={handleClick}/>

    
      <div className=" mx-auto text-white object-center  object-contain  static  grid  grid-cols-6 gap-4">

        <img className=" m-auto h-screen col-start-1 col-span-4 object-contain 	 " src={filteredImages[currentIndex].url} alt={filteredImages[currentIndex].caption} />
        
      <div className="col-start-5 col-span-2  mt-40 w-[200px]">
          <h1 className='ml-[30px]  mt-2 z-[19] w-[400px]  text-[34px]'>{filteredImages[currentIndex].caption}</h1> 

            
          <div className="flex flex-row fixed top-[520px] items-center ">
            <AiOutlineCaretLeft className=' z-[19] text-white  h-[54px] w-[54px] cursor-pointer' onClick={goToPrevious}/>  

            <p className='justify-items-center text-center m-1 text-xl'>Slide {currentIndex+1} of {imgArrayLen} </p>


            <AiOutlineCaretRight className=' z-[19] text-white   h-[54PX] w-[54px] cursor-pointer' onClick={goToNext}/>

            <p className='justify-items-center text-center  text-xl'>in  <span className='uppercase'>{filteredImages[currentIndex].group}</span></p>
          </div>

      </div>


      </div>

    </div>
    </>
  )
}

export default ImageSlider