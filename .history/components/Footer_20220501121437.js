import { GlobeIcon } from "@heroicons/react/solid";

import React from "react";

function Footer() {
  return (
    <footer
      className="grid w-full divide-y-[1px] divide-gray-300 bg-zinc-100 
    shadow-lg text-slate-500 text-sm p-3"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 grid-flow-row-dense">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon Neutral since
          2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
