// src/Login.jsx
import { useState } from "react";
import { loginApi } from "../api/authApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      loginApi({ email, password });
      console.log("Login successful → cookie set automatically");
      // window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex gap-4 flex-col max-w-96 p-5 mx-auto">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-200 px-2 py-1"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-200 py-1 px-2"
        required
      />
      <button type="submit" className="bg-green-200 py-2 cursor-pointer">Login</button>
    </form>
  );
}
