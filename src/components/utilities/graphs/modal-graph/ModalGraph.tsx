/*  eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ChartData, ChartOptions } from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

export interface IModalGraph {
  data: number[];
}

export interface IProcessedChartData {
  price: number;
  count: number;
}

const ModalGraph: React.FC<IModalGraph> = ({ data }) => {
  console.log(data);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const processedData = processData(data);

    setChartData({
      labels: processedData.map((item) => item.price),
      datasets: [
        {
          label: "Prices",
          data: processedData.map((item) => item.count),
          backgroundColor: "#4F46E5",
        },
      ],
    });
  }, [data]);

  const processData = (data: number[]): IProcessedChartData[] => {
    const counts: Record<number, number> = {};

    data.forEach((price) => {
      if (counts[price]) {
        counts[price]++;
      } else {
        counts[price] = 1;
      }
    });

    return Object.entries(counts)
      .map(([price, count]) => ({
        price: Number(price),
        count,
      }))
      .sort((a, b) => a.price - b.price);
  };

  const options: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Price",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const value = Number(context[0].label);
            return `Price: ${value}`;
          },
          label: (context) => {
            const value = Number(context.raw);
            return `Count: ${value}`;
          },
        },
      },
    },
  };

  // @ts-expect-error - not working correctly due to port of chart.js to react
  return <Bar data={chartData} options={options} className="flex-auto max-h-48" />;
};

export default ModalGraph;
