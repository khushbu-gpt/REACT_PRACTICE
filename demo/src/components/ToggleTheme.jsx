import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
      }}
    >   
      <header className="h-10 bg-blue-950 text-white flex justify-between items-center px-4">
        <h1>Khushbu.</h1>
        <ul className=" flex items-center gap-4 justify-center">
          <button onClick={toggleTheme}>Toggle</button>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <main className="w-full flex justify-center items-center h-100">
        <h1 className="text-4xl">Hello</h1>
      </main>
    </div>
  );
}
