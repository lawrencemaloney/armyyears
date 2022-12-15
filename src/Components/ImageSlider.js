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


    <div className="backdrop z-[21] fixed   h-full bg-black overflow-auto	justify-center items-center inset-0 " >
    {/* <div className="backdrop z-[21] fixed top-0 left-0 w-[100%] h-[100%] bg-[#bdb9af]   " > */}

      <div className="  text-white object-center w-[100vw] object-contain  static    ">

      <h1 className=' fixed top-[28%] max-w-[10ch] mx-3  text-[30px]'>{filteredImages[currentIndex].caption}</h1>

        <img className="  h-[85vh] border border-[3px] border-grey  fixed top-[50px]  border-double my-5  left-[50%] translate-x-[-50%]	 object-contain " src={filteredImages[currentIndex].url} alt={filteredImages[currentIndex].caption} />

        <div className="flex flex-col   h-[3rem]  ">
          <div className='flex fixed top-[38%] right-[25px]  mx-2 my-5 '>
          <AiOutlineCaretLeft className='  text-white   h-[28px] w-[24px] cursor-pointer' onClick={goToPrevious}/>  

            <p className='  text-[10px] text-center text-xl'>{currentIndex+1} of {imgArrayLen} </p>

            <AiOutlineCaretRight className=' text-white   h-[28px] w-[24px] cursor-pointer' onClick={goToNext}/>
            </div>



            <AiOutlineCloseSquare className='closeslider  m-[20px] fixed top-0  right-[30px]   text-white  cursor-pointer  h-[36px] w-[36px]' onClick={handleClick}/>
            
      </div>
        
      {/* <div className=" w-[200px] "> */}
            


      {/* </div> */}


    </div>
    </div>
    </>
  )
}

export default ImageSlider
