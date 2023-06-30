import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { isCompositeComponentWithType } from 'react-dom/test-utils';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <FaBars
          className="mobileopen fixed  right-2 top-2 z-30	 flex h-[18px] w-[18px] cursor-pointer bg-gray-500  fill-white stroke-0 	tablet:h-[32px] tablet:w-[32px]"
          onClick={() => setIsOpen(!isOpen)}
        ></FaBars>
      ) : (
        <FaTimes
          className="mobileclose  fixed right-2 top-2 z-50 h-[18px] w-[18px] cursor-pointer  fill-red-400 stroke-2 tablet:h-[32px] tablet:w-[32px]"
          onClick={() => setIsOpen(!isOpen)}
        ></FaTimes>
      )}

      <div
        className={`navbar fixed top-0 right-0 z-40   h-full w-full  bg-[#ccc9bc] p-10 tablet:w-1/4  ${
          isOpen ? "translate-x-0" : "translate-x-full  "
        } duration-300 ease-in-out`}
      >
        <p className="-mt-6  text-[32px] ">Pages</p>

        <nav className="">
          <div className="mt-2 ml-8 flex flex-col  space-y-2 text-2xl landscape:mt-6 landscape:grid landscape:grid-cols-2 mobile:landscape:flex ">
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
    <span className={isActive ? " text-red-600" : "text-black	 "}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </span>
  );
}
