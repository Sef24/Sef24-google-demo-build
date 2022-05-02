import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = router.query.start || "0";

  return (
    <div>
      {startIndex >= 10 && (
        <Link
          href={`/Search?searchTerm=${router.query.term}&start=$(startIndex - 10)`}
        >
          <div>
            <ChevronLeftIcon />
            <p>Next</p>
          </div>
        </Link>
      )}

      <Link
        href={`/Search?searchTerm=${router.query.term}&start=$(startIndex + 10)`}
      >
        <div>
          <ChevronRightIcon />
          <p>Previous</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
