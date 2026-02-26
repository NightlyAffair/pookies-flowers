"use client";

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WavyDivider } from "@/components/WavyDivider";
import { PetalDecoration } from "@/components/PetalDecoration";
import { Cake, Heart, Smile, Flower2 } from "lucide-react";

const occasions = [
  { name: "Birthdays", icon: Cake },
  { name: "Anniversaries", icon: Heart },
  { name: "Just Because", icon: Smile },
  { name: "Sympathy", icon: Flower2 },
];

const pastWork = [
  {
    image: "/images/bouquets/22feb26/IMG_6160.JPG",
    alt: "Pink rose bouquet",
  },
  {
    image: "/images/bouquets/14feb26/IMG_5752.JPG",
    alt: "Colorful arrangement",
  },
  {
    image: "/images/bouquets/9feb26/IMG_5578.JPG",
    alt: "Sunflower arrangement",
  },
  {
    image: "/images/bouquets/2feb26/IMG_5394.JPG",
    alt: "Peach bouquet",
  },
  {
    image: "/images/bouquets/31dec25/IMG_1972.JPG",
    alt: "Lavender arrangement",
  },
  {
    image: "/images/bouquets/Rose%20bouquet%20-%2012%20Oct/photo_2_2026-02-26_18-18-08.jpg",
    alt: "Lush bouquet",
  },
];

export default function CustomBouquetsPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[500px] bg-[#0F2044] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/bouquets/Rose%20bouquet%20-%2012%20Oct/photo_1_2026-02-26_18-18-08.jpg"
            alt="Hand holding wrapped bouquet"
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
            Custom Bouquets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#F5EDE0]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Tell us the vibe. We'll make it bloom.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <WavyDivider color="#F5EDE0" />
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-[#0F2044] text-center mb-16"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Perfect for Every Occasion
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {occasions.map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow text-center"
              >
                <div className="w-20 h-20 mx-auto bg-[#E88AB5] bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-10 h-10 text-[#E88AB5]" />
                </div>
                <h3
                  className="text-xl text-[#0F2044]"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
                >
                  {name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work Gallery */}
      <section className="py-20 px-6 md:px-12 bg-[#F5EDE0] relative overflow-hidden">
        <PetalDecoration className="w-24 h-24 top-10 left-10 hidden md:block" />
        <PetalDecoration className="w-20 h-20 top-32 right-16 hidden md:block" />
        <PetalDecoration className="w-28 h-28 bottom-32 left-20 hidden md:block" />
        <PetalDecoration className="w-24 h-24 bottom-20 right-24 hidden md:block" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className="text-4xl md:text-5xl text-[#0F2044] text-center mb-4"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Some bouquets we've loved making
          </h2>
          <p
            className="text-xl text-[#0F2044] opacity-80 text-center mb-16"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Each one tells a unique story
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {pastWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${
                  index === 2 ? "md:row-span-2" : ""
                } ${index === 4 ? "md:col-span-2" : ""}`}
              >
                <img
                  src={work.image}
                  alt={work.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider color="#0F2044" flip />

      {/* Order Form */}
      <section className="bg-[#0F2044] py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-[#F5EDE0] text-center mb-12"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Let's create something beautiful together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F5EDE0] rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#0F2044] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-full border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors bg-white"
                  style={{ fontFamily: "'Lora', serif" }}
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="occasion"
                  className="block text-[#0F2044] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
                >
                  Occasion
                </label>
                <input
                  type="text"
                  id="occasion"
                  className="w-full px-4 py-3 rounded-full border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors bg-white"
                  style={{ fontFamily: "'Lora', serif" }}
                  placeholder="Birthday celebration"
                />
              </div>

              <div>
                <label
                  htmlFor="colors"
                  className="block text-[#0F2044] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
                >
                  Color Preferences
                </label>
                <input
                  type="text"
                  id="colors"
                  className="w-full px-4 py-3 rounded-full border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors bg-white"
                  style={{ fontFamily: "'Lora', serif" }}
                  placeholder="Pinks, purples, and whites"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#0F2044] mb-2"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
                >
                  Tell us more about what you're envisioning
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-3xl border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors resize-none bg-white"
                  style={{ fontFamily: "'Lora', serif" }}
                  placeholder="I'd love something romantic and whimsical..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E88AB5] text-[#F5EDE0] px-8 py-4 rounded-full text-xl hover:bg-[#0F2044] transition-colors shadow-lg"
                style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
              >
                Start Your Order
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#0F2044] py-12 px-6 text-center border-t border-[#E88AB5] border-opacity-20">
        <div className="max-w-4xl mx-auto">
          <svg viewBox="0 0 100 100" className="w-12 h-12 fill-[#E88AB5] opacity-40 mx-auto mb-4">
            <text x="50" y="70" fontSize="80" textAnchor="middle">&ldquo;</text>
          </svg>

          <p
            className="text-2xl md:text-3xl text-[#F5EDE0] italic mb-6"
            style={{ fontFamily: "'Lora', serif" }}
          >
            "She made my mom cry happy tears!"
          </p>

          <p className="text-[#E88AB5]" style={{ fontFamily: "'Lora', serif" }}>
            — Sarah M.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
