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

      {/* <Header> */}

      <header className="flex w-full px-5 py-1 justify-between text-gray-700 font-medium ">
        {/* Left Side */}
        <div className="flex space-x-3 items-center text-xs ">
          <p className="joint">About</p>
          <p className="joint">Store</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-3 items-center text-xs ">
          <p className="joint">Gmail</p>
          <p className="joint">Images</p>
          {/*Icon*/}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* avatar signin */}
          <SignIn />
        </div>
      </header>

      {/* <Body> */}
      <form className="flex flex-col items-center mt-28">
        <Image src={homepage} height={200} width={500} />

        <div
          className="flex w-full mt-5 hover:shadow-lg max-w-md rounded-full 
        border border-gray-200 px-5 py-2 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="text-gray-500 h-5 mr-3" />
          <input type="text" className="focus:outline-none flex-grow mt-3" />
          <MicrophoneIcon className="text-blue-500 h-5 ml-3" />
        </div>
      </form>

      {/* <Footer> */}
    </div>
  );
}
