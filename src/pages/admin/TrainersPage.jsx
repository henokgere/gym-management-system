import { useState, useEffect } from "react";
import "./trainersPage.css";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const trainersList = Object.values(users).filter((u) => u.role === "trainer");
    setTrainers(trainersList);
  }, []);

  const filteredTrainers = trainers.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase()) ||
      t.memberId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="trainers-page">
      <h2>Trainers</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search trainers by name, email, or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredTrainers.length === 0 ? (
        <p>No trainers found.</p>
      ) : (
        <div className="table-container">
          <table className="trainers-table">
            <thead>
              <tr>
                <th>Member ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrainers.map((t) => (
                <tr key={t.uid}>
                  <td>{t.memberId}</td>
                  <td>{t.name}</td>
                  <td>{t.email}</td>
                  <td>
                    <span className={t.active ? "badge active" : "badge inactive"}>
                      {t.active ? "Active" : "Inactive"}
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
