// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// TransactionList.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       amount: PropTypes.number.isRequired,
//       type: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };


// export default function TransactionList({ transactions }) {
//   return (
//     <div>
//       {/* Check if transactions exist */}
//       {transactions.length === 0 ? (
//         <p className="text-gray-500 text-center">No transactions found.</p>
//       ) : (
//         <ul className="space-y-4">
//           {transactions.map((transaction) => (
//             <li
//               key={transaction._id}
//               className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-bold">{transaction.title}</h3>
//                 <p className="text-sm text-gray-600">
//                   {new Date(transaction.date).toLocaleDateString()}
//                 </p>
//                 <p className={`text-lg font-semibold ₹{
//                   transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
//                 }`}>
//                   {transaction.type === 'income' ? '+' : '-'} ₹{transaction.amount}
//                 </p>
//                 <p className="text-sm text-gray-500">Category: {transaction.category}</p>
//               </div>
//               <div className="space-x-2">
//                 {/* Edit Button */}
//                 <Link
//                   to={`/edit-transaction/₹{transaction._id}`}
//                   className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                 >
//                   Edit
//                 </Link>
//                 {/* Delete Button */}
//                 <button
//                   onClick={() => handleDelete(transaction._id)}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// // Placeholder for delete functionality
// function handleDelete(id) {
//   console.log(`Delete transaction with ID: ₹{id}`);
//   // Call your API to delete the transaction here
// }

// ===============================

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default function TransactionList({ transactions = [] }) {
  return (
    <div>
      {/* Check if transactions exist */}
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions found.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction._id}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{transaction.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
                <p className={`text-lg font-semibold ₹{
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'} ₹{transaction.amount}
                </p>
                <p className="text-sm text-gray-500">Category: {transaction.category}</p>
              </div>
              <div className="space-x-2">
                {/* Edit Button */}
                <Link
                  to={`/edit-transaction/${transaction._id}`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(transaction._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Placeholder for delete functionality
function handleDelete(id) {
  console.log(`Delete transaction with ID: ${id}`);
  // Call your API to delete the transaction here
}