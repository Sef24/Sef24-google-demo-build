import React from "react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/solid";

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
    </div>
  );
}

export default PaginationButtons;
