import React, { useContext, useState } from "react";

import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { DataContext } from "../../contexts/DataContext";

function Chart() {
  const { dailyData, data, contry } = useContext(DataContext);

  let modifyDailyData = { confirmed: [], deaths: [], reportDate: [] };
  if (dailyData.length) {
    modifyDailyData = dailyData.reduce(
      (object, el) => {
        return (object = {
          ...object,
          confirmed: [...object.confirmed, el.confirmed.total],
          deaths: [...object.deaths, el.deaths.total],
          reportDate: [
            ...object.reportDate,
            new Date(el.reportDate).toDateString(),
          ],
        });
      },
      { confirmed: [], deaths: [], reportDate: [] }
    );
  }

  const { confirmed, deaths, reportDate } = modifyDailyData;
  const LineChart =
    confirmed.length && deaths.length && reportDate.length ? (
      <Line
        data={{
          labels: reportDate,
          datasets: [
            {
              backgroundColor: "rgba(0,0,255,0.1)",
              borderColor: "#3333ff",
              fill: true,
              label: "infected",
              data: confirmed,
            },
            {
              label: "deaths",
              fill: true,
              data: deaths,
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.1)",
            },
          ],
        }}
      />
    ) : (
      "loading"
    );
  const confirmedBar = data.confirmed;
  const deathsdBar = data.deaths;
  const recovereddBar = data.recovered;
  console.log(recovereddBar);

  const BarChart = confirmedBar ? (
    <Bar
      data={{
        labels: ["Infected", "Recovred", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              " rgba(0, 0, 255, 0.5)",
              " rgba(0, 255, 0, 0.5)",
              " rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmedBar.value, recovereddBar.value, deathsdBar.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${contry}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{contry ? BarChart : LineChart}</div>
  );
}

export default Chart;
