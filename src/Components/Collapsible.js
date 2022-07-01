import React, { useState, useRef } from "react";
// import Footnote from "../Assets/Icons/Footnote";
import "./Collapsible.css";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  if (parentRef.current) 
  console.log(parentRef.current.scrollWidth);
  return (
    <span className='collapsible '>
      <span className='toggle' onClick={() => setIsOpen(!isOpen)}>
        {props.label}
      </span>
      <div
        className='content-parent '
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
                // fontSize: "16px",
                width: 700 + "px",
                border: "1px solid black",
              }
            : {
                height: 0 + "px",

                // width: "0px",
              }
        }>
        <div className='content w-0 '>{props.children}</div>
      </div>
    </span>
  );
}

export default Collapsible;
