import { useState, useEffect } from "react";
import { subscribeToAuthChanges } from "./services/authLocal";

import './App.css'

import SplashScreen from "./components/SplashScreen";
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

  return (
    <div className="appRoot">
      <SplashScreen />
      {
        loading && <div>Loading...</div>
      }
      { 
        !user ? view === "landing" ?
          <Landing onLogin={() => setView("auth")} />
          :
          <AuthLayout onSuccess={() => setView("app")} />
        :
        <div>Hi</div>
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
    </div>
  )

}
