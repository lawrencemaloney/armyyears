import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
        <div className="banner mx-auto flex h-[210px] w-[100vw] justify-center  border border-black bg-amber-50  text-center   tablet:ml-[2vw] tablet:border-none laptop:space-x-36 ">
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
        </div>

        <AiOutlineMenu
          className="headermenu  bg-#fffbeb  absolute top-8 right-8 h-[32px]  w-[32px] cursor-pointer	 hover:scale-[1.2] tablet:hidden"
          onClick={showHideMenu}
        ></AiOutlineMenu>

        {/* <MenuItems showHideMenu={showHideMenu} active={active}/> */}

        <nav className=" z-40 ">
          <ul className="hidden  h-[55px]  w-[100vw] items-center justify-center border border-black bg-amber-50  p-[2px] p-[2px] text-[24px] italic tablet:flex tablet:gap-x-0  tablet:space-x-6  desktop:space-x-12 desktop:text-[30px] ">
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

          <div className="menuitem ">
            <ul
              className={
                active
                  ? " absolute  top-[210px]    left-0 h-screen w-[100%] grow flex-col rounded-lg border  border-black bg-[#e8e4d5]	text-center text-[28px] text-black laptop:hidden  "
                  : " hidden "
              }
            >
              <li
                onClick={() => showHideMenu()}
                className=" m-2 py-2 hover:scale-[1.1]   "
              >
                <Link to="/Home">My Story</Link>
              </li>
              <li
                onClick={() => showHideMenu()}
                className=" m-2 py-2 hover:scale-[1.1]  "
              >
                <Link to="/Training">Training</Link>
              </li>
              <li
                onClick={() => showHideMenu()}
                className=" m-2 py-2 hover:scale-[1.1]  "
              >
                <Link to="/InBerlin">In Berlin</Link>
              </li>
              <li
                onClick={() => showHideMenu()}
                className=" m-2 py-2	hover:scale-[1.1]  "
              >
                <Link to="/BOarticles">My Journalism</Link>
              </li>
              <li
                onClick={() => showHideMenu()}
                className=" m-2 	 hover:scale-[1.1] "
              >
                <Link to="/MyPhotos">My Photos</Link>
              </li>
              <li
                onClick={() => showHideMenu()}
                className=" m-2 py-2 hover:scale-[1.1] "
              >
                <Link to="/Archives">Archives</Link>
              </li>
              <li
                onClick={() => showHideMenu()}
                className=" m-2 py-2  hover:scale-[1.25]"
              >
                <Link to="/About">About</Link>
              </li>
            </ul>
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
