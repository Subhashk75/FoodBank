import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check if location.state exists and contains the id
    if (location.state && location.state.id) {
      setUserId(location.state.id);
    }
  }, [location.state]);

  return (
    <div className="homepage">
      <h1>Hello {userId ? userId : "Guest"}, Welcome to the Home Page!</h1>
      {userId ? (
        <p>
          You are logged in as user with ID: {userId}.{" "}
          <Link to="/profile">View Profile</Link>
        </p>
      ) : (
        <p>
          Please <Link to="/login">Login</Link> to access your profile.
        </p>
      )}
    </div>
  );
};

export default Home;
