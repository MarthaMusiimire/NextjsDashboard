"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

interface AuthContextType {
  users: { username: string; password: string }[];
  currentUser: string | null;
  signup: (username: string, password: string) => boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<{ username: string; password: string }[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  function signup(username: string, password: string) {
    if (users.find((u) => u.username === username)) {
      return false; // username taken
    }
    setUsers([...users, { username, password }]);
    setCurrentUser(username);
    return true;
  }

  function login(username: string, password: string) {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(username);
      return true;
    }
    return false;
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
