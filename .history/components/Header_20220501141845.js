import React from "react";
import google from "../pages/images/google.png";

function Header() {
  return (
    <header>
      <Image src={google} height={40} width={200} />
    </header>
  );
}

export default Header;
