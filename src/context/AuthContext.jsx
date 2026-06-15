import { useMemo, useState } from "react";
import { AuthContext } from "./AuthValueContext";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem("token_laundry_admin")
  );

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user_laundry_admin");

    if (!savedUser) return null;

    try {
      return JSON.parse(savedUser);
    } catch {
      return null;
    }
  });

  const login = async ({ username, password }) => {
    const userInput = username.trim().toLowerCase();

    // LOGIN ADMIN
    if (
      (userInput === "admin" ||
        userInput === "admin@gmail.com") &&
      password === "admin"
    ) {
      const fakeToken = "admin-token";

      const userData = {
        nama: "Admin Laundry",
        email: "admin@gmail.com",
        role: "admin",
      };

      setToken(fakeToken);
      setUser(userData);

      localStorage.setItem(
        "token_laundry_admin",
        fakeToken
      );

      localStorage.setItem(
        "user_laundry_admin",
        JSON.stringify(userData)
      );

      return userData;
    }

    // LOGIN MEMBER
    if (
      (userInput === "member" ||
        userInput === "member@gmail.com") &&
      password === "member"
    ) {
      const fakeToken = "member-token";

      const userData = {
        nama: "Member Laundry",
        email: "member@gmail.com",
        role: "member",
      };

      setToken(fakeToken);
      setUser(userData);

      localStorage.setItem(
        "token_laundry_admin",
        fakeToken
      );

      localStorage.setItem(
        "user_laundry_admin",
        JSON.stringify(userData)
      );

      return userData;
    }

    throw new Error(
      "Username/email atau password salah"
    );
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    localStorage.removeItem(
      "token_laundry_admin"
    );

    localStorage.removeItem(
      "user_laundry_admin"
    );
  };

  const value = useMemo(
    () => ({
      token,
      user,
      loading: false,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}