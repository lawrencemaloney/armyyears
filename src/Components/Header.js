import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useMatch, useResolvedPath } from "react-router-dom"


import MenuItems from "./MenuItems";import React, { useState } from "react";



export default function Header() {
  const [active, setActive] = useState(false);
  const showHideMenu = () => {
    setActive(!active);


  };

  return (
    <>

      <div className='fixed top-0 left-0 right-0 m-0 h-[230px] w-[100vw] md:ml-[2vw] bg-amber-50  justify-center border-b	md:border-none border-black  md:ml-[1vw] z-[100] md:w-[95vw]  lg:h-[210px] lg:space-x-36 flex text-center'>
        {/* <img
          className='  w-[50px] h-[53px]  absolute left-26 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        /> */}
        {/* <img
          className=' hidden w-[80px] h-[86px] lg:flex absolute left-16 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        /> */}

        <h1 className=' text-[38px] mt-5 absolute right-[50%] translate-x-[50%] flex-col w-[100%]  xl:text-[56px] '>
          A Soldier in Berlin <p className='text-[36px] mt-[15px]'>1969 to 1972</p>
        </h1>
        {/* <img
          className='hidden w-[80px] h-[86px] lg:flex  absolute right-16 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        /> */}

          <div className="  absolute top-[170px] md:right-16 md:top-12  cursor-pointer z-100 lg:hidden	 ">

          <AiOutlineMenu className="h-[32px] w-[32px]"  onClick={showHideMenu}>
          </AiOutlineMenu>
          </div>
      </div>



      <MenuItems showHideMenu={showHideMenu} active={active}/>


    <div className=' nav fixed  top-[210px] left-0 right-0 m-0 bg-[#fdf5e6]    '>

    <nav>
        <ul className='hidden h-[55px]  fixed  border w-[95vw] ml-[2.5vw] border-black gap-x-1 space-x-10 p-[2px] bg-amber-50 text-[22px]  italic justify-center z-[1000] items-center lg:flex lg:text-[26px]'>


          <li className=' hover:text-black hover:scale-[1.25] '>
            <CustomLink to='/Home'>Home</CustomLink>
            {/* <Link to='/Home'>Home</Link> */}
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <CustomLink to='/Training'>Training</CustomLink>
          </li>

          <li className=' hover:text-black  hover:scale-[1.25]'>
            <CustomLink to='/InBerlin'>In Berlin</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <CustomLink to='/PhotoJ'>Photo Journalism</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <CustomLink to='/Archives'>Archives</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.25]'>
            <CustomLink to='/About'>About</CustomLink>
          </li>
        </ul>

      </nav>


    </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? " scale-[1.25] 	text-red-700" : "text-black	  hover:scale-[1.25]"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}