"use client";

import FeaturedBanner from "@/components/FeaturedBanner";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <FeaturedBanner />

      <main className="
        w-full
        max-w-6xl
        mx-auto
        px-4 sm:px-6 md:px-8
        py-16 md:py-24
        flex flex-col
        gap-24
      ">
        <Experience />
        <Achievements />
      </main>

      <Footer />
    </div>
  );
}
