// import axios from '../utils/api';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AuthPage() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/login', formData);
//       localStorage.setItem('token', response.data.token); // Save token
//       navigate('/dashboard'); // Redirect to dashboard
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <input
//         type="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         className="border p-2 mb-2 w-full"
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 w-full">
//         Login
//       </button>
//     </form>
//   );
// }

// ==============================

// import { useState } from 'react';
// import axios from '../utils/api';
// import { useNavigate } from 'react-router-dom';

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
//   const [formData, setFormData] = useState({ username: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
//       const response = await axios.post(endpoint, formData);

//       if (isLogin) {
//         localStorage.setItem('token', response.data.token); // Save JWT token
//         navigate('/dashboard'); // Redirect to dashboard after login
//       } else {
//         alert('Registration successful! Please log in.');
//         setIsLogin(true); // Switch to login form after registration
//       }
//     } catch (error) {
//       console.error(isLogin ? 'Login failed' : 'Registration failed', error);
//       alert(isLogin ? 'Invalid credentials' : 'Registration failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>

//         {/* Username Field (only for registration) */}
//         {!isLogin && (
//           <input
//             type="text"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//             className="border p-2 mb-2 w-full"
//             required
//           />
//         )}

//         {/* Email Field */}
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="border p-2 mb-2 w-full"
//           required
//         />

//         {/* Password Field */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           className="border p-2 mb-4 w-full"
//           required
//         />

//         {/* Submit Button */}
//         <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
//           {isLogin ? 'Login' : 'Register'}
//         </button>

//         {/* Toggle Between Login and Register */}
//         <p className="mt-4 text-center">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}
//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-500 ml-2"
//           >
//             {isLogin ? 'Register' : 'Login'}
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }

// ==========================
import { useState } from 'react';
import axios from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(endpoint, formData);

      if (isLogin) {
        const token = response.data.data.token; // Ensure the token is extracted correctly
        localStorage.setItem('token', token);
        console.log('Token saved in localStorage:', token); // Debugging log
        navigate('/dashboard');
      } else {
        alert('Registration successful! Please log in.');
        setIsLogin(true);
      }
    } catch (error) {
      console.error(isLogin ? 'Login failed' : 'Registration failed', error);
      alert(isLogin ? 'Invalid credentials' : 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="border p-2 mb-2 w-full"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 mb-2 w-full"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border p-2 mb-4 w-full"
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          {isLogin ? 'Login' : 'Register'}
        </button>

        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-2"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}