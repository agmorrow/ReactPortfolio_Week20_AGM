import "./projectList.css";
import { Portfolio } from "../portfolio/Portfolio"
import {projects} from "../../data";

const ProjectList = ({}) => {
  return (
    <div className="projectList">
        <div className="texts">
          <h1 className="title">My Portfolio</h1>
          <p className="description">
            lorem ipsum dolor sit amet, consectetur adip
          </p>
        </div>
        <div className="list">
          {projects.map((item) => (
            <Portfolio key={item.id} img={item.img} link={item.link}/>
          ))};
        </div>
    </div>
  )
}

export default ProjectList;