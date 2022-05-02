import google from "../pages/images/google.png";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header>
      <Image src={google} height={50} width={130} onClick={} 
      classname="cursor-pointer" />
    </header>
  );
}

export default Header;
