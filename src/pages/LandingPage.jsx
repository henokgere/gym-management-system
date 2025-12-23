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
      {/* Splash */}
      <div id="splash" className="splash splash-container">
        <div className="splash-content">
          {/* Pulse Rings */}
          <div className="pulse-wrapper">
            <div className="pulse-ring"></div>
            <div className="pulse-ring-delayed"></div>

            {/* Logo Icon */}
            <div className="logo-reveal">
              <svg className="dumbbell-icon" width="96" height="96" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="35" width="12" height="30" rx="3" fill="url(#grad1)" />
                <rect x="22" y="40" width="8" height="20" rx="2" fill="url(#grad1)" />
                <rect x="70" y="40" width="8" height="20" rx="2" fill="url(#grad1)" />
                <rect x="78" y="35" width="12" height="30" rx="3" fill="url(#grad1)" />
                <rect x="30" y="45" width="40" height="10" rx="2" fill="url(#grad1)" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-primary)" />
                    <stop offset="100%" stopColor="var(--accent-secondary)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Brand Name */}
            <h1 id="splash-brand" className="logo text-reveal gradient-text delay-1">जिम</h1>

            {/* Tagline */}
            <p className="muted text-reveal delay-2">Gym Management System</p>

            {/* Loading Bar */}
            <div className="loading-bar">
              <div className="bar-grow"></div>
            </div>
          </div>
        </div>
      </div>
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
