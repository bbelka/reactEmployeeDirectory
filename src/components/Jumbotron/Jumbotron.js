import React from "react";


function Jumbotron({ children }) {
  return (
    <div
      style={{ backgroundColor: "#1f6fd0", height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
