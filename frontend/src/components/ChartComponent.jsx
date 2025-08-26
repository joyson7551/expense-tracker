// import { Bar, Pie } from 'react-chartjs-2';
// import PropTypes from 'prop-types'

// ChartComponent.propTypes = {
//   data: PropTypes.shape({
//     income: PropTypes.number.isRequired,
//     expense: PropTypes.number.isRequired,
//     categories: PropTypes.objectOf(PropTypes.number).isRequired,
//   }).isRequired,
// };

// export default function ChartComponent({ data }) {
//   const barData = {
//     labels: ['Income', 'Expense'],
//     datasets: [
//       {
//         label: 'Amount',
//         data: [data.income, data.expense],
//         backgroundColor: ['green', 'red'],
//       },
//     ],
//   };

//   const pieData = {
//     labels: Object.keys(data.categories),
//     datasets: [
//       {
//         data: Object.values(data.categories),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <h3>Income vs Expense</h3>
//         <Bar data={barData} />
//       </div>
//       <div>
//         <h3>Category Breakdown</h3>
//         <Pie data={pieData} />
//       </div>
//     </div>
//   );
// }

// ========================
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { Bar, Pie } from 'react-chartjs-2';
// import PropTypes from 'prop-types';
// import { useEffect, useRef } from 'react';

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// ChartComponent.propTypes = {
//   data: PropTypes.shape({
//     income: PropTypes.number.isRequired,
//     expense: PropTypes.number.isRequired,
//     categories: PropTypes.objectOf(PropTypes.number).isRequired,
//   }).isRequired,
// };

// export default function ChartComponent({ data }) {
//   const barChartRef = useRef(null);
//   const pieChartRef = useRef(null);

//   // Cleanup charts on unmount
//   useEffect(() => {
//     const barChartInstance = barChartRef.current;
//     const pieChartInstance = pieChartRef.current;

//     return () => {
//       if (barChartInstance) {
//         barChartInstance.destroy();
//       }
//       if (pieChartInstance) {
//         pieChartInstance.destroy();
//       }
//     };
//   }, []);

//   const barData = {
//     labels: ['Income', 'Expense'],
//     datasets: [
//       {
//         label: 'Amount ($)',
//         data: [data.income, data.expense],
//         backgroundColor: ['#4CAF50', '#F44336'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieData = {
//     labels: Object.keys(data.categories),
//     datasets: [
//       {
//         data: Object.values(data.categories),
//         backgroundColor: [
//           '#FF6384', '#36A2EB', '#FFCE56', 
//           '#4BC0C0', '#9966FF', '#FF9F40'
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//     },
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-3">Income vs Expense</h3>
//         <Bar 
//           ref={barChartRef}
//           data={barData} 
//           options={options}
//         />
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-3">Category Breakdown</h3>
//         <Pie
//           ref={pieChartRef}
//           data={pieData}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// }

// ================================
// 1. FIRST: Import React and other dependencies
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// 2. THEN: Import Chart.js and required components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// 3. IMMEDIATELY AFTER IMPORTS: Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
ChartComponent.propTypes = {
  data: PropTypes.shape({
    income: PropTypes.number.isRequired,
    expense: PropTypes.number.isRequired,
    categories: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default function ChartComponent({ data }) {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  // Cleanup charts on unmount
  useEffect(() => {
    const barChartInstance = barChartRef.current;
    const pieChartInstance = pieChartRef.current;

    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
      if (pieChartInstance) {
        pieChartInstance.destroy();
      }
    };
  }, []);

  const barData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Amount ($)',
        data: [data.income, data.expense],
        backgroundColor: ['#4CAF50', '#F44336'],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: Object.keys(data.categories),
    datasets: [
      {
        data: Object.values(data.categories),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', 
          '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Income vs Expense</h3>
        <Bar 
          ref={barChartRef}
          data={barData} 
          options={options}
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3">Category Breakdown</h3>
        <Pie
          ref={pieChartRef}
          data={pieData}
          options={options}
        />
      </div>
    </div>
  );
}