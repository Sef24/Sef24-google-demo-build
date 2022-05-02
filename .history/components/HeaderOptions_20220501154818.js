import React from "react";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div>
      <div className="flex space-x-6">
        <HeaderOption />
      </div>

      <div className="flex">
        <p className="">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
