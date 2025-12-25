import TrainersPage from "../pages/admin/TrainersPage";

export default function TrainerLayout({ user }) {
  return (
    <div className="trainer-layout">
      <TrainersPage user={user} />
    </div>
  );
}
