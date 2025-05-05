// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// export const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validationForm =() =>{
//     if(!formData.fullName.trim()) return toast.error("Full name is required");
//     if(!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

//     return true
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const success = validationForm()
//     if(success === true) signup(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 text-white">
//       <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium">Full Name</label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
//               value={formData.fullName}
//               onChange={(e) =>
//                 setFormData({ ...formData, fullName: e.target.value })
//               }
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
//               value={formData.password}
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
//             disabled={isSigningUp}
//           >
//             {isSigningUp ? "Creating Account..." : "Create Account"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-400">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-400 hover:underline">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./SignupPage.css"; // Make sure this import matches your file structure

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validationForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validationForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create Account</h1>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-form-group">
            <label className="signup-label">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="signup-input"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="signup-form-group">
            <label className="signup-label">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="signup-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="signup-form-group">
            <label className="signup-label">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="signup-input"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="signup-button"
            disabled={isSigningUp}
          >
            {isSigningUp ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
