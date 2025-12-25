// Utility: get all users from localStorage
const getUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : {};
};

// Utility: save all users back to localStorage
const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

/* ---------------------------------------------------
   REGISTER
--------------------------------------------------- */
export const registerUser = async ({email, password, role = "customer", name = "", memberId = Date.now().toString().slice(5)}) => {
  const users = getUsers();

  if (users[email]) {
    throw new Error("User already exists");
  }

  const uid = Date.now().toString(); // simple UID substitute

  const newUser = {
    uid,
    email,
    password, // ⚠️ stored in plain text (not secure, only for demo)
    role,
    name,
    memberId,
    createdAt: new Date().toISOString(),
    active: true,
  };

  users[email] = newUser;
  saveUsers(users);

  // set current user
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  return { uid, email, role, name, memberId };
};

/* ---------------------------------------------------
   LOGIN
--------------------------------------------------- */
export const loginUser = async (email, password) => {
  const users = getUsers();

  const user = users[email];
  if (!user) throw new Error("User not found");
  if (user.password !== password) throw new Error("Invalid password");

  localStorage.setItem("currentUser", JSON.stringify(user));

  return user;
};

/* ---------------------------------------------------
   LOGOUT
--------------------------------------------------- */
export const logoutUser = async () => {
  localStorage.removeItem("currentUser");
};

/* ---------------------------------------------------
   AUTH STATE LISTENER
--------------------------------------------------- */
export const subscribeToAuthChanges = (callback) => {
  // Immediately call with current user
  const currentUser = localStorage.getItem("currentUser");
  callback(currentUser ? JSON.parse(currentUser) : null);

  // Listen for storage changes (multi‑tab support)
  window.addEventListener("storage", () => {
    const updatedUser = localStorage.getItem("currentUser");
    callback(updatedUser ? JSON.parse(updatedUser) : null);
  });
};
