import React from "react";
//The refactoring was done by Griffin Wojtowicz.
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}
//The refactoring was done by Griffin Wojtowicz.
export default Jumbotron;
