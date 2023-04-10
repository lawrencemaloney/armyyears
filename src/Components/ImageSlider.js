// import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiOutlineCloseSquare,
} from "react-icons/ai";

const ImageSlider = ({ setSelectedImg, selectedImg, filteredImages }) => {
  const imageIndex = (element) => element.url === selectedImg;
  const imageLoc = filteredImages.findIndex(imageIndex);
  const imgArrayLen = filteredImages.length;
  const [currentIndex, setCurrentIndex] = useState(imageLoc);

  const handleClick = () => {
    setSelectedImg(null);
  };

  // const expandImage = () => {
  //   {
  //     setImageAnchor('<a href={filteredImages[currentIndex].url} target="_blank"></a>')

  // }
  // const inputRef = useRef();

  useEffect(() => {
    document.body.addEventListener("keydown", onKeydown);
    return () => {
      document.body.removeEventListener("keydown", onKeydown);
    };
  }, []);

  function onKeydown(event) {
    const isLeft = event.key === "ArrowLeft";
    const isRight = event.key === "ArrowRight";

    if (isLeft) {
      console.log("left");
      // {goToPrevious};
    }
    if (isRight) {
      console.log("right");
    }

    console.log("Event = ", event);
  }

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imgArrayLen - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < imgArrayLen - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <div className="backdrop fixed inset-0   z-[21] h-full items-center	justify-center overflow-auto bg-black ">
        {/* <div className="backdrop z-[21] fixed top-0 left-0 w-[100%] h-[100%] bg-[#bdb9af]   " > */}

        <div className="  static w-[100vw] object-contain object-center  text-white    ">
          <h1 className=" fixed top-[28%] mx-3 max-w-[10ch]  text-[30px]">
            {filteredImages[currentIndex].caption}
          </h1>

          <img
            className="  border-grey fixed top-[50px] left-[50%]  my-5 h-[85vh]  -translate-x-[50%] border border-[3px]  border-double	 object-contain "
            src={filteredImages[currentIndex].url}
            alt={filteredImages[currentIndex].caption}
          />

          <div className="flex h-[3rem]   flex-col  ">
            <div className="fixed top-[38%] right-[25px] mx-2  my-5 flex ">
              <AiOutlineCaretLeft
                className="  h-[28px]   w-[24px] cursor-pointer text-white"
                onClick={goToPrevious}
              />

              <p className="  text-center text-[10px] text-xl">
                {currentIndex + 1} of {imgArrayLen}{" "}
              </p>

              <AiOutlineCaretRight
                className=" h-[28px]   w-[24px] cursor-pointer text-white"
                onClick={goToNext}
              />
            </div>

            <AiOutlineCloseSquare
              className="closeslider  fixed top-0 right-[30px]  m-[20px]   h-[36px]  w-[36px]  cursor-pointer text-white"
              onClick={handleClick}
            />
          </div>

          {/* <div className=" w-[200px] "> */}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
