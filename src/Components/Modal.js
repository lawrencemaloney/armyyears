import React from 'react';

const Modal = ({ setSelectedImg, selectedImg, imageAlt}) => {
    
    const handleClick = (e) => {
        console.log('in habdleclick');
        console.log("e = ", e )
        if (e.target.classList.contains('backdrop')) {
          setSelectedImg(null);
        }
      }
      return (

        <div className="backdrop fixed top-0 left-0 w-[100%] h-[100%] bg-black  " onClick={handleClick}>
           <div className="flex  text-white "> 
           <h1 className='m-auto text-[34px]'>{imageAlt}</h1>
          <img src={selectedImg} alt={imageAlt} className='block max-w-[70%] max-h-[80%] mx-[50%] my-[5%] translate-x-[-50%] 	'
          />
          </div>
        </div>

      )
    }


export default Modal;