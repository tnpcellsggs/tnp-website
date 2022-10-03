import React, { useEffect } from "react";

import PGraph from "./PGraph";
import PList from "./PList";
import { yearwiseSummary } from "./PData";

const PTable = () => {
  return (
    <div className="p-table">
      <table>
        <tr>
          <th>Year</th>
          <th>BTech on roll</th>
          <th>BTech placed</th>
          <th>Average Package (LPA)</th>
          <th>Package Range (LPA)</th>
        </tr>
        {yearwiseSummary.map((i) => {
          return (
            <tr>
              <td>{i["Year"]}</td>
              <td>{i["BTech on roll"]}</td>
              <td>{i["BTech placed"]}</td>
              <td>{i["Average Package (LPA)"]}</td>
              <td>{i["Package Range (LPA)"]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default function Placements() {
  useEffect(() => {
    document.title = "Placements | SGGS Training & Placement";
  }, []);

  return (
    <>
      <h1 className="homepage-headings">Placement Records</h1>
      <PGraph />
      <PTable />
      <PList />
    </>
  );
}
