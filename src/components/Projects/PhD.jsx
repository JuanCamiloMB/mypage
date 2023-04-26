import { ProjectMenu } from "../Menu";
import screenshot1 from "../../assets/Screenshot1.png";
import screenshot2 from "../../assets/Screenshot2.png";
import screenshot3 from "../../assets/Screenshot3.gif";
import screenshot4 from "../../assets/Screenshot4.gif";
import psycology from "../../assets/inkStyle1.jpg";
import "./PhD.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function PhD(props) {
  const data = useLocation();
  const imgInfo = data;
  useEffect(() => {
    console.log(imgInfo);
  });
  return (
    <>
      <motion.div id="PhD_page">
        <motion.div
          className="backgroundImg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img src={psycology} />
        </motion.div>
        <ProjectMenu />
        <motion.div
          id="PhD_title"
          initial={{ y: 100 + "%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
          }}
        >
          PhD
        </motion.div>
        <div id="PhD_content">
          <div className="PhD_text">
            What can we do with physical health and mental breakdowns? Let's
            calm down a bit, take a deep breath and look for some help
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
          <img id="PhD_Screenshot3" src={screenshot3} />
          <img id="PhD_Screenshot4" src={screenshot4} />
        </div>
      </motion.div>
    </>
  );
}

export default PhD;
