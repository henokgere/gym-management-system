import { useEffect, useState } from "react";
import "./employeeDashboard.css";

export default function EmployeeDashboard({ user }) {
  const [stats, setStats] = useState({ members: 0, trainers: 0 });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const allUsers = Object.values(users);

    const membersCount = allUsers.filter((u) => u.role === "customer").length;
    const trainersCount = allUsers.filter((u) => u.role === "trainer").length;

    setStats({ members: membersCount, trainers: trainersCount });
  }, []);

  return (
    <div className="employee-dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {user?.name || "Employee"}</h2>
        <p>Here’s your workspace overview.</p>
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
      </section>

      <section className="quick-actions">
        <h3>Quick Actions</h3>
        <ul>
          <li>➕ Register a new member</li>
          <li>📋 View member list</li>
          <li>👨‍🏫 Check trainer assignments</li>
        </ul>
      </section>
    </div>
  );
}
