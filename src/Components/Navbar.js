import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
// import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <nav>
      <div className="absolute left-[50%] top-[45px] -translate-x-1/2	-translate-y-1/2 ">
          <AiOutlineMenu className="h-[42px] w-[42px]"  onClick={showMenu}>
            </AiOutlineMenu>

    </div>

        <ul className='hidden h-[55px]  fixed top-[185px] border w-[95vw] ml-[2.5vw] border-black gap-x-1  p-[2px] bg-amber-50 text-[22px]  italic justify-center z-[1000] items-center lg:flex lg:text-[26px]'>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <Link to='/Home'>Home</Link>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <Link to='/Training'>Training</Link>
          </li>

          <li className=' hover:text-black  hover:scale-[1.25]'>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <Link to='/PhotoJ'>Photo Journalism</Link>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <Link to='/Archives'>Archives</Link>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active}/>
      </nav>


    
    </>
  );
};

export default Navbar;
