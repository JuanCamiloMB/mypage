import { useEffect, useState } from "react";
import "./Blob.css";
import { useLocation } from "react-router-dom";

function Blob() {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({x: event.pageX, y: event.pageY})
    console.log(event.pageX)
  }
/*USE JQUERY*/
  useEffect(() => {
    /* if (location.pathname === "/PhD") {
      document.getElementById("blob").style.display = "none";
    } else {
      document.getElementById("blob").style.display = "initial";
    } */
    const blob = document.getElementById("blob");
    const blur = document.getElementById("blur");
    const theRoot = document.getElementById("root");

    theRoot.onMouseMove = handleMouseMove()
    
    blob.animate(
      {
        left: cursorPosition.x + "px",
        top: cursorPosition.y + "px",
      },
      { duration: 3000, fill: "forwards" }
    );

    /* document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });

      blob.animate(
        {
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
        },
        { duration: 3000, fill: "forwards" }
      );
    }; */
  });
  return (
    <>
      <div id="blob"></div>
      <div id="blur" ></div>
    </>
  );
}

export default Blob;
