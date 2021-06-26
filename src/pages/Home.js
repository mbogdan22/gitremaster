import React from "react";
import Typical from "react-typical";

function Home() {
  return (
    <div className="Home">
      <h1>Hi, I'm Muraru Bogdan!</h1>
      <p>
        I'm a{"   "}
        <Typical
          loop={1}
          wrapper="b"
          steps={[
            "DEVELOPER!",
            2000,
            "CLASSIC CAR LOVER!",
            2000,
            "FIGHTER!",
            2000,
          ]}
        />
      </p>
    </div>
  );
}

export default Home;
