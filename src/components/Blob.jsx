import { useEffect } from "react";
import "./Blob.css";
import { useLocation } from "react-router-dom";

function Blob() {
  const location = useLocation();
  if (location.pathname === '/PhD'){
    document. getElementById('blob').style.display = 'none';
  }else{
    document. getElementById('blob').style.display = 'initial';
  }

  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: clientX + "px",
          top: clientY + "px",
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  });
  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
    </>
  );
}

export default Blob;
