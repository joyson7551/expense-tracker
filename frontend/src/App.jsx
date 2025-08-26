// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import AuthPage from "./pages/AuthPage";
// import DashboardPage from "./pages/DashboardPage";
// import TransactionsPage from "./pages/TransactionsPage";
// import AddTransactionPage from "./pages/AddTransactionPage";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/" element={<AuthPage />} />
//           <Route path="/dashboard" element={<DashboardPage />} />
//           <Route path="/transactions" element={<TransactionsPage />} />
//           <Route path="/add-transaction" element={<AddTransactionPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// =========================

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import AddTransactionPage from "./pages/AddTransactionPage";
import ProtectedRoute from "./components/ProtectedRoute";
import EditTransaction from "./pages/EditTransaction";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<AuthPage />} />{" "}
          {/* Default route for auth */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <TransactionsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-transaction"
            element={
              <ProtectedRoute>
                <AddTransactionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-transaction/:id"
            element={
              <ProtectedRoute>
                <EditTransaction />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
