// import PropTypes from 'prop-types';

// FilterBar.propTypes = {
//   filters: PropTypes.shape({
//     startDate: PropTypes.string,
//     endDate: PropTypes.string,
//     category: PropTypes.string,
//   }).isRequired,
//   setFilters: PropTypes.func.isRequired,
// };

// export default function FilterBar({ filters, setFilters }) {
//   return (
//     <div className="mb-4">
//       <input
//         type="date"
//         value={filters.startDate}
//         onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//         className="border p-2 mr-2"
//       />
//       <input
//         type="date"
//         value={filters.endDate}
//         onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//         className="border p-2 mr-2"
//       />
//       <select
//         value={filters.category}
//         onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//         className="border p-2"
//       >
//         <option value="">All Categories</option>
//         <option value="Food">Food</option>
//         <option value="Travel">Travel</option>
//         <option value="Salary">Salary</option>
//       </select>
//     </div>
//   );
// }

//flexible catewgory without date
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../utils/api';

FilterBar.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default function FilterBar({ filters, setFilters }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/transactions/categories'); // Adjust this path to match your backend route
        setCategories(response.data || []);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mb-4 max-w-md mx-auto">
      <label className="block mb-1">Filter by Category</label>
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="border p-2 w-full rounded"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
