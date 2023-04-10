//*Deprecated Do Not Use*//

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function MenuItems({ showHideMenu, active }) {
  return (
    <>
      <div className="menuitem ">
        <ul
          className={
            active
              ? " absolute  top-[210px]    left-0 h-screen w-[100%] grow flex-col rounded-lg border  border-black bg-[#e8e4d5]	text-center text-[28px] text-black lg:hidden  "
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
    </>
  );
}

export default MenuItems;
