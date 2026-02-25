import { Instagram, Facebook, Twitter, Flower2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F2044] text-[#F5EDE0] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flower2 className="w-6 h-6 text-[#E88AB5]" />
            <span className="text-xl" style={{ fontFamily: "'Caveat', cursive" }}>
              Pookie's Flowers
            </span>
          </div>
          
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#E88AB5] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#E88AB5] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#E88AB5] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm opacity-80" style={{ fontFamily: "'Lora', serif" }}>
          © 2026 Pookie's Flowers. Made with love from our home to yours. 🌸
        </div>
      </div>
    </footer>
  );
}
