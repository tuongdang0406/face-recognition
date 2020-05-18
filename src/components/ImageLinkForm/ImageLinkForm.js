import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{"Boooooooooooooooooooooooooooooooo"}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Link..."
          ></input>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-green">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
