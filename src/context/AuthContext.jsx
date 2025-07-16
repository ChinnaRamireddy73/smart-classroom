import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create context
const AuthContext = createContext();

// 2. AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false, // default to false
    role: "",               // empty by default
  });

  // Save user info to localStorage (optional)
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(user));
  }, [user]);

  // 3. Logout function
  const logout = () => {
    setUser({ isAuthenticated: false, role: "" });
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. useAuth Hook
export const useAuth = () => useContext(AuthContext);
