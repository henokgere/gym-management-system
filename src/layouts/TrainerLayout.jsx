import Logout from "../components/Logout";
import TrainerDashboard from "../pages/trainer/TrainerDashboard";

export default function TrainerLayout({ user }) {
  return (
    <div className="trainer-layout">
      <div style={{ maxWidth: 'fit-content', marginLeft: 'auto', marginTop: '10px', marginRight: '10px' }}>
        <Logout onLogout={() => window.location.reload()} />
      </div>
      <TrainerDashboard user={user} />
    </div>
  );
}
