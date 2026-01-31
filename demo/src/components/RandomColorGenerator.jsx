import React, { useEffect, useState } from "react";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("blue");
  function colorGenerator() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }
  useEffect(() => {
    console.log(color);
  },[color]);
  return (
    <div style={{backgroundColor:color}} className="h-[100vh]">
      <button onClick={colorGenerator} className="bg-white rounded-xl p-3">Generator</button>
    </div>
  );
};

export default RandomColorGenerator;
