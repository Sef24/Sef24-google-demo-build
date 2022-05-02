import React from "react";

function SearchResults({ results }) {
  return (
    <div>
      <p className="text-slate-600 mb-5 mt-4">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
    </div>
  );
}

export default SearchResults;
