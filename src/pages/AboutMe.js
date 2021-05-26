import React from "react";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div>
        <h3 className="aboutMeLeftWrite">I am an entry-level developer!</h3>
      </div>
      <div>
        <img
          src="./images/development.jpeg"
          alt="coding"
          className="photosAbout"
        ></img>
      </div>
      <div>
        <img
          src="./images/bogf.jpg"
          alt="going inside cage"
          className="photosAbout"
        ></img>
      </div>
      <div>
        <h3>I have a passion for full contact sports!</h3>
      </div>
      <div>
        <h3 className="aboutMeLeftWrite">I like cars!</h3>
      </div>
      <div>
        <img
          src="./images/nissansilvia.jpg"
          alt="car"
          className="photosAbout"
        ></img>
      </div>
      <div>
        <img src="./images/saint.jpg" alt="dog" className="photosAbout"></img>
      </div>
      <div className="bigDogsDiv">
        <h3 className="bigDogsDiv">And big dogs!</h3>
      </div>
    </div>
  );
}

export default AboutMe;
