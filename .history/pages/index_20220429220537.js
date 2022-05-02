import Head from "next/head";
import Image from "next/image";
import SignIn from "../components/SignIn";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header> */}

      <header className="flex w-full p-5 justify-between text-gray-700 font-medium">
        {/* Left Side */}
        <div className="flex space-x-3 items-center text-sm ">
          <p className="joint">About</p>
          <p className="joint">Store</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-3 items-center text-sm ">
          <p className="joint">Gmail</p>
          <p className="joint">Images</p>

          {/*Icon*/}

          {/* avatar signin */}

          <div className="border-2 pl-3 pr-3 rounded-sm text-xs">
            <SignIn />
          </div>
        </div>
      </header>

      {/* <Body> */}

      {/* <Footer> */}
    </div>
  );
}
