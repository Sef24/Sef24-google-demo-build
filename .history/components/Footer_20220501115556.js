import { GlobeIcon } from "@heroicons/react/solid";

import React from "react";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-zinc-100 shadow-xl text-slate-500 text-sm">
      <div className="">
        <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon Neutral since
        2007
      </div>
    </footer>
  );
}

export default Footer;