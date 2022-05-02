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

      <header>
        {/* Left Side */}
        <div>
          <p>About</p>
          <p>Store</p>
        </div>
        {/* Right Side */}
        <div>
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>

      {/* <Body> */}

      {/* <Footer> */}
    </div>
  );
}
