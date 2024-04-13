import { Col } from "react-bootstrap";
import './Projects.css';

export const ProjectCard = ({ title, description, imgUrl, link }) => {

  const handleClick = () => {
    window.location.href = link;
}

  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleClick}>
          <img src={imgUrl} className="project-image"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
    </Col>
  );
};
