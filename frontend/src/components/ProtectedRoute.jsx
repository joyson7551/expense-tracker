// import { Navigate } from 'react-router-dom';

// export default function ProtectedRoute({ children }) {
//   const token = localStorage.getItem('token'); // Check if user is logged in

//   if (!token) {
//     return <Navigate to="/" replace />; // Redirect to login if not authenticated
//   }

//   return children;
// }

// ======================
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token'); // Check if user is logged in

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login if not authenticated
  }

  return children;
}

// Define PropTypes for the `children` prop
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // `children` should be a valid React node
};