import { useEffect, useState } from "react";
import "./trainerDashboard.css";

export default function TrainerDashboard({ user }) {
  const [assignedMembers, setAssignedMembers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    // Example: filter members assigned to this trainer
    const membersList = Object.values(users).filter(
      (u) => u.role === "customer" && u.trainerId === user.uid
    );
    setAssignedMembers(membersList);
  }, [user]);

  return (
    <div className="trainer-dashboard">
      <header className="dashboard-header">
        <h2>Welcome, Coach <span className="name">{user?.name || "Trainer"}</span> 💪</h2>
        <p>Here’s your training overview.</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <h3>Assigned Members</h3>
          <p>{assignedMembers.length}</p>
        </div>
        <div className="stat-card">
          <h3>Your Role</h3>
          <p>{user?.role}</p>
        </div>
      </section>

      <section className="members-list">
        <h3>My Members</h3>
        {assignedMembers.length === 0 ? (
          <p>No members assigned yet.</p>
        ) : (
          <ul>
            {assignedMembers.map((m) => (
              <li key={m.uid}>
                {m.name} ({m.email}) — Member ID: {m.memberId}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
