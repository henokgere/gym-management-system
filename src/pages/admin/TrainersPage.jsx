import { useState, useEffect } from "react";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const trainersList = Object.values(users).filter((u) => u.role === "trainer");
    setTrainers(trainersList);
  }, []);

  return (
    <div className="trainers-page">
      <h2>Trainers</h2>
      {trainers.length === 0 ? (
        <p>No trainers found.</p>
      ) : (
        <ul>
          {trainers.map((t) => (
            <li key={t.uid}>
              {t.name} ({t.email}) — Member ID: {t.memberId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
