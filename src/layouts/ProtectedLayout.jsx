export default function ProtectedView({ user, allowedRoles, children }) {
  if (!user) {
    return <div>Please login</div>;
  }

  if (!allowedRoles.includes(user.role)) {
    return <div>Unauthorized access</div>;
  }

  return children;
}
