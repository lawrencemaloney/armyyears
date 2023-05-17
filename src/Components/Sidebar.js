import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



export default function Sidebar() {

 const [isOpen, setIsOpen] = useState(true)  

  return (
    <>
    {!isOpen ? 
    (
        <FaBars 
          className="mobileopen fixed  z-30 flex items-center cursor-pointer h-[36px] w-[36px] right-10 top-6"
          onClick={() => setIsOpen(!isOpen)}>
        </FaBars> 

    )
    :
    (
      <FaTimes 
      className="mobileclose flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
      onClick={() => setIsOpen(!isOpen)}>
    </FaTimes>

    )
}

<div
  className={`navbar top-0 right-0 w-1/2  bg-[#b2b0a4] p-10 pl-20 text-white fixed h-full z-40  ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300`}>
  {/* <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3> */}

<nav>
 <ul className="flex flex-col mt-20 space-y-8 text-3xl">

          <li className=" hover:scale-[1.1] hover:text-black  ">
           <CustomLink to="/Home">The Lottery</CustomLink>
         </li>
         <li className=" hover:scale-[1.1]  hover:text-black">
           <CustomLink to="/Training">Training</CustomLink>
         </li>

         <li className=" hover:scale-[1.1]  hover:text-black">
           <CustomLink to="/InBerlin">In Berlin</CustomLink>
         </li>
         <li className=" hover:scale-[1.1]  hover:text-black">
           <CustomLink to="/BOarticles">My Journalism</CustomLink>
         </li>

         <li className=" hover:scale-[1.1]  hover:text-black">
           <CustomLink to="/MyPhotos">My Photos</CustomLink>
         </li>

         <li className=" hover:scale-[1.1]  hover:text-black">
           <CustomLink to="/Archives">Archives</CustomLink>
         </li>
         <li className=" hover:scale-[1.1]  hover:text-black">
           <CustomLink to="/About">About</CustomLink>
         </li>
       </ul> 
       </nav>
       </div>
       </>
       );
       }

       function CustomLink({ to, children, ...props }) {
         const resolvedPath = useResolvedPath(to);
         const isActive = useMatch({ path: resolvedPath.pathname, end: true });
       
         return (
           <span
             className={
               isActive
                 ? " scale-[1.25] 	text-red-700"
                 : "text-black	  hover:scale-[1.25]"
             }
           >
             <Link to={to} {...props}>
               {children}
             </Link>
           </span>
         );
       }

    
