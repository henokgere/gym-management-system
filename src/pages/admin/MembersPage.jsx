import { useState, useEffect } from "react";

export default function MembersPage({ user }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const membersList = Object.values(users).filter((u) => u.role === "customer");
    setMembers(membersList);
  }, []);

  return (
    <div className="members-page">
      <h2>Members</h2>
      {members.length === 0 ? (
        <p>No members found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Member ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.uid}>
                <td>{m.memberId}</td>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.active ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
