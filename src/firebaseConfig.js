import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEoPFpIZgNlTGvz4mgvOYQXutcYt-9zhQ",
  authDomain: "gym-management-system-cb090.firebaseapp.com",
  projectId: "gym-management-system-cb090",
  storageBucket: "gym-management-system-cb090.firebasestorage.app",
  messagingSenderId: "1076590671850",
  appId: "1:1076590671850:web:4acb484fb4363231ae2493",
  measurementId: "G-W46XNBYK2G"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export default app;