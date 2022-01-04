import React from "react";

function NewButton(props) {
  return (
    <div>
      <button className="btn" id="new-quote" onClick={props.num}>
        New Quote
      </button>
    </div>
  );
}

export default NewButton;
