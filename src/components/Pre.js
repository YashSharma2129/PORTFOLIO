import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <div className="preloader-content">
          <div className="preloader-logo">&lt;YS /&gt;</div>
          <div className="preloader-bar">
            <div className="preloader-bar-fill"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pre;
