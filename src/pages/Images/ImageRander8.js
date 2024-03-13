import React from "react";
import Blog1 from "../../assetimage/business4.0.png";
import Blog2 from "../../assetimage/business4.2.png";
import Blog3 from "../../assetimage/business4.3.png";
import { useHistory } from "react-router-dom";

function ImageRender() {
  let history = useHistory();

  function handleClick() {
    history.push("/templates");
  }
  return (
    <div>
      <br></br>
      <br></br>
      <button
        type="button"
        className="btn btn-light btn1"
        onClick={handleClick}
      >
        Go Back
      </button>
      <div style={{ padding: "80px" }} className="container">
        <img style={{}} src={Blog1} width="100%" alt="blog" />
        <br></br>
        <br></br>
        <br></br>

        <img src={Blog2} width="100%" alt="blog" />
        <br></br>
        <br></br>
        <br></br>
        <img src={Blog3} width="100%" alt="blog" />
      </div>
    </div>
  );
}

export default ImageRender;
