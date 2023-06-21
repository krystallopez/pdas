import React from "react";
import ProfileCard from "./ProfileCard";

//this function shows what the user sees on the homepage of the app
function App() {
  return (

   <div>
    <div>Personal Digitial Assistant</div>
    <br></br>
    <ProfileCard  title="Alexa" handle="@alexa99"/>
    <br></br>
    <ProfileCard title="Cortana" handle="@cortana32"/>
    <br></br>
    <ProfileCard  title="Siri" handle="@siri01"/>
   </div>

  );
}

export default App;