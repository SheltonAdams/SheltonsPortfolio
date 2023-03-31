import React, { useRef, useEffect } from "react";
import "../Styles/heroStyles.css";
import { init } from "ityped";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../Images/heroImg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link as LinkS } from "react-scroll";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const HeroSection = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        "Shelton Adams",
        "an Aspiring Web Developer ",
        "a Content Creator",
        "a Real Estate Agent",
        "a Mentor",
      ],
    });
  }, []);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    "&:hover": {
      backgroundColor: grey[700],
    },
  }));
  const ColorCButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  }));

  return (
    <section className="hero-section" id="home">
      <Container className="body">
        <Row>
          <Col lg="6" md="6">
            <div className="hero-content">
              <p className="mb-3">Welcome to my world!</p>
              <h5 className="mb-4">Hi</h5>
              <h2 className="hero-title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                My name is Shelton Adams, and currently, I'm a Computer Programmer
                working for UPS remotely. I enjoy serving the
                local community as a mentor and have a passion for video games
                and web development.
              </p>
              <div className=" mt-2 hero-btns d-flex align-items-center gap-4">
                <ColorButton variant="contained">
                  <LinkS className="link" to="portfolio">
                    Hire Me
                  </LinkS>
                </ColorButton>
                <ColorCButton variant="contained">
                  <LinkS className="link" to="contact">
                    Contact
                  </LinkS>
                </ColorCButton>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero-img">
              <img src={HeroImg} alt="" className="w-75 img mb-5" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroSection;
