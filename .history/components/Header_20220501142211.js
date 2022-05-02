import google from "../pages/images/google.png";
import Image from "next/image";
import Head from "next/head";

function Header() {
  return (
    <header>
      <Image src={google} height={50} width={120} classname="cursor-pointer" />
    </header>
  );
}

export default Header;
