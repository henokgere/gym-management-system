import Login from "../pages/Login";

export default function AuthLayout({ onSuccess }) {
  return (
    <div className="auth-layout">
      <Login onSuccess={onSuccess} />
    </div>
  );
}
