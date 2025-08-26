import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [txnData, setTxnData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch transaction on mount
  useEffect(() => {
    fetch(`/api/transactions/${id}`) 
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const { title, amount, type, category, date } = data.data;
          setTxnData({
            title,
            amount,
            type,
            category,
            date: new Date(date).toISOString().split("T")[0],
          });
        } else {
          setError("Transaction not found.");
        }
      })
      .catch(() => setError("Failed to fetch transaction."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTxnData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch(`/api/transactions/${id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(txnData),
  //   });

  //   const result = await res.json();
  //   if (result.success) {
  //     navigate("/");
  //   } else {
  //     setError("Failed to update transaction.");
  //   }
  // };

const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token"); // Adjust if using cookies or context

  try {
    const res = await axios(`/api/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // 🔐 Include token for auth
      },
      body: JSON.stringify(txnData),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      navigate("/");
    } else {
      setError(result.message || "Failed to update transaction.");
    }
  } catch (err) {
    console.error("Update error:", err);
    setError("Network or server error.");
  }
};



  if (loading) return <p className="text-center">Loading transaction...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Edit Transaction</h2>

      <label className="block mb-2">Title</label>
      <input
        name="title"
        value={txnData.title}
        onChange={handleChange}
        required
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <label className="block mb-2">Amount</label>
      <input
        type="number"
        name="amount"
        value={txnData.amount}
        onChange={handleChange}
        required
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <label className="block mb-2">Type</label>
      <select
        name="type"
        value={txnData.type}
        onChange={handleChange}
        required
        className="w-full mb-4 px-3 py-2 border rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <label className="block mb-2">Category</label>
      <input
        name="category"
        value={txnData.category}
        onChange={handleChange}
        required
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <label className="block mb-2">Date</label>
      <input
        type="date"
        name="date"
        value={txnData.date}
        onChange={handleChange}
        required
        className="w-full mb-6 px-3 py-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Update Transaction
      </button>
    </form>
  );
}
