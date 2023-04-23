import { Menu } from "../components/Menu";
import "./AboutPage.css";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      id="aboutScreen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Menu />

      <div id="aboutContainer" className="">
        <div id="me">
          <p>HELLO!!! I'm Juan Camilo Manjarres 😉</p>
          <p>
            I'm a Systems Engineer student and freelancer, passionate for
            challenges; also attracted by art and sports.
          </p>
          <p>
            My interest are Design, Development and Cyber security. Actually I
            have personal studies about cyber security, experience in Web
            design, Web Development and Google Cloud Platform. 
          </p>
          <p></p>

          <div id="lists">
            <div className="mytext list-title">Work Experience</div>
            <ul>
              <li>
                <div className="mytext">Freelancer</div>
                <div className="mytext sub">2023 - Present</div>
              </li>
            </ul>
            <div className="mytext list-title">Certifications</div>
            <ul>
              <li>
                <div className="mytext">Google Cloud Foundation certified</div>
                <div className="mytext sub">October 2022</div>
              </li>
              <li>
                <div className="mytext">Google Cloud Activate certified</div>
                <div className="mytext sub">April 2023</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
