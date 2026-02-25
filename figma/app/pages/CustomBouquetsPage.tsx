import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WavyDivider } from "../components/WavyDivider";
import { PetalDecoration } from "../components/PetalDecoration";
import { Cake, Heart, Smile, Flower2 } from "lucide-react";

const occasions = [
  { name: "Birthdays", icon: Cake, color: "#E88AB5" },
  { name: "Anniversaries", icon: Heart, color: "#E88AB5" },
  { name: "Just Because", icon: Smile, color: "#E88AB5" },
  { name: "Sympathy", icon: Flower2, color: "#E88AB5" }
];

const pastWork = [
  {
    image: "https://images.unsplash.com/photo-1686424735290-ea6ac590983c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZSUyMGJvdXF1ZXQlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NzIwMjY1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Pink rose bouquet"
  },
  {
    image: "https://images.unsplash.com/photo-1751165390869-d129eb67f960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmbG9yYWwlMjBhcnJhbmdlbWVudCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjAyNjUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Colorful arrangement"
  },
  {
    image: "https://images.unsplash.com/photo-1593003520741-64323f3aea7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzdW5mbG93ZXIlMjBhcnJhbmdlbWVudCUyMGJyaWdodxlbnwxfHx8fDE3NzIwMjY1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Sunflower arrangement"
  },
  {
    image: "https://images.unsplash.com/photo-1654108285011-2e21d0b26d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvcmFsJTIwZmxvd2VyJTIwYm91cXVldCUyMHNvZnR8ZW58MXx8fHwxNzcyMDI2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Peach bouquet"
  },
  {
    image: "https://images.unsplash.com/photo-1588573042613-981033a3643d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBsYXZlbmRlciUyMGZsb3dlcnMlMjBkZWxpY2F0ZXxlbnwxfHx8fDE3NzIwMjY1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Lavender arrangement"
  },
  {
    image: "https://images.unsplash.com/photo-1662326495491-764da874b01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnQlMjBib3VxdWV0fGVufDF8fHx8MTc3MjAyNjUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Lush bouquet"
  }
];

export function CustomBouquetsPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      <Header />
      
      {/* Page Hero */}
      <section className="relative min-h-[500px] bg-[#0F2044] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1753982861953-9d83250dc213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwaG9sZGluZyUyMHdyYXBwZWQlMjBib3VxdWV0fGVufDF8fHx8MTc3MjAyNjUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
      
      {/* Occasions Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-[#0F2044] text-center mb-16"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            Perfect for Every Occasion
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => {
              const Icon = occasion.icon;
              return (
                <motion.div
                  key={occasion.name}
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
                    {occasion.name}
                  </h3>
                </motion.div>
              );
            })}
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
                  index === 2 ? 'md:row-span-2' : ''
                } ${index === 4 ? 'md:col-span-2' : ''}`}
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
      
      {/* Order Form CTA Section */}
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
                  className="w-full px-4 py-3 rounded-full border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors"
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
                  className="w-full px-4 py-3 rounded-full border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors"
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
                  className="w-full px-4 py-3 rounded-full border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors"
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
                  className="w-full px-4 py-3 rounded-3xl border-2 border-[#E88AB5] focus:outline-none focus:border-[#0F2044] transition-colors resize-none"
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
      
      {/* Testimonial Strip */}
      <section className="bg-[#0F2044] py-12 px-6 text-center border-t border-[#E88AB5] border-opacity-20">
        <div className="max-w-4xl mx-auto relative">
          <svg viewBox="0 0 100 100" className="w-12 h-12 fill-[#E88AB5] opacity-40 mx-auto mb-4">
            <text x="50" y="70" fontSize="80" textAnchor="middle">"</text>
          </svg>
          
          <p
            className="text-2xl md:text-3xl text-[#F5EDE0] italic mb-6"
            style={{ fontFamily: "'Lora', serif" }}
          >
            "She made my mom cry happy tears!"
          </p>
          
          <p
            className="text-[#E88AB5]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            — Sarah M.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}