import React from "react";

function HeaderOption(props) {
  return (
    <div className={`flex`}>
      <Icon className="h-4" />

      <p className="hidden sm:inline-flex">{props.title}</p>
    </div>
  );
}

export default HeaderOption;
