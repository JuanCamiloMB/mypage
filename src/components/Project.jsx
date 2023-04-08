import "./Project.css";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <Link to={"/" + props.title} className="container">
      <img src={props.image} />
      <div className="ProjectTitle">{props.title}</div>
      <div className="DiscoverTxt">Discover</div>
    </Link>
  );
}
export default Project;
