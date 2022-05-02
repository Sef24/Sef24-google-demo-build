import Head from "next/head";
import Image from "next/image";
import SignIn from "../components/SignIn";
import { ViewGridIcon } from "@heroicons/react/solid";

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

          <ViewGridIcon className="w-8 h-8 p-1 rounded-full hover:bg-gray-300" />

          {/* avatar signin */}
          <SignIn />
        </div>
      </header>

      {/* <Body> */}

      {/* <Footer> */}
    </div>
  );
}
