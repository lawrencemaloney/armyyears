// import React from "react";

import Header from "../Components/Header";
import React, { useState, useRef } from "react";
import Sidebar from "../Components/Sidebar";

function BOarticle073071() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="berlinwrap z-20 mx-auto mt-0 grid  grid-cols-1 justify-items-center tablet:grid-cols-5 ">
        <div className="obshead	col-span-5 col-start-1 my-8 text-center">
          <img
            className="bannerpic "
            src="..\media\BO-Banner-main-head.jpg"
            alt="Berlin Observer Banner"
            width="592px"
            height="149"
          />
          <h2 className="mt-3 text-center  text-4xl">July 30, 1971</h2>
          <h3 className="mt-3 text-center  text-4xl">Soldier fighting!</h3>
        </div>

        <div className="imagecontainer col-span-5 col-start-1 m-10 grid grid-cols-1 tablet:grid-cols-7">
          <img
            className="art-box-1 col-span-3 col-start-1 "
            src="..\media\BO article  07 30 71 1st.jpg"
            alt="Berlin Observer July 30 1971"
            width="940px"
            height="840px"
          />
        </div>

        <button className=" col-span-5 col-start-1 mb-8  h-12 justify-self-center rounded border border-2 border-black bg-slate-500 p-3 text-white ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900">
          <a
            href="..\media\BO PDFs\All PDF Archive Files\Berlin Obsever V27_N30_jul30 1971.pdf"
            target="_blank"
          >
            {" "}
            See Full Edition PDF
          </a>
        </button>
      </div>
    </>
  );
}

export default BOarticle073071;
