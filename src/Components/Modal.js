import React, { useState } from "react";

const Modal = ({ setSelectedImg, selectedImg, imageAlt }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <>
      <div
        className="backdrop static fixed top-0 left-0 h-[100%] w-[100%] bg-[#bdb9af]    "
        onClick={handleClick}
      >
        {/* <div className=" text-black   text-[45px] ">    */}
        {/* <div className="flex flex-col mx-[50%] translate-x-[-50%]   text-white h-[95%] w-[68%] overflow-scroll  ">  */}
        <h1 className="m-auto text-[34px]">{imageAlt}</h1>

        <img
          className=" max-h-[450px] w-[700px]	 overflow-scroll object-contain object-center	 drop-shadow-lg     "
          src={selectedImg}
          alt={imageAlt}
        />
      </div>
      {/* </div>   */}
      {/* </div> */}
    </>
  );
};

export default Modal;
