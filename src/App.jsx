import { useState, useEffect } from "react";
import { subscribeToAuthChanges } from "./services/authLocal";

import './App.css'
import './styles/navbar.css';
import './styles/aside.css';

import SplashScreen from "./components/SplashScreen";
import Landing from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
import TrainerLayout from "./layouts/TrainerLayout";
import CustomerLayout from "./layouts/CustomerLayout";

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
  }, [view]);

  const layouts = {
    admin: <AdminLayout user={user} />,
    employee: <EmployeeLayout user={user} />,
    trainer: <TrainerLayout user={user} />,
    customer: <CustomerLayout user={user} />,
  };

  return (
    <div className="appRoot">
      <SplashScreen />
      {
        loading && <div>Loading...</div>
      }
      { !user ? (
          view === "landing"
            ? <Landing onLogin={() => setView("auth")} />
            : <AuthLayout onSuccess={() => setView("app")} />
        ) : (
          layouts[user.role] || <div>Invalid role</div>
        )
      }

    </div>
  )

}
