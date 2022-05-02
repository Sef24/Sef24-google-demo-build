import React from "react";

function SignIn(props) {
  return (
    <div className="flex w-full px-5 py-1 justify-between text-gray-700 font-medium ">
      <button
        className="border-0 outline-blue-300 bg-blue-500 hover:opacity-90 px-5 py-2 
      rounded-md font-medium text-xs text-slate-50"
      >
        Sign in
      </button>
    </div>
  );
}

export default SignIn;
