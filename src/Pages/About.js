// import React from "react";

import Header from "../Components/Header";
import React, { useState, useRef } from "react";

function About() {
  return (
    <>
      <div className="aboutwrap z-20 mx-auto mt-0  flex h-[100%] flex-col items-center ">
        <Header />
        <div>
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
