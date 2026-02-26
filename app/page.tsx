"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WavyDivider } from "@/components/WavyDivider";
import { PetalDecoration } from "@/components/PetalDecoration";

const RoseScene = dynamic(
  () => import("@/components/RoseScene").then((mod) => ({ default: mod.RoseScene })),
  { ssr: false }
);

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      setScrollProgress(Math.min(window.scrollY / vh, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text fades in between 40%-70% of the hero scroll (rose is zoomed out by then)
  const textOpacity = Math.min(Math.max((scrollProgress - 0.4) / 0.3, 0), 1);

  // Header appears alongside the text
  const headerVisible = textOpacity >= 1;

  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      <div
        className="fixed top-0 left-0 right-0 z-[100] transition-opacity duration-500"
        style={{ opacity: headerVisible ? 1 : 0, pointerEvents: headerVisible ? "auto" : "none" }}
      >
        <Header />
      </div>

      {/* Section 1: 3D Rose Hero — tall scroll container with pinned content */}
      <section className="relative h-[200vh] bg-[#0F2044]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <RoseScene />

          <div
            className="relative z-10 text-center px-6 pointer-events-none"
            style={{ opacity: textOpacity }}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-[#F5EDE0] drop-shadow-lg"
              style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, lineHeight: 1.2 }}
            >
              Welcome to Pookie&apos;s Flowers
            </h1>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WavyDivider color="#F5EDE0" />
          </div>
        </div>
      </section>

      {/* Section 2: CTAs + Product Showcase */}
      <section className="py-20 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/vase-arrangements"
            className="bg-[#E88AB5] text-[#0F2044] px-8 py-4 rounded-full hover:bg-[#0F2044] hover:text-[#F5EDE0] transition-colors"
            style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
          >
            Subscribe to Vase Arrangements
          </Link>
          <Link
            href="/custom-bouquets"
            className="bg-[#E88AB5] text-[#0F2044] px-8 py-4 rounded-full hover:bg-[#0F2044] hover:text-[#F5EDE0] transition-colors"
            style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
          >
            Order a Custom Bouquet
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Vase Arrangements Card */}
          <Link href="/vase-arrangements">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer"
            >
              <img
                src="/images/vase/Jan%202026/IMG_5072.JPG"
                alt="Vase arrangement"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2044]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-3xl md:text-4xl text-[#F5EDE0] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
                >
                  Vase Arrangements
                </h3>
                <p className="text-[#F5EDE0] opacity-80" style={{ fontFamily: "'Lora', serif" }}>
                  Fresh blooms delivered to your door, every week.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Custom Bouquets Card */}
          <Link href="/custom-bouquets">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer"
            >
              <img
                src="/images/bouquets/14feb26/IMG_5752.JPG"
                alt="Custom bouquet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2044]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3
                  className="text-3xl md:text-4xl text-[#F5EDE0] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
                >
                  Custom Bouquets
                </h3>
                <p className="text-[#F5EDE0] opacity-80" style={{ fontFamily: "'Lora', serif" }}>
                  Handcrafted for your special moments.
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* About Strip */}
      <section className="relative bg-[#0F2044] py-12 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p
            className="text-2xl md:text-3xl text-[#F5EDE0] flex items-center justify-center gap-4"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Made with love from our home to yours
            <svg viewBox="0 0 50 50" className="w-10 h-10 fill-[#E88AB5]">
              <path d="M25,45 C25,45 5,30 5,18 C5,10 10,5 15,5 C20,5 25,10 25,10 C25,10 30,5 35,5 C40,5 45,10 45,18 C45,30 25,45 25,45 Z" />
            </svg>
          </p>
        </div>
        <PetalDecoration className="w-20 h-20 top-1/2 left-10 -translate-y-1/2" />
        <PetalDecoration className="w-20 h-20 top-1/2 right-10 -translate-y-1/2" />
      </section>

      <Footer />
    </div>
  );
}
