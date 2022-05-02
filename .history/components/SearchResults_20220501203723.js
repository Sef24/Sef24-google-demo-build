import React from "react";

function SearchResults({ results }) {
  return (
    <div>
      <p className="text-slate-500">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
    </div>
  );
}

export default SearchResults;
