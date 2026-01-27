import React, { useState } from "react";
import { loginApi } from "./../api/authApi";
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const handleLogin = async () => {
    try {
      const res = await loginApi({ email, password });
      localStorage.setItem("token", res.data.token);
      // navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return <div>Hello, User</div>;
};

export default Login;
