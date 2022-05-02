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

      <Link>
        <div>
          <ChevronRightIcon />
          <p>Previous</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
