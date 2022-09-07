import React from "react";
import "../../../css/Content/Content.css";
const Content = (props) => {
  return (
    <div className="content">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Content;
