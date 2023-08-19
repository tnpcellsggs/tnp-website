import React, { useState, useRef } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function YearData(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentdiv = useRef();

  return (
    <>
      <div className="p-collapsible">
        <button onClick={() => setIsOpen(!isOpen)}>{props.label}</button>
        <div
          className="p-content"
          ref={contentdiv}
          style={
            isOpen
              ? { height: contentdiv.current.scrollHeight + "px" }
              : { height: "0px" }
          }
        >
          <div className="p-parent">
            <ResponsiveContainer height={300} width="100%">
              <BarChart
                data={props.senddata}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 50,
                }}
              >
                <XAxis dataKey="dept" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Undergrad Total" stackId="a" fill="#8884d8" />
                <Bar dataKey="Undergrad Placed" stackId="a" fill="#aaa6fa" />
              </BarChart>
            </ResponsiveContainer>
            <ResponsiveContainer height={300} width="100%">
              <BarChart
                data={props.senddata}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 50,
                }}
              >
                <XAxis dataKey="dept" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Postgrad Total" stackId="b" fill="#82ca9d" />
                <Bar dataKey="Postgrad Placed" stackId="b" fill="#a4ecaf" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
