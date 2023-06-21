import React from "react";

// creates ProfileCard info, passing props into the function 
function ProfileCard(props) {
  return (
    <>
      <div>
        Title is : {props.title}
      </div>
      <div>Handle is: {props.handle}</div>
    </>
  );
}

export default ProfileCard;
