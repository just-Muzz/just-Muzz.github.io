import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import "../assets/styles/projects.css"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';


const Projects = () => {
  const projects = [
    {
      title: "Nu_Auto",
      description: "Static responsive automobile repair site",
      imgUrl: projImg1,
      repoUrl: "https://github.com/just-muzz/Nu_Auto",
      liveUrl: "https://just-muzz.github.io/Nu_Auto/",
    },
    {
      title: "Calculator",
      description: "Functional calculator",
      imgUrl: projImg2,
      repoUrl: "https://github.com/just-muzz/Calc-theme-toggler-",
      liveUrl: "https://just-muzz.github.io/Calc-theme-toggler-/",
    },
    {
      title: "Medium",
      description: "Cloning the landing page of Medium",
      imgUrl: projImg3,
      repoUrl: "https://github.com/just-muzz/Medium-clone",
      liveUrl: "https://just-muzz.github.io/Medium-clone",
    },
    {
      title: "Analog clock",
      description: "An analog clock",
      imgUrl: projImg3,
      repoUrl: "https://github.com/just-Muzz/Analog-clock",
      liveUrl: "https://just-muzz.github.io/Analog-clock/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <TrackVisibility>
            {({ isVisible }) =>
              <Col className={isVisible ? "animate__animated animate__pulse" : ""}>
                <h2>Projects</h2>
                <p>Here are some of my projects click on them to open them live or on github</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Github</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Live page</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <a href={project.repoUrl} size="12" className="col-md-4 col-sm-6" key={index} target="_blank">
                                <ProjectCard
                                  {...project}
                                />
                              </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <a href={project.liveUrl} size="12" className="col-md-4 col-sm-6" key={index} target="_blank">
                                <ProjectCard
                                  {...project}
                                />
                              </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Col>}
          </TrackVisibility>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects