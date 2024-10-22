import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Added to disable submit after submission

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v3/login", {
          email,
          password
      });

      console.log("Successfully sent email:", response.data);
  } catch (error) {
      console.log("An error occurred:", error.message);
  }



    setIsSubmitted(true); // Disable the submit button
    setIsSubmitOpen(true); // Show the pop-up notification
    setIsDialogOpen(false);
    // Auto-close the pop-up after 3 seconds
    setTimeout(() => {
      setIsSubmitOpen(false);
    }, 1000);
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Close dialog when the button is clicked
  };

  const closePop_Up_Dialog = () => {
    setIsSubmitOpen(false); // Manually close the pop-up
  };

  return (
    <div>
      {/* Modal Dialog */}
      {isDialogOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-container bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  disabled={isSubmitted} // Disable after submission
                >
                  {isSubmitted ? "Submitting..." : "Login"}
                </button>

                {/* Close Dialog Button */}
                <button
                  onClick={closeDialog}
                  className="mt-4 ml-6 pl-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Close
                </button>
              </div>
            </form>

            {/* Submit Pop-up Notification */}
            {isSubmitOpen && (
              <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
                Form submitted successfully!
                <button
                  onClick={closePop_Up_Dialog}
                  className="mt-4 ml-6 pl-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
