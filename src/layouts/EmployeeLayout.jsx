import { useState } from "react";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import Register from "../pages/Register";
import Logout from "../components/Logout";

export default function EmployeeLayout({ user }) {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="employee-layout">
      {/* Top Navbar */}
      <nav className="employee-navbar">
        <button
          className={page === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={page === "register" ? "active" : ""}
          onClick={() => setPage("register")}
        >
          New Member
        </button>
        <button>
          <Logout onLogout={() => window.location.reload()} />
        </button>
      </nav>

      {/* Main Content */}
      <main className="employee-main">
        {page === "register" ? (
          <Register user={user} />
        ) : (
          <EmployeeDashboard user={user} />
        )}
      </main>
    </div>
  );
}
