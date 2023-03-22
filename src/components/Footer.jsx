import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/footer.css";
import { FooterLink } from "./FooterStyles";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div>
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

        <p>&copy; Shelton M Adams {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
