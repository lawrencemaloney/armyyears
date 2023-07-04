// import React, { useState } from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import BOarticle1770 from "./BOarticle1770";
import BOarticle073071 from "./BOarticle073071";

import { Link } from "react-scroll";

function BOarticles() {
  return (
    <>
      <Header />
      <Sidebar />

      <div className="myarticlewrap z-20 mx-auto   h-[100%] justify-items-center tablet:grid-cols-4 ">
        <div className="myarticlesintro mx-auto grid max-w-[64ch] grid-cols-1  ">
          <h1 className="mx-auto mt-[40px] text-3xl">My Articles</h1>

          <p className=" mx-[20px] mt-[1rem]  text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            A major part of my job as PIO Clerk was to make sure that the 2nd
            Battalion, 6th Infantry (the "2/6" ) was often and favorably
            represented in the Brigade weekly newspaper: the Berlin Observer.
            The Observer began publication in September 1945 as the “Grooper”
            just five and a half months after Germany surrendered. Its final
            publication was 39 years later on July 15, 1994. The “Second
            Anniversary” edition (below) presents a picture of the early years
            of the Berlin Brigade, how the Observer was produced, and a preview
            of the historical value that the Observer maintained over the years.
          </p>

          <a
            className="w-[100%]  px-[30px] py-[20px] "
            href="\media\BO PDFs\Berlin Observer 1947suppl.pdf"
            target="_blank"
          >
            <img
              className=" w-[100%]   text-[20px] leading-[32px] outline outline-black hover:outline-red-500  mobile:max-w-[35ch] mobile:text-[25px] laptop:max-w-[60ch]"
              src="..\media\BO part 1947 Special.JPG"
              alt="Berlin Observer July 17 1970"
              width=""
              height=""
            />
          </a>
          <span className="text-center text-sm leading-none ">
            (Click Image for Full Edition)
          </span>

          <p className=" mx-[20px] mt-[1rem]  text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Thanks to the efforts of an unnamed webmaster and contributions from
            "... former Berlin Observer staffers and Veterans of the Berlin
            Brigade..." many PDF copies of Berlin Observer editions were
            preserved on the website:
            <a
              className="reflink text-blue-600 underline visited:text-purple-600"
              href="http://www.theberlinobserver.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Berlin Observer.com.
            </a>{" "}
          </p>
          <p className=" mx-[20px] mt-[1rem]  text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Not every edition was preserved on this site. For example, there
            were only three editions from 1970, my first year in Berlin. My
            first article appeared in the July 17, 1970 edition, two weeks after
            my arrival in Berlin. The next edition in the archive is December
            11, some 5 months later. I would not have been allowed to go that
            long without the "2/6" being represented in the Observer.
          </p>

          <p className=" mx-[20px] mt-[1rem]  text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Each of the images below represents the cover page of an issue of
            the Berlin Observer that contains articles and/or photos contributed
            by me. Clicking the image will open a page containing my articles
            and photos that appeared in that issue. You can also access the full
            edition by clicking the "See Full Edition PDF" button at the bottom
            of each article page. In order to preserve the historical collection
            assembled by the Berlin Observer.com webmaster past its funding end
            date of 2023, I have downloaded each issue, which can be accessed by
            clicking "Berlin Observer Archives" on the menu.
          </p>
        </div>
        <BOarticle1770 />
        <BOarticle073071 />
      </div>
    </>
  );
}

export default BOarticles;
