import { logoutUser } from "../services/authLocal"; 
import "./logout.css";

export default function Logout({ onLogout }) {
  const handleLogout = () => {
    logoutUser();
    if (onLogout) onLogout(); // callback to reset app state
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      🚪 Logout
    </button>
  );
}
