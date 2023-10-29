"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [value, setValue] = useState("Default");
  const router = useRouter();
  const handleClick = async () => {
    await axios.post("api/change", { name: value });
    router.push("/login");
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
