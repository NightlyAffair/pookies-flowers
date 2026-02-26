"use client";

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WavyDivider } from "@/components/WavyDivider";
import { PetalDecoration } from "@/components/PetalDecoration";
import { Sparkles, Package, Heart } from "lucide-react";

const arrangements = [
  {
    month: "November",
    year: 2025,
    image: "/images/vase/Nov%202025/IMG_3051.JPG",
  },
  {
    month: "December",
    year: 2025,
    image: "/images/vase/Dec%202025/IMG_1195.JPG",
  },
  {
    month: "January",
    year: 2026,
    image: "/images/vase/Jan%202026/IMG_5072.JPG",
  },
  {
    month: "February",
    year: 2026,
    image: "/images/vase/Feb%202026/IMG_6090.JPG",
  },
  // Add new months here as the business grows
];

export default function VaseArrangementsPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[500px] bg-[#0F2044] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/vase/Feb%202026/IMG_6107.JPG"
            alt="Vase arrangement on table"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-[#F5EDE0] mb-4"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Vase Arrangements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#F5EDE0]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            A fresh burst of joy, delivered on repeat.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WavyDivider color="#F5EDE0" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-[#0F2044] text-center mb-16"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[16.666%] right-[16.666%] h-0.5 border-t-2 border-dashed border-[#E88AB5]" />

            {[
              {
                icon: Sparkles,
                step: "1",
                title: "Pick your plan",
                desc: "Choose weekly, bi-weekly, or monthly deliveries",
              },
              {
                icon: Package,
                step: "2",
                title: "We arrange fresh blooms",
                desc: "Each bouquet is uniquely crafted with seasonal flowers",
              },
              {
                icon: Heart,
                step: "3",
                title: "Enjoy your flowers!",
                desc: "Brighten your space with beautiful blooms",
              },
            ].map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center relative"
              >
                <div className="w-32 h-32 mx-auto bg-[#E88AB5] rounded-full flex items-center justify-center mb-6 relative z-10">
                  <Icon className="w-16 h-16 text-[#F5EDE0]" />
                </div>
                <div
                  className="text-5xl text-[#E88AB5] mb-2"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  {step}
                </div>
                <h3
                  className="text-xl md:text-2xl text-[#0F2044] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
                >
                  {title}
                </h3>
                <p className="text-[#0F2044] opacity-80" style={{ fontFamily: "'Lora', serif" }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider color="#0F2044" flip />

      {/* Monthly Arrangement Gallery */}
      <section className="relative bg-[#0F2044] py-20 px-6 md:px-12 overflow-hidden">
        <PetalDecoration className="w-32 h-32 top-10 left-10" />
        <PetalDecoration className="w-24 h-24 top-40 right-20" />
        <PetalDecoration className="w-28 h-28 bottom-40 left-32" />
        <PetalDecoration className="w-20 h-20 bottom-20 right-16" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className="text-4xl md:text-5xl text-[#F5EDE0] text-center mb-16"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Past Arrangements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arrangements.map((arrangement, index) => (
              <motion.div
                key={`${arrangement.month}-${arrangement.year}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5EDE0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={arrangement.image}
                    alt={`${arrangement.month} ${arrangement.year} arrangement`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl text-[#0F2044]"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {arrangement.month}
                  </h3>
                  <p
                    className="text-[#0F2044] opacity-60 text-sm"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {arrangement.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider color="#E88AB5" />

      {/* Subscribe CTA */}
      <section className="bg-[#E88AB5] py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl text-[#0F2044] mb-8"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Ready to brighten your space?
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F5EDE0] text-[#0F2044] px-12 py-5 rounded-full text-xl hover:bg-white transition-colors shadow-lg"
            style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
          >
            Subscribe Now
          </motion.button>

          <p
            className="mt-6 text-[#0F2044] opacity-90"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Cancel anytime. Happiness guaranteed.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
