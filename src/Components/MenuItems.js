import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function MenuItems({showMenu, active}) {
  return (
    <>

        <ul className={active ?'fixed z-20 top-[225px] w-[22ch] h-[55vh] flex-col left-1/2 bg-zinc-700/90 text-center	rounded  text-[32px] 	 -translate-x-1/2	  lg:hidden ' : 'hidden' }>

          <li className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/Home'>Home</Link>
          </li>


          <li className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/Training'>Training</Link>
          </li>
          <li className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/PhotoJ'>Photo Journalism</Link>
          </li>
          <li className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/Archives'>Archives</Link>
          </li>
          <li className=' hover:scale-[1.25] 	 text-white m-4  '>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        </>
  )
}

export default MenuItems