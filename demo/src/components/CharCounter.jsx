import { useState } from "react";

export default function CharCounter() {
  const [text, setText] = useState("");

  const isTooLong = text.length > 10;
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="border border-gray-200 rounded-2xl p-10"
      />

      <p>Characters: {text.length}
        {isTooLong&&"(Too Long !)"}
      </p> */}
      <input type="text"  placeholder="type here" className="border"/>
    </div>
  );
}
