import React, { useEffect, useState } from "react";
import { BellOutline, UserOutline } from "@graywolfai/react-heroicons";
import { FaFacebook } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { enUS } from "date-fns/locale";

import {
  Chart,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  BarElement,
} from "chart.js";
import "chartjs-adapter-date-fns";
Chart.register(
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  BarElement
);
const postData = [
  { date: "2023-01-01", count: 5 },
  { date: "2023-01-02", count: 8 },
  { date: "2023-01-03", count: 14 },
  // Add more data points as needed
];

export const BarChart = ({
  data,
}: {
  data: { date: string; count: number }[];
}) => {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: "Number of Group Posts",
        backgroundColor: "rgba(75,192,192,0.4)", // Adjust the color as needed
        borderColor: "rgba(75,192,192,1)", // Adjust the color as needed
        borderWidth: 1,
        data: data.map((entry) => entry.count),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day", // Adjust the time unit as needed
          displayFormats: {
            day: "MM-dd", // Adjust the date format as needed
          },
        },
        title: {
          display: true,
          text: "Date",
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Posts",
        },
      },
    },
  };

  //@ts-ignore
  return <Bar data={chartData} options={chartOptions} />;
};

const Dashboard = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Example request to get user profile information
    fetch(
      `https://graph.facebook.com/v13.0/me?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoidXNlciIsImFjY291bnRJZCI6IjY1NTY4Njg4MGM0YmY4Mzg2MGJjZDhhYyIsImVtYWlsIjoib2hlbmVzZXR3dW1hc2lAZ21haWwuY29tIiwicHJvdmlkZXIiOiJzZWxmIiwibmJmIjoxNzAwNDgzNTM0LCJleHAiOjI5MTAwODM1MzQsImlhdCI6MTcwMDQ4MzUzNH0.aXJQ5ETwqTV2RDWGydF7f3FGdWmEZovZY6LyPOJhcAw`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("User profile:", data);
        // Handle the user profile data as needed
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);
  return (
    <div className=" bg-slate-100 min-h-screen">
      <nav className="px-6 md:px-20 h-14 flex items-center">
        <h1 className="text-bold text-2xl">Dashboard</h1>
        <div className="flex justify-between gap-6 ml-auto items-center">
          <div>
            <BellOutline className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <UserOutline className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </nav>
      <div className="bg-white px-6  py-4 md:px-20 ">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="mb-2">Monitoring</h2>

            <div className="bg-neutral-100 max-w-sm p-2">
              <h3 className="font-bold text-purple-800 text-lg">
                {" "}
                <span className="text-xl">3</span> groups
              </h3>
              <div className="flex items-center text-gray-500 gap-2">
                <FaFacebook size={20} />
                <span>John Barnes Oduro Twumasi</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-2">Post Statistics</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-neutral-100 text-center max-w-sm p-2">
                <h3 className=" text-neutral-400 text-md">Daily</h3>
                <span className="text-xl font-semibold text-purple-800">4</span>
              </div>
              <div className="bg-neutral-100 text-center max-w-sm p-2">
                <h3 className=" text-neutral-400 text-md">Weekly</h3>
                <span className="text-xl font-semibold text-purple-800">
                  22
                </span>
              </div>
              <div className="bg-neutral-100 text-center max-w-sm p-2">
                <h3 className=" text-neutral-400 text-md">Monthly</h3>
                <span className="text-xl font-semibold text-purple-800">
                  88
                </span>
              </div>
            </div>
          </div>
          <BarChart data={postData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
