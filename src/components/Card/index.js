import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className={`card ${props["data-value"]}`} 
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
      onClick={props.handleBtnClick}
      {...props}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}

    </div>
  );
}

export default Card;
