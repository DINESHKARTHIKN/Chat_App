// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Link } from "react-router-dom";

// export const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { login, isLoggingIn } = useAuthStore();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(formData);
//   };

//   return (
//     <div className="h-screen grid lg:grid-cols-2 bg-gray-900 text-white">
//       {/* Left Side - Form */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* Heading */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-bold">Welcome Back</h1>
//             <p className="text-gray-400">Sign in to your account</p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="text-sm font-medium">Email</span>
//               </label>
//               <input
//                 type="email"
//                 className="input input-bordered w-full bg-gray-800 text-white border-gray-700"
//                 placeholder="you@example.com"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="text-sm font-medium">Password</span>
//               </label>
//               <input
//                 type="password"
//                 className="input input-bordered w-full bg-gray-800 text-white border-gray-700"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={isLoggingIn}
//             >
//               {isLoggingIn ? "Loading..." : "Sign in"}
//             </button>
//           </form>

//           <div className="text-center text-sm text-gray-400">
//             Don’t have an account?{" "}
//             <Link to="/signup" className="text-primary hover:underline">
//               Create account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // Make sure this import matches your file structure

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="login-container">
      {/* Left Side - Form */}
      <div className="login-form-container">
        <div className="login-form-card">
          {/* Heading */}
          <div className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-group">
              <label className="login-label">Email</label>
              <input
                type="email"
                className="login-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="login-form-group">
              <label className="login-label">Password</label>
              <input
                type="password"
                className="login-input"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Loading..." : "Sign in"}
            </button>
          </form>

          <div className="login-footer">
            Don’t have an account?{" "}
            <Link to="/signup" className="login-link">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
