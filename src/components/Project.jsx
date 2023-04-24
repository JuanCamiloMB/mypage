import "./Project.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      to={"/" + props.title}
      className="container"
    >
      <motion.img
        src={props.image}
        layout
        data-isOpen={isOpen}
        transition={{
          ease: "easeOut",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <div className="ProjectTitle">{props.title}</div>
      <div className="DiscoverTxt">Discover</div>
    </Link>
  );
}
export default Project;
