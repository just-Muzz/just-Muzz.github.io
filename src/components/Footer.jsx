import { Col, Container, Row } from 'react-bootstrap';
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import "../assets/styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="flex">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muzzammil-idris" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://twitter.com/just_Muzz" target="_blank"><img src={navIcon2} alt="Twitter" /></a>
              <a href="https://github.com/just-Muzz/" target="_blank"><img src={navIcon3} alt="Github" /></a>
              <a href="mailto:idrisking759@gmail.com" target="_blank"><img src={navIcon4} alt="Mail" /></a>
            </div>
            <p>Muzzammil Idris</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer