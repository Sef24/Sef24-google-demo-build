import google from "../pages/images/google.png";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";

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

      <form>
        <input type="text" ref={searchBarInputRef} className="flex-grow" />
      </form>
    </header>
  );
}

export default Header;
