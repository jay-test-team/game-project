import React from "react";

export default function Home() {
  const unused = "this will cause lint error";
  return (
    <div className="flex min-h-screen items-center justify-center">
      <img src="/test.png" />
      <h1 className="text-4xl font-bold">nextjs-pure</h1>
    </div>
  );
}
