import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function MenuItems({showHideMenu, active}) {
  return (
    <>

        <ul className={active ?'fixed z-20 	left-[50%] transform -translate-x-[50%]  duration-500 ease-in w-screen	 h-[24rem] flex-col  bg-zinc-700/90 text-center	rounded-lg  text-[28px] 	lg:hidden ' : ' transform translate-x-[50%]  duration-500 ease-in text-[28px] w-[18ch] absolute left-[100%] text-center' }>

          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] 	 text-white m-4  '>
            <Link to='/Home'>My Story</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] 	 text-white m-4  '>
            <Link to='/Training'>Training</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] 	 text-white m-4  '>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] 	 text-white m-4  '>
            <Link to='/PhotoJ'>Photo Journalism</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] 	 text-white m-4  '>
            <Link to='/Archives'>Archives</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        </>
  )
}

export default MenuItems