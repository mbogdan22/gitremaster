import React from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_mHOqMYiHwSuXex5QdIt9g");

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbyqyy8",
        "template_txed9ar",
        e.target,
        "user_mHOqMYiHwSuXex5QdIt9g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="Contact">
      <div>
        <img
          src="./images/editedMyPhoto.png"
          alt="photo of me"
          className="myPhoto"
        ></img>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com/gabrielbogdan.muraru.5/">
              Check out my facebook! <SiFacebook color="blue" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/m.g.bogdan/">
              Here is my instagram! <SiInstagram color="purple" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bogdan-muraru-b5a453138/">
              Watch more on linkedin! <SiLinkedin color="blue" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mbogdan22">
              My github! <SiGithub color="black" />
            </a>
          </li>
        </ul>
      </div>
      <div></div>

      <div className="email-container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
