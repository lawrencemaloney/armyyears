// import React from "react";

import Header from "../Components/Header";
import React, { useState, useRef } from "react";
import Sidebar from "../Components/Sidebar";

function About() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="aboutwrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center ">
        <div className="mystory z-20 mx-auto mt-[40px]  flex h-[100%] flex-col items-center ">
          <h1 className="mx-[20px] mt-[1rem] mb-3 text-center text-3xl  tablet:text-4xl">
            How I Came to Write This Story
          </h1>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  tablet:max-w-[60ch] ">
            From June 28, 1970, to December 29, 1971, I served as the Public
            Information Office (PIO) clerk for the 2nd Battalion, 6th Infantry
            (the "2/6") Regiment of the Berlin Brigade, U.S. Army Berlin (USAB)
            in Berlin, Germany. My primary duty was to promote the 2/6 by
            getting vignettes, feature articles, and photos of Batallion
            accomplishments published in the Brigade's weekly newspaper, the
            Berlin Observer.
          </p>
          <div className=" mt-6 max-w-[45ch] tablet:max-w-[75ch]">
            <img
              className=" mt-4"
              src="images/Berlin scenes 41  resized.webp"
              alt="Ku-Damm Berlin"
              // width='600px'
            />
            <span className="text-sm leading-none ">
              Ku-damm Strasse & Kaiser Wilhelm Memorial, Berlin Germany c. 1970
              taken by me.
            </span>
          </div>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            In February 2020, I discovered an online archive of over 900
            complete editions of the Observer preserving Brigade-related events
            (many of significant historical importance) from the first issue on
            September 25, 1945 (just five and a half months after Germany
            surrendered) through the final publication on July 15, 1994. (See
            the Berlin Observer Archives page to access all PDFs).
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            My wife suggested that I preserve my work contained in that archive
            along with some context so that my family, particularly my sons and
            grandchildren, would know a little of what my life in the Army was
            like. This website is the result of that effort. (For a description
            of how and why I started this project. Go to the page).
          </p>
          <div className="mt-[120px] ">
            <p>About page goes here </p>
          </div>

          <h1 className="mt-[20px]">Why did i do this?</h1>
        </div>
      </div>
    </>
  );
}

export default About;
