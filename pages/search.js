import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.searchTerm} - Google Search</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;
export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.searchTerm}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
//const data = await fetch(
//  `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${context.query.q}`
