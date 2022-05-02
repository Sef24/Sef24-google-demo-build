import { GlobeIcon } from "@heroicons/react/solid";

import React from "react";

function Footer() {
  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 bg-zinc-100 
    shadow-lg text-slate-500 text-sm "
    >
      <div className=" grid grid-cols-1">
        <div className="">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon Neutral since
          2007
        </div>
        <div className="flex justify-center spacing-x-8">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
