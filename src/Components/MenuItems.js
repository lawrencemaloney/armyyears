import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function MenuItems({showHideMenu, active}) {
  return (
    <>

        <ul className={active ?'absolute left-1/2 -translate-x-1/2  fixed z-20 top-[325px] w-[18ch] h-[25rem] flex-col  bg-zinc-700/90 text-left	rounded  text-[32px] 	lg:hidden ' : 'hidden' }>

          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/Home'>Home</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/Training'>Training</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/PhotoJ'>Photo Journalism</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] 	 text-white m-4  '>
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