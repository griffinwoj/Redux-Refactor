import React from "react";

// The ...props means, spread all of the passed props onto this element//The refactoring was done by Griffin Wojtowicz.
// That way we don't have to define them all individually//The refactoring was done by Griffin Wojtowicz.
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
//The refactoring was done by Griffin Wojtowicz.
export default DeleteBtn;
//The refactoring was done by Griffin Wojtowicz.