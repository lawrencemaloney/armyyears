// import React, { useState } from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Collapsible from "../Components/Collapsible";

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

        <div className="berlinwrap z-20 mx-[20px] mt-0 grid  grid-cols-1 justify-items-center tablet:grid-cols-5 ">
          <div className="obshead	col-span-5 col-start-1 my-[16px] text-center">
            <img
              className="bannerpic my-[18px]"
              src="..\media\BO-Banner-main-head.jpg"
              alt="Berlin Observer Banner"
              width="592px"
              height="149"
            />
            <h2 className=" mb-[20px] mt-[30px] text-center text-4xl">
              July 17, 1970
            </h2>
            <h3 className=" text-center  text-4xl">
              My first Professional writing published!
            </h3>
          </div>

          <div className="textcontainer col-span-5  col-start-1 my-[18px] max-w-[46ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            <p className="my-[16px]  text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
              I got paid $138.39/month with room & board for it!
            </p>
            <p className=" my-[16px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
              Regarding this first article, I remember riding in a convoy of
              military vehicles through the streets of Berlin from McNair
              Barracks to Tempelhof Airport and being curious about how the
              Berliners perceived this military presence in their city. While
              I'm sure some resented our presence, I never experienced any
              expression of animosity. In fact, I met people who had very recent
              memories of the misery after the fall of Berlin and then the
              Soviet blockade who were deeply appreciative of our presence.
              <p className="my-[16px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
                One middle-aged Berliner that I met told of how she had to
                scavenge through garbage cans to help keep her family alive
                immediately after the war. She said that her family had a
                picture of John F. Kennedy in a place of honor in their house.
                They would never forget his "ich ben ein Berliner" speech in
                1963.
                <Collapsible icon="[&#8224;]">
                  <div className="mx-4 my-[10px] max-w-[45ch] break-words	text-[18] text-black ">
                    {/* [&#8224;] */}
                    <p className="my-[12px]">
                      Wikipedia contributors, "Ich bin ein Berliner," Wikipedia,
                      The Free Encyclopedia,{" "}
                      <a
                        href="https://en.wikipedia.org/w/index.php?title=Ich_bin_ein_Berliner&oldid=1162407726"
                        target="blank"
                        className="airlift text-blue-600 underline visited:text-purple-600"
                      >
                        https://en.wikipedia.org/w/index.php?title=Ich_bin_ein_Berliner&oldid=1162407726
                        (accessed July 3, 2023).
                      </a>
                    </p>
                    <p>
                      To get an idea of the intensity of respect that Berliners
                      had for JFK, please read the article:{" "}
                      <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="http://www.theberlinobserver.com/JFK.htm"
                        className="
                  text-blue-600
                  visited:text-purple-600"
                      >
                        JFK Death stuns Outpost residents
                      </a>{" "}
                      , which was published in the Berlin Observer three days
                      after JFK’s assassination.
                    </p>
                  </div>
                </Collapsible>
                <p className="my-[16px] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
                  Tempelhof Airport, which closed in 2008, was the the center of
                  Berlin Airlift of 1948-49.
                  <Collapsible icon="[&#8224;]">
                    <div className="mx-4 my-[10px] max-w-[45ch] break-words	text-[18] text-black ">
                      {/* [&#8224;] */}
                      <p className="my-[2px]">
                        Wikipedia contributors, "Berlin Blockade," Wikipedia,
                        The Free Encyclopedia,{" "}
                        <a
                          href="https://en.wikipedia.org/w/index.php?title=Berlin_Blockade&oldid=1162784690"
                          target="blank"
                          className="airlift text-blue-600 underline visited:text-purple-600"
                        >
                          https://en.wikipedia.org/w/index.php?title=Berlin_Blockade&oldid=1162784690
                          (accessed July 3, 2023).
                        </a>
                      </p>
                    </div>
                  </Collapsible>
                  <span>
                    <a
                      href="https://en.wikipedia.org/wiki/Berlin_Blockade#Start_of_the_Berlin_Airlift"
                      target="blank"
                      className=" reflink text-blue-600 underline visited:text-purple-600 "
                    >
                      {" "}
                    </a>
                  </span>
                </p>
              </p>
            </p>
          </div>

          <div className="imagecontainer col-span-5 col-start-1 m-10 grid grid-cols-3 tablet:grid-cols-7">
            <img
              className="featureart col-span-3 col-start-1 "
              src="..\media\BO article  07 17 70 (feature).jpg"
              alt="Berlin Observer July 17 1970"
              width="940px"
              height="840px"
            />

            <img
              className="bbriefs  col-span-3 col-start-1 "
              src="..\media\BO article 07 17 70 (main altered).JPG"
              alt="Berlin Observer July 17 1970"
              width="519px"
              height="840px"
            />

            <img
              className="featsports  col-span-3 col-start-1"
              src="..\media\BO Sports Banner.JPG"
              alt="Berlin Observer July 17 1970"
              height="162px"
            />

            <img
              className="featsports  col-span-3 col-start-1"
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
              See Full Edition PDF
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default BOarticles;
