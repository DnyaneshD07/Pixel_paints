// @ts-nocheck
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#051125] dark:bg-[#0e1400] text-[#fafaf5] w-full rounded-none">
<div className="grid grid-cols-1 md:grid-cols-4 gap-20 px-12 py-24 w-full max-w-screen-2xl mx-auto">
<div className="col-span-1 md:col-span-1">
<span className="font-['Newsreader'] text-3xl text-[#fafaf5] mb-4 block italic">Atelier Pigments</span>
<p className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 mb-8 leading-relaxed">
                    The Curated Atelier.<br/>Lyon | London | New York
                </p>
</div>
<div className="space-y-4">
<h4 className="font-['Manrope'] text-xs font-bold tracking-[0.2em] uppercase text-[#fafaf5]/40 mb-6">Discovery</h4>
<ul className="space-y-3">
<li><a className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 hover:text-[#fafaf5] hover:translate-x-1 transition-transform duration-200 block" href="#">Collections</a></li>
<li><a className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 hover:text-[#fafaf5] hover:translate-x-1 transition-transform duration-200 block" href="#">Sustainability</a></li>
<li><a className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 hover:text-[#fafaf5] hover:translate-x-1 transition-transform duration-200 block" href="#">Dealer Locator</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-['Manrope'] text-xs font-bold tracking-[0.2em] uppercase text-[#fafaf5]/40 mb-6">Archive</h4>
<ul className="space-y-3">
<li><a className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 hover:text-[#fafaf5] hover:translate-x-1 transition-transform duration-200 block" href="#">Press</a></li>
<li><a className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 hover:text-[#fafaf5] hover:translate-x-1 transition-transform duration-200 block" href="#">About</a></li>
<li><a className="font-['Manrope'] text-sm tracking-widest uppercase text-[#fafaf5]/60 hover:text-[#fafaf5] hover:translate-x-1 transition-transform duration-200 block" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-['Manrope'] text-xs font-bold tracking-[0.2em] uppercase text-[#fafaf5]/40 mb-6">Newsletter</h4>
<div className="relative group">
<input className="bg-transparent border-0 border-b border-[#fafaf5]/20 w-full py-2 text-sm focus:ring-0 focus:border-[#944925] transition-colors placeholder:text-[#fafaf5]/20" placeholder="YOUR EMAIL" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#944925] material-symbols-outlined">north_east</button>
</div>
</div>
</div>
<div className="border-t border-[#1b263b] px-12 py-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-['Manrope'] text-[10px] tracking-[0.3em] uppercase text-[#fafaf5]/30">
                © 2024 Atelier Pigments. The Curated Atelier. All Rights Reserved.
            </p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-[#fafaf5]/40 text-xl cursor-pointer hover:text-[#fafaf5]">language</span>
<span className="material-symbols-outlined text-[#fafaf5]/40 text-xl cursor-pointer hover:text-[#fafaf5]">share</span>
</div>
</div>
</footer>
  );
}
