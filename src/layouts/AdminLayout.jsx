import { useState } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import MembersPage from "../pages/admin/MembersPage";
import TrainersPage from "../pages/admin/TrainersPage";

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
      <aside>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("members")}>Members</button>
        <button onClick={() => setPage("trainers")}>Trainers</button>
      </aside>

      <main>{renderPage()}</main>
    </div>
  );
}
