import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className='fixed  top-0 left-0 right-0 m-0 w-[95vw] ml-[2vw] bg-amber-50 lg:h-[185px] w-[98vw] justify-center  ml-[1vw] z-[1000] lg:space-x-36 flex text-center'>
        <img
          className='hidden  w-[60px] h-[62px]  lg:block '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />

        <h1 className=' text-[38px] lg:text-[42px]  items-center max-w-[85vw] lg:max-w-[35vw] mt-5'>
          A Soldier in Berlin <p className='text-[36px] mt-[15px]'>1969 to 1972</p>
        </h1>
        <img
          className='hidden  w-[60px] h-[62px]  lg:block '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />
      </div>
    <div className='fixed z-1020 top-[135px] left-0 right-0 m-0 bg-[#fdf5e6]    '>

      <Navbar />

    </div>
    </>
  );
}

export default Header;
