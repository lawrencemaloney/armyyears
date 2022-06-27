import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { MenuOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <nav>
        <ul className='hidden md:flex border border-black gap-3 lg:gap-8 p-[2px] bg-white/10 text-[18px] lg:text-[22px]   italic justify-center '>
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
      </nav>
      <div className='flex md:hidden  absolute top-[130px]  flex-col right-[50%] translate-x-1/2 cursor-pointer  '>
        <AiOutlineMenu size={40} />
      </div>

      <div>
        <ul className=' md:hidden absolute top-[240px] flex flex-col left-[10%] translate-x-1/2 text-white bg-black/40 backdrop-blur-lg gap-8 uppercase p-8 justify-center   '>
          <li className=' hover:text-black  '>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/Training'>Training</Link>
          </li>
          <li>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li>
            <Link to='/PhotoJ'>Photo Journalism</Link>
          </li>
          <li>
            <Link to='/Archives'>Archives</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
