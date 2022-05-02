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
        <Link>
          <div>
            <ChevronLeftIcon />
          </div>
        </Link>
      )}

      <Link href={`/Search?searchterm=${router.query.term}&start=$(startIndex + 10)`}>
      <div>
        <ChevronRightIcon />
        <p>Previous</p>
      </div>
    </Link>
  </div>




    </div>
  );
}

export default PaginationButtons;
