import TrainerDashboard from "../pages/trainer/TrainerDashboard";

export default function TrainerLayout({ user }) {
  return (
    <div className="trainer-layout">
      <TrainerDashboard user={user} />
    </div>
  );
}
