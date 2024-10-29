import React, { useState } from 'react';
import '../LoginPage/Login.css';
import axios from 'axios';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset any previous errors
    
    try {
      const response = await axios.post("http://localhost:8000/api/v3/signup", {
        fullName,
        email,
        password
      });

      console.log("Successfully sent:", response.data);
      setIsDialogOpen(false); // Close dialog on successful signup
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      {/* Modal Dialog */}
      {isDialogOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-container bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}

            <form onSubmit={handleSubmit} method='POST' className="space-y-6">
              {/* Full Name Field */}
              <div className="email-login-box">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email Field */}
              <div className="email-login-box">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password Field */}
              <div className="password-login-box">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password:
                </label><br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Sign Up
                </button>

                {/* Close Dialog Button */}
                <button
                  onClick={closeDialog}
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Close
                </button>
              </div>
            </form>
            <p> Already a Member:<a href='/login'>login Here</a> </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
