import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import "../Styles/contact.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import Map from "../components/Map";
const aws = require("aws-sdk");
let s3 = new aws.S3({
  GoogleApiKey: process.env.REACT_APP_GOOGLE_API,
});
const secretEmailKey = process.env.REACT_APP_SECRET_KEY;
init(secretEmailKey);
const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};
function Contact() {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dezrnso", "template_msdmiyx", e.target, secretEmailKey)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  }));
  return (
    // Say Hello Grid

    <Grid
      id="contact"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6}>
        <form action="" onSubmit={sendEmail}>
          <div className="formWord">
            <h2>Say Hello</h2>
            <p>
              I'm interested in freelance opportunities -large or small
              projects. However, if you have other request or questions, don't
              hesitate to reach out.
            </p>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <input
                  className="input100"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  className="input100"
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="input100"
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <textarea
                  placeholder="Message"
                  name="message"
                  className="input100"
                  required
                ></textarea>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <button className="btn">Submit</button>
            </Grid>
            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </form>
      </Grid>
      <Grid item xs={6}>
        <div className="map">
          <Map />
        </div>
      </Grid>
    </Grid>
  );
}

export default Contact;
