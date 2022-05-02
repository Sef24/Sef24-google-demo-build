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

      <header className="flex w-full p-5 justify-between text-gray-800">
        {/* Left Side */}
        <div className="flex space-x-3 items-center text-sm ">
          <p>About</p>
          <p>Store</p>
        </div>

        {/* Right Side */}
        <div className="flex space-x-3 items-center text-sm ">
          <p>Gmail</p>
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
