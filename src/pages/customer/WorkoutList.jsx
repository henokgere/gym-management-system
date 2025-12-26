import React from "react";
import { workouts } from "../../data/workouts";

export default function WorkoutList({ category, onBack }) {
  const list = workouts[category] || [];

  return (
    <div className="workout-list">
      <button className="btn-outline" onClick={onBack}>
        ← Back
      </button>

      <h2 className="dashboard-title font-display">
        {category.toUpperCase()} <span className="gradient-text">Workouts</span>
      </h2>

      <div className="workout-grid">
        {list.map((w) => (
          <div key={w.id} className="workout-card card-hover">
            <img src={w.image} alt={w.name} />
            <div className="workout-body">
              <h3 className="font-display">{w.name}</h3>
              <p className="muted">{w.description}</p>
              <span className="level">{w.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
