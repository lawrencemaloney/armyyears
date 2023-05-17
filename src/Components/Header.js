import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import MenuItems from "./MenuItems";
import React, { useState } from "react";

export default function Header() {
  // const [active, setActive] = useState(false);

  // const showHideMenu = () => {
  //   setActive(!active);
  // };

  return (
    <>
      <div className="header mt-0 h-[100%] border border-black flex flex-col   items-center">
        <div className="banner flex h-[210px]   text-center   tablet:ml-[2vw] desktop:border-none desktop:space-x-36 ">
          <img
            className="  hidden tablet:flex tablet:h-[53px] tablet:w-[50px] "
            src="images/6thINfnatryPin.gif"
            height={60}
            width={60}
            alt={"Pin"}
          />

          <h1 className=" text-center  mt-10   text-4xl   ">
          An Unexpected Adventure {" "}
            <p className="mt-[20px] text-3xl">Larry Maloney 1969 to 1972</p>
          </h1>

          <img
            className="  hidden tablet:top-12 tablet:flex tablet:h-[53px] tablet:w-[50px] "
            src="images/6thINfnatryPin.gif"
            height={60}
            width={60}
            alt={"Pin"}
          />
      {/* <div className="menubutton sticky top-0"></div> */}

        {/* <FaBars
          className={active  ? "mobileopen  hidden ":"bg-#fffbeb  absolute top-[160px] right-[calc(50%-16px)] h-[32px]  w-[32px] cursor-pointer	 hover:scale-[1.2] tablet:hidden"}
          onClick={() => showHideMenu()}>
        </FaBars> 


        <FaTimes 
          className={active ? "mobileclose bg-#fffbeb  absolute top-[160px] right-[calc(50%-16px)] h-[32px]  w-[32px] cursor-pointer	 hover:scale-[1.2] tablet:hidden  ":"hidden"}
          onClick={() => showHideMenu()}>
        </FaTimes> */}

        </div>

      </div>
    </>
  );
}


