// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const naviagte = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    naviagte("/");
  };
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Expense Tracker</h1>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/transactions" className="hover:underline">
            Transactions
          </Link>
          <Link to="/add-transaction" className="hover:underline">
            Add Transaction
          </Link>
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
