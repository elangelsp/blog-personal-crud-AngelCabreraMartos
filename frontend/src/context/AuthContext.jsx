import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username) => {
    setUser({ username });
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isLoggedIn = () => {
    return !!user;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};