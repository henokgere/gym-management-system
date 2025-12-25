import TrainersDashboard from "../pages/trainer/TrainerDashboard";

export default function TrainerLayout({ user }) {
  return (
    <div className="trainer-layout">
      <TrainersDashboard user={user} />
    </div>
  );
}
