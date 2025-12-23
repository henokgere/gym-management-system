import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";

/* ---------------------------------------------------
   REGISTER (Admin / Employee only creates users)
--------------------------------------------------- */
export const registerUser = async ({
  email,
  password,
  role = "customer",
  name = "",
  memberId = ""
}) => {
  try {
    // Create Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    // Create Firestore profile
    await setDoc(doc(db, "users", uid), {
      email,
      role,
      name,
      memberId,
      createdAt: serverTimestamp(),
      active: true
    });

    return {
      uid,
      email,
      role,
      name,
      memberId
    };
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

/* ---------------------------------------------------
   LOGIN
--------------------------------------------------- */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const uid = userCredential.user.uid;

    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) {
      throw new Error("User profile not found");
    }

    return {
      uid,
      email: userCredential.user.email,
      ...snap.data()
    };
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

/* ---------------------------------------------------
   LOGOUT
--------------------------------------------------- */
export const logoutUser = async () => {
  await signOut(auth);
};

/* ---------------------------------------------------
   AUTH STATE LISTENER (CRITICAL)
--------------------------------------------------- */
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      callback(null);
      return;
    }

    try {
      const snap = await getDoc(doc(db, "users", firebaseUser.uid));

      if (!snap.exists()) {
        callback(null);
        return;
      }

      callback({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        ...snap.data()
      });
    } catch (error) {
      console.error("Auth state error:", error);
      callback(null);
    }
  });
};
