import React from "react";

// creates ProfileCard info, passing props into the function
// destructured props passed in as argument in function
function ProfileCard({ title, handle, image }) {
  return (
    <>
      <div>
        <img src={image} alt="pda logo"/>
        <div>Title is : {title}</div>
        <div>Handle is: {handle}</div>
      </div>
    </>
  );
}

export default ProfileCard;
