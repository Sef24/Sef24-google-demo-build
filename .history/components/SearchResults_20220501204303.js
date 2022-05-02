import React from "react";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[7%] md:pl[15%] lg:pl-52">
      <p className="text-slate-600 mb-5 mt-4 text-sm">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
        </div>
    </div>
  );
}

export default SearchResults;
