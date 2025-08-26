// import axios from '../utils/api';
// import { useEffect, useState } from 'react';
// import TransactionList from '../components/TransactionList.jsx';
// import FilterBar from '../components/FilterBar';

// export default function TransactionsPage() {
//   const [filters, setFilters] = useState({ startDate: '', endDate: '', category: '' });
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const response = await axios.get('/api/transactions', { params: filters });
//       setTransactions(response.data);
//     };
//     fetchTransactions();
//   }, [filters]);

//   return (
//     <div className="p-4">
//       <FilterBar filters={filters} setFilters={setFilters} />
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// }

// //============================
// import axios from "../utils/api";
// import { useEffect, useState } from "react";
// import TransactionList from "../components/TransactionList.jsx";
// import FilterBar from "../components/FilterBar";

// export default function TransactionsPage() {
//   const [filters, setFilters] = useState({
//     startDate: "",
//     endDate: "",
//     category: "",
//   });
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await axios.get("/api/transactions", {
//           params: filters,
//         });
//         setTransactions(response.data.transactions || []);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//         setTransactions([]);
//       }
//     };
//     fetchTransactions();
//   }, [filters]);

//   return (
//     <div className="p-4">
//       <FilterBar filters={filters} setFilters={setFilters} />
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// }

//=============================
// import axios from "../utils/api";
// import { useEffect, useState } from "react";
// import TransactionList from "../components/TransactionList.jsx";
// import FilterBar from "../components/FilterBar";

// export default function TransactionsPage() {
//   const [filters, setFilters] = useState({
//     startDate: "",
//     endDate: "",
//     category: "",
//   });
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await axios.get("/api/transactions", {
//           params: filters,
//         });
//         setTransactions(response.data.transactions || []); // ✅ fixed: assuming response.data has a "transactions" array
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//         setTransactions([]);
//       }
//     };
//     fetchTransactions();
//   }, [filters]);

//   return (
//     <div className="p-4">
//       <FilterBar filters={filters} setFilters={setFilters} />
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// }

//========no date filter, only category
import axios from "../utils/api";
import { useEffect, useState } from "react";
import TransactionList from "../components/TransactionList.jsx";
import FilterBar from "../components/FilterBar";

export default function TransactionsPage() {
  const [filters, setFilters] = useState({category: ""});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("/api/transactions", {
          params: filters,
        });
        setTransactions(response.data.data || []); // ✅ fixed: assuming response.data has a "transactions" array
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactions([]);
      }
    };
    fetchTransactions();
  }, [filters]);

  return (
    <div className="p-4">
      <FilterBar filters={filters} setFilters={setFilters} />
      <TransactionList transactions={transactions} />
    </div>
  );
}
