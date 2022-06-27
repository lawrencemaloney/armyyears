import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className='fixed z-20 top-0 left-0 right-0 m-0 bg-[#fdf5e6]    '>
      <div className=' justify-center  h-[135px] w-[98vw] items-center flex ml-[1vw] '>
        <img
          className=' w-[45px] h-[46px] mx-10 md:w-[60px] md:h-[62px] md:mx-20 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />

        <h1 className=' text-2xl md:text-3xl text-center lg:text-[42px] lg:mx-20 mt-5'>
          A Soldier in Berlin <p className='text-[36px]'>1969 to 1972</p>
        </h1>
        <img
          className=' w-[45px] h-[46px] mx-10 md:w-[60px] md:h-[62px] md:mx-20 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
