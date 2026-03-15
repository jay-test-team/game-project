"use client";

import { useState } from "react";

export default function Home() {
  if (true) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">nextjs-pure - merge queue test 3</h1>
    </div>
  );
}
