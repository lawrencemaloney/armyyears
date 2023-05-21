import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { isCompositeComponentWithType } from 'react-dom/test-utils';



export default function Sidebar() {

 const [isOpen, setIsOpen] = useState(false)  

  return (
    <>
    {!isOpen ? 
    (
        <FaBars 
          className="mobileopen fixed  z-30 flex items-center cursor-pointer h-[32px] w-[32px] right-10 top-6"
          onClick={() => setIsOpen(!isOpen)}>
        </FaBars> 

    )
    :
    (
      <FaTimes 
      className="mobileclose flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50 w-[32px] h-[32px]"
      onClick={() => setIsOpen(!isOpen)}>
    </FaTimes>

    )
}

<div
  className={`navbar top-0 right-0 w-full justify-center  bg-[#b2b0a4] p-10  text-white fixed h-full z-40  ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300`}>


<nav className="">
 <ul className="flex flex-col mt-20 text-center space-y-12 text-3xl">

          <li className=" hover:scale-[1.01] hover:text-black  ">
           <CustomLink to="/Home">The Lottery</CustomLink>
         </li>
         <li className=" hover:scale-[1.01]  hover:text-black">
           <CustomLink to="/Training">Training</CustomLink>
         </li>

         <li className=" hover:scale-[1.01]  hover:text-black">
           <CustomLink to="/InBerlin">In Berlin</CustomLink>
         </li>
         <li className=" hover:scale-[1.01]  hover:text-black">
           <CustomLink to="/BOarticles">My Journalism</CustomLink>

         </li>

         <li className=" hover:scale-[1.01]  hover:text-black">
           <CustomLink to="/MyPhotos">My Photos</CustomLink>
         </li>

         <li className=" hover:scale-[1.01]  hover:text-black">
           <CustomLink to="/Archives">Archives</CustomLink>
         </li>
         <li className=" hover:scale-[1.01]  hover:text-black">
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
                 ? " text-red-700"
                 : "text-black	  hover:scale-[1.05]"
             }
           >
             <Link to={to} {...props}>
               {children}
             </Link>
           </span>

         );
       }

    
