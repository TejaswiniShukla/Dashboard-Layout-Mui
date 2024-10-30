import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

// const options = {
//   chart: {
//     title: "Company Performance",
//     subtitle: "Sales and Expenses over the Years",
//   },
// };
const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
    bars: "vertical", // Required for Material Bar Charts.
    colors: ["#1b9e77", "#d95f02", "#7570b3"],
    bar: { groupWidth: "75%" },
    legend: { position: "bottom" },
  };
export default function MyChart() {
  return (
    <Chart
      chartType="Bar"
      data={data}
      options={options}
    />
  );
}
