import React from "react";

function HeaderOption({ Icon, title, selected }) {
  return (
    <div className>
      <Icon className="h-4" />

      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
