import React from "react";

function Tweet(props) {
  const quote = `"${props.quo}" -${props.aut}`;
  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?text=${quote}`}
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
      >
        <i className="fa fa-twitter fa-3x"></i>
      </a>
    </div>
  );
}

export default Tweet;
