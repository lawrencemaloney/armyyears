import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import MenuItems from "./MenuItems";
import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const showHideMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="header ">
        <div className="banner mx-auto flex h-[210px] w-[100vw] justify-center  border border-black bg-amber-50  text-center relative  tablet:ml-[2vw] tablet:border-none laptop:space-x-36 ">
          <img
            className="  absolute left-16 top-12 hidden tablet:flex tablet:h-[53px] tablet:w-[50px] "
            src="images/6thINfnatryPin.gif"
            height={60}
            width={60}
            alt={"Pin"}
          />

          <h1 className=" absolute right-[50%] mt-10 w-[100%] translate-x-[50%] flex-col text-4xl  tablet:text-[56px] ">
            A Soldier in Berlin{" "}
            <p className="mt-[20px] text-[36px]">1969 to 1972</p>
          </h1>

          <img
            className="  absolute right-16 hidden tablet:top-12 tablet:flex tablet:h-[53px] tablet:w-[50px] "
            src="images/6thINfnatryPin.gif"
            height={60}
            width={60}
            alt={"Pin"}
          />
      {/* <div className="menubutton sticky top-0"></div> */}

        <FaBars
          className={active  ? "mobileopen  hidden ":"bg-#fffbeb  absolute top-[160px] right-[calc(50%-16px)] h-[32px]  w-[32px] cursor-pointer	 hover:scale-[1.2] tablet:hidden"}
          onClick={() => showHideMenu()}>
        </FaBars> 


        <FaTimes 
          className={active ? "mobileclose bg-#fffbeb  absolute top-[160px] right-[calc(50%-16px)] h-[32px]  w-[32px] cursor-pointer	 hover:scale-[1.2] tablet:hidden  ":"hidden"}
          onClick={() => showHideMenu()}>
        </FaTimes>

        </div>


     <nav className= "  z-40 ">
      <ul
        className={
                active
                  ? "OverlayBanner absolute  top-[240px] left-[3%] space-y-6 mx-[4px] h-80% w-[90%] opacity-85 flex-col py-8 rounded-lg border  border-black bg-[#d8d5c7]	text-center text-[28px]  text-black-900	 tablet:hidden  "
                  : 
                  "topBanner hidden h-[55px]  w-[90vw] mx-[5vw] items-center justify-center border border-black bg-amber-50  p-[2px] text-[28px] italic tablet:flex tablet:gap-x-0  tablet:space-x-4  tablet:text-[30px] desktop:space-x-12 "
              }
      >

             <li className=" hover:scale-[1.1] hover:text-black  ">
              <CustomLink to="/Home">My Story</CustomLink>
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
