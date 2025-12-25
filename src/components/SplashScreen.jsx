export default function SplashScreen(){
    return (
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
    );
}