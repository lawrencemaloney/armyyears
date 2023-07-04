// import React from "react";

// import Header from "../Components/Header";
import React, { useState, useRef } from "react";
import Collapsible from "../Components/Collapsible";

// import Sidebar from "../Components/Sidebar";

function BOarticle1770() {
  return (
    <>
      <div className="article071770 z-20 mx-[20px] mt-0 grid  grid-cols-1 justify-items-center tablet:grid-cols-5 ">
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
          <h3 className=" text-center  text-3xl">
            My First Published Writing!
          </h3>
        </div>

        <div className="textcontainer col-span-5  col-start-1 my-[18px] max-w-[46ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
          <p className=" my-[16px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
            Regarding this first article, I remember riding in a convoy of
            military vehicles through the streets of Berlin from McNair Barracks
            to Tempelhof Airport and being curious about how the Berliners
            perceived this military presence in their city. While I'm sure some
            resented our presence, I never experienced any expression of
            animosity. In fact, I met people who had very recent memories of the
            misery after the fall of Berlin and then the Soviet blockade who
            were deeply appreciative of our presence.
            <p className="my-[16px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
              One middle-aged Berliner that I met told of how she had to
              scavenge through garbage cans to help keep her family alive
              immediately after the war. She said that her family had a picture
              of John F. Kennedy in a place of honor in their house. They would
              never forget his "ich ben ein Berliner" speech in 1963.
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
                      Wikipedia contributors, "Berlin Blockade," Wikipedia, The
                      Free Encyclopedia,{" "}
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
    </>
  );
}

export default BOarticle1770;
