import React from "react";
import "../Styles/portfolioStyles.css";
import Img1 from "../Images/Mapty.png";
import { FooterLink } from "../Styles/PortStyles";
import Img2 from "../Images/Img2.png";
import Img3 from "../Images/Img3.png";

function Portfolio() {
  return (
    <div id="portfolio" class="container">
      <h1 class="heading">Portfolio</h1>

      <div class="gallery">
        <div class="gallery-item">
          <h1>Running/cycling application using API</h1>
          <FooterLink href="https://sheltonadams.github.io/Mapty/">
            <img class="gallery-image" src={Img1} alt="mapty" />
          </FooterLink>
        </div>

        <div class="gallery-item">
          <h1>
            My take on a VPN website with sign in page. For portfolio use only
            links purposely do not work within app. Front end practice.
          </h1>
          <FooterLink href="https://sheltonadams.github.io/reesevpn/">
            <img class="gallery-image" src={Img3} alt="Reese VPN" />
          </FooterLink>
        </div>

        <div class="gallery-item">
          <h1>
            My take on a crypto website like Coinbase with sign in page. For
            portfolio use only links purpsely do not work within app. Front end
            practice using React.
          </h1>
          <FooterLink href="https://sheltonadams.github.io/pcoin/">
            <img class="gallery-image" src={Img2} alt="pCoin" />
          </FooterLink>
        </div>

        <div class="gallery-item">
          <h1>
            A frontend/backend website for you to post your secrets. I built
            this using MongoDB, JavaScript, and CSS. This application uses a
            local host so, please use npm I once you download from my git hub
            repository https://github.com/SheltonAdams
          </h1>
          <FooterLink href="https://secretsappsa.herokuapp.com/">
            <img
              class="gallery-image"
              src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
              alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
            />
          </FooterLink>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
