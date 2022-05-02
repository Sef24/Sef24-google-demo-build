import google from "../pages/images/google.png";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  CogIcon,
  SearchIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/solid";
import SignIn from "./SignIn";

function Header() {
  const router = useRouter();
  const searchBarInputRef = useRef(null); // ref to the search bar input

  const search = (event) => {
    event.preventDefault();

    const searchTerm = searchBarInputRef.current.value;
    if (!searchTerm) return;
    router.push(`/search?q=${searchTerm}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={google}
          height={50}
          width={130}
          onClick={() => router.push("/")} // when the image is clicked, go to the homepage
          className="cursor-pointer"
        />

        <form
          className="flex flex-grow  px-5 py-2 ml-10 mr-5 first-line:border border-zinc-200 
            rounded-full shadow-lg max-w-3xl items-center "
        >
          <input
            type="text"
            ref={searchBarInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-5 text-slate-500 cursor-pointer 
        transition duration-75 transform hover:scale-110 sm:mr-3"
            onClick={() => (searchBarInputRef.current.value = "")} // when the X is clicked, clear the search bar
          />

          <SearchIcon // hidden by deault, only comes in sm breakpoint
            className="h-5 text-blue-500 border-l-2 pl-4 border-zinc-300
         hidden sm:inline-flex "
          />
          <button type="submit" hidden onClick={search}>
            Search
          </button>
        </form>

        <div className="flex flex-row space-x-2 ml-28">
          <CogIcon className="h-5 text-slate-600" />
          <ViewGridIcon className="h-5 text-slate-600 ml-2" />
        </div>

        <SignIn />
      </div>
    </header>
  );
}

export default Header;
