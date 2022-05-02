import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  PlayIcon,
  SearchIcon,
  NewspaperIcon,
  PhotographIcon,
} from "@heroicons/react/solid";

function HeaderOptions() {
  return (
    <div>
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" />
      </div>

      <div className="flex">
        <p className="">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
