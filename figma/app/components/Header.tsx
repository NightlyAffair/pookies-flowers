import { Link } from "react-router";
import { Flower2 } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#0F2044] text-[#F5EDE0] py-4 px-6 md:px-12">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Flower2 className="w-8 h-8 text-[#E88AB5]" />
          <span className="text-2xl md:text-3xl" style={{ fontFamily: "'Caveat', cursive" }}>
            Pookie's Flowers
          </span>
        </Link>
        <div className="flex gap-6 md:gap-8" style={{ fontFamily: "'Lora', serif" }}>
          <Link
            to="/"
            className="hover:text-[#E88AB5] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/vase-arrangements"
            className="hover:text-[#E88AB5] transition-colors"
          >
            Vase Arrangements
          </Link>
          <Link
            to="/custom-bouquets"
            className="hover:text-[#E88AB5] transition-colors"
          >
            Custom Bouquets
          </Link>
        </div>
      </nav>
    </header>
  );
}
