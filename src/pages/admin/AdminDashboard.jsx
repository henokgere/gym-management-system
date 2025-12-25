import { useEffect, useState } from "react";
import "./adminDashboard.css";

export default function AdminDashboard({ user }) {
  const [stats, setStats] = useState({ members: 0, trainers: 0 });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const allUsers = Object.values(users);

    const membersCount = allUsers.filter((u) => u.role === "customer").length;
    const trainersCount = allUsers.filter((u) => u.role === "trainer").length;

    setStats({ members: membersCount, trainers: trainersCount });
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h2>Welcome back, {user?.name || "Admin"}</h2>
        <p>Here is an overview of your gym system.</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Total Members</h3>
          <p>{stats.members}</p>
        </div>
        <div className="stat-card">
          <h3>Active Trainers</h3>
          <p>{stats.trainers}</p>
        </div>
        <div className="stat-card">
          <h3>Your Role</h3>
          <p>{user?.role}</p>
        </div>
      </section>
    </div>
  );
}
