import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/inctagram.png";
import projImg2 from "../assets/img/social-networks-icon-outline-style-vector-24974798.jpg";
import projImg3 from "../assets/img/Lerning Cards.png";
import projImg4 from "../assets/img/todolists.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Learning cards",
      description: "This application provides a means for efficient learning through the use of flashcards.",
      imgUrl: projImg3,
      link: 'https://learning-cards-beige.vercel.app'
    },
    {
      title: "Social Network",
      description: "This is my first project.",
      imgUrl: projImg2,
      link: 'https://github.com/Ustin4/Social'
    },
    {
      title: "Inctagram",
      description: "It's something like Instagram.",
      imgUrl: projImg1,
      link: 'https://incta.online/ru/public-page'
    },
    {
      title: "Todolist",
      description: "TodoList app is a simple and convenient tool for task management. It helps you organize your tasks, create a task list, and track their completion.",
      imgUrl: projImg4,
      link: 'https://todolists-omega.vercel.app/login'
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
            
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* <Tab.Pane eventKey="first"> */}
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
