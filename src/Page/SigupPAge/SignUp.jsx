import React, { useState } from 'react';
import '../LoginPage/Login.css';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add logic to handle login authentication here
    setIsDialogOpen(false); // Close dialog after login attempt
  };

  // const openDialog = () => {
  //   setIsDialogOpen(true);
  // };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      {/* Button to open the dialog */}
      {/* <button
        onClick={openDialog}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Open Login Dialog
      </button> */}

      {/* Modal Dialog */}
      {isDialogOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-container bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* userName field */}
              <div className="email-login-box">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  User Name :
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="mt-1 block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>


              {/* Email Field */}
              <div className="email-login-box">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address :
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
                  Password :
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
              className="mt-4 ml-6  w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Close
            </button>

              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
