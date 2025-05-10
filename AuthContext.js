import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Проверяем токен при загрузке приложения
  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
          const isValid = await AuthService.validateToken(token);
          if (isValid) {
            setIsAuthenticated(true);
            const hasAdminAccess = await AuthService.checkAdminAccess(token);
            setIsAdmin(hasAdminAccess);
          } else {
            localStorage.removeItem('token');
            setToken(null);
            setIsAuthenticated(false);
            setIsAdmin(false);
          }
        } catch (error) {
          console.error(error.message);
          localStorage.removeItem('token');
          setToken(null);
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      }
    };
    validateToken();
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await AuthService.login(username, password);
      const newToken = response.token;
      localStorage.setItem('token', newToken);
      setToken(newToken);
      setIsAuthenticated(true);
      const hasAdminAccess = await AuthService.checkAdminAccess(newToken);
      setIsAdmin(hasAdminAccess);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout(token);
      localStorage.removeItem('token');
      setToken(null);
      setIsAuthenticated(false);
      setIsAdmin(false);
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        isAuthenticated,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};