import React from "react";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl[14%]">
      <p className="text-slate-600 mb-5 mt-4 text-sm">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
    </div>
  );
}

export default SearchResults;
