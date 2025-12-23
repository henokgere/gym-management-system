import { useState, useEffect } from "react";
import { subscribeToAuthChanges } from "./services/auth";

import './App.css'

import Landing from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
// import AdminLayout from "./layouts/AdminLayout";
// import EmployeeLayout from "./layouts/EmployeeLayout";
// import TrainerLayout from "./layouts/TrainerLayout";
// import CustomerLayout from "./layouts/CustomerLayout";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("landing"); 
  // landing | auth | app

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) setView("app");
    });

    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;

  // 🌐 Landing Page
  if (view === "landing" && !user) {
    return <Landing onLogin={() => setView("auth")} />;
  }

  // 🔐 Auth
  if (!user) {
    return <AuthLayout onSuccess={() => setView("app")} />;
  }

  // // 🏋️ Role-based Layouts
  // switch (user.role) {
  //   case "admin":
  //     return <AdminLayout user={user} />;

  //   case "employee":
  //     return <EmployeeLayout user={user} />;

  //   case "trainer":
  //     return <TrainerLayout user={user} />;

  //   case "customer":
  //     return <CustomerLayout user={user} />;

  //   default:
  //     return <div>Invalid role</div>;
  // }
}
