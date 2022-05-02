import Head from "next/head";
import Image from "next/image";
import SignIn from "../components/SignIn";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import homepage from "./images/homepage.png";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full px-5 py-1 justify-between text-gray-700 font-medium ">
        <div className="flex space-x-3 items-center text-xs ">
          <p className="joint">About</p>
          <p className="joint">Store</p>
        </div>

        <div className="flex space-x-3 items-center text-xs ">
          <p className="joint">Gmail</p>
          <p className="joint">Images</p>

          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <SignIn />
        </div>
      </header>

      <form className="flex flex-col items-center mt-28 flex-grow">
        <Image src={homepage} height={170} width={450} />

        <div
          className="flex w-full mt-10 hover:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="text-gray-500 h-5 mr-3" />
          <input type="text" className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="text-blue-500 h-5 ml-3" />
        </div>

        <div className="flex flex-col w-1/2 space-y-3 space-x-3 justify-center mt-6 sm:space-y-0 sm:flex-row sm-space-x-4">
          <button className="btn">Google Search</button>
          <button
            className="btn transition ease-out delay-150
            hover:animate-bounce duration-300 "
          >
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* <Footer> */}
    </div>
  );
}
