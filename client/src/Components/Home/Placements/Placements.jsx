import React, { useEffect } from "react";

import PGraph from "./PGraph";
import PList from "./PList";

export default function Placements() {
  useEffect(() => {
    document.title = "Placements | SGGS Training & Placement";
  }, []);
  return (
    <>
      <h1 className="homepage-headings">Placement Records</h1>
      <PGraph />
      <PList />
    </>
  );
}
