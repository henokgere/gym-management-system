export default function AdminDashboard({ user }) {
  return (
    <div className="admin-dashboard">
      <h2>Welcome, {user?.name || "Admin"} 👋</h2>
      <p>This is your dashboard overview.</p>

      <section>
        <h3>Quick Stats</h3>
        <ul>
          <li>Total Members: {JSON.parse(localStorage.getItem("users")) ? Object.keys(JSON.parse(localStorage.getItem("users"))).length : 0}</li>
          <li>Active Trainers: {/* you can filter trainers later */}</li>
          <li>System Role: {user?.role}</li>
        </ul>
      </section>
    </div>
  );
}
