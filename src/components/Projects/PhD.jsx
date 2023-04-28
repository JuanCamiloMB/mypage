import { ProjectMenu } from "../Menu";
import screenshot1 from "../../assets/Screenshot1.png";
import screenshot2 from "../../assets/Screenshot2.png";
import screenshot3 from "../../assets/Screenshot3.gif";
import screenshot4 from "../../assets/Screenshot4.gif";
import "./PhD.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import psychology from "../../assets/inkStyle1.jpg";

function PhD(props) {
  const data = useLocation();
  const imgInfo = data;
  useEffect(() => {
    console.log(imgInfo);
  });
  return (
    <>
      <motion.div id="PhD_page">
        <ProjectMenu />
        <div id="PhD_content">
          <div id = "PhD_info">
            <div id="PhD_epic">Change your mind, change your life</div>
            <div id="PhD_panel">
              <div className="panel_image">
                <img src={psychology} />
              </div>
              <div className="panel_description">Personal site</div>
              <div className="panel_by">Freelance</div>
            </div>
          </div>
          <img id="PhD_Screenshot1" src={screenshot1} />
          <div className="PhD_text">
            Made possible by
            <ul>
              <li>Tailwind</li>
              <li>React JS</li>
              <li>Framer-motion</li>
              <li>Responsive</li>
            </ul>
          </div>
          <img id="PhD_Screenshot2" src={screenshot2} />
        </div>
      </motion.div>
    </>
  );
}

export default PhD;
