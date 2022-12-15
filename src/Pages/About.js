// import React from "react";
import React, { useEffect, useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineCloseSquare } from "react-icons/ai";

import Header from "../Components/Header";
const handleKeyPress = (e: React.KeyboardEvent) => {
  console.log(e);

  };

function About() {
  return (
    <>
    <Header />  
    <div>
    
         
      <div className='mt-[120px] '><p>About page goes here         </p>

      </div>

      <h1 className='mt-[20px]'>Why did i do this?</h1>
    </div>

    
    </>
  );
}


export default About;
