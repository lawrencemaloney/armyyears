// import React from "react";

import Header from "../Components/Header";
import React, { useState, useRef } from "react";
import Sidebar from "../Components/Sidebar";


function BOarticle1770() {

  return (
<>
<Header />
        <Sidebar />
<div className="berlinwrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center ">


    <div className="obshead	 my-8 text-center">
        <img className="bannerpic " src="..\media\BO-Banner-main-head.jpg" alt="Berlin Observer Banner" width="592px"
            height="149"/>
        <h2 className="mt-3 text-center  text-4xl">July 17, 1970</h2>
        <h3 className="mt-3 text-center  text-4xl">My first published writing!</h3>
    </div>

    <div className="textcontainer dc mt-[1rem]  max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">
    <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">Hey, I got paid ($138.39/month with room & board) for it!    </p>
    <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">Regarding this first article, I
            remember riding in a convoy
            of military vehicles through the streets of Berlin from McNair Barracks to Tempelhof Airport and being
            curious about how the Berliners perceived this military presence in their city.
            While I'm sure some resented our presence, I never experienced any expression of animosity. In fact, I met
            people who had very recent
            memories of the misery after the fall of Berlin and then the Soviet blockade who were deeply appreciative of
            our presence. 
            <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">One middle-aged Berliner that I met told of how she had to scavenge through garbage cans to
            help keep her family alive immediately after the war. She said that her family had a picture of John F.
            Kennedy in a place of honor in their house. They would never forget his "
            <span className="airlift text-blue-600 underline visited:text-purple-600">
                <a href="https://en.wikipedia.org/wiki/Ich_bin_ein_Berliner" target="_blank">ich ben ein Berliner</a>
            </span>" speech in 1963.
            <p className="dc mt-[1rem] max-w-[38ch] text-[20px] leading-[32px] mobile:max-w-[40ch] mobile:text-[25px]  laptop:max-w-[60ch]">

            Tempelhof, which closed in 2008, was the the center of the 
            <span className=" text-blue-600 underline visited:text-purple-600 ">
                <a href="https://en.wikipedia.org/wiki/Berlin_Blockade#Start_of_the_Berlin_Airlift"
                    target="_blank"> Berlin
                    Airlift of 1948-49.</a>
            </span>
            </p>
            </p>
        </p>
        
    </div>

    <div className="mt-6 ">

        <img className="art-3322-1 max-w-[75%]"  src="..\media\BO article  07 17 70 (feature).jpg" alt="Berlin Observer July 17 1970"
            width="940px" height="840px"/>

        <img className="art-3322-2" src="..\media\BO article 07 17 70 (main altered).JPG" alt="Berlin Observer July 17 1970"
            width="519px" height="840px"/>

        <img className="art-3322-3" src="..\media\BO Sports Banner.JPG" alt="Berlin Observer July 17 1970" width="389px"
            height="162px"/>


        <img className="art-3322-4" src="..\media\BO article  07 17 70 (2nd).jpg" alt="Berlin Observer July 17 1970"
            width="519px" height="320px"/>

        <a href="..\BO_PDFs\B O Jul 17 1970.pdf" target="_blank" className="bofulleddition"> See Full Edition PDF</a>
</div>
</div>
    </>
  );
}

export default BOarticle1770;
