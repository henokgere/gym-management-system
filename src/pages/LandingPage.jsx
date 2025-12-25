import { useEffect } from "react";
import "./landingStyle.css";

export default function Landing({ onLogin }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const splash = document.getElementById("splash");
      if (splash) splash.style.display = "none";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-root">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-inner">
          <span className="logo small">जिम</span>
          <button onClick={onLogin} className="btn-primary">
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Transform Your <span className="gradient-text">Body</span>
            </h1>

            <p className="hero-text">
              Streamline your gym operations. Members, payments, schedules — all in one place.
            </p>

            <div className="hero-actions">
              <button onClick={onLogin} className="btn-primary large">
                Get Started
              </button>
              <button className="btn-outline">Watch Demo</button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="card">
            <h3 className="card-title">Dashboard</h3>

            <div className="card-grid">
              <div className="stat">
                <div className="stat-label">Members</div>
                <div className="stat-value gradient-text">1,234</div>
              </div>

              <div className="stat">
                <div className="stat-label">Revenue</div>
                <div className="stat-value gradient-text">₹4.5L</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
