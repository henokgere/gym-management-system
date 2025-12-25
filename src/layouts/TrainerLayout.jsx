import Logout from "../components/Logout";
import TrainerDashboard from "../pages/trainer/TrainerDashboard";

export default function TrainerLayout({ user }) {
  return (
    <div className="trainer-layout">
      <nav className="navbar" style={{position: "relative"}}>
        <div className="navbar-inner">
          <span className="logo small">जिम</span>      
          <div style={{ maxWidth: 'fit-content', marginLeft: 'auto', marginTop: '10px', }}>
            <Logout onLogout={() => window.location.reload()} />
          </div>        
        </div>
      </nav>
      <TrainerDashboard user={user} />
    </div>
  );
}
