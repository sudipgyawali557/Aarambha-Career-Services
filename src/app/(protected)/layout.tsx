"use client";

import React from "react";
import { Footer } from "@/components/LandingPageComponents/Footer/Footer";
import { Navbar } from "@/components/LandingPageComponents/Navbar/Navbar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[100vh] h-full w-full flex flex-col justify-between">
      <Navbar />
      <div className="w-full h-full container mx-auto px-4">{children}</div>
      <Footer />
    </main>
  );
}
