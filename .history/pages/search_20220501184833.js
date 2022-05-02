import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";

function Search({ results }) {
  console.log(results);
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
export async function getServerSideProps(context) {
  const { searchTerm } = context.query;
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
  );
  const results = await res.json();
  return {
    props: {
      results,
    },
  };
}
//const data = await fetch(
//  `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${context.query.q}`
