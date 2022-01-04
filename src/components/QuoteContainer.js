import React from "react";

function QuoteContainer(props) {
  return (
    <div className="quote-container">
      <h2 id="text">
        <i className="fas fa-quote-left fa-lg"></i>
        {props.quo}
        <i className="fas fa-quote-right fa-lg"></i>
      </h2>
      <p id="author">{props.aut}</p>
    </div>
  );
}

export default QuoteContainer;
