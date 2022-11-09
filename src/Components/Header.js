import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import MenuItems from "./MenuItems";
import React, { useState } from "react";



export default function Header() {
  const [active, setActive] = useState(false);
  
  const showHideMenu = () => {
    setActive(!active);
  };

  return (
    <>

      <div className=' mx-auto h-[210px] w-[100vw] md:ml-[2vw] bg-amber-50 border border-black md:border-none  justify-center   lg:space-x-36 flex text-center z-20'>
 
        <img
          className='  hidden md:w-[50px] md:h-[53px] md:flex absolute left-16 top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
        />

        <h1 className=' text-4xl mt-10 absolute right-[50%] translate-x-[50%] flex-col w-[100%]  md:text-[56px] '>
          A Soldier in Berlin <p className='text-[36px] mt-[20px]'>1969 to 1972</p>
        </h1>

        <img
          className='  hidden md:w-[50px] md:h-[53px] md:flex absolute right-16 md:top-12 '
          src='images/6thINfnatryPin.gif'
          height={60}
          width={60}
          alt={"Pin"}
          />
    </div>

{/* 
    <div className='      '>
    </div> */}
    {/* <div className=" sm:sticky  sm:hidden  sm:right-16 sm:top-12  py-4 cursor-pointer border-black border-b  "> */}

    <AiOutlineMenu className="headermenu  absolute  top-2 right-2 h-[32px] w-[32px]  hover:scale-[1.2] cursor-pointer	 bg-#fffbeb md:hidden"  onClick={showHideMenu}>
    </AiOutlineMenu>
    <MenuItems showHideMenu={showHideMenu} active={active}/>

    {/* </div> */}
    


    <nav className=" z-[200] ">
        <ul className='hidden  h-[55px]  border w-[100vw]  border-black md:gap-x-0 md:space-x-6 p-[2px]  xl:space-x-12 p-[2px] bg-amber-50 text-[24px] xl:text-[30px] italic  justify-center  items-center md:flex '>


          <li className=' hover:text-black hover:scale-[1.1]  '>
            <CustomLink to='/Home'>My Story</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/Training'>Training</CustomLink>
          </li>

          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/InBerlin'>In Berlin</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/BOarticles'>My Journalism</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/MyPhotos'>My Photos</CustomLink>
          </li>

          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/Archives'>Archives</CustomLink>
          </li>
          <li className=' hover:text-black  hover:scale-[1.1]'>
            <CustomLink to='/About'>About</CustomLink>
          </li>
        </ul>

      </nav>


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