import { ProjectMenu } from "../Menu";
import screenshot1 from "../../assets/Screenshot1.png";
import screenshot2 from "../../assets/Screenshot2.png";
import grabacion1 from "../../assets/grabacion1.gif";
import grabacion2 from "../../assets/grabacion2.gif";
import "./PhD.css";
import { motion, useScroll, useTransform } from "framer-motion";
import psychology from "../../assets/inkStyle1.jpg";
import { useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

function PhD() {
  const location = useLocation();
  const state = location.state;

  const { scrollYProgress } = useScroll();
  const scroll_move = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] };

  const represent_img_variants = isMobile
    ? {
        initial: {},
        animate: {},
        transition: {},
      }
    : {
        initial: {
          ...(state &&
            state.divPosition && {
              width: state.divWidth,
              height: state.divHeight,
              top: state.divPosition.top,
              left: state.divPosition.left,
            }),
          y: "-50%",
        },
        animate: {
          y: 0,
          width: "100vw",
          height: "50vh",
        },
        transition: { transition },
      };

  return (
    <>
      <div id="PhD_page">
        <ProjectMenu />
        <div id="PhD_content">
          <div id="PhD_info">
            <motion.div
              initial={{
                opacity: 0,
                y: "50%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={transition}
              id="PhD_epic"
            >
              Change your mind, change your life
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: "50%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={transition}
              id="PhD_panel"
            >
              <div className="panel_description">Personal site</div>
              <div className="panel_by">Freelance</div>
            </motion.div>
          </div>
          {!isMobile && <motion.div
            initial={represent_img_variants.initial}
            animate={represent_img_variants.animate}
            transition={represent_img_variants.transition}
            className="represent_img"
          >
            <motion.img style={{ scale: scroll_move }} src={psychology} />
          </motion.div>}
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
          <img id="PhD_Grabacion1" src={grabacion1} />
          <img id="PhD_Grabacion2" src={grabacion2} />
        </div>
      </div>
    </>
  );
}

export default PhD;
