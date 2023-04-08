import { ProjectMenu } from "../Menu";
import screenshot from "../../assets/Screenshot1.png";
import psycology from "../../assets/psychology.jpg";
import "./PhD.css";
import { motion } from "framer-motion";

function PhD() {
  return (
    <motion.div
      id="PhD_page"
      initial={{ y: 100 + "%" }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        
      }}
    >
      <ProjectMenu />
      <motion.div
      id="PhD_title"
      initial={{y: 100 +'%', opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{opacity: 0}}
      transition={{
        duration: 1,
        delay: 1
      }}
      >
        PhD
      </motion.div>
      <div id="PhD_content">
        <img src={psycology} />

        <div className="PhD_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu arcu
          vel dui tincidunt varius non id lorem. Vestibulum et purus varius,
          consectetur enim et, malesuada est. Aliquam lobortis lectus est, eu
          aliquet turpis gravida sit amet. Phasellus euismod, quam vel
          condimentum euismod, massa dolor volutpat mauris, in finibus quam eros
          ac dui. Praesent sit amet urna magna. Praesent hendrerit lobortis
          lorem. Cras nec nisl urna.
        </div>
        <div className="PhD_text">
          Vestibulum id mollis libero. Duis tincidunt varius semper. Mauris nec
          pharetra nisl. Sed quam ipsum, pulvinar non leo in, interdum posuere
          enim. Praesent venenatis varius ex, sed sollicitudin sem bibendum
          quis. Nulla id ante a ante lacinia consectetur aliquam id neque.
          Maecenas at tellus vitae mi pretium elementum ac in nisl. In ex mi,
          luctus at rutrum sit amet, facilisis et sapien. Nullam dignissim
          lobortis dignissim. Proin eleifend maximus est, ut consectetur tortor
          auctor a. Duis dictum accumsan nunc, nec interdum ipsum hendrerit
          eget. Nam mollis eleifend velit sit amet mattis.
        </div>

        <img src={screenshot} />
      </div>
    </motion.div>
  );
}

export default PhD;
