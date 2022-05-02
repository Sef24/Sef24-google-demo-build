import google from "../pages/images/google.png";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon } from "@heroicons/react/solid";

function Header() {
  const router = useRouter();
  const searchBarInputRef = useRef(null); // ref to the search bar input

  return (
    <header>
      <Image
        src={google}
        height={50}
        width={130}
        onClick={() => router.push("/")} // when the image is clicked, go to the homepage
        className="cursor-pointer"
      />

      <form
        className="flex border border-zinc-200 rounded-full shadow-lg max-w-3xl items-center 
      px-5 py-2 ml-10 mr-5 "
      >
        <input
          type="text"
          ref={searchBarInputRef}
          className="flex-grow w-full focus:outline-none"
        />
        <XIcon className="h-5 text-gray-500 cursor-pointer" />
      </form>
    </header>
  );
}

export default Header;
