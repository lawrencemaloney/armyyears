import React, { useState, useRef } from "react";
// import Footnote from "../Assets/Icons/Footnote";
import "./Collapsible.css";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  if (parentRef.current) console.log(parentRef.current.scrollHeight);
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
              }
            : {
                height: "0px",
              }
        }>
        <div className='content '>{props.children}</div>
      </div>
    </span>
  );
}

export default Collapsible;
