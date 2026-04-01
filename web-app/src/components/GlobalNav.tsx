// @ts-nocheck
import Link from 'next/link';

export default function GlobalNav() {
  return (
    <nav className="bg-[#fafaf5]/80 dark:bg-[#051125]/80 backdrop-blur-lg shadow-[0_10px_40px_rgba(5,17,37,0.06)] docked full-width top-0 sticky z-50">
<div className="flex justify-between items-center w-full px-12 py-6 max-w-screen-2xl mx-auto">
<Link href="/" className="text-2xl font-['Newsreader'] italic font-semibold text-[#051125] dark:text-[#fafaf5] cursor-pointer active:scale-95 transition-transform">
                Atelier Pigments
            </Link>
<div className="hidden md:flex gap-12 items-center">
<Link className="text-[#051125] dark:text-[#fafaf5] opacity-70 hover:opacity-100 font-['Newsreader'] text-lg tracking-tight leading-none hover:text-[#944925] transition-colors duration-300" href="/products">Products</Link>
<Link className="text-[#051125] dark:text-[#fafaf5] opacity-70 hover:opacity-100 font-['Newsreader'] text-lg tracking-tight leading-none hover:text-[#944925] transition-colors duration-300" href="/about">About</Link>
<Link className="text-[#051125] dark:text-[#fafaf5] opacity-70 hover:opacity-100 font-['Newsreader'] text-lg tracking-tight leading-none hover:text-[#944925] transition-colors duration-300" href="/dealers">Dealers</Link>
<Link className="text-[#051125] dark:text-[#fafaf5] opacity-70 hover:opacity-100 font-['Newsreader'] text-lg tracking-tight leading-none hover:text-[#944925] transition-colors duration-300" href="/contact">Contact</Link>
</div>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded shadow-sm font-label text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                Order Sample
            </button>
</div>
</nav>
  );
}
