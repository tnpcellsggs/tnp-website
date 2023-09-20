import React from "react";
import { Container } from "react-bootstrap";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    year: "AY 13/14",
    "Under Graduate": 220,
    "Post Graduate": 25,
    Total: 245,
  },
  {
    year: "AY 14/15",
    "Under Graduate": 336,
    "Post Graduate": 19,
    Total: 355,
  },
  {
    year: "AY 15/16",
    "Under Graduate": 377,
    "Post Graduate": 12,
    Total: 389,
  },
  {
    year: "AY 16/17",
    "Under Graduate": 255,
    "Post Graduate": 19,
    Total: 274,
  },
  {
    year: "AY 17/18",
    "Under Graduate": 211,
    "Post Graduate": 14,
    Total: 225,
  },
  {
    year: "AY 18/19",
    "Under Graduate": 235,
    "Post Graduate": 19,
    Total: 254,
  },
  {
    year: "AY 19/20",
    "Under Graduate": 239,
    "Post Graduate": 12,
    Total: 251,
  },
  {
    year: "AY 20/21",
    "Under Graduate": 306,
    "Post Graduate": 29,
    Total: 335,
  },
  {
    year: "AY 21/22",
    "Under Graduate": 412,
    "Post Graduate": 19,
    Total: 431,
  },
  {
    year: "AY 22/23",
    "Under Graduate": 417,
    "Post Graduate": 0,
    Total: 417,
  },
  {
    year: "AY 23/24",
    "Under Graduate": 17,
    "Post Graduate": 0,
    Total: 17,
  }
];

export default function PGraph() {
  return (
    <>
      <Container style={{ textAlign: "center" }} className="pl-graph" fluid>
        <div className="p-graph-container">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="linear" dataKey="Under Graduate" stroke="#8884d8" />
              <Line type="linear" dataKey="Post Graduate" stroke="#82ca9d" />
              <Line type="linear" dataKey="Total" stroke="#f29961" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
}
