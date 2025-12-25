import { useState } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MembersPage from "../pages/admin/MembersPage";
import TrainersPage from "../pages/admin/TrainersPage";
import Logout from "../components/Logout";

export default function AdminLayout({ user }) {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "members":
        return <MembersPage user={user} />;
      case "trainers":
        return <TrainersPage />;
      default:
        return <AdminDashboard user={user} />;
    }
  };

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h1 id="splash-brand" className="logo text-reveal gradient-text delay-1" style={{textAlign: 'left'}}>जिम</h1>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("members")}>Members</button>
        <button onClick={() => setPage("trainers")}>Trainers</button>

        <Logout onLogout={() => window.location.reload()} />
      </aside>

      <main className="main-content">{renderPage()}</main>
    </div>
  );
}
