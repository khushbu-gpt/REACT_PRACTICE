import React, { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};

    if (!form.name) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Invalid email";
    if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    alert("Login Success");

    setForm({ name: "", email: "", password: "" });
  };

  const getInputStyle = (field) => ({
    padding: "10px",
    borderRadius: "10px",
    border: errors[field] ? "2px solid red" : "2px solid gray",
    margin: "6px",
    width: "100%",
    maxWidth: "400px",
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        placeholder="Enter your name"
        onChange={onChange}
        style={getInputStyle("name")}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        name="email"
        value={form.email}
        placeholder="Enter your email"
        onChange={onChange}
        style={getInputStyle("email")}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Enter your password"
        onChange={onChange}
        style={getInputStyle("password")}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      <button
        style={{
          marginTop: "10px",
          backgroundColor: "lightGrey",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
