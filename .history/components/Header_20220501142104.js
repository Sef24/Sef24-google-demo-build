import google from "../pages/images/google.png";
import Image from "next/image";
import Head from "next/head";

function Header() {
  return (
    <header>
      <Image src={google} height={40} width={200} classname="cursor-pointer" />
    </header>
  );
}

export default Header;
