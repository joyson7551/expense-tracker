// // import axios from 'axios';

// // const API_URL = import.meta.env.VITE_API_URL;

// // export default axios.create({
// //   baseURL: API_URL,
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// // });

// // =====================

// // import axios from 'axios';

// // const API_URL = import.meta.env.VITE_API_URL;

// // // Create an Axios instance with a base URL and default headers
// // const api = axios.create({
// //   baseURL: API_URL,
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// // });

// // // Add an interceptor to include the JWT token in the headers
// // api.interceptors.request.use((config) => {
// //   const token = localStorage.getItem('token'); // Retrieve the token from local storage
// //   console.log(`Token form localStorage:`,token)
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
// //     console.log(`Authorization Header:`,  config.headers.Authorization)
// //   }
// //   return config;
// // });

// // export default api;

// // ==============================

// import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   console.log('Token from localStorage:', token); // Debugging log
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//     console.log('Authorization Header:', config.headers.Authorization); // Debugging log
//   }
//   return config;
// });

// export default api;

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token automatically if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor for centralized error logging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;