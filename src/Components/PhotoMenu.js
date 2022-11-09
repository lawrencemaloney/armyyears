import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function  PhotoMenu() {
  return (
    <>

        <ul className='  h-[100%] w-[300px] flex-col  bg-black text-left  border border-white	rounded-lg text-white text-[20px]   '>

          <li className=' hover:scale-[1.1] py-2 m-2   '>
            <Link to='/Home'>My Story</Link>
          </li>
          <li className=' hover:scale-[1.1] py-2 m-2  '>
            <Link to='/Training'>Training</Link>
          </li>
          <li className=' hover:scale-[1.1] py-2 m-2  '>
            <Link to='/InBerlin'>In Berlin</Link>
          </li>
          <li className=' hover:scale-[1.1] py-2	m-2  '>
            <Link to='/BOarticles'>My Journalism</Link>
          </li>
          <li className=' hover:scale-[1.1] 	 m-2 '>
            <Link to='/MyPhotos'>My Photos</Link>
            </li>
          <li className=' hover:scale-[1.1] m-2 py-2 '>
            <Link to='/Archives'>Archives</Link>
          </li>
          <li className=' hover:scale-[1.25] m-2  py-2'>
            <Link to='/About'>About</Link>
          </li>
        </ul>
        </>
  )
}

export default PhotoMenu