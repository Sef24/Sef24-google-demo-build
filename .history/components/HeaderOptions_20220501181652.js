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
    <div
      className="flex w-full text-slate-600 justify-evenly 
    lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] "
    >
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      <div className="flex">
        <p className="text-sm">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
