import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { FooterLink } from "../components/FooterStyles";
import "../Styles/footer.css";
import HeroImg from "../Images/heroImg.jpg";
import "../Styles/about.css";
import Education from "../pages/Education";
import Skills from "./Skills";
import Reviews from "../components/Reviews";
import "../Styles/reviews.css";

function About() {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container className="wContainer">
        <Row>
          <Col lg="12" className="mb-3 mt-5">
            <h2 className="abtMe">About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about-btns d-flex flex-column align-items-center">
              <button
                className={`about-btn ${
                  aboutFilter === "ABOUT" ? "about-btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about-btn ${
                  aboutFilter === "EDUCATION" ? "about-btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about-btn ${
                  aboutFilter === "SKILLS" ? "about-btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about-btn ${
                  aboutFilter === "REVIEWS" ? "about-btn-active" : ""
                }`}
                onClick={() => setAboutFilter("REVIEWS")}
              >
                Reviews
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about-content-wrapper d-flex gap-2">
                <div className="about-img w-25">
                  <img src={HeroImg} alt="" className="w-100 img-about" />
                </div>
                <div className="about-content w-75">
                  <h2>
                    <span className="">I'm Shelton Adams</span>
                  </h2>
                  <p>
                    I'm a results-driven individual with years of study hours
                    and an associate's degree in computer forensics. To further
                    my Knowledge of Front-End/Back-End I have completed the App
                    Brewery's 12-week Boot-Camp course. Taught by Dr. Angela Yu
                    and 300 + studied hours with Udemy Certifications within the
                    past year. I am looking to become a valued team member of a
                    web development team. Let's build{" "}
                    <span>something extraordinary!</span>
                  </p>
                  <div className="social-links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <FooterLink href="https://github.com/SheltonAdams">
                      <GitHubIcon />
                    </FooterLink>
                    <FooterLink href="https://instagram.com/SheltonAdamsrealty/">
                      <InstagramIcon />
                    </FooterLink>

                    <FooterLink href="https://facebook.com/sheltonadamsrealty">
                      <FacebookIcon />
                    </FooterLink>

                    <FooterLink href="https://linkedin.com/in/sheltonadamsrealty">
                      <LinkedInIcon />
                    </FooterLink>
                  </div>
                </div>
              </div>
            )}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "REVIEWS" && <Reviews />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
