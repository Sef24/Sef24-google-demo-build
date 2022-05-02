import Head from "next/head";
import Image from "next/image";
import SignIn from "../components/SignIn";
import { ViewGridIcon } from "@heroicons/react/solid";
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
      <form>
        <Image src={homepage} height={200} width={500} />

        <div>
          <SearchIcon />
        </div>
      </form>

      {/* <Footer> */}
    </div>
  );
}
