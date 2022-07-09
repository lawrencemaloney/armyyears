import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function MenuItems({showMenu, active}) {
  return (
    <>


        <ul className={active ?'flex-col flex items-centered fixed inset-0 md:hidden ' : 'hidden' }>
            <AiOutlineClose/>
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
        </>
  )
}

export default MenuItems