import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#0F2044] text-[#F5EDE0] py-1 px-6 md:px-12">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="h-24 w-24 overflow-hidden flex items-center justify-center">
            <img
              src="/images/Logo/logo.jpg"
              alt="Pookie's Flowers"
              className="h-40 w-40 object-cover object-center"
            />
          </div>
        </Link>
        <div className="flex gap-6 md:gap-8" style={{ fontFamily: "'Lora', serif" }}>
          <Link href="/" className="hover:text-[#E88AB5] transition-colors">
            Home
          </Link>
          <Link href="/vase-arrangements" className="hover:text-[#E88AB5] transition-colors">
            Vase Arrangements
          </Link>
          <Link href="/custom-bouquets" className="hover:text-[#E88AB5] transition-colors">
            Custom Bouquets
          </Link>
        </div>
      </nav>
    </header>
  );
}
