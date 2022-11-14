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
    <div className="backdrop z-[21] fixed  w-[100%] h-screen bg-black overflow-scroll	 justify-center items-center inset-0 " >
    {/* <div className="backdrop z-[21] fixed top-0 left-0 w-[100%] h-[100%] bg-[#bdb9af]   " > */}
    <AiOutlineCloseSquare className='absolute text-white  top-6 cursor-pointer right-[30px]   h-[36px] w-[36px]' onClick={handleClick}/>
    <h1 className=' my-6  text-[24px]'>{filteredImages[currentIndex].caption}</h1> 

      <div className=" mx-auto text-white object-center  object-contain  static  flex-1 flex-col  ">
        <img className="  h-screen  object-contain m-auto " src={filteredImages[currentIndex].url} alt={filteredImages[currentIndex].caption} />
      </div>
        
      {/* <div className=" w-[200px] "> */}
            
          <div className="flex flex-row items-center ">
            <AiOutlineCaretLeft className=' z-[19] text-white   h-[24px] w-[24px] cursor-pointer' onClick={goToPrevious}/>  

            <p className='justify-items-center text-[10px] text-center m-1 text-xl'>{currentIndex+1} of {imgArrayLen} </p>
            <AiOutlineCaretRight className=' z-[19] text-white   h-[24px] w-[24px] cursor-pointer' onClick={goToNext}/>
          </div>

      {/* </div> */}



    </div>
    </>
  )
}

export default ImageSlider
