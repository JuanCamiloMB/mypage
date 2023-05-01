import "./Project.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Project(props) {

  let divWidth = $("#" + props.title + "_container").width();
  let divHeight = $("#" + props.title + "_container").height();
  let divPosition = $("#" + props.title + "_container").position();
  
  let divInfo = { divWidth, divHeight, divPosition };

  return (
    <Link
      to={"/" + props.title}
      id={props.title + "_container"}
      className="container"
      state= {divInfo}
    >
      <motion.img
        src={props.image}
        layout
        transition={{
          ease: "easeOut",
        }}
      />
      <div className="ProjectTitle">{props.title}</div>
      <div className="DiscoverTxt">View ↗</div>
    </Link>
  );
}
export default Project;
