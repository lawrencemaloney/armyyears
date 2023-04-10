import React, { useState, useRef } from "react";
import "./Collapsible.css";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  if (parentRef.current) console.log(parentRef.current);
  // console.log(parentRef.current.scrollHeight);
  return (
    <>
      <span className="collapsible  ">
        <span className="toggle" onClick={() => setIsOpen(!isOpen)}>
          {props.icon}{" "}
        </span>

        <div
          className="content-parent "
          ref={parentRef}
          style={
            isOpen
              ? {
                  height: parentRef.current.scrollHeight + 20 + "px",
                  display: "inline-block",

                  // display: "inline-block",
                  marginBottom: "10px",
                }
              : {
                  // width: 0 + "px",
                  display: "none",
                }
          }
        >
          <div className="content ">{props.children}</div>
        </div>
      </span>
    </>
  );
}

export default Collapsible;
