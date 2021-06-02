import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";

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
      <div
        id="about-hiden-div"
        className="carousel-container"
        style={{
          width: "600px",
          margin: "auto",
          padding: "50px",
        }}
      >
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          <img src="./images/bogf.JPG" />
          <img src="./images/fighting.PNG" />
          <img src="./images/training.jpg" />
        </Carousel>
      </div>
      <div id="about-hiden-div">
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
