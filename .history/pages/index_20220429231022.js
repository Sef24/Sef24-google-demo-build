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
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          />
          {/* avatar signin */}
          <SignIn />
        </div>
      </header>

      {/* <Body> */}
      <form>
        <Image
          src="https://www.google.com/search?tbs=simg:CAQSgAEafgsQsIynCBpiCmAIAxIonRGPFJMKrRy9FKkKkAqwHKIRnhG9LIQk1zz_1I7grgySHJKMphCyKJxowHi_1quh3VQST1xDK1clkp8LC-x19-JqGuKpJPuOG_1qhfwpoKpWRDPd_1Oq1XrVUTYIIAQMCxCOrv4IGgoKCAgBEgStnLRbDA&tbm=isch&sa=X&ved=2ahUKEwiQ1I_H9Lr3AhUbomoFHRjyDqAQ2A4oAXoECAEQNA&biw=1396&bih=918&dpr=1#imgrc=G9-h3D7WkV4UiM"
          height={100}
          width={300}
        />
      </form>

      {/* <Footer> */}
    </div>
  );
}
