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
          className="mobileopen fixed text-black  z-30 flex items-center cursor-pointer h-[24px] w-[24px]  right-6 top-4 font-light	"
          onClick={() => setIsOpen(!isOpen)}>
        </FaBars> 

    )
    :
    (
      <FaTimes 
      className="mobileclose flex text-4xl text-black  items-center cursor-pointer fixed right-6 top-6 z-50 w-[24px] h-[24px]"
      onClick={() => setIsOpen(!isOpen)}>
    </FaTimes>

    )
}

<div
  className={`navbar top-0 right-0 w-full tablet:w-1/4   p-10 bg-[#ccc9bc]  fixed h-full z-40  ${isOpen ? "translate-x-0" : "translate-x-full  "} ease-in-out duration-300`}>


<nav className="">
 <div className="flex flex-col mt-2 text-center  space-y-4 text-2xl landscape:grid landscape:grid-cols-2 landscape:mt-6 mobile:landscape:flex ">

 <p className="mt-10 text-[36px] ">Pages</p>
 
           <CustomLink to="/Home">The Lottery</CustomLink>

           <CustomLink to="/Training">Training</CustomLink>

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

    
