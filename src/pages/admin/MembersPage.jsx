import { useState, useEffect } from "react";
import "./membersPage.css";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const membersList = Object.values(users).filter((u) => u.role === "customer");
    setMembers(membersList);
  }, []);

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.memberId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="members-page">
      <h2>Members</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, email, or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredMembers.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <div className="table-container">
          <table className="members-table">
            <thead>
              <tr>
                <th>Member ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((m) => (
                <tr key={m.uid}>
                  <td>{m.memberId}</td>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>
                    <span className={m.active ? "badge active" : "badge inactive"}>
                      {m.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
