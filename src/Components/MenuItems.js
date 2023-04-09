import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function MenuItems({showHideMenu, active}) {
  return (
    <>

        <ul className={active ?' h-[100vh] w-[100%] flex-col absolute top-[210px] left-0 bg-[#e8e4d5] text-center  border border-black	rounded-lg text-black text-[28px] lg:hidden  ' : ' hidden ' }>

          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] py-2 m-2   '>
            <Link to='/Home'>My Story</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] py-2 m-2  '>
            <Link to='/Training'>Training</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] py-2 m-2  '>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] py-2	m-2  '>
            <Link to='/BOarticles'>My Journalism</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] 	 m-2 '>
            <Link to='/MyPhotos'>My Photos</Link>
            </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.1] m-2 py-2 '>
            <Link to='/Archives'>Archives</Link>
          </li>
          <li onClick={() => showHideMenu()} className=' hover:scale-[1.25] m-2  py-2'>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        </>
  )
}

export default MenuItems