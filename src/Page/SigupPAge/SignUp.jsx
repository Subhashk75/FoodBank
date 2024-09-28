import React, { useState } from 'react';

const SignUp = () => {
  const [semail, setSEmail] = useState("");
  const [fname, setFname] = useState("");

  const [spassword, setSPassword] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Email:", email, "Password:", password);
    // Close dialog after login
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to open the dialog */}
      

      {/* The dialog element */}
      {isOpen && (
        <div>
            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
                <label htmlFor="fname" className="block text-sm text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  value={semail}
                  onChange={(e) => setSEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm text-gray-700">
                  Password:
                </label>
                <br/>
                <input
                  type="password"
                  id="password"
                  value={spassword}
                  onChange={(e) => setSPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Login
                </button>

                {/* Button to close the dialog */}
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
