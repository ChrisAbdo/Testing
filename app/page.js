"use client";

import React from "react";

import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Home</h1>
      <p>Pathname: {pathname}</p>
    </div>
  );
}
