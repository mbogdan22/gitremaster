import React from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="Contact">
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
  );
}

export default Contact;
