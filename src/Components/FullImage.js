import React, {useState} from 'react';
import imageRef from '../imagedata.json'
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineCloseSquare } from "react-icons/ai";
import { MdOutlineFullscreen } from "react-icons/md";
import '../Components/MyPhotos.css';



function FullImage(setSelectedImg, selectedImg, imageCaption) {

    // const handleClick = () => {
    //     setSelectedImg(null);
    // }
    

    console.log("Selected image =", selectedImg)
    console.log("Selected image caption=", imageCaption)

  return (
    <>
    <div className="backdrop z-[21] fixed  w-[100%] h-[100%] bg-black overflow-scroll justify-center items-center inset-0 " >
    {/* <div className="backdrop z-[21] fixed top-0 left-0 w-[100%] h-[100%] bg-[#bdb9af]   " > */}
    {/* <AiOutlineCloseSquare className='absolute text-white  top-4 cursor-pointer right-10  mx-auto h-[36px] w-[36px]' onClick={handleClick}/> */}
					<img className="imagelarge" src={selectedImg} alt={imageCaption} />
    </div>

        

  
  </>
)
}

export default FullImage