import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full h-10 px-20 bg-gray-200 justify-between items-center">
      <h1 className="font-semibold text-2xl">Rubu</h1>
      <ul className="flex gap-10 text-base">
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
