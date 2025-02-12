import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!isAuthenticated || !storedUser) {
      alert("You must be logged in!");
      navigate("/"); // Redirect to login
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isAuthenticated"); // Remove auth status
      navigate("/"); // Redirect to login
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center">Welcome, {user?.name}!</h2>
        <p className="text-center">Your Email: {user?.email}</p>
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
