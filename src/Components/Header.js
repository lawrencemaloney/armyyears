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

      <div className=' top-0 left-0 right-0 m-0 h-[230px] w-[100vw] md:ml-[2vw] bg-amber-50  justify-center border-b	sm:border-none border-black  sm:ml-[1vw] z-[100]  sm:h-[186px] lg:space-x-36 flex text-center'>
 
        <img
          className='  hidden sm:w-[50px] sm:h-[53px] sm:flex absolute left-16 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />

        <h1 className=' text-4xl mt-5 absolute right-[50%] translate-x-[50%] flex-col w-[100%]  xl:text-[56px] '>
          A Soldier in Berlin <p className='text-[36px] mt-[0px]'>1969 to 1972</p>
        </h1>

        <img
          className='  hidden sm:w-[50px] sm:h-[53px] sm:flex absolute right-16 sm:top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />
          <div className="    sm:hidden top-[170px] sm:right-16 sm:top-12  cursor-pointer z-100 	 ">

          <AiOutlineMenu className="fixed left-5 top-5 h-[32px] w-[32px]"  onClick={showHideMenu}>
          </AiOutlineMenu>
          </div>
      </div>



      <MenuItems showHideMenu={showHideMenu} active={active}/>


    <div className=' sticky  top-0 left-0 right-0 m-0 bg-[#fdf5e6]    '>

    <nav>
        <ul className='hidden h-[55px]  border w-[100vw]  border-black sm:gap-x-0 sm:space-x-6 p-[2px] lg:gap-x-6 lg:space-x-12 p-[2px] bg-amber-50 text-[18px] lg:text-[24px] italic justify-center z-[1000] items-center sm:flex '>


          <li className=' hover:text-black hover:scale-[1.1] '>
            <CustomLink to='/Home'>My Story</CustomLink>
            {/* <Link to='/Home'>Home</Link> */}
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/Training'>Training</CustomLink>
          </li>

          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/InBerlin'>In Berlin</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/PhotoJ'>Photo Journalism</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/Archives'>Archives</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
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