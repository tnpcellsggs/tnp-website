import React from "react";
import { y1415, y1516, y1617, y1718, y1819, y1920 } from "./PData.jsx";
import { Container } from "react-bootstrap";

import YearData from "./YearData";

export default function PList() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h3>
          Year-wise Placement Record{" "}
          <span style={{ fontSize: "15px" }}>(Click to expand)</span>
        </h3>
        <YearData label="2014-2015" senddata={y1415} />
        <YearData label="2015-2016" senddata={y1516} />
        <YearData label="2016-2017" senddata={y1617} />
        <YearData label="2017-2018" senddata={y1718} />
        <YearData label="2018-2019" senddata={y1819} />
        <YearData label="2019-2020" senddata={y1920} />
      </Container>
    </>
  );
}