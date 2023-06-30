// import React, { useState } from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-scroll";

function BOarticles() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="myarticlewrap z-20 mx-auto  grid h-[100%] grid-cols-1 justify-items-center tablet:grid-cols-4 ">
        <div className="myarticlesintro  mx-auto grid grid-cols-1  ">
          <h1 className="mx-auto mt-[40px] text-3xl">My Articles</h1>

          {/* <div ClassName="z-20 mx-auto mt-0   h-[100%]    "> */}

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            A major part of my job as PIO Clerk was to make sure that the 2nd
            Battalion, 6th Infantry (the "2/6" ) was often and favorably
            represented in the Brigade weekly newspaper: the Berlin Observer.
            The Observer began publication in September 1945 as the “Grooper”
            just five and a half months after Germany surrendered. Its final
            publication was 39 years later on July 15, 1994. The “Second
            Anniversary” edition (pictured below) presents a picture of the
            early years of the Berlin Brigade, how the Observer was produced,
            and a preview of the historical value that the Observer maintained
            over the years.
          </p>

          <a
            className="mx-[20px] my-10 h-[100%] w-[85%] text-[20px] leading-[32px] outline outline-black hover:outline-red-500  mobile:max-w-[35ch] mobile:text-[25px] laptop:max-w-[60ch] "
            href="\media\BO PDFs\Berlin Observer 1947suppl.pdf"
            target="_blank"
          >
            {" "}
            <img
              className=""
              src="..\media\BO part 1947 Special.JPG"
              alt="Berlin Observer July 17 1970"
              width=""
              height=""
            />
          </a>
          <span className="text-sm leading-none ">(Click Image to Read)</span>

          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Thanks to the efforts of an unnamed webmaster and contributions from
            "... former Berlin Observer staffers and Veterans of the Berlin
            Brigade..." many PDF copies of Berlin Observer editions were
            preserved on the website:{" "}
            <a
              ClassName="bolink"
              href="http://www.theberlinobserver.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Berlin Observer.com.
            </a>{" "}
            <span ClassName="newtab"> (Opens in a new tab.) </span>
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
            Not every edition was preserved on this site. For example, there
            were only three editions from 1970, my first year in Berlin. My
            first article appeared in the July 17, 1970 edition, two weeks after
            my arrival in Berlin. The next edition in the archive is December
            11, some 5 months later. I would not have been allowed to go that
            long without the "2/6" being represented in the Observer.
          </p>
          <p className=" mx-[20px] mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch] ">
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

        <div className="berlinwrap z-20 mx-auto mt-0 grid  grid-cols-1 justify-items-center tablet:grid-cols-5 ">
          <div className="obshead	col-span-5 col-start-1 my-8 text-center">
            <img
              className="bannerpic "
              src="..\media\BO-Banner-main-head.jpg"
              alt="Berlin Observer Banner"
              width="592px"
              height="149"
            />
            <h2 className="mt-3 text-center  text-4xl">July 17, 1970</h2>
            <h3 className="mt-3 text-center  text-4xl">
              My first published writing!
            </h3>
          </div>

          <div className="textcontainer col-span-3 col-start-2 mt-[1rem]  max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
              Hey, I got paid ($138.39/month with room & board) for it!{" "}
            </p>
            <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
              Regarding this first article, I remember riding in a convoy of
              military vehicles through the streets of Berlin from McNair
              Barracks to Tempelhof Airport and being curious about how the
              Berliners perceived this military presence in their city. While
              I'm sure some resented our presence, I never experienced any
              expression of animosity. In fact, I met people who had very recent
              memories of the misery after the fall of Berlin and then the
              Soviet blockade who were deeply appreciative of our presence.
              <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
                One middle-aged Berliner that I met told of how she had to
                scavenge through garbage cans to help keep her family alive
                immediately after the war. She said that her family had a
                picture of John F. Kennedy in a place of honor in their house.
                They would never forget his "
                <span className="airlift text-blue-600 underline visited:text-purple-600">
                  <a
                    href="https://en.wikipedia.org/wiki/Ich_bin_ein_Berliner"
                    target="_blank"
                  >
                    ich ben ein Berliner
                  </a>
                </span>
                " speech in 1963.
                <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
                  Tempelhof, which closed in 2008, was the the center of the
                  <span className=" text-blue-600 underline visited:text-purple-600 ">
                    <a
                      href="https://en.wikipedia.org/wiki/Berlin_Blockade#Start_of_the_Berlin_Airlift"
                      target="_blank"
                    >
                      {" "}
                      Berlin Airlift of 1948-49.
                    </a>
                  </span>
                </p>
              </p>
            </p>
          </div>

          <div className="imagecontainer col-span-5 col-start-1 m-10 grid grid-cols-1 tablet:grid-cols-7">
            <img
              className="art-3322-1 col-span-3 col-start-1 "
              src="..\media\BO article  07 17 70 (feature).jpg"
              alt="Berlin Observer July 17 1970"
              width="940px"
              height="840px"
            />

            <img
              className="art-3322-2 col-span-3 col-start-4"
              src="..\media\BO article 07 17 70 (main altered).JPG"
              alt="Berlin Observer July 17 1970"
              width="519px"
              height="840px"
            />

            <img
              className="art-3322-3 col-span-5 col-start-2"
              src="..\media\BO Sports Banner.JPG"
              alt="Berlin Observer July 17 1970"
              height="162px"
            />

            <img
              className="art-3322-4  col-span-5 col-start-2"
              src="..\media\BO article  07 17 70 (2nd).jpg"
              alt="Berlin Observer July 17 1970"
              width="519px"
              height="320px"
            />
          </div>

          <button className=" col-span-5 col-start-1 mb-8  h-12 justify-self-center rounded border border-2 border-black bg-slate-500 p-3 text-white ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900">
            <a
              href="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V26_N28_jul17 1970.pdf"
              target="_blank"
            >
              {" "}
              See Full Edition PDF
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default BOarticles;
