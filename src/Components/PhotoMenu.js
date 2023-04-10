import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function PhotoMenu() {
  return (
    <>
      <ul className="  h-[100%] w-[300px] flex-col  rounded-lg border  border-white bg-black	text-left text-[20px] text-white   ">
        <li className=" m-2 py-2 hover:scale-[1.1]   ">
          <Link to="/Home">My Story</Link>
        </li>
        <li className=" m-2 py-2 hover:scale-[1.1]  ">
          <Link to="/Training">Training</Link>
        </li>
        <li className=" m-2 py-2 hover:scale-[1.1]  ">
          <Link to="/InBerlin">In Berlin</Link>
        </li>
        <li className=" m-2 py-2	hover:scale-[1.1]  ">
          <Link to="/BOarticles">My Journalism</Link>
        </li>
        <li className=" m-2 	 hover:scale-[1.1] ">
          <Link to="/MyPhotos">My Photos</Link>
        </li>
        <li className=" m-2 py-2 hover:scale-[1.1] ">
          <Link to="/Archives">Archives</Link>
        </li>
        <li className=" m-2 py-2  hover:scale-[1.25]">
          <Link to="/About">About</Link>
        </li>
      </ul>
    </>
  );
}

export default PhotoMenu;
