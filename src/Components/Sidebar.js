import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { isCompositeComponentWithType } from 'react-dom/test-utils';



export default function Sidebar() {

 const [isOpen, setIsOpen] = useState(false)  

  return (
    <>
    {!isOpen ? 
    (
        <FaBars 
          className="mobileopen fixed  z-30 flex bg-gray-500	 tablet:w-[32px] tablet:h-[32px] cursor-pointer h-[18px] w-[18px]  right-2 top-2 	stroke-0 fill-white"
          onClick={() => setIsOpen(!isOpen)}>
        </FaBars> 

    )
    :
    (
      <FaTimes 
      className="mobileclose  cursor-pointer fixed right-2 top-2 z-50 w-[18px] h-[18px]  tablet:w-[32px] tablet:h-[32px] stroke-2 fill-red-400" 
      onClick={() => setIsOpen(!isOpen)}>
    </FaTimes>

    )
}

<div
  className={`navbar top-0 right-0 w-full tablet:w-1/4   p-10 bg-[#ccc9bc]  fixed h-full z-40  ${isOpen ? "translate-x-0" : "translate-x-full  "} ease-in-out duration-300`}>

<p className="-mt-6  text-[32px] ">Pages</p>

<nav className="">
 <div className="flex flex-col mt-2 ml-8  space-y-2 text-2xl landscape:grid landscape:grid-cols-2 landscape:mt-6 mobile:landscape:flex ">

 
           <CustomLink to="/Home">The Lottery</CustomLink>

           <CustomLink to="/Training">Training</CustomLink>

           <CustomLink to="/PostWW2">Hot War/Cold War</CustomLink>

           <CustomLink to="/InBerlin">In Berlin</CustomLink>

           <CustomLink to="/BOarticles">My Journalism</CustomLink>

           <CustomLink to="/MyPhotos">My Photos</CustomLink>

           <CustomLink to="/Archives">Archives</CustomLink>

           <CustomLink to="/About">About</CustomLink>
          </div>
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
                 ? " text-red-600"
                 : "text-black	 "
             }
           >
             <Link to={to} {...props}>
               {children}
             </Link>
           </span>

         );
       }

    
