import React from "react";
import { useRouter } from "next/router";

function PaginationButtons() {
  const router = useRouter();

  const startIndex = router.query.start || "1";

  return <div>d</div>;
}

export default PaginationButtons;
