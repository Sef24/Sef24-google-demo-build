import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";

function Search() {
  return (
    <div>
      <Head>
        <title>Google Search</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}

export default Search;

export async function getStaticProps(context) {
  const useDummyData = false;

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.q}`
  );
}
