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

      <div className='fixed top-0 left-0 right-0 m-0 h-[220px] w-[100vw] md:ml-[2vw] bg-amber-50  justify-center border-b	border-black  md:ml-[1vw] z-[100] md:w-[95vw]  lg:h-[210px] lg:space-x-36 flex text-center'>
        <img
          className=' hidden w-[80px] h-[86px]  absolute left-16 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />

        <h1 className=' text-[38px] mt-5 absolute right-[50%] translate-x-[50%] flex-col w-[100%]  xl:text-[56px] '>
          A Soldier in Berlin <p className='text-[36px] mt-[15px]'>1969 to 1972</p>
        </h1>
        <img
          className='hidden w-[80px] h-[86px] lg:flex  absolute right-16 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />

          <div className="  absolute top-[200px] md:right-16 md:top-12  cursor-pointer z-100 lg:hidden	 ">

          <AiOutlineMenu className="h-[42px] w-[42px]"  onClick={showMenu}>
          </AiOutlineMenu>
          </div>
      </div>



      <MenuItems showMenu={showMenu} active={active}/>


    <div className='fixed  top-[210px] left-0 right-0 m-0 bg-[#fdf5e6]    '>

    <nav>
        <ul className='hidden h-[55px]  fixed  border w-[95vw] ml-[2.5vw] border-black gap-x-1 space-x-10 p-[2px] bg-amber-50 text-[22px]  italic justify-center z-[1000] items-center lg:flex lg:text-[26px]'>


          <li className=' hover:text-black   hover:scale-[1.25]'>
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


    </div>
    </>
  );
}

export default Header;
