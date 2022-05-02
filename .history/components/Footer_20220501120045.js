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
        <div>
          <p className="hover:underline">Advertising</p>
          <p className="hover:underline">Business</p>
          <p className="hover:underline">How Search works</p>
        </div>
        <div>
          <p className="hover:underline">Privacy</p>
          <p className="hover:underline">Terms</p>
          <p className="hover:underline">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
