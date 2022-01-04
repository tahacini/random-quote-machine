import React from "react";
import NewButton from "./NewButton";
import Tweet from "./Tweet";

function SocialContainer(props) {
  return (
    <div className="social-container">
      <Tweet quo={props.quo} aut={props.aut} />
      <NewButton num={props.getNum} />
    </div>
  );
}

export default SocialContainer;
