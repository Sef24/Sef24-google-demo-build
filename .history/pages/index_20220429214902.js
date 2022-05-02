import Head from "next/head";
import Image from "next/image";

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
          <p className="joint">>Store</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-3 items-center text-sm ">
          <p className="joint">>Gmail</p>
          <p>Images</p>

          {/*Icon*/}

          {/* avatar signin */}
        </div>
      </header>

      {/* <Body> */}

      {/* <Footer> */}
    </div>
  );
}
