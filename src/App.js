import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

//this function shows what the user sees on the homepage of the app
function App() {
  return (
    <div>
      <div>Personal Digitial Assistant</div>
      <br></br>
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
      <br></br>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
      <br></br>
      <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
    </div>
  );
}

export default App;
