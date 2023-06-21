import React from "react";

// creates ProfileCard info, passing props into the function
// destructured props passed in as argument in function 
function ProfileCard({title, handle}) {

  return (
    <>
      <div>Title is : {title}</div>
      <div>Handle is: {handle}</div>
    </>
  );
}

export default ProfileCard;
