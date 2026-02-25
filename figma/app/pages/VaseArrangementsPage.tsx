import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WavyDivider } from "../components/WavyDivider";
import { PetalDecoration } from "../components/PetalDecoration";
import { Sparkles, Package, Heart } from "lucide-react";

const arrangements = [
  {
    name: "Sunday Sunshine",
    image: "https://images.unsplash.com/photo-1593003520741-64323f3aea7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBzdW5mbG93ZXIlMjBhcnJhbmdlbWVudCUyMGJyaWdodHxlbnwxfHx8fDE3NzIwMjY1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bright yellow blooms to start your week with joy"
  },
  {
    name: "Berry Blush",
    image: "https://images.unsplash.com/photo-1686424735290-ea6ac590983c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZSUyMGJvdXF1ZXQlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NzIwMjY1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Soft pink roses and delicate petals for romance"
  },
  {
    name: "Garden Party",
    image: "https://images.unsplash.com/photo-1751165390869-d129eb67f960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmbG9yYWwlMjBhcnJhbmdlbWVudCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjAyNjUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A vibrant mix of colors for a lively atmosphere"
  },
  {
    name: "Lavender Dreams",
    image: "https://images.unsplash.com/photo-1588573042613-981033a3643d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBsYXZlbmRlciUyMGZsb3dlcnMlMjBkZWxpY2F0ZXxlbnwxfHx8fDE3NzIwMjY1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Calming purple hues for peaceful moments"
  },
  {
    name: "Peachy Keen",
    image: "https://images.unsplash.com/photo-1654108285011-2e21d0b26d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvcmFsJTIwZmxvd2VyJTIwYm91cXVldCUyMHNvZnR8ZW58MXx8fHwxNzcyMDI2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Soft coral and peach tones for warmth"
  },
  {
    name: "Classic Elegance",
    image: "https://images.unsplash.com/photo-1662326495491-764da874b01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZmxvd2VyJTIwYXJyYW5nZW1lbnQlMjBib3VxdWV0fGVufDF8fHx8MTc3MjAyNjUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Timeless beauty in every stem"
  }
];

export function VaseArrangementsPage() {
  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      <Header />
      
      {/* Page Hero */}
      <section className="relative min-h-[500px] bg-[#0F2044] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761856906802-899645332bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXNlJTIwZmxvd2VycyUyMG9uJTIwdGFibGUlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzcyMDI2NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
      
      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl text-[#0F2044] text-center mb-16"
            style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
          >
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-20 left-[16.666%] right-[16.666%] h-0.5 border-t-2 border-dashed border-[#E88AB5]" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center relative"
            >
              <div className="w-32 h-32 mx-auto bg-[#E88AB5] rounded-full flex items-center justify-center mb-6 relative z-10">
                <Sparkles className="w-16 h-16 text-[#F5EDE0]" />
              </div>
              <div
                className="text-5xl text-[#E88AB5] mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                1
              </div>
              <h3
                className="text-xl md:text-2xl text-[#0F2044] mb-2"
                style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
              >
                Pick your plan
              </h3>
              <p className="text-[#0F2044] opacity-80" style={{ fontFamily: "'Lora', serif" }}>
                Choose weekly, bi-weekly, or monthly deliveries
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center relative"
            >
              <div className="w-32 h-32 mx-auto bg-[#E88AB5] rounded-full flex items-center justify-center mb-6 relative z-10">
                <Package className="w-16 h-16 text-[#F5EDE0]" />
              </div>
              <div
                className="text-5xl text-[#E88AB5] mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                2
              </div>
              <h3
                className="text-xl md:text-2xl text-[#0F2044] mb-2"
                style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
              >
                We arrange fresh blooms
              </h3>
              <p className="text-[#0F2044] opacity-80" style={{ fontFamily: "'Lora', serif" }}>
                Each bouquet is uniquely crafted with seasonal flowers
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center relative"
            >
              <div className="w-32 h-32 mx-auto bg-[#E88AB5] rounded-full flex items-center justify-center mb-6 relative z-10">
                <Heart className="w-16 h-16 text-[#F5EDE0]" />
              </div>
              <div
                className="text-5xl text-[#E88AB5] mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                3
              </div>
              <h3
                className="text-xl md:text-2xl text-[#0F2044] mb-2"
                style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
              >
                Enjoy your flowers!
              </h3>
              <p className="text-[#0F2044] opacity-80" style={{ fontFamily: "'Lora', serif" }}>
                Brighten your space with beautiful blooms
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <WavyDivider color="#0F2044" flip />
      
      {/* Arrangement Gallery */}
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
                key={arrangement.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5EDE0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={arrangement.image}
                    alt={arrangement.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl text-[#0F2044] mb-2"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    {arrangement.name}
                  </h3>
                  <p
                    className="text-[#0F2044] opacity-80"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {arrangement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <WavyDivider color="#E88AB5" />
      
      {/* Subscription CTA Section */}
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
