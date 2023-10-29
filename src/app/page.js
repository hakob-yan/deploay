"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState('Default');
  const handleClick = async () => {
    axios.post("api/change", { name: value });
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Subbmit</button>
    </div>
  );
}
