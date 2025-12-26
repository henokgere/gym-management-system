import React, { useState } from "react";
import { workoutCategories } from "../../data/workouts";
import WorkoutList from "./WorkoutList";

import "./customer.css"
import Logout from "../../components/Logout";

export default function CustomerDashboard({ user }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="appRoot">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
            <span className="logo small gradient-text">जिम</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', maxWidth: 'fit-content', marginLeft: 'auto', marginTop: '10px', }}>
                <span className="muted">Welcome, {user?.name || "Member"}</span>
                <Logout onLogout={() => window.location.reload()} />
            </div>
        </div>
      </nav>

      {/* Content */}
      <section className="dashboard">
        {!selectedCategory ? (
          <>
            <h1 className="dashboard-title font-display">
              Choose Your <span className="gradient-text">Workout</span>
            </h1>

            <div className="category-grid">
              {workoutCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="category-card card-hover"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <img src={cat.image} alt={cat.name} />
                  <div className="category-overlay">
                    <h3 className="font-display">{cat.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <WorkoutList
            category={selectedCategory}
            onBack={() => setSelectedCategory(null)}
          />
        )}
      </section>
    </div>
  );
}
