import React from "react";

const Message = ({ variant, children }) => {
  let background;

  switch (variant) {
    case (variant = "error"):
      background = "bg-red-300";
      break;
    case (variant = "info"):
      background = "bg-yellow-300";
      break;
    case (variant = "success"):
      background = "bg-green-200";
      break;

    default:
      return;
  }

  return (
    <span className={`${background} rounded-md px-2 text-black`}>
      {children}
    </span>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
