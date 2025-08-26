// import axios from '../utils/api';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AddTransactionPage() {
//   const [formData, setFormData] = useState({ title: '', amount: 0, type: 'income', category: '', date: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/transactions', formData);
//       navigate('/transactions'); // Redirect to transactions page
//     } catch (error) {
//       console.error('Error adding transaction:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <input
//         type="text"
//         placeholder="Title"
//         value={formData.title}
//         onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={formData.amount}
//         onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <select
//         value={formData.type}
//         onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       >
//         <option value="income">Income</option>
//         <option value="expense">Expense</option>
//       </select>
//       <input
//         type="date"
//         value={formData.date}
//         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 w-full">
//         Add Transaction
//       </button>
//     </form>
//   );
// }

// ====================================
// import axios from "../utils/api";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AddTransactionPage() {
//   const [formData, setFormData] = useState({
//     title: "",
//     amount: 0,
//     type: "income",
//     category: "",
//     date: "",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = localStorage.getItem("userId");

//       console.log("Submitting:", {
//         ...formData,
//         userId: localStorage.getItem("userId"),
//         amount: Number(formData.amount),
//       });

//       await axios.post("/api/transactions", {
//         ...formData,
//         userId,
//         date: formData.date || new Date(),
//         amount: Number(formData.amount),
//       });
//       navigate("/transactions"); // Redirect to transactions page
//     } catch (error) {
//       console.error(
//         "Error adding transaction:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <input
//         type="text"
//         placeholder="Title"
//         value={formData.title}
//         onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={formData.amount}
//         onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <select
//         value={formData.type}
//         onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       >
//         <option value="">Select Category</option>
//         <option value="Food">Food</option>
//         <option value="Transport">Transport</option>
//         <option value="Salary">Salary</option>
//       </select>
//       <input
//         type="date"
//         value={formData.date}
//         onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 w-full">
//         Add Transaction
//       </button>
//     </form>
//   );
// }

// //==========================
// import axios from '../utils/api';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AddTransactionPage() {
//   const [formData, setFormData] = useState({ 
//     title: '', 
//     amount: '', 
//     type: 'income', 
//     category: '', 
//     date: '' 
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Get user ID from auth context or localStorage
//       const userId = localStorage.getItem('userId');
      
//       // Prepare the data with proper types
//       const submissionData = {
//         title: formData.title.trim(),
//         amount: Number(formData.amount),
//         type: formData.type,
//         category: formData.category.trim(),
//         date: formData.date || new Date(),
//         userId
//       };

      
//       await axios.post('/api/transactions', submissionData);
//       console.log('Submitting:', submissionData); // Debug log
//       navigate('/transactions');
//     } catch (error) {
//       console.error('Error adding transaction:', error.response?.data || error.message);
//       alert(`Failed to add transaction: ${error.response?.data?.message || error.message}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
//       <div className="mb-4">
//         <label className="block mb-1">Title</label>
//         <input
//           type="text"
//           placeholder="Transaction title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border p-2 w-full rounded"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Amount</label>
//         <input
//           type="number"
//           placeholder="0.00"
//           value={formData.amount}
//           onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//           className="border p-2 w-full rounded"
//           min="0"
//           step="0.01"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Type</label>
//         <select
//           value={formData.type}
//           onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//           className="border p-2 w-full rounded"
//           required
//         >
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Category</label>
//         <input
//           type="text"
//           placeholder="e.g., Food, Salary, Transport"
//           value={formData.category}
//           onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//           className="border p-2 w-full rounded"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Date</label>
//         <input
//           type="date"
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//           className="border p-2 w-full rounded"
//         />
//       </div>

//       <button 
//         type="submit" 
//         className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded"
//       >
//         Add Transaction
//       </button>
//     </form>
//   );
// }

// ==========================
import axios from '../utils/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTransactionPage() {
  const [formData, setFormData] = useState({ 
    title: '', 
    amount: '', 
    type: 'income', 
    category: '', 
    date: '' 
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get userId from localStorage or decode from token if missing
      const token = localStorage.getItem('token');
      let userId = localStorage.getItem('userId');

      if (!userId && token) {
        try {
          const decoded = JSON.parse(atob(token.split('.')[1]));
          userId = decoded.id;
        } catch (err) {
          console.error('Failed to decode token:', err);
        }
      }

      // Prepare the data with proper types
      const submissionData = {
        title: formData.title.trim(),
        amount: Number(formData.amount),
        type: formData.type,
        category: formData.category.trim(),
        date: formData.date || new Date(),
        userId
      };

      await axios.post('/api/transactions', submissionData);
      console.log('Submitting:', submissionData);
      navigate('/transactions');
    } catch (error) {
      console.error('Error adding transaction:', error.response?.data || error.message);
      alert(`Failed to add transaction: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          placeholder="Transaction title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          placeholder="0.00"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="border p-2 w-full rounded"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="border p-2 w-full rounded"
          required
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Category</label>
        <input
          type="text"
          placeholder="e.g., Salary, Transport, Education"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="border p-2 w-full rounded"
        />
      </div>

      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}
