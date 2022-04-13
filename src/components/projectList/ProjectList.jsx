import "./projectList.css";
import { Portfolio } from "../portfolio/Portfolio"
import {projects} from "../../data";

const ProjectList = ({}) => {
  return (
    <div className="projectList">
        <div className="texts">
          <h1 className="title">Portfolio</h1>
        </div>
        <div className="list">
          {projects.map((item) => (
            <Portfolio key={item.id} img={item.img} link={item.link} link2={item.link2} text={item.text}/>
          ))};
        </div>
    </div>
  )
}

export default ProjectList;