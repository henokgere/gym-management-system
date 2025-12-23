import CustomerDashboard from "../pages/customer/CustomerDashboard";

export default function CustomerLayout({ user }) {
  return (
    <div className="customer-layout">
      <CustomerDashboard user={user} />
    </div>
  );
}
