import { useState } from "react";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
import RegisterCustomer from "../pages/employee/RegisterCustomer";

export default function EmployeeLayout({ user }) {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="employee-layout">
      <nav>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("register")}>New Member</button>
      </nav>

      <main>
        {page === "register" 
          ? <RegisterCustomer user={user} />
          : <EmployeeDashboard user={user} />
        }
      </main>
    </div>
  );
}
