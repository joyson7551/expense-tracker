// import axios from '../utils/api';
// import { useEffect, useState } from 'react';
// import ChartComponent from '../components/ChartComponent';

// export default function DashboardPage() {
//   const [summary, setSummary] = useState({ income: 0, expense: 0 });

//   useEffect(() => {
//     const fetchSummary = async () => {
//       const response = await axios.get('/api/transactions/summary');
//       setSummary(response.data);
//     };
//     fetchSummary();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="bg-green-200 p-4 rounded">
//           <p>Total Income: ₹{summary.income}</p>
//         </div>
//         <div className="bg-red-200 p-4 rounded">
//           <p>Total Expense: ₹{summary.expense}</p>
//         </div>
//       </div>
//       <ChartComponent />
//     </div>
//   );
// }

//=================================

// import axios from "../utils/api";
// import { useEffect, useState } from "react";
// import ChartComponent from "../components/ChartComponent";

// export default function DashboardPage() {
//   const [summary, setSummary] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSummary = async () => {
//       try {
//         const response = await axios.get("/api/transactions/summary");
//         console.log('API Response:', response.data);
//         setSummary(response.data.data);
//       } catch (err) {
//         console.error('Error fetching summary:', err.response?.data || err.message);
//         setError("Failed to load summary data.");
//       }
//     };
//     fetchSummary();
//   }, []);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!summary) {
//     return <p>Loading...</p>; // Show loading state while fetching data
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="bg-green-200 p-4 rounded">
//           <p>Total Income: ₹{summary.income || 0}</p>
//         </div>
//         <div className="bg-red-200 p-4 rounded">
//           <p>Total Expense: ₹{summary.expense || 0}</p>
//         </div>
//       </div>
//       <ChartComponent data={summary} />
//     </div>
//   );
// }

//==============================
// import { useState, useEffect } from 'react';
// import axios from '../utils/api'; // Your API client
// import ChartComponent from '../components/ChartComponent';

// export default function DashboardPage() {
//   const [chartData, setChartData] = useState({
//     income: 0,
//     expense: 0,
//     categories: {}
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/transaction-summary');

//         // Transform API response to match ChartComponent's expected format
//         setChartData({
//           income: response.data.data.income || 0,
//           expense: response.data.data.expense || 0,
//           categories: response.data.data.categories || {}
//         });

//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // Set empty state if API fails
//         setChartData({
//           income: 0,
//           expense: 0,
//           categories: {}
//         });
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1>Financial Overview</h1>
//       {/* Pass the transformed data */}
//       <ChartComponent data={chartData} />

//       {/* Optional: Add loading state */}
//       {Object.keys(chartData.categories).length === 0 && (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

// ========================

import axios from "../utils/api";
import { useEffect, useState } from "react";
import ChartComponent from "../components/ChartComponent";

export default function DashboardPage() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);
  const { income = 0, expense = 0, categories = {} } = summary || {};

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get("/api/transactions/summary");
        console.log("API Response:", response.data);
        setSummary(response.data.data);
      } catch (err) {
        console.error(
          "Error fetching summary:",
          err.response?.data || err.message
        );
        setError("Failed to load summary data.");
      }
    };
    fetchSummary();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!summary) {
    return <p>Loading...</p>; // Show loading state while fetching data
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-200 p-4 rounded">
          <p>Total Income: ₹{summary.income || 0}</p>
        </div>
        <div className="bg-red-200 p-4 rounded">
          <p>Total Expense: ₹{summary.expense || 0}</p>
        </div>
      </div>
      <ChartComponent
        data={{
          income,
          expense,
          categories: Object.keys(categories).length
            ? categories
            : { "No Data": 1 },
        }}
      />
    </div>
  );
}
