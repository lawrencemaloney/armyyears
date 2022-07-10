import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";import React, { useState } from "react";


function Header() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

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


    <div className='fixed  top-[135px] left-0 right-0 m-0 bg-[#fdf5e6]    '>

    <nav>
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


    </div>
    </>
  );
}

export default Header;
